import editIcon from '../assets/images/edit-icon.png'
import deleteIcon from '../assets/images/delete-icon.png'
import starIcon from '../assets/images/star-solid.png'
import imagemCapaPadrao from '../assets/images/capa.png'
import api from '../api'


function MusicItem(props){
  function deletar() {
    api.delete(`/${props.id}`).then(resposta => {
      console.log("Deletado")
      window.location.reload();
    })
  }
  const estiloCapaMusica = {
    backgroundImage: `url(${props.imgMusica === "" ? imagemCapaPadrao : props.imgMusica})`

  }
    return(
        <>
        <div className="music-box">
            <div className="img-music" style={estiloCapaMusica}></div>
            <div className="music-data">
              <div className="icons">
                <img src={editIcon} alt="" className="edit" />
                <img src={deleteIcon} alt="" className="delete" onClick={deletar}/>
                <img src={starIcon} alt="" className="stars" />
              </div>
              <div className="name">
                <label>
                  Nome:
                  <input
                    className="input-music"
                    type="text"
                    value={props.nome}
                  />
                </label>
              </div>
              <div className="genre">
                <label>
                  Genêro:
                  <input
                    className="input-music"
                    type="text"
                    value={props.genero}
                  />
                </label>
              </div>
              <div className="release">
                <label>
                  Lançamento:
                  <input className="input-music" type="text" value={props.ano} />
                </label>
              </div>
            </div>
          </div>
        </>
    );
}

export default MusicItem