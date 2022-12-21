import axios from 'axios'

const Api = axios.create({
    baseURL: "https://sujeitoprogramador.com/"
})

export default Api