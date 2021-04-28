import React from "react";
import NavBar from "../components/NavBar";
import MusicItem from "../components/MusicItem";
import BtnGreen from "../components/BtnGreen";

function Music() {
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
          <MusicItem nome="Lisboa - Anavitória" genero="MPB" ano="2021"/>
          <MusicItem nome="Numb - Linkin Park" genero="Rock" ano="2003"/>
          <MusicItem nome="Faroeste Caboclo" genero="MPB/Rock" ano="2003"/>
          <MusicItem nome="Imagine" genero="Rock" ano="2009"/>
            </div>
          </div>
    </>
  );
}

export default Music;
