import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      
      'X-RapidAPI-Key': '7c29d1b099msh6bb0e21fe16a844p147203jsn41424427a54a',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  },
  });
    
  return data;
}