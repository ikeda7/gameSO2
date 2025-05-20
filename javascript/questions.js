// Array com todas as questões do jogo
const questions = [
    {
        id: 1,
        situation: "O filtro de ar principal falhou e os níveis de oxigênio estão caindo rapidamente. Os sobreviventes têm apenas algumas horas antes que o ar se torne tóxico. A sala de controle revela um sistema computacional antigo que precisa ser reprogramado para restaurar o filtro de ar.\n\nProblema: Antes de começar o projeto do novo sistema operacional para salvar a todos, qual conhecimento é essencial?",
        correctCharacter: "anacodex",
        alternatives: [
            { text: "Fabricante do sistema de computação", correct: false },
            { text: "Velocidade do sistema de computação", correct: false },
            { text: "Recursos disponíveis e características gerais dos programas de usuários", correct: true },
            { text: "Marca e modelo do sistema de computação", correct: false },
            { text: "Todas as alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "AnaCódex é perfeita para este desafio! Sua expertise em arquitetura de sistemas e linguagens de programação é essencial para identificar o conhecimento fundamental necessário para iniciar o desenvolvimento do sistema operacional.",
            characterWrong: "Este especialista não é o mais indicado para este problema inicial de arquitetura. AnaCódex seria a escolha ideal, pois sua especialidade em arquitetura de sistemas permite determinar quais conhecimentos são essenciais para iniciar o projeto.",
            solutionCorrect: "Correto! Para iniciar o projeto do sistema operacional, é fundamental conhecer os recursos disponíveis e as características gerais dos programas de usuários, permitindo o dimensionamento adequado do sistema.",
            solutionWrong: "Esta não é a resposta mais adequada. O conhecimento essencial para iniciar o projeto é entender os recursos disponíveis e as características gerais dos programas de usuários, permitindo assim um design eficiente do sistema operacional."
        }
    },
    {
        id: 2,
        situation: "Uma rachadura na parede do bunker está permitindo a entrada de água contaminada. O sistema de bombas de drenagem precisa ser reativado imediatamente, mas o painel de controle não responde. Os sobreviventes precisam identificar os componentes do sistema computacional disponível para reativar as bombas.\n\nProblema: Quais são os quatro principais recursos (em hardware) que estão à disposição do sistema de controle do bunker?",
        correctCharacter: "anacodex",
        alternatives: [
            { text: "Gabinete, unidade de CD-ROM, porta USB e filtro de linha", correct: false },
            { text: "ROM, memória cachê, braço robótico e porta USB", correct: false },
            { text: "CPU, braço robótico, culer e porta USB", correct: false },
            { text: "Processador, RAM, periféricos e HD ou SSD", correct: true },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "AnaCódex é a escolha perfeita para este desafio! Com sua expertise em arquitetura de sistemas, ela consegue identificar precisamente quais são os recursos de hardware fundamentais que o sistema de controle do bunker precisa utilizar.",
            characterWrong: "Este especialista não possui o conhecimento específico necessário para esta questão. AnaCódex seria a escolha ideal, pois sua especialidade em arquitetura de sistemas permite identificar os recursos de hardware fundamentais do sistema.",
            solutionCorrect: "Excelente! Processador, RAM, periféricos e HD/SSD são de fato os quatro recursos de hardware fundamentais para qualquer sistema computacional, incluindo o sistema de controle do bunker.",
            solutionWrong: "Esta não é a resposta correta. Os quatro principais recursos de hardware são: processador (para executar instruções), RAM (para armazenamento temporário), periféricos (para interação com o ambiente) e HD/SSD (para armazenamento permanente)."
        }
    },
    {
        id: 3,
        situation: "A radiação externa atingiu níveis letais. O único meio de acessar o depósito de suprimentos sem expor os sobreviventes é através do braço robótico, que está conectado ao sistema central mas não responde aos comandos. É necessário classificar corretamente este componente para restaurar sua funcionalidade.\n\nProblema: Do ponto de vista de Arquiteturas de Computadores, como classificar o braço robótico quanto ao tipo de hardware?",
        correctCharacter: "zerocall",
        alternatives: [
            { text: "Dispositivo alternativo", correct: false },
            { text: "Dispositivo periférico", correct: true },
            { text: "Dispositivo de auxílio", correct: false },
            { text: "Dispositivo alternador", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "ZeroCall é exatamente quem precisamos! Como especialista em interrupções e drivers, ele tem o conhecimento necessário para classificar corretamente o braço robótico e restaurar sua funcionalidade no sistema.",
            characterWrong: "Este especialista não é o mais adequado para este problema. ZeroCall seria a escolha ideal, pois sua expertise em interrupções e drivers é fundamental para lidar com questões de comunicação entre o sistema central e o braço robótico.",
            solutionCorrect: "Correto! O braço robótico é classificado como um dispositivo periférico, pois é um hardware conectado ao sistema computacional central que permite interação com o ambiente externo.",
            solutionWrong: "Esta não é a classificação correta. O braço robótico é um dispositivo periférico, pois é um componente externo ao sistema computacional central que recebe comandos e executa ações no ambiente físico."
        }
    },
    {
        id: 4,
        situation: "O gerador principal entrou em modo de economia de energia após o desastre e só permite a execução de dois programas vitais: o sistema de purificação de água e o sistema de oxigenação. Cada programa leva dez minutos para completar um ciclo, mas os sobreviventes precisam de ambos funcionando simultaneamente para sobreviver.\n\nProblema: Qual a justificativa técnica para desenvolver um sistema operacional para o bunker?",
        correctCharacter: "engkernel",
        alternatives: [
            { text: "Para que o sistema possa executar programas de usuários no modo Kernel, garantindo mais segurança", correct: false },
            { text: "Para que programas de usuários não dependam do código VHDL usado na memória ROM", correct: false },
            { text: "Para que o sistema possa gerar programas de usuários tornando-os acessíveis", correct: false },
            { text: "Para que programas de usuários sejam executados dando impressão de paralelismo e compartilhem recursos de forma organizada", correct: true },
            { text: "Todas as alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Eng. KERNEL é a escolha perfeita para este problema! Como Mestre do Escalonamento de Processos, ele entende perfeitamente a necessidade técnica de um sistema operacional para executar processos com aparência de paralelismo.",
            characterWrong: "Este especialista não possui o conhecimento específico necessário para esta questão. Eng. KERNEL seria a escolha ideal devido à sua expertise em escalonamento de processos e gerenciamento do tempo de execução.",
            solutionCorrect: "Excelente! A justificativa técnica para desenvolver um sistema operacional é justamente permitir que programas de usuários sejam executados com aparência de paralelismo e compartilhem recursos de forma organizada, essencial para a sobrevivência no bunker.",
            solutionWrong: "Esta não é a justificativa técnica correta. O principal motivo para desenvolver um sistema operacional é permitir que programas sejam executados com aparência de paralelismo e compartilhem recursos de forma organizada, crucial no caso dos sistemas de água e oxigenação."
        }
    },
    {
        id: 5,
        situation: "O sistema de regulação térmica falhou e a temperatura do bunker está subindo assustadoramente. Para evitar um superaquecimento fatal, o grupo precisa compreender os princípios fundamentais de como um sistema operacional controla os recursos do hardware.\n\nProblema: Quais são as duas principais funções de qualquer sistema operacional?",
        correctCharacter: "anacodex",
        alternatives: [
            { text: "Máquina virtual/estendida e Gerente de Recursos", correct: true },
            { text: "Carregador de programas e manipulador de braços robóticos", correct: false },
            { text: "Máquina conceitual e gerente de atividades implícitas", correct: false },
            { text: "Intermediador para braços robóticos e executor de programas", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "AnaCódex é perfeita para este desafio! Sua expertise em arquitetura de sistemas e linguagens de programação é essencial para identificar as funções fundamentais de um sistema operacional.",
            characterWrong: "Este especialista não é o mais indicado para este problema. AnaCódex seria a escolha ideal, pois sua especialidade em arquitetura de sistemas permite entender as funções fundamentais de um sistema operacional.",
            solutionCorrect: "Correto! As duas principais funções de qualquer sistema operacional são atuar como uma máquina virtual/estendida (abstraindo complexidades do hardware) e como gerente de recursos (alocando e controlando o uso dos recursos do sistema).",
            solutionWrong: "Esta não é a resposta correta. As duas principais funções de um sistema operacional são: atuar como máquina virtual/estendida e como gerente de recursos, permitindo tanto a abstração do hardware quanto o controle eficiente dos recursos disponíveis."
        }
    },
    {
        id: 6,
        situation: "Os sensores indicam apenas 12 horas de oxigênio restante. Sem um sistema operacional funcional, os sistemas de suporte à vida falharão completamente. Os cinco especialistas reuniram-se na sala de controle central para iniciar o desenvolvimento emergencial.\n\nProblema: Qual deve ser a tarefa inicial do processo de desenvolvimento do sistema operacional para salvar o bunker?",
        correctCharacter: "engkernel",
        alternatives: [
            { text: "Criação de um diagrama de fluxo de dados para execução dos processos", correct: false },
            { text: "Elaboração da tabela de processos", correct: false },
            { text: "Caracterização da interface de interação com o usuário", correct: false },
            { text: "Definição das tarefas dos componentes principais do SO", correct: true },
            { text: "Todas as alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Eng. KERNEL é perfeito para este desafio! Como especialista em escalonamento de processos, ele sabe exatamente qual deve ser a tarefa inicial no desenvolvimento de um sistema operacional.",
            characterWrong: "Este especialista não é o mais adequado para esta questão. Eng. KERNEL seria a escolha ideal, pois sua expertise em escalonamento de processos e alocação de tempo de execução o qualifica para definir as tarefas iniciais do desenvolvimento.",
            solutionCorrect: "Excelente escolha! A definição das tarefas dos componentes principais do SO é realmente a etapa inicial mais importante, pois estabelece a estrutura fundamental sobre a qual todo o sistema será construído.",
            solutionWrong: "Esta não é a tarefa inicial mais adequada. O primeiro passo no desenvolvimento de um sistema operacional deve ser a definição das tarefas dos componentes principais, estabelecendo assim a arquitetura básica do sistema."
        }
    },
    {
        id: 7,
        situation: "A porta de segurança que separa o bunker da zona contaminada começou a falhar, abrindo e fechando aleatoriamente. O sistema de controle de acesso precisa ser reconstruído urgentemente, focando nos componentes essenciais do núcleo do sistema operacional.\n\nProblema: Quantos e quais são os principais componentes de qualquer núcleo de sistema operacional?",
        correctCharacter: "engkernel",
        alternatives: [
            { text: "Três: BIOS, Controlador de DMA e controlador de IRQ", correct: false },
            { text: "Três: Inicializador do sistema, Escalonador e Finalizador do sistema", correct: false },
            { text: "Quatro: Escalonador de processos/threads, Gerente de memória, Sistema de arquivo, Software de E/S", correct: true },
            { text: "Quatro: Processador, RAM, HD, braço robótico", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Eng. KERNEL é a escolha perfeita para este problema! Como Mestre do Escalonamento de Processos, ele tem conhecimento profundo sobre os componentes essenciais do núcleo de um sistema operacional.",
            characterWrong: "Este especialista não possui o conhecimento específico necessário para esta questão. Eng. KERNEL seria a escolha ideal devido à sua expertise em componentes do sistema operacional e seu funcionamento interno.",
            solutionCorrect: "Perfeito! Os quatro componentes principais de qualquer núcleo de sistema operacional são: Escalonador de processos/threads, Gerente de memória, Sistema de arquivo e Software de E/S. Estes formam a base funcional do sistema.",
            solutionWrong: "Esta não é a resposta correta. Os quatro componentes principais do núcleo de um sistema operacional são: Escalonador de processos/threads, Gerente de memória, Sistema de arquivo e Software de E/S, cada um responsável por um aspecto fundamental do sistema."
        }
    },
    {
        id: 8,
        situation: "Uma tempestade eletromagnética é iminente e ameaça causar blackouts intermitentes no bunker. Os sobreviventes precisam garantir que os dados essenciais para o sistema de suporte à vida não sejam perdidos durante as quedas de energia.\n\nProblema: Mesmo quando um computador está desligado, onde o sistema operacional e programas permanecem armazenados?",
        correctCharacter: "drbyte",
        alternatives: [
            { text: "Memória cache", correct: false },
            { text: "RAM", correct: false },
            { text: "Registradores", correct: false },
            { text: "SSD ou HD", correct: true },
            { text: "Nenhuma das anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Dr. Byte é o especialista ideal para este problema! Como especialista em memória e particionamento, ele compreende perfeitamente os diferentes tipos de armazenamento e suas características de persistência.",
            characterWrong: "Este especialista não é o mais adequado para esta questão sobre armazenamento persistente. Dr. Byte seria a escolha ideal, pois sua especialidade em memória e particionamento o qualifica para responder sobre onde os dados são preservados quando não há energia.",
            solutionCorrect: "Correto! O SSD ou HD (armazenamento não-volátil) é onde o sistema operacional e os programas permanecem armazenados mesmo quando o computador está desligado, garantindo que os dados essenciais não se percam durante os blackouts.",
            solutionWrong: "Esta não é a resposta correta. O sistema operacional e programas são armazenados permanentemente em dispositivos não-voláteis como SSD ou HD, que mantêm os dados mesmo sem energia elétrica."
        }
    },
    {
        id: 9,
        situation: "As baterias de backup estão se esgotando rapidamente. A única forma de preservar o sistema operacional recém-desenvolvido e seus programas críticos durante a troca de baterias é garantir seu armazenamento adequado.\n\nProblema: Qual a importância do sistema operacional e dos programas serem armazenados no disco rígido?",
        correctCharacter: "drbyte",
        alternatives: [
            { text: "O disco rígido armazena o sistema operacional e os programas permanentemente", correct: true },
            { text: "O disco rígido armazena o sistema operacional e os programas somente para compilação", correct: false },
            { text: "O disco rígido armazena o sistema operacional e os programas somente para interação entre eles", correct: false },
            { text: "O disco rígido armazena o sistema operacional e os programas somente enquanto o computador está ligado", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Dr. Byte é exatamente quem precisamos para este problema! Como especialista em memória e particionamento, ele compreende perfeitamente a importância do armazenamento permanente no disco rígido.",
            characterWrong: "Este especialista não é o mais adequado para esta questão sobre armazenamento permanente. Dr. Byte seria a escolha ideal, pois sua especialidade em memória e particionamento o qualifica para responder sobre a importância do disco rígido.",
            solutionCorrect: "Perfeito! A importância do disco rígido é justamente armazenar o sistema operacional e programas permanentemente, garantindo que não sejam perdidos durante a falta de energia, como na troca de baterias.",
            solutionWrong: "Esta não é a resposta correta. A importância fundamental do disco rígido é armazenar o sistema operacional e os programas de forma permanente, mesmo quando não há energia, o que é crucial durante a troca de baterias."
        }
    },
    {
        id: 10,
        situation: "O sistema de fechaduras de segurança reiniciou após uma falha de energia, bloqueando todos os sobreviventes fora da sala de mantimentos. É preciso entender exatamente o processo de inicialização do computador para criar uma solução de emergência e evitar a fome.\n\nProblema: O que acontece quando o computador é ligado, quem é o responsável, e onde este responsável fica armazenado?",
        correctCharacter: "zerocall",
        alternatives: [
            { text: "Verifica o HD, faz o BUST, descompacta links, carrega o SO e verifica a USB; Chipset; Placa mãe", correct: false },
            { text: "Verifica o setup, faz o POST, descompacta dados, lê dispositivos de armazenamento e carrega o SO; BIOS; ROM", correct: true },
            { text: "Atualiza o setup, faz o DUST, correlaciona links, verifica terminais e carrega o SO; FPGA; Placa controladora de Boot", correct: false },
            { text: "Reseta o sistema, faz o START, correlaciona dados, verifica o SO e carrega os terminais; Chipset; Controladora do HD", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "ZeroCall é perfeito para este desafio! Como especialista em interrupções e drivers, ele compreende o processo de inicialização do computador e o papel fundamental da BIOS neste processo.",
            characterWrong: "Este especialista não é o mais adequado para esta questão. ZeroCall seria a escolha ideal, pois sua expertise em interrupções e comunicação entre hardware e software o qualifica para responder sobre o processo de inicialização do sistema.",
            solutionCorrect: "Excelente! Quando o computador é ligado, a BIOS (armazenada na ROM) verifica o setup, faz o POST, descompacta dados, lê dispositivos de armazenamento e carrega o sistema operacional. Entender este processo é crucial para resolver o problema das fechaduras.",
            solutionWrong: "Esta não é a resposta correta. O processo de inicialização é executado pela BIOS (armazenada na ROM), que verifica o setup, faz o POST, descompacta dados, lê dispositivos de armazenamento e carrega o sistema operacional."
        }
    },
    {
        id: 11,
        situation: "O sistema de descontaminação da água está travando durante a inicialização, deixando apenas água contaminada disponível. Os sobreviventes descobriram que o problema ocorre nas etapas finais da ativação do BIOS.\n\nProblema: Quais são as duas tarefas que o BIOS realiza antes de encerrar sua execução?",
        correctCharacter: "zerocall",
        alternatives: [
            { text: "Descompacta dados e lê dispositivos de armazenamento", correct: false },
            { text: "Verifica o setup e faz o POST", correct: false },
            { text: "Faz o POST e descompacta dados", correct: false },
            { text: "Carrega o núcleo do SO na RAM e carrega o endereço da primeira instrução do Escalonador no IC e no Register of Scheduler", correct: true },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "ZeroCall é o especialista ideal para este problema! Como especialista em interrupções e drivers, ele conhece profundamente as etapas finais do processo de inicialização controlado pelo BIOS.",
            characterWrong: "Este especialista não é o mais adequado para esta questão. ZeroCall seria a escolha ideal, pois sua expertise em interrupções e comunicação entre hardware e software o qualifica para responder sobre as tarefas finais do BIOS.",
            solutionCorrect: "Correto! As duas últimas tarefas do BIOS antes de encerrar sua execução são: carregar o núcleo do SO na RAM e carregar o endereço da primeira instrução do Escalonador no IC e no Register of Scheduler. Isso permite que o SO assuma o controle do sistema.",
            solutionWrong: "Esta não é a resposta correta. As duas tarefas finais do BIOS são carregar o núcleo do SO na RAM e carregar o endereço da primeira instrução do Escalonador no IC e no Register of Scheduler, essenciais para a transição do controle para o sistema operacional."
        }
    },
    {
        id: 12,
        situation: "Os estoques de comida estão no nível crítico. O sistema automático de distribuição de rações não está dividindo os recursos igualmente entre os sobreviventes, causando tensões no grupo. É preciso explicar o conceito de escalonamento para reprogramar o sistema.\n\nProblema: Usando um exemplo do cotidiano, o que é escalonamento?",
        correctCharacter: "engkernel",
        alternatives: [
            { text: "Andar em montanha russa", correct: false },
            { text: "Confinamento de gado", correct: false },
            { text: "Dormir de barriga para cima", correct: false },
            { text: "Turnos de trabalho em uma empresa", correct: true },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Eng. KERNEL é perfeito para este desafio! Como Mestre do Escalonamento de Processos, ele consegue explicar este conceito complexo usando exemplos simples e cotidianos.",
            characterWrong: "Este especialista não possui o conhecimento específico necessário para esta questão. Eng. KERNEL seria a escolha ideal devido à sua expertise em escalonamento de processos, fundamental para entender e explicar este conceito.",
            solutionCorrect: "Excelente analogia! Os turnos de trabalho em uma empresa são um perfeito exemplo de escalonamento: diferentes trabalhadores (processos) recebem tempo específico para realizar suas tarefas, assim como o sistema operacional aloca tempo de processador para diferentes programas.",
            solutionWrong: "Esta não é a melhor analogia para escalonamento. O exemplo mais adequado seria os turnos de trabalho em uma empresa, onde diferentes trabalhadores recebem tempo específico para realizar suas tarefas, similar a como o SO distribui tempo de processador entre programas."
        }
    },
    {
        id: 13,
        situation: "O rádio de comunicação com outros bunkers funciona apenas por breves janelas de tempo, exigindo que as mensagens sejam enviadas com precisão. O problema parece estar na relação entre o sistema operacional e os programas que controlam o rádio.\n\nProblema: Qual a relação que existe entre sistema operacional, programas de usuário e escalonamento?",
        correctCharacter: "engkernel",
        alternatives: [
            { text: "Antecipação dos programas de usuário para uso no sistema operacional", correct: false },
            { text: "O sistema operacional e os programas de usuário são escalonados para usar o processador", correct: true },
            { text: "O sistema operacional e os programas de usuário são submetidos a uma multiplicação escalar", correct: false },
            { text: "Os programas de usuário são alocados para execução dentro do sistema operacional", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Eng. KERNEL é a escolha perfeita para este problema! Como Mestre do Escalonamento de Processos, ele entende perfeitamente a relação entre o sistema operacional, programas de usuário e o escalonamento.",
            characterWrong: "Este especialista não possui o conhecimento específico necessário para esta questão. Eng. KERNEL seria a escolha ideal devido à sua expertise em escalonamento de processos e seu papel na execução de programas.",
            solutionCorrect: "Correto! Tanto o sistema operacional quanto os programas de usuário são escalonados para usar o processador, competindo pelo tempo de CPU. Isso é fundamental para entender como otimizar a comunicação por rádio durante as breves janelas disponíveis.",
            solutionWrong: "Esta não é a resposta correta. A relação é que tanto o sistema operacional quanto os programas de usuário são escalonados para usar o processador, compartilhando este recurso limitado através de mecanismos de escalonamento."
        }
    },
    {
        id: 14,
        situation: "Com o gerador principal operando em 30% da capacidade, é vital entender como os sistemas de suporte à vida podem ser executados simultaneamente com recursos limitados. A classificação correta do sistema é crucial para sua otimização.\n\nProblema: Como classificar o sistema quanto ao número de programas executados 'ao mesmo tempo'?",
        correctCharacter: "engkernel",
        alternatives: [
            { text: "Monoprogramado", correct: false },
            { text: "Bi-executado", correct: false },
            { text: "Multiprogramado", correct: true },
            { text: "Bi-executável", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Eng. KERNEL é perfeito para este desafio! Como especialista em escalonamento de processos, ele sabe exatamente como classificar sistemas que executam múltiplos programas simultaneamente.",
            characterWrong: "Este especialista não é o mais adequado para esta questão. Eng. KERNEL seria a escolha ideal, pois sua expertise em escalonamento de processos o qualifica para classificar sistemas com base na quantidade de programas em execução simultânea.",
            solutionCorrect: "Excelente! Um sistema que executa múltiplos programas 'ao mesmo tempo' é classificado como multiprogramado. Na realidade, os programas compartilham o processador através do escalonamento, dando a impressão de execução simultânea.",
            solutionWrong: "Esta não é a classificação correta. Um sistema que executa vários programas 'ao mesmo tempo' (na verdade, alternando rapidamente entre eles) é classificado como multiprogramado."
        }
    },
    {
        id: 15,
        situation: "O sistema de filtragem de ar está falhando porque não completa todas as etapas necessárias. Os sobreviventes precisam entender o conceito de processo para reconfigurar o sistema de purificação e evitar asfixia.\n\nProblema: Usando um exemplo do cotidiano, o que é um processo?",
        correctCharacter: "engkernel",
        alternatives: [
            { text: "Movimentos ondulatórios do mar", correct: false },
            { text: "Processo de produção em uma empresa: conjunto de etapas e elementos para gerar um produto", correct: true },
            { text: "Força centrípeta", correct: false },
            { text: "Força centrífuga", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Eng. KERNEL é a escolha perfeita para este problema! Como Mestre do Escalonamento de Processos, ele consegue explicar o conceito de processo usando exemplos claros e cotidianos.",
            characterWrong: "Este especialista não possui o conhecimento específico necessário para esta questão. Eng. KERNEL seria a escolha ideal devido à sua expertise em gerenciamento de processos e execução de programas.",
            solutionCorrect: "Perfeita analogia! Um processo de produção em uma empresa, com seu conjunto de etapas e elementos para gerar um produto, é uma excelente analogia para um processo computacional, que também consiste em atividades e recursos para executar um programa.",
            solutionWrong: "Esta não é a melhor analogia para um processo. O exemplo mais adequado é o processo de produção em uma empresa, que representa um conjunto de etapas e elementos organizados para alcançar um objetivo, similar a um processo computacional."
        }
    },
    {
        id: 16,
        situation: "Os alarmes do bunker disparam aleatoriamente, causando pânico e desperdício de energia. É preciso explicar a relação entre o sistema operacional e os programas que controlam os sensores para resolver este problema crítico.\n\nProblema: Qual a relação entre o sistema operacional, os programas de usuário e processo?",
        correctCharacter: "engkernel",
        alternatives: [
            { text: "Processo de fragmentação do SO e programas: atividades para fragmentação", correct: false },
            { text: "Processo de reconstrução do SO e programas: atividades para reconstrução", correct: false },
            { text: "O SO gerencia os processos de execução dos programas: atividades e elementos necessários para a execução", correct: true },
            { text: "Processo de análise do SO e programas: atividades para análise", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Eng. KERNEL é perfeito para este desafio! Como especialista em escalonamento de processos, ele entende profundamente a relação entre o sistema operacional, programas de usuário e processos.",
            characterWrong: "Este especialista não é o mais adequado para esta questão. Eng. KERNEL seria a escolha ideal, pois sua expertise em escalonamento de processos o qualifica para explicar como o SO gerencia a execução de programas.",
            solutionCorrect: "Correto! O sistema operacional gerencia os processos de execução dos programas, coordenando todas as atividades e elementos necessários para que os programas sejam executados adequadamente, inclusive os que controlam os alarmes.",
            solutionWrong: "Esta não é a resposta correta. A relação fundamental é que o sistema operacional gerencia os processos de execução dos programas, coordenando os recursos e atividades necessárias para sua execução."
        }
    },
    {
        id: 17,
        situation: "Uma falha na distribuição de energia está causando reinícios constantes do sistema. Os sobreviventes precisam entender a relação entre a memória RAM e os programas vitais para minimizar a perda de dados durante as quedas de energia.\n\nProblema: Qual a relação entre a memória RAM, o sistema operacional e os programas de usuário?",
        correctCharacter: "drbyte",
        alternatives: [
            { text: "A RAM armazena o SO e os programas permanentemente", correct: false },
            { text: "A RAM armazena o SO e os programas para compilação de todos juntos", correct: false },
            { text: "A RAM armazena o SO e os programas para convolução entre eles", correct: false },
            { text: "A RAM armazena o SO e os programas enquanto o computador está ligado", correct: true },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Dr. Byte é o especialista ideal para este problema! Como especialista em memória e particionamento, ele compreende perfeitamente a relação entre a RAM e a execução de programas.",
            characterWrong: "Este especialista não é o mais adequado para esta questão sobre memória RAM. Dr. Byte seria a escolha ideal, pois sua especialidade em memória e particionamento o qualifica para responder sobre o papel da RAM no sistema.",
            solutionCorrect: "Correto! A RAM armazena o sistema operacional e os programas apenas enquanto o computador está ligado. Por isso, durante quedas de energia, é importante salvar os dados críticos em armazenamento não-volátil.",
            solutionWrong: "Esta não é a resposta correta. A memória RAM é volátil e armazena o sistema operacional e os programas apenas enquanto o computador está ligado, perdendo todo seu conteúdo quando a energia é cortada."
        }
    },
    {
        id: 18,
        situation: "Os níveis de radiação aumentaram subitamente, exigindo que o sistema de proteção execute algoritmos complexos em tempo real. Os sobreviventes precisam compreender por que a RAM é crucial para este processamento rápido.\n\nProblema: Qual é a importância do sistema operacional e dos programas serem armazenados na RAM?",
        correctCharacter: "drbyte",
        alternatives: [
            { text: "A RAM é a memória para compilação do SO e programas juntos", correct: false },
            { text: "A RAM é a memória a partir da qual o SO e programas são buscados", correct: true },
            { text: "A RAM é a memória que armazena o SO e programas permanentemente", correct: false },
            { text: "A RAM é a memória para convolução do SO e programas", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Dr. Byte é perfeito para este desafio! Como especialista em memória e particionamento, ele compreende exatamente por que a RAM é tão importante para a execução rápida de programas.",
            characterWrong: "Este especialista não é o mais adequado para esta questão sobre a importância da RAM. Dr. Byte seria a escolha ideal, pois sua especialidade em memória o qualifica para explicar a função da RAM na execução de programas.",
            solutionCorrect: "Excelente! A RAM é a memória a partir da qual o processador busca as instruções do sistema operacional e dos programas para execução. Seu acesso rápido é crucial para a execução em tempo real de algoritmos complexos.",
            solutionWrong: "Esta não é a resposta correta. A importância da RAM é ser a memória a partir da qual o processador busca as instruções para execução, permitindo acesso muito mais rápido do que outros tipos de armazenamento."
        }
    },
    {
        id: 19,
        situation: "O sistema de purificação de ar e o sistema de reciclagem de água estão travando quando executados juntos. É necessário reorganizar como estes programas vitais compartilham a RAM limitada para garantir o funcionamento simultâneo.\n\nProblema: Como organizar o armazenamento do sistema operacional e dos programas na RAM?",
        correctCharacter: "drbyte",
        alternatives: [
            { text: "Encaixamento", correct: false },
            { text: "Particionamento", correct: true },
            { text: "Acondicionamento", correct: false },
            { text: "Adicionamento", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Dr. Byte é exatamente quem precisamos! Como especialista em memória e particionamento, ele sabe exatamente como organizar eficientemente a RAM para acomodar múltiplos programas críticos.",
            characterWrong: "Este especialista não é o mais adequado para esta questão. Dr. Byte seria a escolha ideal, pois sua especialidade em particionamento de memória é fundamental para resolver este problema de organização da RAM.",
            solutionCorrect: "Perfeito! O particionamento é a técnica correta para organizar o armazenamento na RAM, dividindo-a em seções destinadas ao sistema operacional e aos diferentes programas, permitindo execução simultânea.",
            solutionWrong: "Esta não é a resposta correta. A técnica adequada para organizar o armazenamento na RAM é o particionamento, que divide a memória em seções para o sistema operacional e para cada programa em execução."
        }
    },
    {
        id: 20,
        situation: "O espaço de armazenamento está quase esgotado e os sistemas críticos de monitoração de radiação e oxigênio têm tamanhos muito diferentes. É preciso encontrar uma estratégia de particionamento que acomode ambos na memória limitada.\n\nProblema: Qual o problema relacionado a tamanho e como particionar a RAM considerando isso?",
        correctCharacter: "drbyte",
        alternatives: [
            { text: "Programas possuem tamanhos diferentes; particionamento em tamanhos diferentes", correct: true },
            { text: "Códigos executáveis possuem tamanhos iguais; particionamento em tamanhos iguais", correct: false },
            { text: "A memória não pode ser fisicamente particionada; particionamento existencial", correct: false },
            { text: "A memória não pode ser fisicamente particionada; particionamento unilateral", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Dr. Byte é o especialista ideal para este problema! Como especialista em memória e particionamento, ele compreende perfeitamente as estratégias para acomodar programas de tamanhos diferentes.",
            characterWrong: "Este especialista não é o mais adequado para esta questão sobre particionamento de memória. Dr. Byte seria a escolha ideal, pois sua especialidade em particionamento o qualifica para resolver este problema específico.",
            solutionCorrect: "Correto! O problema é que os programas possuem tamanhos diferentes, e a solução é usar particionamento em tamanhos diferentes, permitindo alocar exatamente o espaço necessário para cada sistema crítico.",
            solutionWrong: "Esta não é a resposta correta. O desafio está no fato de que os programas possuem tamanhos diferentes, exigindo um particionamento da RAM em tamanhos diferentes para uso eficiente do espaço limitado."
        }
    },
    {
        id: 21,
        situation: "O sistema de comunicação interna falhou, isolando diferentes setores do bunker. A única forma de restaurar a comunicação é reconfigurar o particionamento da memória, mas o momento exato para essa operação é crucial para evitar perda de dados vitais.\n\nProblema: Quando e como a memória RAM deve ser particionada entre o sistema operacional e os programas?",
        correctCharacter: "drbyte",
        alternatives: [
            { text: "Particionamento lógico fixo (durante as atividades do SO) ou variável (no início) de tamanhos diferentes", correct: false },
            { text: "Particionamento lógico fixo (durante as atividades do SO) de tamanhos diferentes", correct: false },
            { text: "Particionamento lógico fixo (no início) ou variável (durante) de tamanhos diferentes", correct: true },
            { text: "Particionamento lógico variável (no início) de tamanhos diferentes", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Dr. Byte é perfeito para este desafio! Como especialista em memória e particionamento, ele conhece exatamente quando e como a memória RAM deve ser particionada para otimizar seu uso.",
            characterWrong: "Este especialista não é o mais adequado para esta questão. Dr. Byte seria a escolha ideal, pois sua especialidade em particionamento de memória o qualifica para definir o momento e método ideais para esta operação.",
            solutionCorrect: "Excelente! A memória RAM deve ser particionada através de particionamento lógico fixo (definido no início da execução do sistema) ou variável (ajustado durante a execução) e em tamanhos diferentes, adaptando-se às necessidades dos programas.",
            solutionWrong: "Esta não é a resposta correta. O particionamento da RAM deve ser lógico fixo (definido no início) ou variável (ajustado durante a execução) e em tamanhos diferentes para acomodar o SO e programas com diferentes requisitos de memória."
        }
    },
    {
        id: 22,
        situation: "O registro de suprimentos e o banco de dados de sobreviventes estão crescendo rapidamente, consumindo todo o espaço disponível. É necessário organizar outro tipo de memória além da RAM para armazenar essas informações críticas.\n\nProblema: Além da RAM, que outro tipo de memória o sistema operacional deve organizar e controlar?",
        correctCharacter: "drbyte",
        alternatives: [
            { text: "Divisão do HD em blocos", correct: true },
            { text: "Divisão dos registradores em mapas de bits", correct: false },
            { text: "Divisão da memória cache em conjuntos associativos", correct: false },
            { text: "Divisão da ROM em instâncias", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Dr. Byte é o especialista ideal para este problema! Como especialista em memória e particionamento, ele compreende os diferentes tipos de memória que o sistema operacional deve gerenciar.",
            characterWrong: "Este especialista não é o mais adequado para esta questão sobre organização de memória. Dr. Byte seria a escolha ideal, pois sua especialidade em memória e particionamento o qualifica para identificar outros tipos de memória além da RAM.",
            solutionCorrect: "Correto! Além da RAM, o sistema operacional deve organizar e controlar a divisão do HD (ou SSD) em blocos, crucial para armazenar permanentemente grandes volumes de dados como registros e bancos de dados.",
            solutionWrong: "Esta não é a resposta correta. O tipo adicional de memória que o sistema operacional deve organizar é o disco rígido (HD), dividindo-o em blocos para armazenamento permanente de dados extensos."
        }
    },
    {
        id: 23,
        situation: "O braço robótico que recupera suprimentos das áreas contaminadas parece favorecer certas tarefas em detrimento de outras igualmente importantes. Observando seu comportamento, é preciso determinar se o algoritmo de escalonamento está funcionando corretamente.\n\nProblema: Com base no comportamento do braço robótico, como caracterizar o algoritmo de escalonamento?",
        correctCharacter: "engkernel",
        alternatives: [
            { text: "Justo", correct: true },
            { text: "Injusto", correct: false },
            { text: "Passivo", correct: false },
            { text: "Atípico", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Eng. KERNEL é a escolha perfeita para este problema! Como Mestre do Escalonamento de Processos, ele é capaz de analisar e caracterizar algoritmos de escalonamento pela observação de seu comportamento.",
            characterWrong: "Este especialista não possui o conhecimento específico necessário para esta questão. Eng. KERNEL seria a escolha ideal devido à sua expertise em escalonamento de processos e análise de comportamento de algoritmos.",
            solutionCorrect: "Correto! O algoritmo de escalonamento pode ser caracterizado como justo, significando que ele distribui igualmente os recursos (neste caso, o tempo de uso do braço robótico) entre as diferentes tarefas, sem favorecimento indevido.",
            solutionWrong: "Esta não é a caracterização correta para o algoritmo de escalonamento observado. Um algoritmo justo é aquele que distribui igualmente os recursos entre diferentes tarefas, sem favoritismos."
        }
    },
    {
        id: 24,
        situation: "A descontaminação entre operações do braço robótico está consumindo tempo precioso. Observando o comportamento do sistema, os sobreviventes precisam caracterizar como o tempo é dividido entre os programas para otimizar o processo.\n\nProblema: Como caracterizar o algoritmo de escalonamento em relação ao tempo que cada programa tem?",
        correctCharacter: "engkernel",
        alternatives: [
            { text: "Inercial", correct: false },
            { text: "Sofisticado", correct: false },
            { text: "Igualitário", correct: true },
            { text: "Gradual", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Eng. KERNEL é perfeito para este desafio! Como especialista em escalonamento de processos, ele compreende como analisar e caracterizar a distribuição de tempo entre programas.",
            characterWrong: "Este especialista não é o mais adequado para esta questão. Eng. KERNEL seria a escolha ideal, pois sua expertise em escalonamento de processos o qualifica para analisar como o tempo é dividido entre programas.",
            solutionCorrect: "Excelente! O algoritmo de escalonamento é igualitário em relação ao tempo, ou seja, ele distribui o tempo de processamento de forma equitativa entre os programas, garantindo que todos recebam uma parcela justa dos recursos.",
            solutionWrong: "Esta não é a caracterização correta. Um algoritmo de escalonamento igualitário é aquele que distribui o tempo de processamento de forma equitativa entre todos os programas."
        }
    },
    {
        id: 25,
        situation: "Uma falha crítica no sistema de oxigênio está causando queda rápida nos níveis respiráveis do bunker. Este sistema precisa de prioridade absoluta sobre todos os outros para evitar a morte dos sobreviventes nas próximas horas.\n\nProblema: Como deve ser o comportamento do algoritmo de escalonamento quando um programa é mais importante?",
        correctCharacter: "engkernel",
        alternatives: [
            { text: "Estabilizado", correct: false },
            { text: "Momentâneo", correct: false },
            { text: "Prioritário", correct: true },
            { text: "Aprazível", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Eng. KERNEL é a escolha perfeita para este problema! Como Mestre do Escalonamento de Processos, ele sabe exatamente como configurar o algoritmo para lidar com programas de importância crítica.",
            characterWrong: "Este especialista não possui o conhecimento específico necessário para esta questão. Eng. KERNEL seria a escolha ideal devido à sua expertise em priorização de processos e escalonamento de tarefas críticas.",
            solutionCorrect: "Perfeito! O algoritmo de escalonamento deve ser prioritário, atribuindo maior prioridade ao sistema de oxigênio e garantindo que ele receba mais recursos e tempo de processamento do que os outros programas menos críticos no momento.",
            solutionWrong: "Esta não é a resposta correta. Quando um programa é mais importante, como o sistema de oxigênio neste caso, o algoritmo de escalonamento deve ser prioritário, garantindo que programas críticos recebam mais recursos."
        }
    },
    {
        id: 26,
        situation: "Uma tempestade eletromagnética está se aproximando e ameaça apagar informações críticas do sistema a qualquer momento. Os sobreviventes precisam entender qual conjunto de dados precisa ser protegido com mais urgência.\n\nProblema: Como se chama o conjunto de informações armazenadas nos registradores a cada instante?",
        correctCharacter: "drbyte",
        alternatives: [
            { text: "Dados de análise", correct: false },
            { text: "Contexto", correct: true },
            { text: "Vertente", correct: false },
            { text: "Conjunto registrado", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Dr. Byte é o especialista ideal para este problema! Como especialista em memória, ele compreende perfeitamente a importância das informações armazenadas nos registradores do processador.",
            characterWrong: "Este especialista não é o mais adequado para esta questão sobre dados nos registradores. Dr. Byte seria a escolha ideal, pois sua especialidade em memória o qualifica para identificar e classificar estes dados essenciais.",
            solutionCorrect: "Correto! O conjunto de informações armazenadas nos registradores a cada instante é chamado de contexto. É um dado crítico que deve ser protegido durante a tempestade eletromagnética, pois contém o estado atual da execução dos programas.",
            solutionWrong: "Esta não é a resposta correta. O conjunto de informações armazenadas nos registradores a cada instante é chamado de contexto, e é essencial para a retomada da execução de um processo após interrupções."
        }
    },
    {
        id: 27,
        situation: "O braço robótico trava frequentemente durante a recuperação de suprimentos médicos vitais. Cada vez que isso acontece, ele precisa reiniciar toda a operação do início, desperdiçando tempo e bateria. Os sobreviventes precisam programar uma solução para que ele retome exatamente de onde parou.\n\nProblema: Como cada processo consegue voltar a ser executado do ponto em que foi interrompido?",
        correctCharacter: "engkernel",
        alternatives: [
            { text: "Aprimoramento de contexto", correct: false },
            { text: "Detecção e correção de contexto", correct: false },
            { text: "Análise e reconstrução de contexto", correct: false },
            { text: "Salvamento e recuperação de contexto", correct: true },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Eng. KERNEL é perfeito para este desafio! Como especialista em escalonamento de processos, ele compreende exatamente como os processos são interrompidos e retomados no sistema operacional.",
            characterWrong: "Este especialista não é o mais adequado para esta questão. Eng. KERNEL seria a escolha ideal, pois sua expertise em gerenciamento de processos o qualifica para explicar como processos interrompidos retomam sua execução.",
            solutionCorrect: "Excelente! Cada processo consegue voltar a ser executado do ponto em que foi interrompido através do salvamento e recuperação de contexto, que preserva o estado exato do processo no momento da interrupção para posterior restauração.",
            solutionWrong: "Esta não é a resposta correta. A técnica que permite a um processo voltar a ser executado exatamente de onde parou é o salvamento e recuperação de contexto, preservando o estado completo no momento da interrupção."
        }
    },
    {
        id: 28,
        situation: "Os sistemas de purificação de água e geração de energia sofrem quedas frequentes. Quando voltam a funcionar, perdem todo o progresso anterior. É necessário identificar onde e como armazenar o estado desses processos para rápida recuperação.\n\nProblema: Onde e em que estrutura de dados o contexto dos processos é armazenado?",
        correctCharacter: "drbyte",
        alternatives: [
            { text: "RAM; tabela de processos", correct: true },
            { text: "HD; mapa de bits", correct: false },
            { text: "ROM; árvore rubro-negra", correct: false },
            { text: "Memória cache; lista ligada", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Dr. Byte é o especialista ideal para este problema! Como especialista em memória e particionamento, ele conhece perfeitamente onde e como o contexto dos processos é armazenado no sistema.",
            characterWrong: "Este especialista não é o mais adequado para esta questão. Dr. Byte seria a escolha ideal, pois sua especialidade em memória o qualifica para identificar as estruturas de dados e localizações de armazenamento do contexto de processos.",
            solutionCorrect: "Correto! O contexto dos processos é armazenado na RAM, dentro de uma estrutura de dados chamada tabela de processos. Esta informação é crucial para implementar a recuperação rápida dos sistemas após falhas.",
            solutionWrong: "Esta não é a resposta correta. O contexto dos processos é armazenado na RAM (para acesso rápido) e organizado em uma estrutura chamada tabela de processos, que mantém o estado de todos os processos do sistema."
        }
    },
    {
        id: 29,
        situation: "O único braço robótico funcional é essencial para coletar amostras do exterior, buscar suprimentos e operar equipamentos de manutenção. Múltiplos sistemas tentam controlá-lo simultaneamente, causando conflitos fatais e perda de materiais preciosos.\n\nProblema: Como controlar o compartilhamento do braço robótico entre processos?",
        correctCharacter: "capitasync",
        alternatives: [
            { text: "Uso do mecanismo de sincronização: mutex", correct: true },
            { text: "Uso de fatorial incompleto", correct: false },
            { text: "Uso de negação antecipada de vertente", correct: false },
            { text: "Uso de correlação quadrimodal", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Capitã Sync é exatamente quem precisamos! Como especialista em sincronização e controle de compartilhamento de recursos, ela sabe precisamente como evitar conflitos de acesso ao braço robótico.",
            characterWrong: "Este especialista não é o mais adequado para este problema. Capitã Sync seria a escolha ideal, pois sua especialidade em sincronização e controle de recursos compartilhados é fundamental para resolver este tipo de conflito.",
            solutionCorrect: "Perfeito! O uso de um mecanismo de sincronização como mutex (exclusão mútua) é a solução ideal para controlar o compartilhamento do braço robótico, permitindo que apenas um processo por vez tenha acesso exclusivo ao recurso.",
            solutionWrong: "Esta não é a solução correta. Para controlar o compartilhamento seguro do braço robótico entre diferentes processos, é necessário usar um mecanismo de sincronização como mutex, que garante exclusão mútua no acesso ao recurso."
        }
    },
    {
        id: 30,
        situation: "Dois grupos de sobreviventes estão em conflito pelo controle do braço robótico - um quer usá-lo para buscar medicamentos e outro para reparar o sistema de ventilação. Ambos tentam manipular o código do robô para ter prioridade, causando falhas perigosas.\n\nProblema: Qual o problema em deixar processos de usuários controlarem o compartilhamento do braço robótico?",
        correctCharacter: "capitasync",
        alternatives: [
            { text: "Incapacidade de ajustamento de motores", correct: false },
            { text: "Falta de adequação", correct: false },
            { text: "Monopólio", correct: true },
            { text: "Falta de calibração do braço robótico", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Capitã Sync é perfeita para este desafio! Como especialista em sincronização e controle de recursos, ela entende os riscos de permitir que processos de usuários controlem diretamente o compartilhamento de recursos críticos.",
            characterWrong: "Este especialista não é o mais adequado para esta questão sobre compartilhamento de recursos. Capitã Sync seria a escolha ideal, pois sua especialidade em sincronização a qualifica para identificar os problemas no controle de acesso pelos usuários.",
            solutionCorrect: "Correto! O principal problema em deixar processos de usuários controlarem o compartilhamento é o monopólio - um processo pode monopolizar o recurso indefinidamente, impedindo que outros processos igualmente importantes tenham acesso.",
            solutionWrong: "Esta não é a resposta correta. O problema fundamental é o monopólio - quando processos de usuários controlam o compartilhamento, um deles pode reter o recurso indefinidamente, privando outros processos do acesso necessário."
        }
    },
    {
        id: 31,
        situation: "O caos se instalou no bunker quando diferentes sistemas tentaram controlar o braço robótico simultaneamente, resultando em movimentos erráticos que quase perfuraram a parede de contenção. É urgente estabelecer um controle centralizado para este recurso vital.\n\nProblema: Como controlar o compartilhamento do braço robótico sem que os processos de usuários sejam responsáveis?",
        correctCharacter: "capitasync",
        alternatives: [
            { text: "Por ajustamento", correct: false },
            { text: "Por chamada de sistema", correct: true },
            { text: "Por controle unilateral", correct: false },
            { text: "Por acolhimento de processo", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Capitã Sync é a especialista ideal para este problema! Como especialista em sincronização e controle de recursos compartilhados, ela sabe exatamente como implementar um controle centralizado seguro para o braço robótico.",
            characterWrong: "Este especialista não é o mais adequado para resolver esta questão de controle centralizado. Capitã Sync seria a escolha ideal, pois sua especialidade em sincronização de recursos a qualifica para implementar um sistema seguro.",
            solutionCorrect: "Excelente! O controle do compartilhamento do braço robótico deve ser feito por chamada de sistema, permitindo que o sistema operacional (não os processos de usuários) gerencie o acesso ao recurso de forma centralizada e segura.",
            solutionWrong: "Esta não é a solução correta. Para controlar o compartilhamento do braço robótico de forma centralizada, o método adequado é por chamada de sistema, onde o sistema operacional, não os usuários, gerencia o acesso ao recurso."
        }
    },
    {
        id: 32,
        situation: "O inventário de suprimentos não é atualizado automaticamente quando o braço robótico coleta ou distribui itens. Os sobreviventes precisam identificar quando ocorrem chamadas de sistema para sincronizar o inventário com as ações do robô.\n\nProblema: Em que momentos ocorrem chamadas de sistema durante a operação do sistema?",
        correctCharacter: "zerocall",
        alternatives: [
            { text: "Para envios de comandos ao robô e finalização dos processos", correct: true },
            { text: "No começo e no fim das atividades do sistema operacional", correct: false },
            { text: "A cada dez minutos (tempo de execução de cada programa)", correct: false },
            { text: "Sempre que o sistema computacional é inicializado", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "ZeroCall é perfeito para este desafio! Como especialista em interrupções e chamadas de sistema, ele compreende exatamente quando e como ocorrem chamadas de sistema durante a operação normal.",
            characterWrong: "Este especialista não é o mais adequado para esta questão. ZeroCall seria a escolha ideal, pois sua expertise em chamadas de sistema e interrupções o qualifica para identificar os momentos em que ocorrem chamadas de sistema.",
            solutionCorrect: "Correto! As chamadas de sistema ocorrem em momentos específicos, como para enviar comandos ao braço robótico (operações de E/S) e finalização dos processos. Identificar estes momentos é essencial para sincronizar o inventário com as ações do robô.",
            solutionWrong: "Esta não é a resposta correta. As chamadas de sistema ocorrem em momentos específicos da operação, principalmente para enviar comandos ao robô (operações de E/S) e para finalização dos processos."
        }
    },
    {
        id: 33,
        situation: "O sistema de comunicação com outros bunkers está operacional, mas os sobreviventes não conseguem enviar mensagens. O problema parece estar na forma como o programa tenta acessar o transmissor de rádio.\n\nProblema: Como indicar no código fonte do programa que é necessário fazer uma chamada de sistema?",
        correctCharacter: "zerocall",
        alternatives: [
            { text: "Chamada direta", correct: false },
            { text: "Alocação de procedimento", correct: false },
            { text: "Chamada a procedimento", correct: true },
            { text: "Alocação direta", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "ZeroCall é o especialista ideal para este problema! Como especialista em chamadas de sistema e drivers, ele sabe exatamente como um programa deve solicitar serviços do sistema operacional.",
            characterWrong: "Este especialista não é o mais adequado para esta questão. ZeroCall seria a escolha ideal, pois sua expertise em chamadas de sistema o qualifica para identificar como programas solicitam serviços do sistema operacional.",
            solutionCorrect: "Excelente! Para indicar no código fonte que é necessário fazer uma chamada de sistema, utiliza-se uma chamada a procedimento. Isto permite que o programa solicite corretamente ao sistema operacional acesso ao transmissor de rádio.",
            solutionWrong: "Esta não é a resposta correta. Para indicar no código fonte a necessidade de uma chamada de sistema, utiliza-se uma chamada a procedimento, que então invoca o serviço do sistema operacional."
        }
    },
    {
        id: 34,
        situation: "Durante uma operação crítica de descontaminação, o alarme de radiação disparou e todos os sistemas foram suspensos, colocando vidas em risco. Os sobreviventes precisam entender o conceito de interrupção para reprogramar as prioridades do sistema.\n\nProblema: Usando um exemplo do cotidiano, o que é uma interrupção?",
        correctCharacter: "zerocall",
        alternatives: [
            { text: "Pegadas de sapato", correct: false },
            { text: "Rastros de insetos", correct: false },
            { text: "Luz visível", correct: false },
            { text: "Campainha do telefone", correct: true },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "ZeroCall é perfeito para este desafio! Como especialista em interrupções e drivers, ele consegue explicar conceitos complexos usando exemplos cotidianos acessíveis a todos os sobreviventes.",
            characterWrong: "Este especialista não é o mais adequado para explicar interrupções de forma acessível. ZeroCall seria a escolha ideal, pois sua expertise em interrupções o qualifica para traduzir esse conceito técnico em exemplos cotidianos.",
            solutionCorrect: "Perfeita analogia! A campainha do telefone é um excelente exemplo de interrupção: ela interrompe o que estamos fazendo para atender a um evento externo que requer atenção imediata, assim como uma interrupção de hardware.",
            solutionWrong: "Esta não é a melhor analogia para uma interrupção. A campainha do telefone representa bem o conceito: um sinal que interrompe nossa atividade atual para lidar com um evento que requer atenção imediata."
        }
    },
    {
        id: 35,
        situation: "O sensor de radiação detectou níveis críticos, mas o sistema continuou operando normalmente, ignorando o alerta. Os sobreviventes precisam entender como o sistema operacional deve lidar com interrupções para garantir a segurança de todos.\n\nProblema: Como o sistema operacional lida com interrupções durante seu funcionamento?",
        correctCharacter: "zerocall",
        alternatives: [
            { text: "Uso de interrupção pró-ativa", correct: false },
            { text: "Aplicação de parcialidade de interrupção", correct: false },
            { text: "Rotina de tratamento de interrupção (rotina de serviço)", correct: true },
            { text: "Aplicação do Método de Índice Sistólico", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "ZeroCall é o especialista ideal para este problema! Como especialista em interrupções e drivers, ele compreende perfeitamente como o sistema operacional deve processar e responder a sinais de interrupção.",
            characterWrong: "Este especialista não é o mais adequado para esta questão. ZeroCall seria a escolha ideal, pois sua expertise em interrupções o qualifica para explicar como o sistema operacional processa estes sinais críticos.",
            solutionCorrect: "Correto! O sistema operacional lida com interrupções através de rotinas de tratamento de interrupção (também chamadas rotinas de serviço), que são executadas quando ocorre um sinal de interrupção, permitindo ao sistema responder adequadamente aos alertas.",
            solutionWrong: "Esta não é a resposta correta. O sistema operacional lida com interrupções através de rotinas de tratamento de interrupção (rotinas de serviço), que são executadas quando um sinal de interrupção é recebido."
        }
    },
    {
        id: 36,
        situation: "Múltiplos alarmes estão soando simultaneamente - baixo oxigênio, alta radiação, falha no sistema de água - mas o sistema não consegue processar todos ao mesmo tempo. É preciso configurar corretamente os vetores de interrupção para priorizar as ameaças mais graves.\n\nProblema: Quantos vetores de interrupção o sistema operacional deve possuir?",
        correctCharacter: "zerocall",
        alternatives: [
            { text: "O mesmo número de interrupções geradas pelos processos", correct: false },
            { text: "Vinte e sete", correct: false },
            { text: "O mesmo número de rotinas de tratamento de interrupção", correct: true },
            { text: "Trinta e dois", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "ZeroCall é perfeito para este desafio! Como especialista em interrupções e drivers, ele sabe exatamente como configurar os vetores de interrupção para lidar com múltiplos alarmes simultâneos.",
            characterWrong: "Este especialista não é o mais adequado para esta questão sobre vetores de interrupção. ZeroCall seria a escolha ideal, pois sua expertise em interrupções o qualifica para definir a configuração correta destes vetores.",
            solutionCorrect: "Excelente! O sistema operacional deve possuir o mesmo número de vetores de interrupção que rotinas de tratamento de interrupção, garantindo que cada tipo de alarme tenha seu método específico de processamento e prioridade adequada.",
            solutionWrong: "Esta não é a resposta correta. O sistema operacional deve ter o mesmo número de vetores de interrupção que rotinas de tratamento de interrupção, permitindo lidar com cada tipo de alarme de forma apropriada."
        }
    },
    {
        id: 37,
        situation: "Um grupo de exploradores encontrou um novo braço robótico em outro setor do bunker, potencialmente dobrando a capacidade de coleta de suprimentos. No entanto, ao conectá-lo ao sistema, nada acontece.\n\nProblema: Um sistema operacional já vem pronto para trabalhar com esse tipo de braço robótico ou precisa de instalação adicional?",
        correctCharacter: "zerocall",
        alternatives: [
            { text: "Sim; o sistema reconhece o braço automaticamente", correct: false },
            { text: "Não; driver", correct: true },
            { text: "Sim; basta executar o Windows no modo de segurança", correct: false },
            { text: "Não; programa adaptador robótico", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "ZeroCall é exatamente quem precisamos! Como especialista em interrupções e drivers, ele compreende perfeitamente como integrar novos dispositivos de hardware ao sistema operacional.",
            characterWrong: "Este especialista não é o mais adequado para este problema. ZeroCall seria a escolha ideal, pois sua expertise em drivers é fundamental para integrar novos dispositivos de hardware ao sistema.",
            solutionCorrect: "Correto! Um sistema operacional geralmente não vem pronto para trabalhar com dispositivos específicos como este braço robótico. É necessário instalar um driver, que serve como tradutor entre o hardware e o sistema operacional.",
            solutionWrong: "Esta não é a resposta correta. O sistema operacional precisa de um driver para funcionar com o novo braço robótico, pois drivers são os componentes que permitem a comunicação entre o SO e dispositivos de hardware específicos."
        }
    },
    {
        id: 38,
        situation: "O sistema hidráulico que controla as comportas de segurança é antigo e fala uma 'linguagem' diferente do novo sistema computacional. Os sobreviventes precisam entender o conceito de driver para permitir a comunicação entre os sistemas.\n\nProblema: O que é um driver de forma resumida e clara?",
        correctCharacter: "zerocall",
        alternatives: [
            { text: "Tradutor", correct: true },
            { text: "Construtor", correct: false },
            { text: "Linkeditor", correct: false },
            { text: "Gerador de pulsos", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "ZeroCall é o especialista ideal para este problema! Como especialista em drivers e interrupções, ele pode explicar de forma clara e concisa o que é um driver e sua função essencial.",
            characterWrong: "Este especialista não é o mais adequado para explicar o conceito de driver. ZeroCall seria a escolha ideal, pois sua expertise em drivers o qualifica para fornecer uma definição clara e acessível deste componente.",
            solutionCorrect: "Perfeito! Um driver é essencialmente um tradutor - ele traduz os comandos do sistema operacional para uma linguagem que o hardware (como o sistema hidráulico) compreende, e vice-versa, permitindo a comunicação entre sistemas diferentes.",
            solutionWrong: "Esta não é a definição correta. Um driver é basicamente um tradutor que permite a comunicação entre o sistema operacional e um dispositivo de hardware, convertendo comandos e sinais entre ambos."
        }
    },
    {
        id: 39,
        situation: "Durante a descontaminação crítica de suprimentos médicos, o braço robótico não pode ser interrompido sob risco de espalhar contaminação para todo o bunker. Os sobreviventes precisam garantir que, uma vez iniciada, a operação seja concluída sem interrupção.\n\nProblema: Que palavra descreve objetivamente um comportamento que não pode ser interrompido?",
        correctCharacter: "capitasync",
        alternatives: [
            { text: "Preempção", correct: false },
            { text: "Atomicidade", correct: true },
            { text: "Conjuntividade", correct: false },
            { text: "Convolução", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Capitã Sync é perfeita para este desafio! Como especialista em sincronização e controle de recursos compartilhados, ela compreende perfeitamente o conceito de operações que não podem ser interrompidas.",
            characterWrong: "Este especialista não é o mais adequado para esta questão. Capitã Sync seria a escolha ideal, pois sua especialidade em sincronização a qualifica para identificar o termo técnico que descreve operações ininterruptíveis.",
            solutionCorrect: "Excelente! Atomicidade é o termo que descreve um comportamento que não pode ser interrompido - uma operação atômica deve ser completada integralmente ou não executada de todo, sem estados intermediários.",
            solutionWrong: "Esta não é a resposta correta. Atomicidade é o termo que descreve um comportamento ou operação que não pode ser interrompido e deve ser executado completamente ou não ser executado de todo."
        }
    },
    {
        id: 40,
        situation: "O sistema de reciclagem de ar executa várias fases sequenciais para purificar o ar contaminado, mas frequentemente trava em estágios aleatórios. Para reparar o sistema, os sobreviventes precisam entender o ciclo de vida completo dos processos.\n\nProblema: Qual o ciclo de vida completo de qualquer processo de execução?",
        correctCharacter: "engkernel",
        alternatives: [
            { text: "Para cima, para baixo, para a direita e para a esquerda", correct: false },
            { text: "Rodando, bloqueado, pronto e concluído", correct: true },
            { text: "Ausente, intermitente e fechado", correct: false },
            { text: "Alocado, transmutado, particionado e escalonado", correct: false },
            { text: "Nenhuma das alternativas anteriores", correct: false }
        ],
        feedback: {
            characterCorrect: "Eng. KERNEL é a escolha perfeita para este problema! Como Mestre do Escalonamento de Processos, ele compreende perfeitamente o ciclo de vida completo dos processos no sistema operacional.",
            characterWrong: "Este especialista não possui o conhecimento específico necessário para esta questão. Eng. KERNEL seria a escolha ideal devido à sua expertise em gerenciamento de processos e seu ciclo de vida.",
            solutionCorrect: "Perfeito! O ciclo de vida completo de um processo de execução consiste em quatro estados: rodando (sendo executado), bloqueado (aguardando algum evento), pronto (aguardando sua vez de usar o processador) e concluído (finalizado).",
            solutionWrong: "Esta não é a resposta correta. O ciclo de vida completo de um processo inclui os estados: rodando, bloqueado, pronto e concluído, que descrevem as diferentes fases pelas quais um processo passa durante sua execução."
        }
    }
];

// Exporte o array de questões para ser usado em game.js
// Se estiver usando JS moderno com módulos, você pode descomentar a linha abaixo
// export default questions;