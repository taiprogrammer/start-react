// busca div no html
var container = document.getElementById("app");
//cria um h1
var titulo = document.createElement("h1");
//atribui um valor ao h1
titulo.innerHTML = "Esse título foi feito com js :o";
//colocando o titulo na div add
container.appendChild(titulo);

var subtitulo = document.createElement("h2");

subtitulo.innerHTML = "Esse texto também";

container.appendChild(subtitulo);


// e com react
function Contador(props){

    const [numero, setNumero] = React.useState(0);

    function somar(){
        setNumero(numero +1)
    }

    function subtrair(){
        setNumero(numero -1)
    }

    return(
        <React.Fragment>
            <h1> {props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}> -</button>
        </React.Fragment>
    );
}
// isso aqui é um componete
function App(props){
    return(
        <React.Fragment>
            <h1>Vote no seu favorito</h1>
            <Contador titulo = "React"></Contador>
            <Contador titulo = "Angular"></Contador>
            <Contador titulo = "Vue"></Contador>
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), 
container );

// componentes seguem o padrão PascalCase
//Só posso retornar um elemento jsx por componente
//Componentes podem receber propriedades