// //core module
import { createServer } from "http"; // http module handle the server request inside the nodeJS

createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.write(
    JSON.stringify({
      name: "kuldeep singh",
      email_id: "kdsinghak47@gmail.com",
    })
  );
  response.end();
}).listen(8080);

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({ name: "kuldeep", email_id: "kdsinghak47@gmail.com" })
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
