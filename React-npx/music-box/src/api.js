const { default: axios } = require("axios");

// export const ..
// Cria uma instancia do axios, setando uma url padrao para as requisições
const api = axios.create({
    baseURL:"https://6086fb95a3b9c200173b75bb.mockapi.io/music/",
});

export default api; // Deixando publico esse objeto