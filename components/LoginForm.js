import { Button, Form } from "antd";
import Input from "antd/es/input/Input";
import Link from "next/link";
import { useCallback, useState } from "react";

const LoginForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.tart.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.tart.value);
  }, []);
  return (
    <Form>
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

      <div style={{ marginTop: 10 }}>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <Button>회원가입</Button>
        </Link>
      </div>

      <div></div>
    </Form>
  );
};

export default LoginForm;
