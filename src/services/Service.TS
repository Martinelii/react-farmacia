import axios from "axios";

const api = axios.create({
    baseURL: 'https://farmacia-jk1x.onrender.com/ '
})

export const cadastrarProduto = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}
export const buscar = async (url: string, setDados: Function, header?: Object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}