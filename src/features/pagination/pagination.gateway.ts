const fetchPaginationState = async () => {
  const url = 'https://video-game-news.p.rapidapi.com/all';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2d9ffdeaccmshbfda8c67f16afbcp13166fjsn2f89a52038e9',
      'X-RapidAPI-Host': 'video-game-news.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log('бля1');
    return response;
  } catch (error) {
    console.error(error);
    console.log('бля2');
  }
};

export default fetchPaginationState;
