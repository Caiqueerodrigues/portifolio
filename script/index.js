function maquina () {
    const nome = 'Caique Rodrigues '
    const nomeArray = nome.split('')
    document.getElementById('nome').innerHTML = ''
    nomeArray.forEach((element, i) => {
        setTimeout(() => document.getElementById('nome').innerHTML += element,
        150 * i)
    });

}
setInterval( () => {
    maquina()
}, 1000 * 4)
maquina(nome)

let frase = '< Passe o mouse sobre as Tecnologias para ver as descrições />'
let descricaoP = document.getElementById('descricao')
let title = document.getElementById('title')

function descricao(element) {
    if(element === 'html') {
        title.textContent = 'HTML'
        descricaoP.textContent = `É uma linguagem de marcação de texto, o esqueleto de uma aplicação WEB.`
    }
    if( element === 'css') {
        title.textContent = 'CSS'
        descricaoP.textContent = `É uma linguagem de estilização, onde se define a aparência de uma aplicação WEB.`
    }
    if( element === 'js') {
        title.textContent = 'Javascript'
        descricaoP.textContent = `É uma linguagem de programação, a parte lógica da aplicação,  junto com HTML e CSS são as principais linguagens atuais da WEB.`
    }
    if( element === 'sass') {
        title.textContent = 'SASS'
        descricaoP.textContent = `Syntactically Awesome Style Sheets. potencializador ao CSS, tornando ele mais eficaz na estilização.`
    }
    if( element === 'bootstrap') {
        title.textContent = 'Bootstrap'
        descricaoP.textContent = `É um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples.`
    }
    if( element === 'vuetify') {
        title.textContent = 'Vuetify'
        descricaoP.textContent = `é um framework progressivo que tenta levar o desenvolvimento web para o próximo nível, com componentes pré-prontos e responsivos.`
    }
    if( element === 'vue') {
        title.textContent = 'Vue'
        descricaoP.textContent = `É um framework JavaScript código aberto para a criação de aplicações web,possibilita criar aplicações de forma reativa, faz a utilização de um DOM virtual, o que faz com que seja extremamente performático.`
    }
    if( element === 'git') {
        title.textContent = 'Git'
        descricaoP.textContent = `É um sistema para controle de versionamento, muito util para evitar perdas e erros, e também para o compartilhamento de códigos entre pessoas.`
    }
    if( element === 'github') {
        title.textContent = 'Github'
        descricaoP.textContent = `É uma plataforma online para salvar versionamentos de códigos, encontrar projetos de código abertos, seguir outras pessoas, basicamente uma rede social com mais vantagens.`
    }
    
    

}

function fim() {
    title.textContent = ''
    descricaoP.textContent = frase
}