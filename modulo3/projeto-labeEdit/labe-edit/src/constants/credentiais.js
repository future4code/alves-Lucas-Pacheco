export const BASE_URL = "https://labeddit.herokuapp.com"
 const KEY =  localStorage.getItem("token")
export const HEADER = {
    headers: {
        Authorization: KEY
    }

}