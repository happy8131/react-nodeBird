import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { loginAction } from "../reducers/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginAction({ id, password }));
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
