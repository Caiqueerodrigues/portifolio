function maquina () {
    const nome = 'Caique Rodrigues Desenvolvedor fullstack'
    const nomeArray = nome.split('')
    document.getElementById('nome').innerHTML = ''
    nomeArray.forEach((element, i) => {
        setTimeout(() => document.getElementById('nome').innerHTML += element,
        150 * i)
    });

}
setInterval( () => {
    maquina()
}, 1000 * 7)
maquina(nome)

let frase = '< Passe o mouse sobre as Tecnologias para ver as descrições />'
let descricaoP = document.getElementById('descricao')
let title = document.getElementById('title')
// let circule = document.getElementById('circule')
// let barraProgresso = document.getElementById('progresso')
// let porcentagemBarra = document.getElementById('porcentagem')
// let textContent = `<span id="textoConhecimento"> Meu conhecimento</span><br> `
let menuShow = true

function descricao(element) {
    const descricaoTecnologias = {
        'HTML': `É uma linguagem de marcação de texto, o esqueleto de uma aplicação WEB.`,
        'CSS': `É uma linguagem de estilização, onde se define a aparência de uma aplicação WEB.`,
        'Javascript': `É uma linguagem de programação. É a parte lógica da aplicação e
        uma das principais linguagens atuais da WEB, junto ao HTML e CSS.`,
        'SASS': `Syntactically Awesome Style Sheets. Potencializador ao CSS, tornando-o mais eficaz na estilização.`,
        'Bootstrap': `É um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples.`,
        'Vuetify': `É um framework progressivo que busca levar o desenvolvimento web para o próximo nível, com componentes pré-prontos e responsivos.`,
        'Vue': `É um framework JavaScript de código aberto para a criação de aplicações web. Cria aplicações de forma reativa, utilizando o DOM virtual, fazendo com que seja extremamente performático.`,
        'Angular': 'É um framework front-end desenvolvido pelo Google para criar aplicações web dinâmicas e escaláveis. Utiliza TypeScript e possui uma arquitetura robusta baseada em componentes.',
        'React': `Uma das bibliotecas de JavaScript mais populares para desenvolvimento de aplicativos web ou para dispositivos móveis. Criado pelo Facebook, contém uma coleção de trechos de código de JavaScript reutilizáveis chamados componentes, usados para a construção da interface do usuário.`,
        'Node': 'É uma plataforma baseada em JavaScript para desenvolvimento de servidores e aplicações em tempo real. Permite executar código JavaScript no lado do servidor, sendo altamente eficiente e escalável.',
        'Java': 'É uma linguagem de programação orientada a objetos, amplamente utilizada no desenvolvimento de aplicações empresariais, sistemas web e aplicativos móveis. É conhecida pela sua portabilidade e robustez.',
        'Spring boot': 'É um framework para desenvolvimento de aplicações Java, que facilita a criação de sistemas de backend, com foco na simplicidade e agilidade, utilizando uma configuração mínima.',
        'My SQL': 'É um sistema de gerenciamento de banco de dados relacional (SGBD), de código aberto, amplamente utilizado em aplicações web para armazenar e gerenciar dados de maneira eficiente e escalável.',
        'Git': `É um sistema para controle de versionamento, muito útil para evitar perdas e erros, e também para o compartilhamento de códigos entre pessoas.`,
        'Github': `É uma plataforma online para salvar versionamentos de códigos, encontrar projetos de código abertos e seguir outras pessoas.`
    };

    title.textContent = element;
    descricaoP.textContent = descricaoTecnologias[element];
}

function fim() {
    title.textContent = ''
    descricaoP.textContent = frase
    // barraProgresso.style.display = 'none' 
    // circule.style.strokeDashoffset= 'calc(440 - (440*100) /100)'
    // porcentagemBarra.innerHTML = `${textContent} 100%`
}

function legenda (num, projeto) {
    if(num === 1) {
        document.getElementById(projeto + 'Legenda').style.display='flex'
    }
    if (num === 2) {
        document.getElementById(projeto + 'Legenda').style.display='none'
    }
}

document.getElementById('menu-hamburguer').addEventListener('click', () => {
    let menu = document.getElementById('menu-tela-pequena')
    let divFechaMenu = document.getElementById('fechaMenu')
    if(menuShow) {
        divFechaMenu.style.display='block'
        menu.style.display='block'
        menuShow = !menuShow
        divFechaMenu.style.display='block'
        setTimeout(() => {
            menu.style.display='none'        
        }, 1000 * 5);
    } else {
        menu.style.display='none'
        menuShow = !menuShow
    }
    divFechaMenu.addEventListener('click', () => {
        menu.style.display='none' 
        divFechaMenu.style.display='none'
    })
})