// Edit the quoted text and image paths below. See docs/EDIT_CONTENT.md for a short guide.
// Plain text only: HTML tags entered here will be shown as text.
const portfolioContent = {
  text: {
    'hero.availability': 'Open to internships & student roles in Europe',
    'hero.location': 'Based in Prague, Czech Republic',
    'hero.eyebrow': 'PRODUCT / HCI / COMPUTER GRAPHICS',
    'hero.title': 'Hi, I’m Yuta',
    'hero.lead': 'I explore interactive products from both sides: how people use them and how the systems behind them work.',
    'hero.paragraph1': 'I’m a Master’s student in Open Informatics at CTU Prague. My background spans HCI research, VR interaction, Unity development, and programming education; I’m now deepening the computer graphics and algorithmic side of interactive systems.',
    'hero.paragraph2': 'I’m looking for product, UX, and technical roles where I can turn user insight into better product decisions and experiences.',

    'work.intro': 'Research and projects where user needs, interaction design, and implementation meet.',

    'work.icec.year': '2025',
    'work.icec.category': 'HCI RESEARCH / ICEC 2025',
    'work.icec.title': 'Gestalt Approaches to Hinting in Games',
    'work.icec.summary': 'Designed a user study on Gestalt-based visual hints in a 3D Connect Four game, exploring how guidance can support players without overwhelming the experience.',
    'work.icec.role': 'HCI researcher',
    'work.icec.outcome': '12-participant study · Springer publication',

    'work.vr.year': '2026',
    'work.vr.category': 'VR INTERACTION / BACHELOR THESIS',
    'work.vr.title': 'Search and selection in dense 3D spaces',
    'work.vr.summary': 'A user study comparing three viewpoints for search and selection in a dense, occluded VR environment.',
    'work.vr.role': 'Researcher and prototype developer',
    'work.vr.outcome': 'Bachelor thesis',

    'work.shugoria.year': '2025',
    'work.shugoria.category': 'UNITY HACKATHON',
    'work.shugoria.title': 'Shugoria',
    'work.shugoria.summary': 'Led a three-person team to build a Unity card game in a 10-day hackathon, using personal photos and AI to create original cards.',
    'work.shugoria.role': 'Product Manager and technical lead',
    'work.shugoria.outcome': 'Excellence Award',

    'work.lifeTyping.year': '2024–2025',
    'work.lifeTyping.category': 'EDUCATIONAL GAME',
    'work.lifeTyping.title': 'Life is Typing',
    'work.lifeTyping.summary': 'A cooperative online typing game created for after-class practice at Life is Tech, combining typing skill development with team building.',
    'work.lifeTyping.role': 'Product Manager',
    'work.lifeTyping.outcome': 'Tested with approximately 130 students',

    'experience.intro': 'Education and hands-on experience across HCI research, interactive development, and teaching.',

    'experience.ctu.date': '2026 — PRESENT',
    'experience.ctu.title': 'Master’s in Open Informatics',
    'experience.ctu.place': 'Czech Technical University in Prague · FEE',
    'experience.ctu.description': 'Studying Open Informatics with a focus on computer graphics, algorithms, and interactive systems. I came to CTU to deepen the technical side of the interfaces I had previously studied from a user-research perspective.',
    'experience.ctu.summary': 'Computer graphics and interactive systems from the technical side',

    'experience.life.date': '2023 — PRESENT',
    'experience.life.title': 'IT Educator',
    'experience.life.place': 'Life is Tech, Inc. · Japan',
    'experience.life.description': 'Teach programming and Unity game development to students, supporting them as they turn ideas into working projects and learn to solve technical problems through hands-on development.',
    'experience.life.summary': 'Programming education, Unity development, and hands-on project support',

    'experience.freelance.date': '2024',
    'experience.freelance.title': 'Unity Developer',
    'experience.freelance.place': 'Freelance · Japan',
    'experience.freelance.description': 'Contributed as a Unity developer to a metaverse housing exhibition project, working on the interactive 3D experience.',
    'experience.freelance.summary': 'Interactive 3D development for a metaverse housing exhibition',

    'experience.ritsumeikan.date': '2022 — 2026',
    'experience.ritsumeikan.title': 'Bachelor of Engineering',
    'experience.ritsumeikan.place': 'Ritsumeikan University · Japan',
    'experience.ritsumeikan.description': 'Studied human-computer interaction through two user studies: visual guidance in a 3D game and search-and-select in dense VR environments. I planned experiments, developed the research prototypes, conducted the studies, and wrote the conference paper and bachelor thesis.',
    'experience.ritsumeikan.summary': 'HCI research, user studies, and interaction prototype development',

    'stack.unity': 'Unity',
    'stack.csharp': 'C#',
    'stack.python': 'Python',
    'stack.blender': 'Blender',
    'stack.github': 'GitHub',
    'stack.html': 'HTML',
    'stack.css': 'CSS',
    'stack.javascript': 'JavaScript',
    'stack.react': 'React',
    'stack.java': 'Java',
    'stack.cpp': 'C++',
    'stack.figma': 'Figma',
    'stack.firebase': 'Firebase',

    'highlights.intro': 'Research, presentations, and team projects that shaped how I work.',

    'highlights.icec.category': '2025 / INTERNATIONAL CONFERENCE',
    'highlights.icec.title': 'Presented at ICEC 2025',
    'highlights.icec.summary': 'Presented my HCI research at ICEC 2025 in Tokyo, with the paper published in Springer’s conference proceedings.',

    'highlights.hackathon.category': '2025 / HACKATHON',
    'highlights.hackathon.title': 'Excellence Award at GEEK CAMP Hackathon Vol.7',
    'highlights.hackathon.summary': 'Built Shugoria with a team at GEEK CAMP, contributing to both project coordination and development. The project received an Excellence Award.',

    'details.icec.category': 'HCI RESEARCH / 2025',
    'details.icec.lead': 'How can a game hint help the player without taking away the challenge?',
    'details.icec.focus': 'Gestalt-based visual guidance in a 3D Connect Four game, with a focus on the balance between support, distraction, and challenge.',
    'details.icec.role': 'Study planning, experimental design, user study execution, analysis, paper writing, and presentation at ICEC 2025.',
    'details.icec.outcome': 'Three hints were rated most helpful; the study was published in Springer’s ICEC 2025 proceedings.',
    'details.icec.note': 'The project connected visual design principles with user behavior and became both a Springer publication and an international conference presentation.',
    'details.icec.context': 'A desktop-based 3D Connect Four prototype where density and occlusion make internal structures difficult to select and manipulate.',
    'details.icec.problem': 'How can visual hints support a player without removing the challenge or increasing cognitive load?',
    'details.icec.approach': 'Designed a within-subjects study with 12 participants and three conditions: no highlight, one highlighted sphere, and three highlighted spheres. I planned the experiment, ran the user study, analyzed the results, and wrote the paper.',
    'details.icec.reflection': 'Three hints were rated as the most helpful. No statistically significant differences were found in overall playtime or detection time, while NASA-TLX showed differences in mental demand, effort, and frustration. The study revealed a trade-off between helpfulness, challenge, and cognitive load.',

    'details.vr.category': 'VR INTERACTION / 2026',
    'details.vr.lead': 'A user study comparing three viewpoints for search and selection in a dense VR environment.',
    'details.vr.focus': 'Search-and-select interaction in dense VR environments, particularly where occlusion makes targets difficult to find or reach.',
    'details.vr.comparison': 'Three viewpoints, including a world-in-miniature interface.',
    'details.vr.role': 'Research planning, prototype development, experimental design, user study execution, analysis, and bachelor thesis writing.',
    'details.vr.note': 'This research pushed me to think not only about user behavior, but also about the geometry, viewpoint, and technical decisions that shape an interaction—one reason I chose to study computer graphics at CTU.',
    'details.vr.context': 'An 8×8×8 environment containing 512 spheres, where participants searched for lines of four connected white spheres.',
    'details.vr.problem': 'How can users find and select targets when density and occlusion make the structure of a 3D space difficult to understand?',
    'details.vr.approach': 'Designed and implemented three viewpoints—Bird’s-eye, Internal, and Internal with a World-in-Miniature interface—and evaluated them with 18 participants using objective performance metrics and NASA-TLX.',
    'details.vr.outcome': 'Bird was faster but produced more errors, while Internal and Miniature were slower but more accurate. Miniature did not decisively improve search efficiency, but showed benefits in identification confidence and physical load.',
    'details.vr.reflection': 'The study showed that viewpoint design should depend on whether a task prioritizes speed or accuracy. It also motivated me to study the computer-side structures that shape interactive experiences.',

    'details.shugoria.category': 'UNITY HACKATHON',
    'details.shugoria.lead': 'A 10-day online hackathon project where personal photos became collectible cards in a roguelike game.',
    'details.shugoria.role': 'Product Manager and technical lead in a three-person team. I handled Unity development, Firebase, GAS, Gemini API integration, and database design.',
    'details.shugoria.outcome': 'The team received an Excellence Award. The final presentation was also praised for clearly communicating the product demand, concept, and implementation within the time limit.',
    'details.shugoria.note': 'The project strengthened my ability to connect a product idea, a technical system, team execution, and a concise final pitch.',
    'details.shugoria.context': 'GEEK CAMP Hackathon in July 2025. While other teams focused on apps and websites, our three-person team chose Unity to differentiate with a game.',
    'details.shugoria.problem': 'How can we recreate the excitement of owning something rare and personal in a game that can be built and presented in only 10 days?',
    'details.shugoria.approach': 'We designed a core loop where users upload a photo and description, generate an original card with AI, collect it, and use it to fight monsters.',
    'details.shugoria.reflection': 'We deliberately reduced the broader card-game system and focused on the one experience that made the product unique: creating and playing with a card based on your own photo.',

    'details.lifeTyping.category': 'EDUCATIONAL GAME',
    'details.lifeTyping.lead': 'A cooperative online typing game created for after-class practice at Life is Tech.',
    'details.lifeTyping.context': 'At Life is Tech, typing practice with Sushi DA was a regular activity across iPhone, web, and Unity courses.',
    'details.lifeTyping.problem': 'Individual typing practice did not use the team environment of the classes or create a shared goal for students.',
    'details.lifeTyping.role': 'Product Manager in a four-person team. I led planning, meeting facilitation, progress tracking, GitHub and Discord workflows, and coding conventions. I also helped with bug fixes when engineering capacity was limited.',
    'details.lifeTyping.decisions': 'Designed a cooperative monster battle so students with different typing abilities could contribute together. We intentionally avoided random online matchmaking because playing with classmates in the same learning environment was part of the product value.',
    'details.lifeTyping.validation': 'Developed the game over approximately two months of active work and tested it with around 30 students in an in-person class and around 100 students in an online class. A concurrent room-creation issue found in classroom use was diagnosed and resolved with the Photon engineer.',
    'details.lifeTyping.iteration': 'Student feedback revealed that slow HP-bar changes made attacks difficult to perceive. I proposed a staged HP-bar design and passed the implementation direction to the frontend developer.',

    'details.presentation.category': 'INTERNATIONAL CONFERENCE / 2025',
    'details.presentation.lead': 'Presented my HCI research at ICEC 2025 in Tokyo.',
    'details.presentation.paragraph': 'I presented our work on Gestalt-based visual hints in a 3D Connect Four game. The research investigated how visual guidance affects the player experience, and the paper was published in Springer’s ICEC proceedings.',
    'details.presentation.note': 'The presentation required me to communicate the research question, experimental approach, and findings to an international audience.',

    'details.hackathon.category': 'HACKATHON / 2025',
    'details.hackathon.lead': 'A team-built card battle prototype at GEEK CAMP.',
    'details.hackathon.paragraph': 'I contributed to both project coordination and development while our team built Shugoria. The project received an Excellence Award.',
    'details.hackathon.note': 'Working across coordination and implementation reinforced my interest in roles that connect product decisions with technical execution.',

    'contact.description': 'Open to internships and student roles in Europe across product, UX/HCI, and technical product development. If you’re building products where user needs and technical constraints both matter, I’d be glad to connect.',
  },

  // Add a file in assets/images/ and enter its filename here. Empty src keeps the image guide visible.
  images: {
    portrait: { src: 'yuta_portrait.png', alt: 'Portrait of Yuta Hirahata' },
    icecGame: { src: 'icec_project_v2.png', alt: 'Visual hints in the 3D Connect Four game' },
    vrResearch: { src: 'immersive_map.png', alt: 'Dense VR environment used in the graduation research' },
    shugoria: { src: 'shugoria_v2.png', alt: 'Shugoria card battle prototype in play' },
    icecPresentation: { src: 'icec_profile.jpg', alt: 'Yuta Hirahata with other attendees at ICEC 2025 in Tokyo' },
    hackathon: { src: 'geek_award.jpg', alt: 'GEEK CAMP Excellence Award graphic for Shugoria' },
    lifeTyping: { src: 'LifeIsTyping.jpg', alt: 'Life is Typing cooperative online typing game' },
  },

  links: {
    paper: 'https://doi.org/10.1007/978-3-032-02555-5_32',
    linkedin: 'https://www.linkedin.com/in/yuta-hirahata-1342292b7/',
    github: 'https://github.com/PataBasket',
    x: 'https://x.com/lit_patapata',
    facebook: 'https://www.facebook.com/yuta.hirahata.9',
    email: 'mailto:basket2323yuta@gmail.com',
  },
};

function applyPortfolioContent(root) {
  root.querySelectorAll('[data-edit]').forEach((element) => {
    const value = portfolioContent.text[element.dataset.edit];
    if (value !== undefined) element.textContent = value;
  });

  root.querySelectorAll('[data-link]').forEach((link) => {
    const url = portfolioContent.links[link.dataset.link];
    if (url) link.href = url;
  });

  root.querySelectorAll('[data-image]').forEach((field) => {
    const image = portfolioContent.images[field.dataset.image];
    if (!image?.src) return;
    const photo = new Image();
    photo.alt = image.alt;
    photo.loading = field.classList.contains('hero-image') ? 'eager' : 'lazy';
    photo.decoding = 'async';
    photo.onload = () => field.classList.add('has-image');
    field.prepend(photo);
    photo.src = image.src.includes('/') ? image.src : `./assets/images/${image.src}`;
  });
}

applyPortfolioContent(document);
window.applyPortfolioContent = applyPortfolioContent;
