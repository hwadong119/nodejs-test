const request = require('./request');
const response = require('./response');

function makeRequest(url, data) {
  // 요청 보내기
  request.send(url, data);
  // 데이터 returned
  return response.read();
}

const responseData = makeRequest('https://naver.com', 'any data');

console.log(responseData);