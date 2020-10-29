// import axios
import http from './httpService';
// import { apiURL} from "../config.json"


export function getGenres() {
  // const { data: genres } =  axios.get("http://localhost:3900/api/genres");
  // console.log(genres);
  return http.get("genres");
  // return genres;
}
