export const imgApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/images/",
    timeout: 10000
})
export const todoApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/ISABELLE/todos",
    timeout: 10000
})
export const weatherApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/weather",
    timeout: 10000
})
export const quoteApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/quotes",
    timeout: 10000
})