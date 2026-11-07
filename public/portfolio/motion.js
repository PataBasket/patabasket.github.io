const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const logoBand = document.querySelector('.logo-band');

if (logoBand) {
  let inView = false;
  const updateMotion = () => {
    logoBand.classList.toggle('is-visible', inView && !document.hidden && !reducedMotion.matches);
  };

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      updateMotion();
    }).observe(logoBand);
  } else {
    inView = true;
    updateMotion();
  }

  document.addEventListener('visibilitychange', updateMotion);
  reducedMotion.addEventListener?.('change', updateMotion);
}

const experienceButtons = [...document.querySelectorAll('.experience-toggle')];
experienceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const shouldOpen = button.getAttribute('aria-expanded') !== 'true';
    experienceButtons.forEach((other) => {
      const open = other === button && shouldOpen;
      other.setAttribute('aria-expanded', String(open));
      other.closest('.experience-item').classList.toggle('is-open', open);
      document.getElementById(other.getAttribute('aria-controls')).setAttribute('aria-hidden', String(!open));
    });
  });
});

const highlightsTrack = document.getElementById('highlights-track');
if (highlightsTrack) {
  const cards = [...highlightsTrack.querySelectorAll('.highlight-card')];
  const controls = [...document.querySelectorAll('.highlight-navigation [data-scroll-direction]')];
  let currentIndex = 0;
  let updateQueued = false;
  const updateHighlights = () => {
    const end = Math.max(0, highlightsTrack.scrollWidth - highlightsTrack.clientWidth);
    currentIndex = cards.reduce((nearest, card, index) =>
      Math.abs(card.offsetLeft - highlightsTrack.scrollLeft) < Math.abs(cards[nearest].offsetLeft - highlightsTrack.scrollLeft) ? index : nearest, 0);
    if (end > 0 && highlightsTrack.scrollLeft >= end - 2) currentIndex = cards.length - 1;
    controls[0].disabled = highlightsTrack.scrollLeft <= 2;
    controls[1].disabled = highlightsTrack.scrollLeft >= end - 2;
    updateQueued = false;
  };
  controls.forEach((button) => button.addEventListener('click', () => {
    const index = Math.max(0, Math.min(cards.length - 1, currentIndex + Number(button.dataset.scrollDirection)));
    highlightsTrack.scrollTo({
      left: Math.min(cards[index].offsetLeft, highlightsTrack.scrollWidth - highlightsTrack.clientWidth),
      behavior: reducedMotion.matches ? 'auto' : 'smooth',
    });
  }));
  highlightsTrack.addEventListener('scroll', () => {
    if (updateQueued) return;
    updateQueued = true;
    requestAnimationFrame(updateHighlights);
  }, { passive: true });
  window.addEventListener('resize', updateHighlights);
  updateHighlights();
}

const detailDialog = document.getElementById('detail-dialog');
if (detailDialog) {
  const content = document.getElementById('detail-content');
  const workDetails = {
    'life-typing': 'detail-work-life-typing',
    shugoria: 'detail-work-shugoria',
    icec: 'detail-work-icec',
    vr: 'detail-work-vr',
  };

  const openDetail = (templateId) => {
    const template = document.getElementById(templateId);
    if (!template) return false;
    const fragment = template.content.cloneNode(true);
    window.applyPortfolioContent?.(fragment);
    content.replaceChildren(fragment);
    content.querySelector('h2').id = 'detail-title';
    detailDialog.classList.remove('is-closing');
    detailDialog.showModal();
    document.body.classList.add('dialog-open');
    detailDialog.querySelector('.detail-close').focus();
    return true;
  };

  const closeDetail = () => {
    if (!detailDialog.open || detailDialog.classList.contains('is-closing')) return;
    detailDialog.classList.add('is-closing');
    window.setTimeout(() => detailDialog.close(), reducedMotion.matches ? 0 : 220);
  };

  document.querySelectorAll('.detail-trigger').forEach((button) => {
    button.addEventListener('click', () => {
      openDetail(button.dataset.detail);
    });
  });

  const requestedWork = new URLSearchParams(window.location.search).get('work')
    || window.location.hash.match(/^#work-(.+)$/)?.[1];
  const requestedSlug = requestedWork?.toLowerCase();
  const requestedTemplate = workDetails[requestedSlug];
  if (requestedTemplate) {
    requestAnimationFrame(() => {
      document.getElementById(`work-${requestedSlug}`)?.scrollIntoView({
        behavior: reducedMotion.matches ? 'auto' : 'smooth',
        block: 'center',
      });
      openDetail(requestedTemplate);
    });
  }

  detailDialog.querySelector('.detail-close').addEventListener('click', closeDetail);
  detailDialog.addEventListener('click', (event) => {
    if (event.target !== detailDialog) return;
    const { left, right, top, bottom } = detailDialog.getBoundingClientRect();
    if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) closeDetail();
  });
  detailDialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeDetail();
  });
  detailDialog.addEventListener('close', () => {
    if (detailDialog.open) return;
    detailDialog.classList.remove('is-closing');
    document.body.classList.remove('dialog-open');
  });
}

document.querySelectorAll('.bubble-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || reducedMotion.matches) return;
    event.preventDefault();
    if (link.classList.contains('is-bursting')) return;
    link.classList.add('is-bursting');
    if (link.target === '_blank') {
      window.open(link.href, '_blank', 'noopener,noreferrer');
      return;
    }
    window.setTimeout(() => window.location.assign(link.href), 400);
  });
});
