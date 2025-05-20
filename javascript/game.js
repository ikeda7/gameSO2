// Aguarda que todo o documento HTML seja carregado
document.addEventListener('DOMContentLoaded', function() {
    // Dados dos personagens (especialistas)
    const characters = {
        'drbyte': {
            name: 'Dr. Byte',
            specialty: 'Especialista em Memória e Particionamento',
            icon: '../img/icon_drbyte.png'
        },
        'engkernel': {
            name: 'Eng. KERNEL',
            specialty: 'Mestre do Escalonamento de Processos',
            icon: '../img/icon_engkernel.png'
        },
        'capitasync': {
            name: 'Capitã Sync',
            specialty: 'Especialista em Sincronização e Controle de Recursos',
            icon: '../img/icon_capitasync.png'
        },
        'zerocall': {
            name: 'ZeroCall',
            specialty: 'Especialista em Interrupções e Drivers',
            icon: '../img/icon_zerocall.png'
        },
        'anacodex': {
            name: 'AnaCódex',
            specialty: 'Analista de Arquitetura e Linguagem de Sistemas',
            icon: '../img/icon_anacodex.png'
        }
    };

    // Elementos DOM
    const currentQuestionElement = document.getElementById('current-question');
    const totalQuestionsElement = document.getElementById('total-questions');
    const progressFillElement = document.getElementById('progress-fill');
    const situationTextElement = document.getElementById('situation-text');
    const characterSelectionElement = document.getElementById('character-selection');
    const charactersGridElement = document.querySelector('.characters-grid');
    const solutionSelectionElement = document.getElementById('solution-selection');
    const solutionsListElement = document.querySelector('.solutions-list');
    const feedbackContainerElement = document.getElementById('feedback-container');
    const feedbackTitleElement = document.getElementById('feedback-title');
    const feedbackTextElement = document.getElementById('feedback-text');
    const feedbackButtonElement = document.getElementById('feedback-button');
    const backgroundAudio = document.getElementById('background-audio');

    // Estado do jogo
    let currentQuestionIndex = 0;
    let selectedCharacter = null;
    let selectedSolution = null;
    let gamePhase = 'character'; // 'character' ou 'solution'

    // Inicializar o jogo
    function initGame() {
        // Atualizar informações de progresso
        totalQuestionsElement.textContent = questions.length;
        updateQuestionProgress();
        
        // Carregar a primeira questão
        loadQuestion(currentQuestionIndex);
        
        // Iniciar áudio de fundo
        initAudio();
    }

    // Carregar uma questão específica
    function loadQuestion(index) {
        const question = questions[index];
        
        // Resetar seleções
        selectedCharacter = null;
        selectedSolution = null;
        gamePhase = 'character';
        
        // Atualizar texto da situação
        situationTextElement.innerHTML = `<p>${question.situation}</p>`;
        
        // Mostrar seleção de personagens e esconder seleção de soluções
        characterSelectionElement.style.display = 'block';
        solutionSelectionElement.style.display = 'none';
        
        // Mostrar a barra de progresso na fase de seleção de personagem
        document.querySelector('.game-header').style.display = 'block';
        
        // Atualizar grid de personagens
        updateCharactersGrid();
        
        // Atualizar progresso
        updateQuestionProgress();
    }

    // Atualizar a barra e texto de progresso
    function updateQuestionProgress() {
        currentQuestionElement.textContent = currentQuestionIndex + 1;
        const progressPercentage = ((currentQuestionIndex) / questions.length) * 100;
        progressFillElement.style.width = `${progressPercentage}%`;
    }

    // Criar e atualizar a grid de personagens
    function updateCharactersGrid() {
        charactersGridElement.innerHTML = '';
        
        // Criar um elemento para cada personagem
        Object.keys(characters).forEach(charId => {
            const character = characters[charId];
            
            const characterElement = document.createElement('div');
            characterElement.className = 'character-option';
            characterElement.dataset.character = charId;
            
            if (selectedCharacter === charId) {
                characterElement.classList.add('selected');
            }
            
            characterElement.innerHTML = `
                <img src="${character.icon}" alt="${character.name}" class="character-icon">
                <div class="character-info">
                    <div class="character-name">${character.name}</div>
                    <div class="character-specialty">${character.specialty}</div>
                </div>
            `;
            
            // Adicionar evento de clique
            characterElement.addEventListener('click', () => {
                selectCharacter(charId);
            });
            
            charactersGridElement.appendChild(characterElement);
        });
    }

    // Criar e atualizar a lista de soluções
    function updateSolutionsList() {
        solutionsListElement.innerHTML = '';
        
        const currentQuestion = questions[currentQuestionIndex];
        
        // Criar um elemento para cada alternativa
        currentQuestion.alternatives.forEach((alternative, index) => {
            const solutionElement = document.createElement('div');
            solutionElement.className = 'solution-option';
            solutionElement.dataset.index = index;
            
            if (selectedSolution === index) {
                solutionElement.classList.add('selected');
            }
            
            solutionElement.innerHTML = `
                <div class="solution-text">${alternative.text}</div>
            `;
            
            // Adicionar evento de clique
            solutionElement.addEventListener('click', () => {
                selectSolution(index);
            });
            
            solutionsListElement.appendChild(solutionElement);
        });
    }

    // Selecionar um personagem
    function selectCharacter(charId) {
        // Tocar efeito sonoro
        playSound('click');
        
        selectedCharacter = charId;
        updateCharactersGrid();
        
        // Verificar se o personagem está correto
        const currentQuestion = questions[currentQuestionIndex];
        
        if (charId === currentQuestion.correctCharacter) {
            // Feedback positivo
            showFeedback('Escolha Correta!', currentQuestion.feedback.characterCorrect, 'correct', () => {
                // Avançar para a fase de seleção da solução
                gamePhase = 'solution';
                characterSelectionElement.style.display = 'none';
                solutionSelectionElement.style.display = 'block';
                
                // Esconder a barra de progresso na fase de seleção de solução
                document.querySelector('.game-header').style.display = 'none';
                
                updateSolutionsList();
            });
        } else {
            // Feedback negativo
            showFeedback('Escolha Incorreta', currentQuestion.feedback.characterWrong, 'wrong', () => {
                // Permitir que o jogador tente novamente
                selectedCharacter = null;
                updateCharactersGrid();
            });
        }
    }

    // Selecionar uma solução
    function selectSolution(index) {
        // Tocar efeito sonoro
        playSound('click');
        
        selectedSolution = index;
        updateSolutionsList();
        
        // Verificar se a solução está correta
        const currentQuestion = questions[currentQuestionIndex];
        
        if (currentQuestion.alternatives[index].correct) {
            // Feedback positivo
            showFeedback('Solução Correta!', currentQuestion.feedback.solutionCorrect, 'correct', () => {
                // Avançar para a próxima questão
                nextQuestion();
            });
        } else {
            // Feedback negativo
            showFeedback('Solução Incorreta', currentQuestion.feedback.solutionWrong, 'wrong', () => {
                // Permitir que o jogador tente novamente
                selectedSolution = null;
                updateSolutionsList();
            });
        }
    }

    // Exibir feedback ao jogador
    function showFeedback(title, text, type, callback) {
        feedbackTitleElement.textContent = title;
        feedbackTextElement.textContent = text;
        
        // Adicionar classe de estilo com base no tipo de feedback
        feedbackContainerElement.classList.remove('feedback-correct', 'feedback-wrong');
        if (type === 'correct') {
            feedbackContainerElement.classList.add('feedback-correct');
            playSound('success');
        } else if (type === 'wrong') {
            feedbackContainerElement.classList.add('feedback-wrong');
            playSound('error');
        }
        
        // Exibir feedback
        feedbackContainerElement.style.display = 'flex';
        
        // Configurar o botão de continuar
        feedbackButtonElement.onclick = () => {
            feedbackContainerElement.style.display = 'none';
            if (callback) callback();
        };
    }

    // Avançar para a próxima questão
    function nextQuestion() {
        currentQuestionIndex++;
        
        // Verificar se o jogo terminou
        if (currentQuestionIndex >= questions.length) {
            endGame();
            return;
        }
        
        // Carregar a próxima questão
        loadQuestion(currentQuestionIndex);
    }

    // Finalizar o jogo
    function endGame() {
        // Mostrar feedback final
        showFeedback(
            'Parabéns!', 
            'Você completou todas as questões e salvou o bunker! Sua habilidade em escolher os especialistas certos e implementar as soluções adequadas manteve o sistema funcionando e garantiu a sobrevivência de todos.', 
            'correct', 
            () => {
                // Redirecionar para uma página de fim de jogo ou reiniciar
                window.location.href = '../html/index.html';
            }
        );
    }

    // Funções para tocar efeitos sonoros
    function playSound(type) {
        const sound = new Audio();
        
        switch(type) {
            case 'hover':
                sound.src = '../audio/hover.mp3';
                sound.volume = 0.3;
                break;
            case 'click':
                sound.src = '../audio/click.mp3';
                sound.volume = 0.5;
                break;
            case 'success':
                sound.src = '../audio/success.mp3';
                sound.volume = 0.6;
                break;
            case 'error':
                sound.src = '../audio/error.mp3';
                sound.volume = 0.6;
                break;
        }
        
        sound.play().catch(error => {
            // Silenciosamente ignora erros de reprodução de áudio
        });
    }

    // Adicionar efeito sonoro de hover a todos os botões
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseenter', () => playSound('hover'));
    });

    // Iniciar o áudio de fundo quando o usuário interage pela primeira vez
    function initAudio() {
        document.body.addEventListener('click', function startBackgroundMusic() {
            if (backgroundAudio) {
                backgroundAudio.volume = 0.2; // Volume baixo para não atrapalhar
                backgroundAudio.play().catch(error => {
                    // Alguns navegadores bloqueiam áudio automático
                    console.log('Áudio bloqueado pelo navegador. Interação necessária.');
                });
            }
            // Remove o ouvinte após a primeira interação
            document.body.removeEventListener('click', startBackgroundMusic);
        });
    }

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
    
    // Inicializar os efeitos visuais
    createDustParticles();
    
    // Iniciar o jogo
    initGame();
});