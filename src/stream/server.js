const express = require("express");
const app = express();
const fs = require("fs");

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/video", function (req, res) {
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range header");
    }
    const videoPath = "./media/video.mp4";
    const videoSize = fs.statSync(videoPath).size;
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, { start, end });
    videoStream.pipe(res);
});

app.get("/audio", function (req, res) {
    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Requires Range header");
    }
    const audioPath = "./media/audio.mp3";
    const audioSize = fs.statSync(audioPath).size;
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, audioSize - 1);
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${audioSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "audio/mp3",
    };
    res.writeHead(206, headers);
    const audioStream = fs.createReadStream(audioPath, { start, end });
    audioStream.pipe(res);
});

app.listen(8000, function () {
    console.log("Listening on port 8000!");
});