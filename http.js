const { send } = require('./request');
const { read } = require('./response');
const { decrypt } = require('./response');

function makeRequest(url, data) {
  // 요청 보내기
  send(url, data);
  // 데이터 returned
  return read();
}

const responseData = makeRequest('https://naver.com', 'any data');

console.log(responseData)