// Aguarda que todo o documento HTML seja carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos
    const btnIniciar = document.getElementById('btn-iniciar');
    const btnComoJogar = document.getElementById('btn-como-jogar');
    const instrucoes = document.getElementById('instrucoes');
    const btnFechar = document.getElementById('fechar-instrucoes');
    const backgroundAudio = document.getElementById('background-audio');
    
    // Adiciona efeito sonoro aos botões
    const addButtonSound = function(button) {
        button.addEventListener('mouseenter', function() {
            playSound('hover');
        });
        
        button.addEventListener('click', function() {
            playSound('click');
        });
    };
    
    // Função para tocar efeitos sonoros
    function playSound(type) {
        const sound = new Audio();
        
        if (type === 'hover') {
            sound.src = '../audio/hover.mp3';
            sound.volume = 0.3;
        } else if (type === 'click') {
            sound.src = '../audio/click.mp3';
            sound.volume = 0.5;
        }
        
        sound.play().catch(error => {
            // Silenciosamente ignora erros de reprodução de áudio
            // Pode acontecer em navegadores que bloqueiam áudio sem interação
        });
    }
    
    // Efeitos sonoros para os botões
    addButtonSound(btnIniciar);
    addButtonSound(btnComoJogar);
    addButtonSound(btnFechar);
    
    // Função para iniciar o jogo
    btnIniciar.addEventListener('click', function() {
        // Adiciona efeito de fade-out antes de navegar para a próxima página
        document.body.classList.add('fade-out');
        
        // Redireciona para a página do jogo após uma pequena animação
        setTimeout(function() {
            window.location.href = 'game.html';
        }, 800);
    });
    
    // Exibe a tela de instruções ao clicar no botão "Como jogar"
    btnComoJogar.addEventListener('click', function() {
        instrucoes.style.display = 'flex';
        
        // Adiciona classe para animação de entrada
        setTimeout(function() {
            document.querySelector('.instrucoes-content').classList.add('active');
        }, 10);
    });
    
    // Oculta a tela de instruções ao clicar no botão "Fechar"
    btnFechar.addEventListener('click', function() {
        // Adiciona classe para animação de saída
        document.querySelector('.instrucoes-content').classList.remove('active');
        
        // Aguarda a animação terminar antes de ocultar completamente
        setTimeout(function() {
            instrucoes.style.display = 'none';
        }, 300);
    });
    
    // Fecha o modal de instruções quando o usuário clica fora do conteúdo
    instrucoes.addEventListener('click', function(event) {
        if (event.target === instrucoes) {
            btnFechar.click();
        }
    });
    
    // Escuta o teclado para fechar o modal com a tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && instrucoes.style.display === 'flex') {
            btnFechar.click();
        }
    });
    
    // Inicia o áudio de fundo quando o usuário interage pela primeira vez
    document.body.addEventListener('click', function initAudio() {
        if (backgroundAudio) {
            backgroundAudio.volume = 0.2; // Volume baixo para não atrapalhar
            backgroundAudio.play().catch(error => {
                // Alguns navegadores bloqueiam áudio automático
                console.log('Áudio bloqueado pelo navegador. Interação necessária.');
            });
        }
        // Remove o ouvinte após a primeira interação
        document.body.removeEventListener('click', initAudio);
    });
    
    // Efeito de partículas de poeira flutuando (opcional)
    // Isso cria um efeito visual de partículas de poeira no ar para ambiente pós-apocalíptico
    function createDustParticles() {
        const dustContainer = document.createElement('div');
        dustContainer.className = 'dust-container';
        document.body.appendChild(dustContainer);
        
        for (let i = 0; i < 50; i++) {
            const dust = document.createElement('div');
            dust.className = 'dust-particle';
            
            // Posições e tamanhos aleatórios
            dust.style.left = Math.random() * 100 + 'vw';
            dust.style.top = Math.random() * 100 + 'vh';
            dust.style.width = Math.random() * 3 + 1 + 'px';
            dust.style.height = dust.style.width;
            dust.style.opacity = Math.random() * 0.3;
            dust.style.animationDuration = 15 + Math.random() * 45 + 's';
            dust.style.animationDelay = Math.random() * 5 + 's';
            
            dustContainer.appendChild(dust);
        }
    }
    
    // Inicializa os efeitos visuais
    createDustParticles();
    
    // Adiciona classe para iniciar animações após o carregamento
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 100);
});