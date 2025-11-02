
const projetos = [
    {
        id: 1,
        titulo: "Educação para Todos",
        organizacao: "Instituto Educar para Transformar",
        categoria: "educacao",
        descricao: "Projeto que oferece aulas de reforço escolar e atividades extracurriculares para crianças e adolescentes em situação de vulnerabilidade social em comunidades carentes.",
        descricaoLonga: "O projeto Educação para Todos atende mais de 200 crianças e adolescentes em 5 comunidades carentes. Oferecemos reforço escolar em português e matemática, oficinas de arte, música e esportes, além de acompanhamento psicológico e nutricional. Nosso objetivo é proporcionar educação de qualidade e desenvolvimento integral para jovens em situação de vulnerabilidade.",
        meta: 50000,
        arrecadado: 42500,
        voluntarios: 120,
        urgente: false,
        destaque: true,
        imagem: "📚",
        dataInicio: "2024-01-15",
        localizacao: "Belo Horizonte, MG",
        impacto: "85% das crianças melhoraram suas notas escolares",
        necessidades: ["Voluntários para reforço escolar", "Material didático", "Lanches", "Transporte"]
    },
    {
        id: 2,
        titulo: "Reflorestamento Urbano",
        organizacao: "Associação Verde Vida",
        categoria: "meio-ambiente",
        descricao: "Iniciativa de plantio de árvores nativas em áreas urbanas degradadas, promovendo educação ambiental e envolvimento comunitário.",
        descricaoLonga: "Nosso projeto já plantou mais de 1.000 árvores nativas em áreas urbanas degradadas. Trabalhamos com a comunidade local em mutirões de plantio, oficinas de educação ambiental e monitoramento do crescimento das mudas. Cada árvore plantada significa mais sombra, ar puro e beleza para nossa cidade.",
        meta: 28000,
        arrecadado: 25760,
        voluntarios: 75,
        urgente: false,
        destaque: true,
        imagem: "🌳",
        dataInicio: "2024-03-01",
        localizacao: "Contagem, MG",
        impacto: "1.200 árvores plantadas, 5 toneladas de CO2 capturadas",
        necessidades: ["Mudas nativas", "Ferramentas", "Voluntários para plantio", "Educadores ambientais"]
    },
    {
        id: 3,
        titulo: "Saúde Comunitária",
        organizacao: "Associação Comunitária Esperança",
        categoria: "saude",
        descricao: "Oferece atendimento médico básico, orientação nutricional e atividades de promoção da saúde em comunidades carentes.",
        descricaoLonga: "O projeto Saúde Comunitária leva atendimento médico básico, orientação nutricional e atividades de promoção da saúde para comunidades que não têm acesso fácil ao sistema de saúde. Realizamos mutirões médicos, palestras educativas e acompanhamento de famílias em situação de vulnerabilidade.",
        meta: 62000,
        arrecadado: 48360,
        voluntarios: 45,
        urgente: true,
        destaque: true,
        imagem: "🏥",
        dataInicio: "2024-02-10",
        localizacao: "Ribeirão das Neves, MG",
        impacto: "1.500 atendimentos realizados, 80% das famílias acompanhadas",
        necessidades: ["Médicos voluntários", "Medicamentos", "Equipamentos médicos", "Alimentos para cestas básicas"]
    },
    {
        id: 4,
        titulo: "Direitos Humanos em Ação",
        organizacao: "Centro de Defesa dos Direitos Humanos",
        categoria: "direitos-humanos",
        descricao: "Projeto de assistência jurídica gratuita e educação em direitos para populações em situação de vulnerabilidade.",
        descricaoLonga: "Oferecemos assistência jurídica gratuita, orientação sobre direitos fundamentais e acompanhamento de casos para populações em situação de vulnerabilidade. Atuamos na defesa de direitos básicos como moradia, saúde, educação e trabalho digno.",
        meta: 35000,
        arrecadado: 22750,
        voluntarios: 30,
        urgente: false,
        destaque: false,
        imagem: "⚖️",
        dataInicio: "2024-01-20",
        localizacao: "Belo Horizonte, MG",
        impacto: "300 atendimentos jurídicos, 150 casos acompanhados",
        necessidades: ["Advogados voluntários", "Material informativo", "Espaço para atendimento", "Transporte"]
    },
    {
        id: 5,
        titulo: "Cozinha Solidária",
        organizacao: "Movimento Fome Zero",
        categoria: "assistencia-social",
        descricao: "Distribuição de refeições nutritivas e capacitação em culinária para famílias em situação de insegurança alimentar.",
        descricaoLonga: "A Cozinha Solidária distribui mais de 500 refeições por dia para pessoas em situação de rua e famílias em vulnerabilidade social. Além disso, oferecemos cursos de culinária e nutrição para capacitar comunidades na produção de alimentos saudáveis e de baixo custo.",
        meta: 45000,
        arrecadado: 31500,
        voluntarios: 60,
        urgente: true,
        destaque: false,
        imagem: "🍲",
        dataInicio: "2024-02-28",
        localizacao: "Santa Luzia, MG",
        impacto: "15.000 refeições distribuídas, 120 pessoas capacitadas",
        necessidades: ["Alimentos não perecíveis", "Utensílios de cozinha", "Voluntários para cozinha", "Transporte"]
    },
    {
        id: 6,
        titulo: "Biblioteca Comunitária",
        organizacao: "Instituto Ler é Viver",
        categoria: "educacao",
        descricao: "Criação e manutenção de bibliotecas comunitárias com acervo diversificado e atividades de incentivo à leitura.",
        descricaoLonga: "Instalamos bibliotecas comunitárias em áreas carentes, com acervo diversificado e atividades regulares de incentivo à leitura. Realizamos contação de histórias, clubes de leitura e oficinas literárias para crianças, jovens e adultos.",
        meta: 25000,
        arrecadado: 18750,
        voluntarios: 40,
        urgente: false,
        destaque: false,
        imagem: "📖",
        dataInicio: "2024-03-15",
        localizacao: "Betim, MG",
        impacto: "3 bibliotecas instaladas, 2.000 livros disponíveis",
        necessidades: ["Livros infantis e adultos", "Estantes", "Voluntários para mediação de leitura", "Material de escritório"]
    }
];


