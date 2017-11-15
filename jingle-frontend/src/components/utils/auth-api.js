import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export {
	getQuestions
};

function getQuestions() {
  const url = `${BASE_URL}/api/questions`;
  return axios.get(url).then(response => response.data);
}