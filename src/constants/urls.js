export const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net"
export const headers = {
    "Content-Type": "application/json",
    "Authorization": window.localStorage.getItem("token")
  };
  