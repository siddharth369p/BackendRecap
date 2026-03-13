const http=require('http')

const server=http.createServer((req,res)=>{console.log(req);
  res.write('<body><h1>HIII I am John Sidd</h1></body>')

}
   )

server.listen((3000),()=>{
  console.log('app is listening on port 3000')
})