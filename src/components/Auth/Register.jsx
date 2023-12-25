import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { ToastContainer, toast } from 'react-toastify'
import { validatePasswordFormat } from '../../lib/utils/authValidator'
import 'react-toastify/dist/ReactToastify.css'
import './Register.scss'
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// 是否要實作 pre-flight email exist or not check
// 到填完興趣才說信箱已存在 UX 不太好

const Register = () => {
  const { signUpHandler } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "andy_test",
    email: "",
    password: "",
    age: 100,
    self_intro: "test",
    gender: "Male",
    baseball: 0,
    tabletennis: 0,
    basketball: 0,
    badminton: 0,
    volleyball: 0,
    tennis: 0,
    swimming: 0,
    gym: 0,
  })

  const handleFormChange = (e) => {
    const { name, value } = e.target

    // TODO: Error detecting in real-time

    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleClickNextStep = async () => {
    localStorage.setItem('registerInfo', JSON.stringify(formData))

    if (
      // formData.name === "" ||
      formData.email === "" ||
      formData.password === ""
      // formData.age === 0 ||
      // formData.gender === "" || 
      // formData.self_intro === ""
    ) {
      toast.warning("你還有資訊未完成填寫喔！")
      console.log("你還有資訊未完成填寫喔！")
      return
    }

    // Check if password format is correct
    if (!validatePasswordFormat(formData.password)) {
      toast.error("密碼格式錯誤喔！")
      console.log("密碼格式錯誤喔！")
      return
    }

    // This is for preflight check
    await signUpHandler({ 
        email: formData.email,
        password: formData.password,
        name: formData.name,
        age: formData.age,
        gender: formData.gender,
        self_intro: formData.self_intro,
      })
      .then((res) => {
        console.log(res)
        if (res === 'Email already exists') {
          toast.error('信箱已存在！')
          console.log('信箱已存在！')
          return
        } else {
          // Only when E-mail pass the pre-flight check can navigate to next step
          navigate('/register/sportType')
        }
      })
      .catch((err) => {
        console.log(err)
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
              Register
            </h1>
            <div className="textbox-group">
              <div className="textbox-title">Account</div>
              <input className="textbox" name="email" placeholder="email" onChange={handleFormChange}/>
            </div>
            <div className="textbox-group">
              <div className="textbox-title">Password</div>
              <input 
                className="textbox"
                name="password"
                type="password"
                placeholder="At least 8 chars (include UPPER case and number)"
                onChange={handleFormChange}
              />
            </div>
            <div className="button" onClick={handleClickNextStep}>Register</div>
          </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Register
