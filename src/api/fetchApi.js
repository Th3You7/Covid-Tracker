import axios from "axios";

async function fetchApi() {
  try {
    let response = await axios.get("https://covidma.vercel.app/api");
    const { data } = response;

    return data[0];
  } catch (error) {
    console.error(error);
  }
}

export default fetchApi;
