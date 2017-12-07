import axios from 'axios'

export {
	getQuestions
};

function getQuestions() {
  // Note for this to work in chrome we need to first manually 
  // navigate to api/questions, and confirm that bad certificate is ok,
  // then chrome will send the request.
  // The token is one of the tokens obtains through questions.login.
  // TODO(ssergey):save in local storage and obtain from there.
  const token = "dv4FUDPusDznPuf5GXpQWz1AoGTel9";
  var config = {
  	headers: {"Authorization": 'Bearer ' + token}
  };
  return axios.get("http://localhost:5000/api/questions", config).then(response => response.data);
}
