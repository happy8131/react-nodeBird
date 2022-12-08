import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useCallback, useState } from "react";
import styled from "styled-components";

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <Form style={{ padding: 10 }} onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>

      <div>
        <label htmlFor="user-id">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>

      <Button type="primary" htmlType="submit" loading={false}>
        로그인
      </Button>
      <Link href="/signup">
        <Button>회원가입</Button>
      </Link>

      <div></div>
    </Form>
  );
};

export default LoginForm;
