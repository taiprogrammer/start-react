import React from "react";
import NavBar from "../components/NavBar";
import BtnGreen from "../components/BtnGreen";
import imgIndex from "../assets/images/add-music-img.png";

function AddMusic() {
  return (
    <>
      <NavBar />
      <div class="container">
        <div class="add-music">
          <form>
            <h1>Adicionar</h1>
            <div>
              <label>
                Nome: <input type="text" />
              </label>
            </div>
            <div>
              <label>
                Genêro: <input type="text" />
              </label>
            </div>
            <div>
              <label>Ano Lançamento:</label>
              <input type="text" />
            </div>

            <div>
              <label> Imagem (url):</label>
              <input type="text" />
            </div>
            <div>
              <BtnGreen texto="Enviar" />
            </div>
          </form>
          <img src={imgIndex} alt="" />
        </div>
      </div>
    </>
  );
}

export default AddMusic;
