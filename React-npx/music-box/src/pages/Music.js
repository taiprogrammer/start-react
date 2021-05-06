import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MusicItem from "../components/MusicItem";
import BtnGreen from "../components/BtnGreen";
import api from "../api"

function Music() {

  const [musics, setMusic] = useState([]);

  useEffect(()=> {
    async function getMusics() {
      const res = await api.get("/");
      setMusic(res.data);
      console.log("Resposta", res.data);
    }
    getMusics();
  });
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
          {musics.map((music) => (
            <MusicItem nome={music.nome} genero={music.genero} ano={music.ano} />
          ))}
            </div>
          </div>
    </>
  );
}

export default Music;
