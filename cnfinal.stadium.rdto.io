server {
    listen 443 ssl;
    server_name cnfinal.stadium.rdto.io;

    ssl_certificate /home/ubuntu/computer-network-final/cert1.pem;
    ssl_certificate_key /home/ubuntu/computer-network-final/privkey1.pem;

    location / {
        proxy_pass http://localhost:5173;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }


    location /audio_srv/ {
        proxy_pass https://localhost:8000/audio/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }


    location /video_srv/ {
        proxy_pass https://localhost:8000/video/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /msg_srv {
        proxy_pass http://localhost:3001/messages;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
