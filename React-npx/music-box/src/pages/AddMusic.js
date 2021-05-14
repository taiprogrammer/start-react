import React, { useState } from "react";
import NavBar from "../components/NavBar";
import BtnGreen from "../components/BtnGreen";
import imgIndex from "../assets/images/add-music-img.png";
import axios from "axios";
import api from "../api";

function AddMusic() {
  //Guarda a música que queremos salvar
  const [musicData, setMusicData] = useState({
    nome: "",
    genero: "",
    ano: 0,
    url: ""
  })
  //Captura os dados do form para guardar no musicData
  function handle(e) {
    
    const newMusic = {...musicData}
    newMusic[e.target.id] = e.target.value;
    setMusicData(newMusic);
    console.log("Olha o que está indo pro musicData",newMusic)
  }

  //Enviar chamando a requisição http Post
  function submit(e){
    e.preventDefault(); //previni para não atualizar a tela quando for chamada a função
    api.post("/",{
      nome: musicData.nome,
      genero: musicData.genero,
      ano: musicData.ano,
      url: musicData.url
    }).then(res => {
      console.log("Olha a resposta", res.data)
      alert('Musica adicionada!')
    });
  }
  return (
    <>
      <NavBar />
      <div class="container">
        <div class="add-music">
          <form onSubmit={(e) => submit(e)}>
            <h1>Adicionar</h1>
            <div>
              <label>
                Nome: 
                <input type="text" onChange={(e) => handle(e)} 
                id="nome" 
                value={musicData.nome}/>
              </label>
            </div>
            <div>
              <label>
                Genêro: 
                <input type="text" onChange={(e) => handle(e)} 
                id="genero" 
                value={musicData.genero}/>
              </label>
            </div>
            <div>
              <label>Ano Lançamento:</label>
              <input type="text" onChange={(e) => handle(e)} 
                id="ano" 
                value={musicData.ano}/>
            </div>

            <div>
              <label> Imagem (url):</label>
              <input type="text" onChange={(e) => handle(e)} 
                id="url" 
                value={musicData.url}/>
            </div>
            <div>
            <button className="btn-green" type="submit">Enviar</button>
            </div>
          </form>
          <img src={imgIndex} alt="" />
        </div>
      </div>
    </>
  );
}

export default AddMusic;