document.addEventListener('DOMContentLoaded', function() {
    initProjectsPage();
});

function initProjectsPage() {
   
    renderProjects();
    renderFeaturedProjects();
    
 
    initFilters();
    
    
    initModal();
}


function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    projetos.forEach(projeto => {
        const projectCard = createProjectCard(projeto);
        container.appendChild(projectCard);
    });
}


function renderFeaturedProjects() {
    const container = document.getElementById('featured-container');
    container.innerHTML = '';
    
    const featuredProjects = projetos.filter(projeto => projeto.destaque);
    
    featuredProjects.forEach(projeto => {
        const projectCard = createProjectCard(projeto);
        container.appendChild(projectCard);
    });
}


function createProjectCard(projeto) {
    const progresso = (projeto.arrecadado / projeto.meta) * 100;
    const progressoFormatado = progresso > 100 ? 100 : progresso;
    
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', projeto.categoria);
    card.setAttribute('data-id', projeto.id);
    
    card.innerHTML = `
        <div class="project-image">
            ${projeto.imagem}
        </div>
        <div class="project-content">
            <div style="display: flex; justify-content: between; align-items: start; margin-bottom: 1rem;">
                <span class="project-category">${getCategoryName(projeto.categoria)}</span>
                ${projeto.urgente ? '<span class="urgent-badge">URGENTE</span>' : ''}
            </div>
            <h3 class="project-title">${projeto.titulo}</h3>
            <p class="project-organization">${projeto.organizacao}</p>
            <p class="project-description">${projeto.descricao}</p>
            
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progressoFormatado}%"></div>
            </div>
            
            <div class="project-stats">
                <div class="stat">
                    <span class="stat-value">${progressoFormatado.toFixed(0)}%</span>
                    <span class="stat-label">Meta</span>
                </div>
                <div class="stat">
                    <span class="stat-value">R$ ${(projeto.arrecadado / 1000).toFixed(0)}K</span>
                    <span class="stat-label">Arrecadado</span>
                </div>
                <div class="stat">
                    <span class="stat-value">${projeto.voluntarios}</span>
                    <span class="stat-label">Voluntários</span>
                </div>
            </div>
            
            <div class="project-actions">
                <button class="btn btn-secondary" onclick="openProjectModal(${projeto.id})">
                    Saber Mais
                </button>
                <button class="btn" onclick="supportProject(${projeto.id})">
                    Apoiar Projeto
                </button>
            </div>
        </div>
    `;
    
    return card;
}


