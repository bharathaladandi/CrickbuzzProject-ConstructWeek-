const API_KEY = "1c016e7fa3204a229b71a37b45a1eb23";
// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c016e7fa3204a229b71a37b45a1eb23

export const getMatches = () => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;
  console.log("URL", url);
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("ERROR ", error);
    });
};

//get the score of the cuurent match

export const getMatchDetail = (id) => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=unique_id=${id}&apikey=${API_KEY}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};