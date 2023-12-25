import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";

const VIDEO_URL = 'http://localhost:8000/video';

const Video = () => {
  const videoRef = useRef(null);

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
          >4
          <div className="div">
            <h1>Video Streaming</h1>
            <div>
              <video ref={videoRef} controls width="500">
                <source src={VIDEO_URL} type="video/mp4" />
              </video>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Video
