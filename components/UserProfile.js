import { Avatar, Button, Card } from "antd";
import { useCallback } from "react";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <div>
      <Card
        actions={[
          <div key="1">
            짹짹
            <br />0
          </div>,
          <div key="2">
            팔로잉
            <br />0
          </div>,
          <div key="3">
            팔로우
            <br />0
          </div>,
        ]}
      >
        <Card.Meta avatar={<Avatar>ZC</Avatar>} title="Zerocho" />
        <Button onClick={onLogOut}>로그아웃</Button>
      </Card>
    </div>
  );
};

export default UserProfile;
