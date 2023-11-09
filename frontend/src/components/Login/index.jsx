import React from "react";
import ReactDOM from "react-dom";
// import "antd/dist/antd.css";

import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./login.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const login = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [passsword, setPassword] = useState("");

  const navigate = useNavigate();

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const handleLoggedIn = () => {
    navigate("/dashboard");
    setLoggedIn(true);
    setTimeout(() => {
      setLoggedIn(false);
    }, 4000);
  };

  const handleUserName = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="mainLogin">
      {loggedIn === true && username === "admin" && passsword === "admin" && (
        <div className="successLogin"> Login Successfully </div>
      )}
      <div className="subLogin">
        <h1>Let's Get Started</h1>
        <p>Sign in to continue to Doclinic.</p>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
        
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
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
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      </div>
    </div>
  );
};

export default login;
