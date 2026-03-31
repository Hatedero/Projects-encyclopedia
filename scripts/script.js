const top_projects = [
            {
                id: 1,
                title: "Compendium",
                status: "En cours - solo",
                summary: "Un mod minecraft qui change la manière de jouer au jeu en ajoutant magie, donjons et d'autres nouveautés diverses.",
                details: "",
                realm: "Personnel - Jeu vidéo",
                skills: "JAVA, data files(JSON)"
            },
            {
                id: 2,
                title: "G.A.S.C",
                status: "Participation Finie - en équipe",
                summary: "Une application mobile permettant aux professeurs et étudiants de Lyon 1 & 3 de gérer leurs activités sportives à l'université.",
                details: "",
                realm: "Professionnel - Application Mobile",
                skills: "KMP, Compose, SQLite, Symfony"
            },
            {
                id: 3,
                title: "Godot Vampire Survivor",
                status: "Fini - solo",
                summary: "Un jeu vidéo fait en godot, qui immite le principe des vampires survivors en incluant de la génération procédurale et un rythme intense.",
                details: "",
                realm: "Cours - Jeu vidéo",
                skills: "GDScript"
            }
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
                    <p class="quest-tags">${project.realm} | Technologies: ${project.skills}</p>
                `;
                container.appendChild(card);
            });
        }

        function openModal(projectId) {
            const project = top_projects.find(p => p.id === projectId);
            if(!project) return;

            document.getElementById('modal-title').textContent = project.title;
            document.getElementById('modal-details').textContent = project.details;
            document.getElementById('modal-artifacts').textContent = "Tools of the trade: " + project.artifacts;
            
            const modal = document.getElementById('quest-modal');
            modal.style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('quest-modal').style.display = 'none';
        }

        window.onload = () => {
            loadProjects();
            document.getElementById('year').textContent = new Date().getFullYear();
        };

        window.onclick = (event) => {
            const modal = document.getElementById('quest-modal');
            if (event.target == modal) closeModal();
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        const form = document.getElementById('quest-form');
        const msg = document.getElementById('response-msg');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            msg.textContent = "Message bien envoyé.";
            msg.style.display = "block";
            form.reset();
            msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });