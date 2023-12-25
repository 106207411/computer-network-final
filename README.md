# Final Project

The website is developed using React.js and Node.js.

Requirements:
![alt text](./img/requirements.png)


## Getting Started

Currently run on `node.js v14.17.3`. `nvm` is recommended to manage node versions. All dependencies are specified in the `package.json` file.


## Installation and Setup Instructions

1. Install dependencies: `npm install`. 

2. For the message board, run the json-server database:
    ```bash
    npm install -g json-server
    json-server --watch db.json --port 3001
    ```
    The database is now running on [http://localhost:3001](http://localhost:3001).

3. For the audio/video streaming, run the server:
    ```bash
    node ./src/stream/server.js
    ```
    The server is now running on [http://localhost:8000](http://localhost:8000).

4. Run the app:
    ```bash
    PORT=5173 npm start
    ```
    or
    ```powershell
    ($env:PORT = "5173"); npm start
    ```
    Now access the webapp in [http://localhost:5173](http://localhost:5173).

## References
https://blog.logrocket.com/build-video-streaming-server-node/