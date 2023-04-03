var http = require("http");
var cookie = require("cookie");
http
  .createServer(function (request, response) {
    console.log(request.headers.cookie);
    var cookies = {};
    if (request.headers.cookie !== undefined) {
      cookies = cookie.parse(request.headers.cookie);
    }
    console.log(cookies.yummy_cookie);
    response.writeHead(200, {
      "Set-Cookie": [
        "yummy_cookie=choco",
        "tasty_cookie=strawberry",
        "Permanent=cookies; Expires=Thu, 21 Oct 2023 07:28:00 GMT;",
        "Secure=Secure; Secure",
            "HttpOnly=HttpOnly; HttpOnly",
            "Path=Path; Path=/cookie",
        "Domain=Domain; Domain=o2.org"
      ],
    });
    response.end("Cookie!!");
  })
  .listen(3000);

// pm2로 실행한 모든 프로세스를 중지 & 삭제 합니다.

// pm2 kill

// 아래 명령은 pm2를 실행하면서 로그가 출력되도록 합니다. (--no-daemon) 또 특정 디랙토리에 대한 watch를 하지 않도록 하는 방법입니다.

// pm2 start main.js --watch --ignore-watch="data/* sessions/*"  --no-daemon
