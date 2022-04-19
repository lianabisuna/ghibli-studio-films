import axios from 'axios'

const FILM_URL = 'https://ghibliapi.herokuapp.com/films/'
const film = axios.create({ baseURL: FILM_URL })

export default {
    getFilms() {
        return film.get()
    },
    getFilm(id) {
        return film.get(id)
    },
};