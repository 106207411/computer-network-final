import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { useState } from "react"
import { AiOutlineArrowRight } from "react-icons/ai"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Login.scss'
import { authTranslator } from "../../lib/utils/translator"
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Login = () => {
  const { loginHandler, isAuth, authError } = useAuth()
  const navigate = useNavigate()
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  })

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setLoginInfo(prevState => ({ ...prevState, [name]: value}));
  }

  const handleBackClick = () => {
    navigate('/entry');
  }

  const handleLoginClick = async () => {
    // Check if email and password are not empty
    if (!loginInfo.email) {
      toast.error('請輸入帳號');
      return;
    }
    if (!loginInfo.password) {
      toast.error('請輸入密碼');
      return;
    }

    await loginHandler(loginInfo)
      .then((res) => {
        console.log(res)
        if (res === 'Missing value' ||
          res === 'Invalid email format' ||
          res === 'Email does not exist' ||
          res === 'Password does not match'
        ) {
          toast.error(authTranslator(res));
        } else {
          toast.success('登入成功');
          // Dummy logic for divide the Admin and User
          if (res.user_id !== 1) {
            navigate('/login/home');
          } else {
            navigate('/admin/home');
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

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
            <h1>
              登入
            </h1>
            <div className="textbox-group">
              <div className="textbox-title">帳號</div>
              <input className="textbox" name="email" onChange={handleFormChange}/>
            </div>
            <div className="textbox-group">
              <div className="textbox-title">密碼</div>
              <input className="textbox" type="password" name="password" onChange={handleFormChange}/>
            </div>
            <button className="button" onClick={handleLoginClick}>登入</button>
          </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Login
