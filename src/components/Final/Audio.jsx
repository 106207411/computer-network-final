import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

const AUDIO_URL = '/audio_srv';

const Audio = () => {

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
            <h1>Audio Streaming</h1>
            <div>
              <audio id="audioElement" controls>
                <source src={AUDIO_URL} type="audio/mp3" />
                </audio>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Audio
