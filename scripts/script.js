const top_projects = [
    {
        id: 1,
        title: "Compendium",
        status: "En cours - solo",
        summary: "Un mod minecraft qui change la manière de jouer au jeu en ajoutant magie, donjons et d'autres nouveautés diverses.",
        details: "Détails approfondis sur l'architecture du mod et l'intégration des fichiers JSON pour les recettes et les loot tables.",
        realm: "Personnel - Jeu vidéo",
        skills: "JAVA, data files(JSON)",
        artifacts: "IntelliJ IDEA, Forge API"
    },
    {
        id: 2,
        title: "G.A.S.C",
        status: "Participation Finie - en équipe",
        summary: "Une application mobile permettant aux professeurs et étudiants de Lyon 1 & 3 de gérer leurs activités sportives à l'université.",
        details: "Collaboration sur la partie mobile et synchronisation avec le backend Symfony.",
        realm: "Professionnel - Application Mobile",
        skills: "KMP, Compose, SQLite, Symfony",
        artifacts: "Android Studio, KMP Wizard"
    },
    {
        id: 3,
        title: "Godot Vampire Survivor",
        status: "Fini - solo",
        summary: "Un jeu vidéo fait en godot, qui imite le principe des vampires survivors en incluant de la génération procédurale et un rythme intense.",
        details: "Gestion des shaders pour les hordes d'ennemis et optimisation des collisions.",
        realm: "Cours - Jeu vidéo",
        skills: "GDScript",
        artifacts: "Godot Engine 4.x"
    }
];

const skills = [
    { id: 1, title: "Kotlin", level: "Adepte", icon: "⚔️" },
    { id: 2, title: "Flutter", level: "Intermédiaire", icon: "🛡️" },
    { id: 3, title: "React", level: "Débutant", icon: "📜" },
    { id: 4, title: "SQL", level: "Adepte", icon: "💎" },
    { id: 5, title: "UI/UX", level: "Confirmé", icon: "✨" },
    { id: 6, title: "Java", level: "Confirmé", icon: "☕" },
    { id: 7, title: "Symfony", level: "Intermédiaire", icon: "🎻" },
    { id: 8, title: "GDScript", level: "Intermédiaire", icon: "🎮" },
    { id: 9, title: "SQLite", level: "Confirmé", icon: "🗄️" }
];

function loadProjects() {
    const container = document.getElementById('project-container');
    if (!container) return;
    container.innerHTML = '';

    top_projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'quest-card';
        card.onclick = () => openModal(project.id);

        card.innerHTML = `
            <span class="quest-status">${project.status}</span>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <p class="quest-tags">${project.realm} | Tech: ${project.skills}</p>
        `;
        container.appendChild(card);
    });
}

function loadSkills(filterText = '') {
    const skillGrid = document.querySelector('.skill-grid');
    if (!skillGrid) return;

    skillGrid.innerHTML = '';
    
    const filteredSkills = skills.filter(skill => 
        skill.title.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filteredSkills.length === 0) {
        skillGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; opacity: 0.5;">Aucun talent trouvé dans le grimoire...</p>';
        return;
    }

    filteredSkills.forEach(skill => {
        renderSkillCard(skill, skillGrid);
    });
}

function renderSkillCard(skill, skillGrid) {
    const levelCode = skill.level.charAt(0).toUpperCase();
    const card = document.createElement('div');
    card.className = 'skill-card';
    
    card.innerHTML = `
        <div class="card-corner top-left">
            ${levelCode}<br><span>♠</span>
        </div>
        
        <div class="card-icon">${skill.icon || '📜'}</div>
        <h4>${skill.title}</h4>
        <div style="font-family: 'MedievalSharp'; font-size: 0.7rem; margin-top: 5px; opacity: 0.6;">
            ${skill.level}
        </div>

        <div class="card-corner bottom-right">
            ${levelCode}<br><span>♠</span>
        </div>
    `;
    
    skillGrid.appendChild(card);
}

function initSearch() {
    const searchInput = document.getElementById('skill-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            loadSkills(e.target.value);
        });
    }
}

function openModal(projectId) {
    const project = top_projects.find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-details').textContent = project.details;
    document.getElementById('modal-artifacts').textContent = "Outils de forge : " + (project.artifacts || "Non spécifiés");

    const modal = document.getElementById('quest-modal');
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('quest-modal').style.display = 'none';
}

window.onload = () => {
    loadProjects();
    loadSkills();
    initSearch();
    
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
};

window.onclick = (event) => {
    const modal = document.getElementById('quest-modal');
    if (event.target == modal) closeModal();
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const form = document.getElementById('quest-form');
const msg = document.getElementById('response-msg');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        msg.textContent = "Par pigeon voyageur, votre message a été envoyé avec succès !";
        msg.style.display = "block";
        form.reset();
        msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}