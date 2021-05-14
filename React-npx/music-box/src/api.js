const { default: axios } = require("axios");

// export const ..
// Cria uma instancia do axios, setando uma url padrao para as requisições
const api = axios.create({
    baseURL:"https://609daa8f33eed80017956e3f.mockapi.io/music",
});

export default api; // Deixando publico esse objeto