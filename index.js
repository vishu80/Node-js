// const http = require("http");
// const url = require("url");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const clientUrl = req.url;
//   console.log(clientUrl);
//   if (clientUrl == "/overview" || clientUrl == "/")
//     res.end("hellow this is overview ");
//   else if (clientUrl == "/name") res.end("Hello you are searching for name");
//   else if (clientUrl == "/dummydata") {
//     {
//       try {
//         const fileData = fs.readFileSync("./json.data", "utf-8");
//         res.end(fileData);
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   } else {
//     res.writeHead(404, {
//       "Content-type": "text/html",
//       "my-own-header": "vishal",
//     });
//     res.end("<h1>Not found What Are You Searching</h1>");
//   }
// });

// server.listen(2000, () => {
//   console.log("Listening to request at port 2000");
// });
//second file wiil be called that will merge all the router
const router = require("./routers/productrouter");
const route=require('./routers/userRouter')
var cors = require("cors");

const express = require("express");
const app = express();
app.use(cors());
app.use(express.json()) //this will allow us to fetch json data from body 

app.use(router);
app.use(route);


module.exports = app;