function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
           
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
          
            filterProjects(filter);
        });
    });
}


function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block';
            setTimeout(() => {
                project.style.opacity = '1';
                project.style.transform = 'translateY(0)';
            }, 100);
        } else {
            project.style.opacity = '0';
            project.style.transform = 'translateY(20px)';
            setTimeout(() => {
                project.style.display = 'none';
            }, 300);
        }
    });
}


function initModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    
    closeBtn.addEventListener('click', closeModal);
    
   
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}


function openProjectModal(projectId) {
    const projeto = projetos.find(p => p.id === projectId);
    if (!projeto) return;
    
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const progresso = (projeto.arrecadado / projeto.meta) * 100;
    
    modalContent.innerHTML = `
        <div style="padding: 2rem;">
            <div class="project-image" style="border-radius: 15px 15px 0 0; margin: -2rem -2rem 2rem -2rem;">
                ${projeto.imagem}
            </div>
            
            <div style="display: flex; justify-content: between; align-items: start; margin-bottom: 1rem;">
                <span class="project-category">${getCategoryName(projeto.categoria)}</span>
                ${projeto.urgente ? '<span class="urgent-badge">URGENTE</span>' : ''}
            </div>
            
            <h2 style="margin-bottom: 0.5rem; color: #333;">${projeto.titulo}</h2>
            <p style="color: #666; font-weight: 600; margin-bottom: 1.5rem;">${projeto.organizacao}</p>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: #333; margin-bottom: 1rem;">Sobre o Projeto</h3>
                <p style="line-height: 1.6; color: #555;">${projeto.descricaoLonga}</p>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
                <div>
                    <h4 style="color: #333; margin-bottom: 0.5rem;">📍 Localização</h4>
                    <p style="color: #666;">${projeto.localizacao}</p>
                </div>
                <div>
                    <h4 style="color: #333; margin-bottom: 0.5rem;">📅 Início</h4>
                    <p style="color: #666;">${formatDate(projeto.dataInicio)}</p>
                </div>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: #333; margin-bottom: 1rem;">📊 Progresso do Projeto</h3>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progresso}%"></div>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 0.5rem;">
                    <span style="color: #666;">R$ ${projeto.arrecadado.toLocaleString('pt-BR')} arrecadados</span>
                    <span style="color: #666;">Meta: R$ ${projeto.meta.toLocaleString('pt-BR')}</span>
                </div>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: #333; margin-bottom: 1rem;">🎯 Impacto Alcançado</h3>
                <p style="color: #555; line-height: 1.6;">${projeto.impacto}</p>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="color: #333; margin-bottom: 1rem;">🛠️ Necessidades Atuais</h3>
                <ul style="color: #555; line-height: 1.6;">
                    ${projeto.necessidades.map(need => `<li>${need}</li>`).join('')}
                </ul>
            </div>
            
            <div class="project-actions">
                <button class="btn" onclick="supportProject(${projeto.id}); closeModal();" style="flex: 2;">
                    💝 Apoiar Este Projeto
                </button>
                <button class="btn btn-secondary" onclick="volunteerProject(${projeto.id}); closeModal();" style="flex: 1;">
                    👥 Ser Voluntário
                </button>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
}


function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
}


function supportProject(projectId) {
    const projeto = projetos.find(p => p.id === projectId);
    alert(`Obrigado pelo interesse em apoiar o projeto "${projeto.titulo}"! Em breve entraremos em contato.`);
    
}


function volunteerProject(projectId) {
    const projeto = projetos.find(p => p.id === projectId);
    alert(`Que bom que você quer ser voluntário no projeto "${projeto.titulo}"! Redirecionando para o cadastro...`);
    window.location.href = 'cadastro.html';
}


function getCategoryName(category) {
    const categories = {
        'educacao': '📚 Educação',
        'meio-ambiente': '🌱 Meio Ambiente',
        'saude': '🏥 Saúde',
        'direitos-humanos': '⚖️ Direitos Humanos',
        'assistencia-social': '🤝 Assistência Social'
    };
    return categories[category] || category;
}

function formatDate(dateString) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
}