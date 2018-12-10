//import http from node_modules 
const http = require("http");
//import custom module
const myDateTime = require('./myDateTime');
//set a hostname
const hotsname = '127.0.0.1';
//set a port 
const port = 3000;

//initialize the server with createServer function 
const server = http.createServer((req, res) =>  {
    //set responese code to 200 (success/OK)
    res.statusCode = 200;
    //set responses hedaer Content-Type to text/plain 
    res.setHeader('Content-Type', 'text/plain');
    //send a respond 
    res.end('Hello World\n');
})

//start up server
server.listen(port, hotsname, () => {
    //log server running to the console
    console.log(`Server running at https//${hotsname}:${port}`);
    //use moudle by call its initalized variable  
    console.log(`Invoked by: ${myDateTime}`);
});

//initialize a variable
let counter = 0;
//call the global setInterval function
setInterval(() => {
    //log counter
    console.log(counter);
    //increment counter
    counter++;
}, /*set interval */1000)



exports.myDateTime = () => {
    return Date();
}