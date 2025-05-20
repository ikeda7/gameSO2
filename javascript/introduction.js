// Aguarda que todo o documento HTML seja carregado
document.addEventListener('DOMContentLoaded', function() {
    // Seleção de elementos
    const characterCards = document.querySelectorAll('.character-card');
    const modal = document.getElementById('character-modal');
    const modalContent = document.querySelector('.character-modal-content');
    const closeModal = document.getElementById('close-modal');
    const btnContinue = document.getElementById('btn-continue');
    const backgroundAudio = document.getElementById('background-audio');
    
    // Dados dos personagens
    const characters = {
        'drbyte': {
            name: 'Dr. Byte',
            title: 'Especialista em Memória e Particionamento',
            age: '55 anos',
            specialty: 'Dr. Byte é um especialista em organização de memória, particionamento e alocação de RAM. Ele pode resolver problemas relacionados a como organizar a memória RAM entre o sistema operacional e os programas de usuário, e como fazer o particionamento eficiente para garantir a performance do sistema.'
        },
        'engkernel': {
            name: 'Eng. KERNEL',
            title: 'Mestre do Escalonamento de Processos',
            age: '42 anos',
            specialty: 'Eng. KERNEL é um mestre no escalonamento de processos e alocação de tempo de execução. Ele resolve problemas relacionados ao tempo de execução de processos e como os programas competem pelos recursos do sistema, garantindo que o sistema continue rodando sem interrupções.'
        },
        'capitasync': {
            name: 'Capitã Sync',
            title: 'Especialista em Sincronização e Controle de Recursos',
            age: '30 anos',
            specialty: 'Capitã Sync é a especialista em sincronização e controle de compartilhamento de recursos, como o controle do braço robótico compartilhado entre processos. Ela pode ser chamada para resolver questões onde múltiplos processos devem acessar os mesmos recursos sem causar conflitos.'
        },
        'zerocall': {
            name: 'ZeroCall',
            title: 'Especialista em Interrupções e Drivers',
            age: '35 anos',
            specialty: 'ZeroCall é especializado em interrupções, chamadas de sistema e drivers, garantindo a comunicação entre o software e o hardware. Ele pode resolver problemas relacionados ao comportamento de interrupções no sistema e gerenciar a interação entre programas e dispositivos periféricos.'
        },
        'anacodex': {
            name: 'AnaCódex',
            title: 'Analista de Arquitetura e Linguagem de Sistemas',
            age: '32 anos',
            specialty: 'AnaCódex é especializada em arquitetura de sistemas e linguagens de programação. Ela lida com questões relacionadas ao processamento, execução simultânea de programas, e como o sistema é estruturado para lidar com várias tarefas.'
        }
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
        });
    }

    // Adiciona eventos de som aos cartões de personagens
    characterCards.forEach(card => {
        card.addEventListener('mouseenter', () => playSound('hover'));
        card.addEventListener('click', () => {
            playSound('click');
            showCharacterDetails(card.dataset.character);
        });
    });

    // Adiciona eventos de som ao botão continuar
    btnContinue.addEventListener('mouseenter', () => playSound('hover'));
    btnContinue.addEventListener('click', () => {
        playSound('click');
        
        // Adiciona efeito de fade-out antes de navegar para a próxima página
        document.body.classList.add('fade-out');
        
        // Redireciona para a página do jogo após uma pequena animação
        setTimeout(function() {
            window.location.href = '../html/game.html';
        }, 800);
    });

    // Função para mostrar detalhes do personagem
    function showCharacterDetails(characterId) {
        const character = characters[characterId];
        
        // Atualiza as informações no modal
        document.getElementById('modal-character-image').src = `../img/${characterId}.png`;
        document.getElementById('modal-character-image').alt = character.name;
        document.getElementById('modal-character-name').textContent = character.name;
        document.getElementById('modal-character-title').textContent = character.title;
        document.getElementById('character-age').textContent = character.age;
        document.getElementById('character-specialty').textContent = character.specialty;
        
        // Exibe o modal
        modal.style.display = 'flex';
        
        // Adiciona classe para animação de entrada
        setTimeout(function() {
            modalContent.classList.add('active');
        }, 10);
    }

    // Fecha o modal ao clicar no botão de fechar
    closeModal.addEventListener('click', function() {
        // Animação de saída
        modalContent.classList.remove('active');
        
        // Aguarda a animação terminar antes de ocultar completamente
        setTimeout(function() {
            modal.style.display = 'none';
        }, 300);
    });

    // Fecha o modal quando o usuário clica fora do conteúdo
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal.click();
        }
    });

    // Escuta o teclado para fechar o modal com a tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeModal.click();
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

    // Efeito de partículas de poeira flutuando
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