import React, { useState, useEffect } from "react";
import Message from "./Message";
import "./MessageBoard.scss";
import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import Card from "react-bootstrap/Card";


const MessageBoard = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Fetch messages from the server when the component mounts
    axios.get('http://localhost:3001/messages')
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  }, []); // Empty array ensures this runs once when the component mounts

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddMessage = () => {
    if (inputValue.trim()) {
      // Add message to the server
      axios.post('http://localhost:3001/messages', { content: inputValue.trim() })
        .then(response => {
          setMessages([...messages, response.data]);
          setInputValue('');
        })
        .catch(error => {
          console.error('Error adding message:', error);
        });
    }
  };


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
            <h1>Message Board</h1>
            <div className="textbox-group">
              <input 
                className="textbox" 
                name="text"
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Type your message here..." 
              />
            </div>
              <button className="button" onClick={handleAddMessage}>Add Message</button>
            <div className="textbox-group">
            <Card className="quote-card-view">
              <Card.Body>
              {messages.map((message) => (
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                  <Message key={message.id} message={message} />
                  </p>
                </blockquote>
              ))}
              </Card.Body>
            </Card>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default MessageBoard
