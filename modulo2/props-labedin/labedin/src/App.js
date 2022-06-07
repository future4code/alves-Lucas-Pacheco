import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaFoto from "./img/Lucas.jpg"
import seta from "./img/seta.png"
import CardPequeno from "./components/CardMenor/CardMenor"
import email from "./img/email.png"
import locali from "./img/localizacao.png"
import rpg from "./img/rpg.jpg"
import nasa from "./img/Nasa.png"

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {MinhaFoto} 
          nome="Lucas  Magalhães Pacheco" 
          descricao="Oi, eu sou Lucas, sou um amante jogador de RPG e um odiador de CSS com todas minhas forças, devido a isso estou aqui para fazer minha vingança contra o CSS! ME ajudem nessa jornada em busca pelo caos."
        />
        
        <ImagemButton 
          imagem={seta} 
          texto="Ver mais"
        />
        
      <CardPequeno
         
         imagem= {email}
         nome= "Email"
         descricao= "Olá1243@gmail.com"
         />
       <CardPequeno
         imagem=  {locali}
         nome= "Localização"
         descricao = "Narciso Sturlini, 454334"
       
         />  
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= {rpg}
          nome="RPG de Mesa" 
          descricao="Jogando RPG e matando personagens das outras pessoas com intuito de trazer a infelicidade ao mundo" 
        />
        
        <CardGrande 
          imagem={nasa} 
          nome="NASA" 
          descricao="Meu maior defeito é minha ansiedade maluca que não me deixa concentrar muitas vezes!"

        />
        
      </div>


      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
