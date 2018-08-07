const io = require('socket.io')();
const port = process.env.PORT || 8000;
const foldername = process.env.FOLDER || './demo';
const chokidar = require('chokidar');


const DATA = 'DATA';
const CHANGE = 'CHANGE';
const ADDDIR = 'ADDDIR';
const ADD = 'ADD';

// Main
{
  const watcher = chokidar.watch('demo', {ignored: /(^|[\/\\])\../}).on('all', (event, path) => {
    console.log(event,path);
  });
  
  
  io.on('connection', (client) => {
    
    console.log('Client has connected:', client.handshake.headers.host);

    io.emit()
    
  
  });
  
  io.listen(port);
  console.log(`Listening on port: ${port}`);
  

}



