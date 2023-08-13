import React from 'react';
import { Typography } from 'antd';

export default function AppFooter() {
  return (
    <div className="AppFooter">
     <Typography.Link href="tel:+9478516758">+9478516758</Typography.Link>
     <Typography.Link href="https://www.goggle.com" target={"_blank"}>Privacy Policy</Typography.Link>
    <Typography.Link href="https://www.goggle.com" target={"_blank"}>Terms of Use</Typography.Link>
    </div>
  );
}
