const myQuests = [
    {
        title: "Ascii Art Converter",
        status: "Achevé",
        summary: "Un projet rapide permettant de transformer une image en un Ascii Art.",
        details: "Ce projet a d'abord été réalisé comme un défi entre ami, en peu de temps. Je suis ensuite revenu dessus pour l'améliorer et le rendre plus modulable. Le projet fonctionne en prenant une image intitulée 'input' au format jpg, puis, une fois le programme lancé, sort un fichier 'output.txt' correspondant à l'image transformée selon les paramètres actuels." ,
        realm: "Programmation graphique",
        artifacts: "Processing",
        source: ["https://github.com/hatedero/ascii_art_converter"],
        nbPeople: 1,
        context: "Personnel",
        thumbnail: "./media/ascii_art_2.png",
        images: [
            "./media/ascii_art_1.jpg",
            "./media/ascii_art_2.png",
        ]
    },
    {
        title: "Warlocks",
        status: "Développement en pause",
        summary: "Un mod minecraft ajoutant des classes, objets légendaires et de nouvelles zones à explorer. ",
        details: "By polishing the lenses of SVG and D3, I am creating a vision that allows the King to see every copper move. It translates raw numbers into constellations of data that any advisor can read.",
        realm: "Développement de jeu vidéo",
        artifacts: "Java",
        source: ["https://github.com/Hatedero/Warlocks-1.21", "https://github.com/Hatedero/Warlocks-1.20.1"],
        nbPeople: 1,
        context: "Personnel",
        thumbnail: "./media/dragon_eye_1.svg",
        images: [
        ]
    },
    {
        title: "Compendium",
        status: "En cours",
        summary: "Un mod minecraft ajoutant un système de magie complexe, et introduisant de nouvelles mécaniques de jeu comme des enchantements plus poussés.",
        details: "A clandestine system for dispatching ravens. Each message is encrypted with ancient runes. Once the intended recipient reads the intended scroll, the ink disappears and the parchment turns to ash.",
        realm: "Développement de jeu vidéo",
        artifacts: "Java",
        source: ["https://github.com/Hatedero/compendium"],
        nbPeople: 1,
        context: "Personnel",
        thumbnail: "./media/scroll_whispers_1.svg",
        images: [
        ]
    },
    {
        title: "Cardracter",
        status: "Développement en pause",
        summary: "Une application mobile de gestion de fiches personnages, inspirée par les jeux de rôle sur table. Elle permet de créer, organiser et partager des fiches de personnages.",
        details: "A clandestine system for dispatching ravens. Each message is encrypted with ancient runes. Once the intended recipient reads the intended scroll, the ink disappears and the parchment turns to ash.",
        realm: "Développement mobile",
        artifacts: "Kotlin, Jetpack Compose, Room, Retrofit, CI/CD",
        source: ["https://github.com/Hatedero/cardracter"],
        nbPeople: 2,
        context: "École",
        thumbnail: "./media/scroll_whispers_1.svg",
        images: [
        ]
    },
    {
        title: "Cardracter Flutter",
        status: "Développement en pause",
        summary: "Une application mobile de gestion de fiches personnages, inspirée par les jeux de rôle sur table. Elle permet de créer, organiser et partager des fiches de personnages.",
        details: "A clandestine system for dispatching ravens. Each message is encrypted with ancient runes. Once the intended recipient reads the intended scroll, the ink disappears and the parchment turns to ash.",
        realm: "Développement mobile",
        artifacts: "Dart, Flutter, Retrofit",
        source: ["https://github.com/Hatedero/cardracter_flutter"],
        nbPeople: 2,
        context: "École",
        thumbnail: "./media/scroll_whispers_1.svg",
        images: [
        ]
    },
    {
        title: "Lock In",
        status: "Achevé",
        summary: "Une application mobile permettant de commander des verrous connectés(du même projet).",
        details: "A clandestine system for dispatching ravens. Each message is encrypted with ancient runes. Once the intended recipient reads the intended scroll, the ink disappears and the parchment turns to ash.",
        realm: "Développement mobile",
        artifacts: "Kotlin, Jetpack Compose, Retrofit, Firebase",
        source: ["https://github.com/Hatedero/lockin"],
        nbPeople: 2,
        context: "École",
        thumbnail: "./media/scroll_whispers_1.svg",
        images: [
        ]
    },
    {
        title: "Obseadian",
        status: "Développement en pause",
        summary: "Une interface web sensée immiter Obsidian, permettant de créer, importer exporter et relier des notes facilement.",
        details: "A clandestine system for dispatching ravens. Each message is encrypted with ancient runes. Once the intended recipient reads the intended scroll, the ink disappears and the parchment turns to ash.",
        realm: "Développement web",
        artifacts: "HTML, CSS, Typescript, Node.js, Docker",
        source: ["https://github.com/Hatedero/obseadian"],
        nbPeople: 1,
        context: "Personnel",
        thumbnail: "./media/scroll_whispers_1.svg",
        images: [
        ]
    },
    {
        title: "Contrées du Lointain",
        status: "Achevé",
        summary: "Un jeu vidéo développé avec Godot, reprenant le concept d'un vampire survivor.",
        details: "A clandestine system for dispatching ravens. Each message is encrypted with ancient runes. Once the intended recipient reads the intended scroll, the ink disappears and the parchment turns to ash.",
        realm: "Développement de jeu vidéo",
        artifacts: "Godot, GDScript",
        source: ["https://github.com/Hatedero/Contrees_du_lointain"],
        nbPeople: 1,
        context: "École",
        thumbnail: "./media/scroll_whispers_1.svg",
        images: [
        ]
    },
    {
        title: "Portfolio",
        status: "Achevé",
        summary: "Un portfolio en ligne pour présenter mes projets et compétences, avec une interface inspirée des RPG.",
        details: "A clandestine system for dispatching ravens. Each message is encrypted with ancient runes. Once the intended recipient reads the intended scroll, the ink disappears and the parchment turns to ash.",
        realm: "Développement web",
        artifacts: "HTML, CSS, JavaScript",
        source: ["https://github.com/Hatedero/Projects-encyclopedia"],
        nbPeople: 1,
        context: "École",
        thumbnail: "./media/scroll_whispers_1.svg",
        images: [
        ]
    },
    {
        title: "CV en ligne",
        status: "Achevé",
        summary: "Un CV en ligne pour présenter mes compétences et expériences, fait en HTML/CSS simple et épuré.",
        details: "A clandestine system for dispatching ravens. Each message is encrypted with ancient runes. Once the intended recipient reads the intended scroll, the ink disappears and the parchment turns to ash.",
        realm: "Développement web",
        artifacts: "HTML, CSS",
        source: [],
        nbPeople: 1,
        context: "Personnel",
        thumbnail: "./media/scroll_whispers_1.svg",
        images: [
        ]
    },
    {
        title: "Planificateur d'emploi du temps",
        status: "Achevé",
        summary: "Un outil en ligne qui a permis aux professeurs de mon université de planifier les emplois du temps de leurs cours plus facilement, en prenant en compte les disponibilités des salles et des enseignants.",
        details: "A clandestine system for dispatching ravens. Each message is encrypted with ancient runes. Once the intended recipient reads the intended scroll, the ink disappears and the parchment turns to ash.",
        realm: "Développement web",
        artifacts: "HTML, CSS, JS, SQLite",
        source: [],
        nbPeople: 3,
        context: "École",
        thumbnail: "./media/scroll_whispers_1.svg",
        images: [
        ]
    },
    {
        title: "VRephi",
        status: "Achevé",
        summary: "Une extension de Gephi-lite permettant de visualiser des graphes en réalité virtuelle, pour une meilleure immersion et compréhension des données.",
        details: "A clandestine system for dispatching ravens. Each message is encrypted with ancient runes. Once the intended recipient reads the intended scroll, the ink disappears and the parchment turns to ash.",
        realm: "Développement web",
        artifacts: "HTML, CSS, Typescript, WebXR, Three.js, UI-Kit, ",
        source: [],
        nbPeople: 1,
        context: "École",
        thumbnail: "./media/scroll_whispers_1.svg",
        images: [
        ]
    },
    {
        title: "G.A.S.C",
        status: "Achevé",
        summary: "Une application mobile permettant aux élèves et professeurs de Lyon 1 et Lyon 3 de gérer leurs activités sportives en lien avec l'université.",
        details: "A clandestine system for dispatching ravens. Each message is encrypted with ancient runes. Once the intended recipient reads the intended scroll, the ink disappears and the parchment turns to ash.",
        realm: "Développement mobile, web",
        artifacts: "Kotlin, KMP, Jetpack Compose, Symfony, Docker",
        source: [],
        nbPeople: 2,
        context: "Professionnel",
        thumbnail: "./media/scroll_whispers_1.svg",
        images: [
        ]
    },
    {
        title: "Troover",
        status: "Achevé",
        summary: "Une application mobile permettant de mettre en relation entreprises et étudiants pour des offres de stage, alternance ou emploi.",
        details: "A clandestine system for dispatching ravens. Each message is encrypted with ancient runes. Once the intended recipient reads the intended scroll, the ink disappears and the parchment turns to ash.",
        realm: "Professionnel",
        artifacts: "Flutter, Dart, Springboot, Docker, SQLite",
        source: [],
        nbPeople: 2,
        context: "Professionnel",
        thumbnail: "./media/scroll_whispers_1.svg",
        images: [
        ]
    },
    {
        title: "Inhibitus",
        status: "Développement en cours",
        summary: "Un serious game ayant pour but d'aider les professionnels de santé à réentrainer le mécanisme d'inhibition chez les patients souffrants d'addictions.",
        details: "A clandestine system for dispatching ravens. Each message is encrypted with ancient runes. Once the intended recipient reads the intended scroll, the ink disappears and the parchment turns to ash.",
        realm: "Professionnel",
        artifacts: "Unity, C#, Blender",
        source: [],
        nbPeople: 1,
        context: "Professionnel",
        thumbnail: "./media/scroll_whispers_1.svg",
        images: [
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('quest-list');
    const overlay = document.getElementById('focus-overlay');
    const focusData = document.getElementById('focus-data');
    const closeBtn = document.querySelector('.close-btn');
    const searchInput = document.getElementById('project-search');

    const renderQuests = (query = '') => {
        container.innerHTML = '';
        const normalizedQuery = query.trim().toLowerCase();

        const filteredQuests = myQuests.filter(q => {
            return [q.title, q.summary, q.realm, q.artifacts, q.context, (q.source || []).join(' ')]
                .some(value => value.toLowerCase().includes(normalizedQuery));
        });

        const questsToShow = filteredQuests;

        if (questsToShow.length === 0) {
            const emptyState = document.createElement('p');
            emptyState.textContent = 'Aucun projet trouvé.';
            emptyState.style.color = '#2c1e14';
            emptyState.style.fontStyle = 'italic';
            emptyState.style.textAlign = 'center';
            container.appendChild(emptyState);
            return;
        }

        questsToShow.forEach(q => {
            const card = document.createElement('article');
            card.className = 'quest-card';
            card.innerHTML = `
                <div class="quest-card-body">
                    <span class="quest-status">${q.status}</span>
                    <h2 class="quest-title">${q.title}</h2>
                    <p>"${q.summary}"</p>
                </div>
                <img class="quest-thumb" src="${q.thumbnail}" alt="Image du projet ${q.title}" />
            `;

            card.addEventListener('click', () => {
                showDetails(q);
            });

            container.appendChild(card);
        });
    };

    function showDetails(q) {
        focusData.innerHTML = `
            <h1 class="quest-title" style="font-size: 2.2rem;">${q.title}</h1>
            <p class="quest-status" style="float: none;">Status: ${q.status}</p>
            <div class="focus-body">${q.details}</div>
            <div class="detail-images">
                ${q.images.map((src, index) => `<img class="detail-image" src="${src}" alt="Image ${index + 1} de ${q.title}" />`).join('')}
            </div>
            <div class="focus-footer">
                <span><b>Domaine : </b> ${q.realm}</span>
                <span><b>Compétences : </b> ${q.artifacts}</span>
                <span><b>Contexte : </b> ${q.context}</span>
                <span><b>Participants : </b> ${q.nbPeople}</span>
                <span><b>Source : </b>${q.source.map((src, index) => `<a class="source-link" href="${src}" target="_blank" rel="noopener noreferrer">Dépôt ${index + 1}</a>`).join(', ')}</span>
            </div>
        `;
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    searchInput.addEventListener('input', () => renderQuests(searchInput.value));
    renderQuests();

    const closeOverlay = () => {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeOverlay();
    });
});