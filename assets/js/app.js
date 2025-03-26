document.addEventListener('DOMContentLoaded', function() {
    const aboutBtn = document.getElementById('about-btn');
    const projectsBtn = document.getElementById('projects-btn');
    const projectsDropdown = document.getElementById('projects-dropdown');
    const projectItems = document.querySelectorAll('.project-item');
    const contentSections = document.querySelectorAll('.content-section');
    
    // Mostrar "Sobre Mim" por padrão
    document.getElementById('about').style.display = 'block';
    
    // Botão "Sobre Mim"
    aboutBtn.addEventListener('click', function() {
        // Esconder todos os conteúdos
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
        // Mostrar Sobre Mim
        document.getElementById('about').style.display = 'block';
        // Esconder dropdown se estiver visível
        projectsDropdown.classList.remove('show');
    });
    
    // Botão "Projetos" - toggle dropdown
    projectsBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Previne fechar imediatamente
        projectsDropdown.classList.toggle('show');
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
            document.getElementById(targetId).style.display = 'block';
            
            // Esconder o dropdown
            projectsDropdown.classList.remove('show');
        });
    });
    
    // Fechar dropdown ao clicar fora
    document.addEventListener('click', function() {
        projectsDropdown.classList.remove('show');
    });
    
    // Prevenir que o dropdown feche quando clicar nele
    projectsDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});