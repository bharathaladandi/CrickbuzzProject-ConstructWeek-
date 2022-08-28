const API_KEY = "b3584631-965a-4643-a16a-1a6a3a7a5ced";


export const getMatches = () => {
  const url = `https://api.cricapi.com/v1/series?apikey=${API_KEY}&offset=0`;
  console.log("URL", url);
  return fetch(url)
    .then((response) => {
      // console.log(response)
      return response.json();
     
    })
    .catch((error) => {
      console.log("ERROR ", error);
    });
};

//get the score of the cuurent match

export const getMatchDetail = (id) => {
  const url = `https://api.cricapi.com/v1/series?apikey=unique_id=${id}&apikey=${API_KEY}&offset=0`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
