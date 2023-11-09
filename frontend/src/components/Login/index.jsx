import React from "react";
import { Form, Input, Button, Checkbox, Typography, Space} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../contants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const login = () => {
    const navigate = useNavigate();
    const { Title, Paragraph } = Typography;

    const onSubmit = values => {
      fetch(LOGIN, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' },
         body: JSON.stringify(values),
      })
      .then(response => response.json())
          .then((jsonResp) => {
              if (jsonResp.message === "Login Successfully") {
                  localStorage.setItem("token",jsonResp.token);
                  toast.success(jsonResp.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    theme: "light",
                  });
                  setTimeout(()=>{
                    navigate("/dashboard");
                  },2000)
                }
            else{
                toast.error(jsonResp.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    theme: "light",
                  });
            }
      })
      .catch(error => console.error(error));
  };

  const navigateRegister = () => {
    navigate("/register");
  }

  return (
    <div className="mainLogin bg-img">
      <div className="subLogin">
        <Title className="heading" level={2}>
            Let's Get Started
        </Title>
        <Space>
            <Paragraph className="paragraphLogin">
                Sign in to continue to Doclinic
            </Paragraph>
        </Space>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter you email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
        
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          <div className="registerlink">
            <span id="orStyle">Or </span>
            <span onClick={navigateRegister} id="naviStyle">
            register now!
            </span>
          </div>
        </Form.Item>
      </Form>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />

      </div>
    </div>
  );
};

export default login;