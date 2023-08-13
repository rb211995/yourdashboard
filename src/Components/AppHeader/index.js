import React from 'react';
import { Typography, Space, Badge } from 'antd';
import { MailOutlined, BellFilled } from '@ant-design/icons';
import image from '../PageContent/logo/logo_travel___Capture-removebg-preview (1).png';
export default function AppHeader() {
  return (
    <div className="AppHeader">
    {/* {<img width={40} src="./Components/PageContent/logo/logo_travel___Capture-removebg-preview (1).png" alt="Logo" /> */}
      <img width={140} paddingLeft={0} src={image} alt="Logo" style={{ paddingLeft: 0, marginLeft: 0 }}
/>


      <Typography.Title>Travel & Capture Dashboard</Typography.Title>
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
}
