import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined, CommentOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


export default function SideMenu() {
 const navigate = useNavigate();
 
  return (
    
    <div className="SideMenu">
      <Menu
      theme="dark"
      style={{height: "100vh" }}
        onClick={(item) => {
          // item.key
          navigate(item.key)
        }}
        mode="inline"
      >
       
        <Menu.Item key="/dashboard" label="Dashboard" icon={<AppstoreOutlined />}>
        Dashboard
{/* {adding icon with menu items using antd styling, first import it} */}
        </Menu.Item>
        <Menu.Item key="/inventory" label="Inventory" icon={<ShopOutlined />}>
          Inventory
        </Menu.Item>
        <Menu.Item key="/orders" label="Orders" icon={<ShoppingCartOutlined />}>
          Orders
        </Menu.Item>
        <Menu.Item key="/customers" label="Customers" icon={<UserOutlined/>}>
          Customers
        </Menu.Item>
        <Menu.Item key="/reviews" label="Reviews" icon={<CommentOutlined />}>
          Reviews
        </Menu.Item>
        
        {/* <Menu.Item >
          
        </Menu.Item>
        <Menu.Item >
         
        </Menu.Item>
        <Menu.Item >
          
        </Menu.Item>
       
        <Menu.Item >
        </Menu.Item>
        <Menu.Item >
          
        </Menu.Item>
        <Menu.Item >
        
        </Menu.Item>
        <Menu.Item  >
          
        </Menu.Item> */}
      </Menu>
    </div>
  );
}
