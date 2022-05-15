const http = require('http');
// it means like we have to get this http for doing and making our site
// and this is also kind of like module what we can use whenever we feel like
// front of every values you can find const, it's the way we can define some new values

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Turn!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//  here is the code for making a new web server.
// So, you would see the results from what you guys copied codes => res.end("Hello World")
// this is what we're seeing.

// var ser = http.createServer(function(req, res){
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Turn!');
// });

// 여기에서 function을 써 줬지만 위의 코드와 완전히 똑같은 형태의 코드라고 할 수 있다.

// ser.listen(port, hostname, function(){
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//   http라는 객체를 불러와서 http라는 변수로 저장을 해준 다음
// 그 변수를 통해 서버를 만들고 => .listen(port, hostname);
// 을 통해 사용자가 접속을 할때 바라보게 할 포트와 ip를 읽어 들이는 
// 코드이다. 그러하여 만약 서버가 성공적으로 리스닝 했을떄 콘솔로그 안의 값을 띄워 준다.
// 이제 리스닝을 하여 서버는 해당 포트를 바라보고 있다. 클라이언트에게 포트안의 저장된 서버를
// 보여줘야 하는데 그 모습을 익명 함수를 통해서 적어서 호출한다.


