import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import { useState } from "react";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";

const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="item">
          <Link href="/">노드버드</Link>
        </Menu.Item>
        <Menu.Item key="item2">
          <Link href="/profile">프로필</Link>
        </Menu.Item>
        <Menu.Item key="item3">
          <Input.Search enterButton></Input.Search>
        </Menu.Item>
        <Menu.Item key="item4">
          <Link href="/signup">회원가입</Link>
        </Menu.Item>
      </Menu>
      <Row>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.zerocho.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by eroCho
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default AppLayout;
