// badges.js - Funcionalidades avançadas do sistema de badges

class BadgeSystem {
  constructor() {
    this.selectedTags = new Set();
    this.init();
  }

  init() {
    this.initTagFiltering();
    this.initBadgeInteractions();
    this.initDynamicBadges();
  }

  // Filtragem por tags
  initTagFiltering() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('tag')) {
        const tagText = e.target.textContent.trim();
        this.toggleTagFilter(tagText);
      }
    });
  }

  toggleTagFilter(tagText) {
    if (this.selectedTags.has(tagText)) {
      this.selectedTags.delete(tagText);
    } else {
      this.selectedTags.add(tagText);
    }
    
    this.updateActiveTags();
    this.filterProjectsByTags();
  }

  updateActiveTags() {
    // Atualizar a visualização das tags ativas
    const activeTagsContainer = document.getElementById('active-tags');
    if (!activeTagsContainer) return;

    activeTagsContainer.innerHTML = '';
    
    this.selectedTags.forEach(tag => {
      const tagElement = document.createElement('span');
      tagElement.className = 'tag badge-interactive';
      tagElement.innerHTML = `
        ${tag}
        <button class="tag-close" onclick="badgeSystem.removeTag('${tag}')">×</button>
      `;
      activeTagsContainer.appendChild(tagElement);
    });
  }

  removeTag(tagText) {
    this.selectedTags.delete(tagText);
    this.updateActiveTags();
    this.filterProjectsByTags();
  }

  filterProjectsByTags() {
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach(project => {
      if (this.selectedTags.size === 0) {
        project.style.display = 'block';
      } else {
        const projectTags = Array.from(project.querySelectorAll('.tag'))
          .map(tag => tag.textContent.trim());
        
        const hasMatchingTag = projectTags.some(tag => 
          this.selectedTags.has(tag)
        );
        
        project.style.display = hasMatchingTag ? 'block' : 'none';
      }
    });
  }

  // Interações com badges
  initBadgeInteractions() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('badge-interactive')) {
        this.handleBadgeClick(e.target);
      }
    });
  }

  handleBadgeClick(badge) {
    const badgeType = badge.dataset.badgeType;
    
    switch(badgeType) {
      case 'category':
        this.filterByCategory(badge.textContent);
        break;
      case 'status':
        this.filterByStatus(badge.textContent);
        break;
      case 'level':
        this.filterByLevel(badge.textContent);
        break;
    }
  }

  // Badges dinâmicos baseados em dados
  initDynamicBadges() {
    this.createAchievementBadges();
    this.createImpactBadges();
  }

  createAchievementBadges() {
    // Badges baseados em conquistas do usuário/organização
    const achievements = {
      'Primeira Doação': false,
      'Voluntário Ativo': true,
      'Doador Frequente': false,
      'Embaixador da Causa': true,
      'Top Contribuidor': false
    };

    const achievementsContainer = document.getElementById('achievements-badges');
    if (!achievementsContainer) return;

    Object.entries(achievements).forEach(([achievement, unlocked]) => {
      const badge = document.createElement('span');
      badge.className = `badge ${unlocked ? 'badge-success' : 'badge-secondary'}`;
      badge.textContent = unlocked ? `✓ ${achievement}` : `🔒 ${achievement}`;
      badge.title = unlocked ? 'Conquista desbloqueada' : 'Conquista bloqueada';
      achievementsContainer.appendChild(badge);
    });
  }

  createImpactBadges() {
    // Badges baseados no impacto das ações
    const impactData = {
      'Vidas Impactadas': '1K+',
      'Árvores Plantadas': '500+',
      'Horas Voluntárias': '2K+',
      'Comunidades Atingidas': '50+'
    };

    const impactContainer = document.getElementById('impact-badges');
    if (!impactContainer) return;

    Object.entries(impactData).forEach(([metric, value]) => {
      const badge = document.createElement('span');
      badge.className = 'badge badge-primary badge-with-count';
      badge.innerHTML = `
        ${metric}
        <span class="badge-count">${value}</span>
      `;
      impactContainer.appendChild(badge);
    });
  }

  // Métodos utilitários
  createBadge(type, text, options = {}) {
    const badge = document.createElement('span');
    badge.className = `badge badge-${type} ${options.size ? `badge-${options.size}` : ''} ${options.interactive ? 'badge-interactive' : ''}`;
    badge.textContent = text;
    
    if (options.icon) {
      badge.innerHTML = `${options.icon} ${text}`;
    }
    
    if (options.data) {
      Object.entries(options.data).forEach(([key, value]) => {
        badge.dataset[key] = value;
      });
    }
    
    return badge;
  }

  // Filtros específicos
  filterByCategory(category) {
    const filterBtn = document.querySelector(`[data-filter="${this.getCategoryKey(category)}"]`);
    if (filterBtn) filterBtn.click();
  }

  filterByStatus(status) {
    // Implementar filtro por status
    console.log('Filtrando por status:', status);
  }

  filterByLevel(level) {
    // Implementar filtro por nível
    console.log('Filtrando por nível:', level);
  }

  getCategoryKey(categoryName) {
    const categoryMap = {
      '📚 Educação': 'educacao',
      '🌱 Meio Ambiente': 'meio-ambiente',
      '🏥 Saúde': 'saude',
      '⚖️ Direitos Humanos': 'direitos-humanos',
      '🤝 Assistência Social': 'assistencia-social'
    };
    
    return categoryMap[categoryName] || categoryName.toLowerCase();
  }
}

// Inicializar o sistema de badges
const badgeSystem = new BadgeSystem();

// Exportar para uso global
window.badgeSystem = badgeSystem;