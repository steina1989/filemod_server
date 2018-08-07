# File modification server (WIP)

A command line utility that monitors paths in your system and serves their contents, via a network socket.

It sends whole files on intial client connection, but from there serves diff packets that are applied client side.

## Requirements
* node
* npm

## Install & Quick start
```
git clone https://github.com/steina1989/filemod_server.git
cd filemod_server
npm install
npm start
```

Files are served by default from a demo folder.

You will need your own client program to receive files and diffs packets, or just head over to [filemod_client](https://github.com/steina1989/filemod_client).

## Practical use
TODO
