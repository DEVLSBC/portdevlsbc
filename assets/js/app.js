document.addEventListener('DOMContentLoaded', function() {
    const aboutBtn = document.getElementById('about-btn');
    const projectsBtn = document.getElementById('projects-btn');
    const projectsDropdown = document.getElementById('projects-dropdown');
    const projectItems = document.querySelectorAll('.project-item');
    const contentSections = document.querySelectorAll('.content-section');
    
    // Mostrar "Sobre Mim" por padrão
    document.getElementById('about').style.display = 'flex';

    // Botão "Sobre Mim"
    aboutBtn.addEventListener('click', function() {
        // Esconder todos os conteúdos
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
        // Mostrar Sobre Mim
        document.getElementById('about').style.display = 'flex';
        // Esconder dropdown se estiver visível
        projectsDropdown.classList.remove('show');
        setTimeout(() => {
            projectsDropdown.style.visibility = 'hidden';
        }, 500);
    });

    // Botão "Projetos" - toggle dropdown
    projectsBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Impede que o clique no botão feche o dropdown imediatamente

        if (projectsDropdown.classList.contains('show')) {
            projectsDropdown.classList.remove('show');
            setTimeout(() => {
                projectsDropdown.style.visibility = 'hidden';
            }, 500);
        } else {
            projectsDropdown.style.visibility = 'visible';
            projectsDropdown.classList.add('show');
        }
    });

    // Itens do dropdown de projetos
    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');

            // Esconder todos os conteúdos
            contentSections.forEach(section => {
                section.style.display = 'none';
            });

            // Mostrar o projeto selecionado
            document.getElementById(targetId).style.display = 'flex';

            // Esconder o dropdown
            projectsDropdown.classList.remove('show');
            setTimeout(() => {
                projectsDropdown.style.visibility = 'hidden';
            }, 500);
        });
    });

    // Fechar dropdown ao clicar fora
    document.addEventListener('click', function() {
        if (projectsDropdown.classList.contains('show')) {
            projectsDropdown.classList.remove('show');
            setTimeout(() => {
                projectsDropdown.style.visibility = 'hidden';
            }, 500);
        }
    });

    // Prevenir que o dropdown feche quando clicar nele
    projectsDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});

// Seleciona o modal e seus elementos
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

// Seleciona todas as imagens dentro da div "imagens-sgi"
document.querySelectorAll(".imagens-sgi img").forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "flex"; // Exibe o modal
        modalImg.src = this.src; // Define a imagem clicada no modal
    });
});

document.querySelectorAll(".imagens-sga img").forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "flex"; // Exibe o modal
        modalImg.src = this.src; // Define a imagem clicada no modal
    });
});

// Fecha o modal ao clicar no botão "X"
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

