import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Space, Card, Statistic, Table } from "antd";
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { getOrders, getRevenue } from "../../../API";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function DashboardCard({ title, value, icon, onClick }) {
  return (
    <Card onClick={onClick}>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          onClick={() => {
            navigate("/orders");
          }}
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0, 255, 0, 0.5)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Orders"
          value={1456}
        />
        <DashboardCard
          onClick={() => {
            // item.key
            navigate("/inventory");
          }}
          icon={
            <ShoppingOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0, 255, 0, 0.5)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Inventory"}
          value={1456}
        />
        <DashboardCard
          onClick={() => {
            // item.key
            navigate("/customer");
          }}
          icon={
            <UserOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0, 255, 0, 0.5)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Customer"}
          value={1456}
        />
        <DashboardCard
          onClick={() => {
            // item.key
            navigate("/reviews");
          }}
          icon={
            <CommentOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0, 255, 0, 0.5)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Reviews"}
          value={14}
        />
      </Space>
      <Space>
        <RecentOrders />
        <DashboardChart />
      </Space>
    </Space>
  );
}

function DashboardChart() {
  const [revenueData, setRevenueData] = useState({
    labels: [],
    datasets: [],
  });
  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });
      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };
      setRevenueData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };
  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={revenueData} />
    </Card>
  );
}
function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Typography.Title level={4}>Recent Orders</Typography.Title>
      <Table
        columns={[
          { title: "Title", dataIndex: "title" },
          { title: "Quantity", dataIndex: "quantity" },
          { title: "Price", dataIndex: "discountedPrice" },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      />
    </>
  );
}
