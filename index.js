const io = require('socket.io')();
const fs = require('fs');
const port = 8000;

const filename = 'beingwatched.txt';

io.on('connection', (client) => {
    // Emit events to client.
    io.on('connection', (client) => {
        client.on('subscribeToFileChanges', () => {
          console.log('client is subscribing to file changes. ');
          fs.watch(filename, () => {
            console.log("Detected change");
            fs.readFile(filename, (err,data) =>{
              if (err) console.log(err);
              console.log('Transmitting: ', data.toString())
              client.emit('filecontent',data.toString())
            })
          })
        });

      })});
io.listen(port);
console.log(`Listening on port: ${port}`);

