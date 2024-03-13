import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key: '859ae9e1960f487fba2ad2a60a084f28'
    }
})