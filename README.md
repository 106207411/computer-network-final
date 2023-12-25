# Final Project

The website is developed using React.js and Node.js.
Host by Nginx server on EC2: https://cnfinal.stadium.rdto.io

All requirements are satisfied including SSL issuance
![alt text](./img/requirements.png)


## Getting Started

Currently run on `node.js v14.17.3`. `nvm` is recommended to manage node versions. All dependencies are specified in the `package.json` file.


## Installation and Setup Instructions

1. Install dependencies: `npm install`. 

2. Use certbox to issue SSL certificate (optional):

    https://certbot.eff.org/instructions?ws=other&os=ubuntufocal

3. You can also setup Nginx as a reverse proxy (optional):

    See the config file `cnfinal.stadium.rdto.io`

3. For the message board service, run the json-server database:
    ```bash
    npm install -g json-server
    json-server --watch db.json --port 3001 --host 0.0.0.0
    #set --host so the service can be accessed from everywhere instead of only 127.0.0.1 when running on EC2
    ```
    The database is now running on [http://localhost:3001](http://localhost:3001).

4. For the audio/video streaming service, run the server:
    ```bash
    node ./src/stream/server.js
    ```
    The server is now running on [http://localhost:8000](http://localhost:8000).

5. Run the app either in 
   
   development mode:
    ```bash
    PORT=5173 npm start
    ```
    or
    ```powershell
    ($env:PORT = "5173"); npm start
    ```
    production mode:
    ```bash
    npm run build
    ```
    and serve the build folder using Nginx.

    
    **Now the webapp can be accessed in [http://localhost:5173](http://localhost:5173)**

## References
- https://blog.logrocket.com/build-video-streaming-server-node/
- https://serverfault.com/questions/476231/how-do-i-configure-a-location-block-to-always-return-a-single-file-in-nginx