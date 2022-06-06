import {environment} from '../../environments/environment';
const{API: BaseURL, API_KEY, API_IMAGE} = environment;
export const apiKey = API_KEY;
export const imageURL = API_IMAGE;
export const urls = {
  moviesList: `${BaseURL}/discover/movie`,
  genresList: `${BaseURL}/genre/movie/list`,
  movie: `${BaseURL}/movie`
}



export const urlsImage = {
  w300: '/w300/',
  w500: '/w500/',
  w780: '/w780/',
  w1280: '/w1280/'
}
