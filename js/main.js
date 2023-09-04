function MudaDesenho(){
const texto = document.querySelector("h1");
const texto2 = document.querySelector("p");
const imagem = document.querySelector("img");
const valor = document.querySelector('#valor').value;

if((valor=="gemeos") || (valor=="gêmeos") || (valor=="Gemeos") || (valor=="Gêmeos") ) {
    texto.innerHTML = "Gêmeos";
    imagem.setAttribute("src","img/gemeos.png");
    imagem.setAttribute("width","300px");
   texto2.innerHTML="Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena. O cavaleiro de gêmeos possuía um irmão gêmeo chamado Kanon, que propôs que eles matassem Athena e comandassem o mundo.";
}

 else if((valor=="escorpiao") || (valor=="escorpião") || (valor=="Escorpiao") || (valor=="Escorpião")){
    texto.innerHTML = "Escorpião";
    imagem.setAttribute("src","img/escorpiao.png");
    imagem.setAttribute("width","300px");
    texto2.innerHTML="Milo foi um dos únicos cavaleiros de ouro, junto com Saga, Aiolia e Mu, que não morreu em batalha contra outro cavaleiro, apenas sucumbindo contra os espectros quando chegou no castelo de Hades onde todos tinham metade de sua força por causa da barreira.";
}

 else if((valor=="peixes") || (valor=="Peixes") ){
    texto.innerHTML = "Peixes";
    imagem.setAttribute("src","img/peixes.png");
    imagem.setAttribute("width","300px");
    texto2.innerHTML="Afrodite de Peixes 魚座ピスケスのアフロディーテ Pisukesu no Afurodite? é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. Usa variações de golpes com rosas, como o Rosas Diabólicas Reais.";
}
 else if((valor=="Aries") || (valor=="aries") || (valor=="Áries") || (valor=="áries") ){
    texto.innerHTML = "Aries";
    imagem.setAttribute("src","img/aries.png");
    imagem.setAttribute("width","300px");
    texto2.innerHTML="Áries: a constelação do Carneiro dos pelos de ouro, cujo significado é a Vida que se Sobressai à Morte. É dito que todo o Cavaleiro que traja a armadura dourada da constelação tem um destino considerando por muitos como triste e terrível.";
}
 else if((valor=="Touro") || (valor=="touro") ){
    texto.innerHTML = "Touro";
    imagem.setAttribute("src","img/touro.png");
    imagem.setAttribute("width","300px");
    texto2.innerHTML="Aldebaran (アルデバラン, Aldebaran) é o Cavaleiro de Ouro da Constelação de Touro ( 牡牛座 タウラス , Taurus) durante os eventos do Século XX, servindo como o guardião da Casa de Touro no Santuário. Dotado de uma resistência fora do comum, também tem uma grande força física e uma agilidade impressionante para alguém de seu porte.";
}
 else if((valor=="Cancer") || (valor=="Câncer") || (valor=="cancer") || (valor=="câncer") ){
    texto.innerHTML = "Cancer";
    imagem.setAttribute("src","img/cancer.png");
    imagem.setAttribute("width","300px");
    texto2.innerHTML="Cavaleiro de Câncer. Manigold foi um jovem que presenciou muita violência e morte durante toda a sua infância e só mudou o seu pensamento áspero sobre a vida após os ensinamentos do Grande Mestre Sage. O Cavaleiro de Câncer também se sacrificou na batalha para conseguir derrotar as forças de Hades.";
}
 else if((valor=="Capricornio") || (valor=="capricornio") || (valor=="Capricórnio") || (valor=="capricórnio") ){
    texto.innerHTML = "Capricornio";
    imagem.setAttribute("src","img/capricornio.png");
    imagem.setAttribute("width","300px");
    texto2.innerHTML="Shura de Capricórnio é o Cavaleiro de Ouro que protege a décima casa do Santuário, a Casa de Capricórnio; é o cavaleiro que carrega o poder da espada Excalibur em seu braço direito. Ele é um dos principais personagens de Saint Seiya, sendo um Cavaleiro de Ouro e se considerando o cavaleiro mais fiel à deusa Atena.";
}
else if((valor=="Virgem") || (valor=="virgem") ){
    texto.innerHTML = "Virgem";
    imagem.setAttribute("src","img/virgem.png");
    imagem.setAttribute("width","300px");
    texto2.innerHTML="Shaka de Virgem está entre os Cavaleiros de Ouro mais populares de Os Cavaleiros do Zodíaco. Conhecido como o Homem Mais Próximo de Deus, ele possui o maior cosmo dentre os 88 Cavaleiros de Atena e se mostrou fundamental para o triunfo dos heróis na Saga de Hades.";
}
 else if((valor=="Sagitario") || (valor=="sagitario") || (valor=="Sagitário") || (valor=="sagitário") ){
    texto.innerHTML = "Sagitario";
    imagem.setAttribute("src","img/sargitario.png");
    imagem.setAttribute("width","300px");
    texto2.innerHTML="Aiolos de Sagitário é a encarnação de dois conceitos fundamentais para a história de Cavaleiros do Zodíaco: lealdade e determinação. Mesmo gravemente ferido, o Cavaleiro de Sagitário se esforça ao máximo para salvar a bebê Atena do Mestre do Santuário, sendo atacado por muitos de seus colegas no processo.";
}
 else if((valor=="Libra") || (valor=="Libra") ){
    texto.innerHTML = "Libra";
    imagem.setAttribute("src","img/libra.png");
    imagem.setAttribute("width","300px");
    texto2.innerHTML="Dohko é o Cavaleiro Dourado de Libra que lutou na última Guerra Santa contra Hades no ano de 1743, onde somente ele e Shion de Áries sobreviveram. Após a Guerra Santa, Shion se tornou Grande Mestre do Santuário, e Dohko, ficou com o encargo de vigiar o selo que aprisionava Hades e seus 108 espectros.";
}
 else if((valor=="Leão") || (valor=="leão") || (valor=="Leao") || (valor=="leao") ){
    texto.innerHTML = "Leão";
    imagem.setAttribute("src","img/leao.png");
    imagem.setAttribute("width","300px");
    texto2.innerHTML="Aiolia nasceu na Grécia, tendo por única família seu irmão Aiolos. Em algum ponto, os dois foram para o Santuário, onde passaram a treinar. Aiolos tornou-se o Cavaleiro de Ouro de Sagitário, passando então a treinar Aiolia para que este também se tornasse um Cavaleiro.";
}

 else if((valor=="Aquário") || (valor=="aquário") || (valor=="Aquario") || (valor=="aquario") ){
    texto.innerHTML = "Aquario";
    imagem.setAttribute("src","img/aquario.png");
    imagem.setAttribute("width","300px");
    texto2.innerHTML="Camus de Aquário ( 水瓶座 アクエリアス のカミュ, Akueriasu no Kamyu?) é o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria. foi obrigado a lutar contra Hyoga no Santuário.";
}
else{
    texto2.innerHTML = "Cavaleiro não encontrado... =(";
    imagem.setAttribute("src","img/x.webp");
    imagem.setAttribute("width","250px");
}
}