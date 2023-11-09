import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../contants";

const login = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const [username, setUsername] = useState("");
    const [passsword, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const onSubmit = values => {
     console.log("values",values)
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
                  navigate("/dashboard");
                  localStorage.setItem("token",jsonResp.token)
                }
      })
      .catch(error => console.error(error));
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
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
      </div>
    </div>
  );
};

export default login;
