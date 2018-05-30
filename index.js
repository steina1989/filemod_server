const io = require('socket.io')();
const fs = require('fs');
const port = process.env.PORT || 8000;
const foldername = process.env.FOLDER || './ex_watch_folder';

const { promisify } = require('util');
const readdirAsync = promisify(fs.readdir);


io.on('connection', (client) => {
  client.on('ls', async () => {
    console.log('Client is requesting list of files.');
    const files = await ls();

    console.log(files)


    // fs.watch(foldername, (eventType, filename) => {
    //   console.log("Detected change");
    //   fs.readFile(filename, (err, data) => {
    //     if (err) {
    //       console.log(err);
    //       client.emit('error', err);
    //       return
    //     }
    //     // console.log('Transmitting: ', data.toString())
    //     client.emit('filecontent', { foo: 'bar' })
    //   })
    // })
  });

});

io.listen(port);
console.log(`Listening on port: ${port}`);


const ls = async () => {
  try {
    return  readdirAsync(foldername);
  }
  catch(err) { console.log(err) };
  }
  

