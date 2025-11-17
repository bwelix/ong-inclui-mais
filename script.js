

document.addEventListener('DOMContentLoaded', function() {
   
    initSmoothScroll();
    

    initFormToggle();
    

    initFormValidation();
    
    
    initStickyHeader();

    initScrollAnimations();
    
    initStartButtons();
    
   
    initMasks();
});


function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
         
            if (this.getAttribute('href') === '#cadastro' && window.location.pathname.includes('cadastro.html')) {
                return;
            }
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}


function initFormToggle() {
    const formButtons = document.querySelectorAll('.form-buttons .btn');
    const formSections = document.querySelectorAll('.form-section');
    
    if (formButtons.length === 0) return;
    
    formButtons.forEach(button => {
        button.addEventListener('click', function() {
            const formType = this.getAttribute('data-form');
            
           
            formButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.classList.contains('btn-secondary')) {
                    btn.classList.add('btn-secondary');
                }
            });
            this.classList.add('active');
            this.classList.remove('btn-secondary');
            
     
            formSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === `${formType}-form`) {
                    section.classList.add('active');
                }
            });
            
           
            const otherButton = Array.from(formButtons).find(btn => btn !== this);
            if (otherButton) {
                otherButton.classList.add('btn-secondary');
            }
        });
    });
}


function initFormValidation() {
    const ongForm = document.getElementById('form-ong');
    const voluntarioForm = document.getElementById('form-voluntario');
    
    if (ongForm) {
        ongForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateOngForm()) {
                showSuccessMessage('ONG cadastrada com sucesso! Nossa equipe entrará em contato em até 48h.');
                this.reset();
            }
        });
    }
    
    if (voluntarioForm) {
        voluntarioForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateVoluntarioForm()) {
                showSuccessMessage('Cadastro realizado com sucesso! Em breve você receberá oportunidades compatíveis com seu perfil.');
                this.reset();
                
                
                const ongButton = document.querySelector('[data-form="ong"]');
                if (ongButton) {
                    ongButton.click();
                }
            }
        });
    }
}


function validateOngForm() {
    const nome = document.getElementById('ong-name');
    const cnpj = document.getElementById('ong-cnpj');
    const email = document.getElementById('ong-email');
    const telefone = document.getElementById('ong-phone');
    const causa = document.getElementById('ong-cause');
    
    let isValid = true;
    
    clearErrors();
    
   
    if (!nome.value.trim()) {
        showError(nome, 'Nome da ONG é obrigatório');
        isValid = false;
    }
    
   
    if (!cnpj.value.trim()) {
        showError(cnpj, 'CNPJ é obrigatório');
        isValid = false;
    } else if (!validateCNPJ(cnpj.value)) {
        showError(cnpj, 'CNPJ inválido');
        isValid = false;
    }
    
  
    if (!email.value.trim()) {
        showError(email, 'E-mail é obrigatório');
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, 'E-mail inválido');
        isValid = false;
    }
    
 
    if (!telefone.value.trim()) {
        showError(telefone, 'Telefone é obrigatório');
        isValid = false;
    }
    
  
    if (!causa.value) {
        showError(causa, 'Selecione uma causa principal');
        isValid = false;
    }
    
    return isValid;
}

function validateVoluntarioForm() {
    const nome = document.getElementById('vol-name');
    const email = document.getElementById('vol-email');
    const habilidades = document.getElementById('vol-skills');
    const disponibilidade = document.getElementById('vol-availability');
    
    let isValid = true;
    
    
    clearErrors();
    
   
    if (!nome.value.trim()) {
        showError(nome, 'Nome completo é obrigatório');
        isValid = false;
    }
    
    if (!email.value.trim()) {
        showError(email, 'E-mail é obrigatório');
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, 'E-mail inválido');
        isValid = false;
    }
    
  
    if (!habilidades.value.trim()) {
        showError(habilidades, 'Informe suas habilidades');
        isValid = false;
    }
    
   
    if (!disponibilidade.value) {
        showError(disponibilidade, 'Selecione sua disponibilidade');
        isValid = false;
    }
    
    return isValid;
}


function validateCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    
    if (cnpj === '') return false;
    
    if (cnpj.length !== 14) return false;
    
    
    if (cnpj === "00000000000000" || 
        cnpj === "11111111111111" || 
        cnpj === "22222222222222" || 
        cnpj === "33333333333333" || 
        cnpj === "44444444444444" || 
        cnpj === "55555555555555" || 
        cnpj === "66666666666666" || 
        cnpj === "77777777777777" || 
        cnpj === "88888888888888" || 
        cnpj === "99999999999999")
        return false;
        
   
    let tamanho = cnpj.length - 2
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }
    
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) return false;
    
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }
    
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) return false;
    
    return true;
}


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


function showError(input, message) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return;
    
    
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    

    input.style.borderColor = '#e74c3c';
    
   
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.style.color = '#e74c3c';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
    errorElement.style.display = 'block';
    errorElement.textContent = message;
    
    formGroup.appendChild(errorElement);
}


function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.style.borderColor = '';
    });
}

function showSuccessMessage(message) {
   
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const successElement = document.createElement('div');
    successElement.className = 'success-message';
    successElement.style.background = '#d4edda';
    successElement.style.color = '#155724';
    successElement.style.padding = '1rem';
    successElement.style.borderRadius = '0.5rem';
    successElement.style.marginBottom = '1rem';
    successElement.style.border = '1px solid #c3e6cb';
    successElement.textContent = message;
    
    const formContainer = document.querySelector('.form-container');
    if (formContainer) {
        formContainer.insertBefore(successElement, formContainer.firstChild);
        
      
        successElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        
        setTimeout(() => {
            successElement.remove();
        }, 5000);
    }
}


function initStickyHeader() {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.left = '0';
            header.style.right = '0';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            header.style.zIndex = '1000';
            document.body.style.paddingTop = header.offsetHeight + 'px';
        } else {
            header.style.position = 'static';
            header.style.background = '';
            header.style.backdropFilter = '';
            header.style.boxShadow = '';
            document.body.style.paddingTop = '0';
        }
        
        lastScrollY = window.scrollY;
    });
}


function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    

    const elementsToAnimate = document.querySelectorAll('.card, .section-title, .hero-content');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}


function initStartButtons() {
    const startButtons = document.querySelectorAll('.btn[href="#cadastro"]');
    
    startButtons.forEach(button => {
        button.addEventListener('click', function(e) {
           
            if (!window.location.pathname.includes('cadastro.html')) {
                e.preventDefault();
                window.location.href = 'cadastro.html';
            }
        });
    });
}

function initMasks() {
   
    const cnpjInput = document.getElementById('ong-cnpj');
    if (cnpjInput) {
        cnpjInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/^(\d{2})(\d)/, '$1.$2');
            value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
            value = value.replace(/\.(\d{3})(\d)/, '.$1/$2');
            value = value.replace(/(\d{4})(\d)/, '$1-$2');
            e.target.value = value.substring(0, 18);
        });
    }
    
    
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 10) {
                value = value.replace(/^(\d{2})(\d)/, '($1) $2');
                value = value.replace(/(\d{4})(\d)/, '$1-$2');
            } else {
                value = value.replace(/^(\d{2})(\d)/, '($1) $2');
                value = value.replace(/(\d{5})(\d)/, '$1-$2');
            }
            e.target.value = value.substring(0, 15);
        });
    });
}