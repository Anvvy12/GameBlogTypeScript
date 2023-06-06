import axios from 'axios';

const fetchPaginationState = async () => {
  const options = {
    method: 'GET',
    url: 'https://video-game-price.p.rapidapi.com/game',
    headers: {
      'X-RapidAPI-Key': '2d9ffdeaccmshbfda8c67f16afbcp13166fjsn2f89a52038e9',
      'X-RapidAPI-Host': 'video-game-price.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default fetchPaginationState;
