const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
 /* res.end('Hello World');*/
 res.end(`

 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Homepage</title>
 </head>
 
 <body>
     <header>
         <div class="nav">
             <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact</li>
             </ul>
         </div>
     </header>
     <div class="container">
         <h1 class="content">Welcome to the Homepage</h1>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet qui ad inventore vitae laboriosam, ipsa a eligendi praesentium reprehenderit at, hic exercitationem quasi sunt assumenda corrupti doloremque eaque id dolor.</p>
     </div>
 </body>
 <style>
     .container{
         color:white;
         margin-top: 15vh;
        /* border: 2px solid #FFFF00;*/
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 40px;
     
     }
 
     .content, p{
          text-align: center;
          width: 50vw;
     }
     body{
         margin: 0px;
         padding: 0px;
         background-color: black;
     }
     header{
         background-color: rgb(216, 51, 51);
         top: 0;
     }
 
 ul{
     display:flex;
         flex-direction: row;
         margin: 0px 30px;
         padding: 3px 5px;
 }
 
     li{
         list-style: none;
         margin: 10px 20px;
         color: white;
     }
 
     li:hover{
         color:yellow;
         font-weight:bolder;
         cursor: pointer;
     }
 </style>
 </html>

 `);
 
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});