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
        details: "Ce projet s'est inscrit dans mon apprentissage plus approfondi de la programmation. Il visait à étudier différents principes complexes que je pourrais retrouver plus tard et m'a permis de me pencher sur différents thèmes comme : <br>-la génération procédurale <br>-l'optimisation générale de mon code <br>-les interactions client/serveur <br>Cette expérience m'a permis de bien mieux m'approprier les premières connaissances que j'ai pu construire en cours, et mettre en place une organisation rigoureuse pour un projet de longue date.",
        realm: "Développement de jeu vidéo",
        artifacts: "Java",
        source: ["https://github.com/Hatedero/Warlocks-1.21", "https://github.com/Hatedero/Warlocks-1.20.1"],
        nbPeople: 1,
        context: "Personnel",
        thumbnail: "./media/warlocks_3.png",
        images: [
            "./media/warlocks_1.png",
            "./media/warlocks_2.png",
            "./media/warlocks_3.png"
        ]
    },
    {
        title: "Compendium",
        status: "En cours",
        summary: "Un mod minecraft ajoutant un système de magie complexe, et introduisant de nouvelles mécaniques de jeu comme des enchantements plus poussés.",
        details: "Compendium est un mod minecraft développé dans le but d'être publié. Il ajoute un nouveau système de magie(authorité serveur), de nouveaux objets ainsi que des enchqntements s'accordant avec le système de magie. Fortement inspiré de Mahou tsukai et Jujutsu Kaisen, ce projet utilise la librarie Lodestone pour rajouter des effets visuels aux sorts. Originellement développé seul, il est cependant probable que ce projet devienne un projet en équipe.",
        realm: "Développement de jeu vidéo",
        artifacts: "Java",
        source: ["https://github.com/Hatedero/compendium"],
        nbPeople: 1,
        context: "Personnel",
        thumbnail: "./media/compendium_3.png",
        images: [
            "./media/compendium_1.png",
            "./media/compendium_2.png",
            "./media/compendium_3.png"
        ]
    },
    {
        title: "Cardracter",
        status: "Développement en pause",
        summary: "Une application mobile de gestion de fiches personnages, inspirée par les jeux de rôle sur table. Elle permet de créer, organiser et partager des fiches de personnages.",
        details: "Cardracter est une application mobile développée dans le cadre d'un projet de cours. Elle permet de créer, organiser et partager des fiches de personnages pour les jeux de rôle sur table. L'application a été développée en utilisant Kotlin et Jetpack Compose pour l'interface utilisateur, Room pour la gestion de la base de données locale, Retrofit pour les appels réseau, et intègre des pratiques CI/CD pour faciliter le développement en équipe. On peut aussi y ajouter une API développée par le collègue avec qui j'étais en groupe. Des schémas de données complexes ont été développés pour cette application, permettant une personnalisation poussée des fiches de personnages. Plusieurs autres fonctionnalités sont à prévoir plus tard, comme l'arrivée de fiches d'objets, lieux, etc..",
        realm: "Développement mobile",
        artifacts: "Kotlin, Jetpack Compose, Room, Retrofit, CI/CD",
        source: ["https://github.com/Hatedero/cardracter"],
        nbPeople: 2,
        context: "École",
        thumbnail: "./media/cardracter_1.png",
        images: [
            "./media/cardracter_1.png",
        ]
    },
    {
        title: "Cardracter Flutter",
        status: "Développement en pause",
        summary: "Une application mobile de gestion de fiches personnages, inspirée par les jeux de rôle sur table. Elle permet de créer, organiser et partager des fiches de personnages.",
        details: "Cette application est une version alternative de Cardracter, développée en utilisant Flutter et Dart. Elle propose une interface utilisateur moderne et des fonctionnalités similaires. Elle utilise encore une fois la même API. Elle a cependant été réalisée en une vingtaine d'heures, dans un exercice de vitesse. De par ce fait, elle présente des fonctionnalités moins poussées, et des schémas de données moins complexes. Elle utilise cependant de nouvelles fonctionnalités de flutter, comme l'integration d'une action sur le swipe.",
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
        details: "Lock in est un projet concernant le milieu du développement mobile et embarqué. Il est divisé en deux parties : une application mobile, et un verrou connecté basé sur un esp32. L'application mobile utilise firebase pour l'authentication sécurisée des utilisateurs ainsi que la gestion des données via le firestore. Elle permet aux utilisateurs d'ajouter de nouveaux verrous sur l'application, modifier leurs informations, et les dé/verrouiller à distance. Le verrou connecté peut être débloqué soit via l'application mobile, soit via un mot de passe  défini par l'utilisateur. Le projet a été réalisé en équipe, et a permis de se familiariser avec les problématiques liées au développement mobile, à la sécurité des données, ainsi qu'aux systèmes embarqués.",
        realm: "Développement mobile",
        artifacts: "Kotlin, Jetpack Compose, Retrofit, Firebase",
        source: ["https://github.com/Hatedero/lockin"],
        nbPeople: 2,
        context: "École",
        thumbnail: "./media/lockin_2.png",
        images: [
            "./media/lockin_1.png",
            "./media/lockin_2.png",
            "./media/lockin_3.png"
        ]
    },
    {
        title: "Obseadian",
        status: "Développement en pause",
        summary: "Une interface web sensée immiter Obsidian, permettant de créer, importer exporter et relier des notes facilement.",
        details: "Obseadian est une interface web inspirée de Obsidian, conçue pour permettre la création, l'importation, l'exportation et le lien de notes de manière intuitive. Elle utilise des technologies simples pour pouvoir mieux prendre en main le projet et rester légère. L'interface permet de créer des notes en markdown à l'aide d'un pseudo parser, de créer des graphes de données à partir des liens entre les différentes notes. On y trouve aussi l'utilisation de docker pour facilement et rapidement la déployer.",
        realm: "Développement web",
        artifacts: "HTML, CSS, Typescript, Node.js, Docker",
        source: ["https://github.com/Hatedero/obseadian"],
        nbPeople: 1,
        context: "Personnel",
        thumbnail: "./media/obseadian_1.png",
        images: [
            "./media/obseadian_1.png"
        ]
    },
    {
        title: "Contrées du Lointain",
        status: "Achevé",
        summary: "Un jeu vidéo développé avec Godot, reprenant le concept d'un vampire survivor.",
        details: "Dans le cadre d'un projet académique, j'ai développé un jeu vidéo en utilisant le moteur Godot. Fortement inspiré de Vampire Survivor, le jeu prend place dans un monde infini généré procéduralement. Le joueur dispose de plusieurs compétences et statistiques qu'il peut faire évoluer, tandis que les monstres qu'il affronte deviennent de plus en plus coriaces.",
        realm: "Développement de jeu vidéo",
        artifacts: "Godot, GDScript",
        source: ["https://github.com/Hatedero/Contrees_du_lointain"],
        nbPeople: 1,
        context: "École",
        thumbnail: "./media/cdl_1.png",
        images: [
            "./media/cdl_1.png",
            "./media/cdl_2.png",
        ]
    },
    {
        title: "Portfolio",
        status: "Achevé",
        summary: "Un portfolio en ligne pour présenter mes projets et compétences, avec une interface inspirée des RPG.",
        details: "Ce portfolio a été conçu pour présenter mes projets et compétences de manière originale, en s'inspirant de l'esthétique des RPG. L'interface utilise des éléments visuels rappelant les jeux de rôle, tels que des icônes de compétences, des cartes de projet, et une navigation immersive. Le portfolio est entièrement responsive, offrant une expérience fluide sur tous les appareils. Il a été développé en utilisant HTML, CSS et JavaScript, évitant les frameworks lourds pour un projet simple.",
        realm: "Développement web",
        artifacts: "HTML, CSS, JavaScript",
        source: ["https://github.com/Hatedero/Projects-encyclopedia"],
        nbPeople: 1,
        context: "École",
        thumbnail: "./media/portfolio_1.png",
        images: [
            "./media/portfolio_1.png"
        ]
    },
    {
        title: "CV en ligne",
        status: "Achevé",
        summary: "Un CV en ligne pour présenter mes compétences et expériences, fait en HTML/CSS simple et épuré.",
        details: "Ce CV en ligne a été conçu pour présenter mes compétences et expériences de manière claire et concise. Il utilise un design simple et épuré, basé sur HTML et CSS, pour offrir une expérience de lecture agréable sur tous les appareils, et me permettre de facilement le modifier.",
        realm: "Développement web",
        artifacts: "HTML, CSS",
        source: [],
        nbPeople: 1,
        context: "Personnel",
        thumbnail: "./media/cv_1.png",
        images: [
            "./media/cv_1.png"
        ]
    },
    {
        title: "Planificateur d'emploi du temps",
        status: "Achevé",
        summary: "Un outil en ligne qui a permis aux professeurs de mon université de planifier les emplois du temps de leurs cours plus facilement, en prenant en compte les disponibilités des salles et des enseignants.",
        details: "Cet outil a été développé pour aider les professeurs à planifier leurs emplois du temps de manière plus efficace. Il prend en compte les disponibilités des salles et des enseignants, permettant ainsi de réduire les conflits et d'optimiser l'utilisation des ressources(basé sur la coloration de graphe). Développé sans framework, avec une interface réactive en JS. L'outil permet d'ajouter plusieurs ressources, contraintes, de mofidier des spécificités pour être facilement évolué et utilisé ailleurs.",
        realm: "Développement web",
        artifacts: "HTML, CSS, JavaScript, SQLite",
        source: [],
        nbPeople: 3,
        context: "École",
        thumbnail: "./media/edt_1.png",
        images: [
            "./media/edt_1.png",
            "./media/edt_2.png",
            "./media/edt_3.png"
        ]
    },
    {
        title: "VRephi",
        status: "Achevé",
        summary: "Une extension de Gephi-lite permettant de visualiser des graphes en réalité virtuelle, pour une meilleure immersion et compréhension des données.",
        details: "VRephi est une extension de Gephi-lite permettant de voir les graphes dans un cadre AR/VR. De nombreuses fonctionnalités comme un système de filtre, d'organisation et de drag and drop sont disponibles pour pouvoir les ré organiser comme voulu. Développé avec React et Three.js, il utilise d'autres librairies comme UI Kit et ReactThreeVR pour faciliter le développement de l'interface et de la partie AR/VR. Ce projet a été réalisé dans le cadre d'un projet académique, et a permis d'explorer les possibilités offertes par la réalité virtuelle pour la visualisation de données complexes.",
        realm: "Développement web",
        artifacts: "HTML, CSS, Typescript, WebXR, Three.js, UI-Kit, ",
        source: [],
        nbPeople: 1,
        context: "École",
        thumbnail: "./media/vrephi_1.png",
        images: [
            "./media/vrephi_1.png",
            "./media/vrephi_2.png",
            "./media/vrephi_3.png"
        ]
    },
    {
        title: "G.A.S.C",
        status: "Achevé",
        summary: "Une application mobile permettant aux élèves et professeurs de Lyon 1 et Lyon 3 de gérer leurs activités sportives en lien avec l'université.",
        details: "G.A.S.C est une application mobile conçue pour permettre aux élèves et professeurs des universités de Lyon 1 et Lyon 3 de gérer leurs activités sportives. Elle offre une interface intuitive, ainsi qu'une messagerie en directe pour faciliter la communication. Les professeurs disposent d'un systeme d'appel pour gérer les présences, tandis que les élèves peuvent facilement s'inscrire aux différentes activités proposées et justifier leurs absences. Une bonne partie du projet a été consacrée à l'optimisation de l'expérience utilisateur en modifiant des parties existantes qui ne marchaient pas/peu.",
        realm: "Développement mobile, web",
        artifacts: "Kotlin, KMP, Jetpack Compose, Symfony, Docker",
        source: [],
        nbPeople: 2,
        context: "Professionnel",
        thumbnail: "./media/gasc_1.png",
        images: [
            "./media/gasc_1.png",
            "./media/gasc_2.png",
            "./media/gasc_3.png"
        ]
    },
    {
        title: "Troover",
        status: "Achevé",
        summary: "Une application mobile permettant de mettre en relation entreprises et étudiants pour des offres de stage, alternance ou emploi.",
        details: "Troover est une application mobile conçue pour relier les entreprises et les étudiants en recherche de stages, d'alternances ou d'emplois. Elle offre une interface intuitive et un système de recherche avancé pour faciliter la découverte des opportunités. Le projet a été développé avec Flutter et Dart, et utilise Springboot pour le backend et Docker pour le déploiement. Parmis ses points forts on peut noter : <br>-une messagerie en direct <br>-un système de planification de rendez vous <br>-une personnalisation du profil très poussée pour pouvoir faciliter au mieux la recherche.",
        realm: "Développement mobile",
        artifacts: "Flutter, Dart, Springboot, Docker, SQLite",
        source: [],
        nbPeople: 2,
        context: "Professionnel",
        thumbnail: "./media/troover_1.png",
        images: [
            "./media/troover_1.png",
            "./media/troover_2.png",
            "./media/troover_3.png"
        ]
    },
    {
        title: "Inhibitus",
        status: "Développement en cours",
        summary: "Un serious game ayant pour but d'aider les professionnels de santé à réentrainer le mécanisme d'inhibition chez les patients souffrants d'addictions.",
        details: "Inhibitus est un projet centré autour d'un serious game, mais composé de 3 modules : <br>-un jeu unity <br>-une application de configuration <br>-un outil web pour analyser et visualiser les parties <br>De par la complexité du projet, il a été repris par plusieurs fois par des groupes de développeurs différents. Mon objectif sur le projet était de le rendre plus accessible aux professionnels de la santé, en facilitant grandement la configuration tout en gardant la même personnalisation.",
        realm: "Développement de jeu vidéo, développement web",
        artifacts: "Unity, C#, Express.js, Vue.js, Docker",
        source: [],
        nbPeople: 1,
        context: "Professionnel",
        thumbnail: "./media/inhibitus_1.png",
        images: [
            "./media/inhibitus_1.png",
            "./media/inhibitus_2.png",
        ]
    }
];

function getAllSkills() {
    const skillSet = new Set();
    myQuests.forEach(quest => {
        if (quest.artifacts) {
            quest.artifacts.split(',').forEach(skill => {
                const trimmed = skill.trim();
                if (trimmed) skillSet.add(trimmed);
            });
        }
    });
    return Array.from(skillSet).sort();
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('quest-list');
    const overlay = document.getElementById('focus-overlay');
    const focusData = document.getElementById('focus-data');
    const closeBtn = document.querySelector('.close-btn');
    const searchInput = document.getElementById('project-search');

    // Check if a specific project should be opened from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectTitle = urlParams.get('project');

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

    // If a project title was passed via URL, open it automatically
    if (projectTitle) {
        const project = myQuests.find(q => q.title === projectTitle);
        if (project) {
            setTimeout(() => showDetails(project), 100);
        }
    }

    const closeOverlay = () => {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeOverlay();
    });

    function toggleMenu() {
        const nav = document.querySelector('.nav-links');
        nav.classList.toggle('active');
    }

    const hamburger = document.getElementById('hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-links').classList.remove('active');
        });
    });
});