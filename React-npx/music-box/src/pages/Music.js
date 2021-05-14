import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MusicItem from "../components/MusicItem";
import BtnGreen from "../components/BtnGreen";
import api from "../api"

function Music() {
  //guardas as musicas
  const [musics, setMusic] = useState([]);
  //buscar as musicas
  useEffect(()=> {
    async function getMusics() {
      const res = await api.get("/"); //podeiria ser ("") apenas
      setMusic(res.data);
      console.log("Resposta", res.data);
    }
    getMusics();
  }, []);
  return (
    <>
    <NavBar />
      <div className="container">
        <div className="filter">
          <BtnGreen texto="Adicionar" destino="/add-music"/>
        </div>
      </div>
      <div className="container">
        <div className="music-boxes">
          {musics.map(/*item no singular de musicas*/(music) => (
            <MusicItem 
            id={music.id}
            nome={music.nome}
            genero={music.genero}
            ano={music.ano}
            imgMusica={music.url} />
          ))}
            </div>
          </div>
    </>
  );
}

export default Music;
