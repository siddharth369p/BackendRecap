const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  if (req.url==="/home") {
    res.write(`<h1>Welcome to home man</h1>`);
    return res.end();
  } else if (req.url==="/men") {
    res.write(`<h1>Welcome to man page </h1>`);
    return res.end();
  } else if (req.url === "/women") {
    res.write(`<h1>Welcome to Women page</h1>`);
    return res.end();
  }

  res.write(`<html lang="en">
<head>
  <title>myntra</title>
</head>
<body>
  <nav>
    <ul>
      <li>
        <a href='/home'>Home</a>
      </li>
       <li>
        <a href="/men">men</a>
      </li>
       <li>
        <a href="/women">women</a>
      </li>
    </ul>
  </nav>
</body>
</html>`);
  res.end();
});

server.listen(4000, () => {
  console.log("server is listening on port 4000");
});
