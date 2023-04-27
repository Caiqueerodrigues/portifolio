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
let circule = document.getElementById('circule')
let barraProgresso = document.getElementById('progresso')
let porcentagemBarra = document.getElementById('porcentagem')
let textContent = `<span id="textoConhecimento"> Meu conhecimento</span><br> `

function descricao(element) {
    if(element === 'html') {
        title.textContent = 'HTML'
        descricaoP.textContent = `É uma linguagem de marcação de texto, o esqueleto de uma aplicação WEB.`
        barraProgresso.style.display = 'flex'
        circule.style.strokeDashoffset= 'calc(440 - (440*90) /100)'
        porcentagemBarra.innerHTML = `${textContent} 90%`

    }
    if( element === 'css') {
        title.textContent = 'CSS'
        descricaoP.textContent = `É uma linguagem de estilização, onde se define a aparência de uma aplicação WEB.`
        barraProgresso.style.display = 'flex'
        circule.style.strokeDashoffset= 'calc(440 - (440*90) /100)'
        porcentagemBarra.innerHTML = `${textContent} 90%`
    }
    if( element === 'js') {
        title.textContent = 'Javascript'
        descricaoP.textContent = `É uma linguagem de programação. É a parte lógica da aplicação e
        uma das principais linguagens atuais da WEB, junto ao HTML e CSS.`
        barraProgresso.style.display = 'flex'
        circule.style.strokeDashoffset= 'calc(440 - (440*80) /100)'
        porcentagemBarra.innerHTML = `${textContent} 80%`
    }
    if( element === 'sass') {
        title.textContent = 'SASS'
        descricaoP.textContent = `Syntactically Awesome Style Sheets. Potencializador ao CSS, tornando-o mais eficaz na estilização.`
        barraProgresso.style.display = 'flex'
        circule.style.strokeDashoffset= 'calc(440 - (440*50) /100)'
        porcentagemBarra.innerHTML = `${textContent} 50%`
    }
    if( element === 'bootstrap') {
        title.textContent = 'Bootstrap'
        descricaoP.textContent = `É um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples.`
        barraProgresso.style.display = 'flex'
        circule.style.strokeDashoffset= 'calc(440 - (440*75) /100)'
        porcentagemBarra.innerHTML = `${textContent} 75%`
    }
    if( element === 'vuetify') {
        title.textContent = 'Vuetify'
        descricaoP.textContent = `É um framework progressivo que busca levar o desenvolvimento web para o próximo nível, com componentes pré-prontos e responsivos.`
        barraProgresso.style.display = 'flex'
        circule.style.strokeDashoffset= 'calc(440 - (440*70) /100)'
        porcentagemBarra.innerHTML = `${textContent} 70%`
    }
    if( element === 'vue') {
        title.textContent = 'Vue'
        descricaoP.textContent = `É um framework JavaScript de código aberto para a criação de aplicações web. Cria aplicações de forma reativa, utilizando o DOM virtual, fazendo com que seja extremamente performático.`
        barraProgresso.style.display = 'flex'
        circule.style.strokeDashoffset= 'calc(440 - (440*30) /100)'
        porcentagemBarra.innerHTML = `${textContent} 30%`
    }
    if( element === 'git') {
        title.textContent = 'Git'
        descricaoP.textContent = `É um sistema para controle de versionamento, muito útil para evitar perdas e erros, e também para o compartilhamento de códigos entre pessoas.`
        barraProgresso.style.display = 'flex'
        circule.style.strokeDashoffset= 'calc(440 - (440*50) /100)'
        porcentagemBarra.innerHTML = `${textContent} 50%`
    }
    if( element === 'github') {
        title.textContent = 'Github'
        descricaoP.textContent = `É uma plataforma online para salvar versionamentos de códigos, encontrar projetos de código abertos e seguir outras pessoas.`
        barraProgresso.style.display = 'flex'
        circule.style.strokeDashoffset= 'calc(440 - (440*50) /100)'
        porcentagemBarra.innerHTML = `${textContent} 50%`
    }
    
    

}

function fim() {
    title.textContent = ''
    descricaoP.textContent = frase
    barraProgresso.style.display = 'none' 
    circule.style.strokeDashoffset= 'calc(440 - (440*100) /100)'
    porcentagemBarra.innerHTML = `${textContent} 100%`
}

function legenda (num, projeto) {
    if(num === 1) {
        document.getElementById(projeto + 'Legenda').style.display='block'
    }
    if (num === 2) {
        document.getElementById(projeto + 'Legenda').style.display='none'
    }
}