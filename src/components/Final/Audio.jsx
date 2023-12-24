import React, { useState, useEffect } from "react";
import io from 'socket.io-client';
import "./MessageBoard.scss";
import { Container, Row, Col } from "react-bootstrap";


const SOCKET_SERVER_URL = 'http://localhost:3002';

const Audio = () => {

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL);
    // Dummy audio streaming logic (you might want to replace this with real audio streaming)
    const audioData = "../../../media/audio.mp3"

    // Emit the audio data to the server
    socket.emit('stream-audio', audioData);

    // Listen for broadcasted audio data from the server
    socket.on('broadcast-audio', (data) => {
        console.log('Received audio data:', data);
        // Play the received audio data
        navigator.mediaDevices.getUserMedia({ audio: true })
    });

    return () => {
        socket.disconnect();
    };
  }, []);

  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "0px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "0px",
              paddingBottom: "50px",
            }}
          >
          <div className="div">
            <h1>Live Audio Streaming</h1>
            <audio id="audioElement" controls></audio>
          </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Audio
