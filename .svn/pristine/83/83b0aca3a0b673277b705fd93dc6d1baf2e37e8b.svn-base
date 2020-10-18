import React from "react";
import { List, Avatar, Space } from "antd";

import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import Typography from "@material-ui/core/Typography";
import "./history.css";
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    title: `لقد قام محمد احمد بتعديل حالتة الاجتماعية `,
  });
}
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
export default function History() {
  return (
    <div>
      <List
        className="historyList"
        itemLayout="vertical"
        size="large"
        pagination={{
          style: { float: "right" },
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 12,
        }}
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            extra={
              <Typography variant="subtitle1" gutterBottom>
                التاريخ 15/5/2015
              </Typography>
            }
          >
            <List.Item.Meta
              avatar={<AccountCircleOutlinedIcon fontSize="large" color="#817E7E"/>}
              title={<p style={{ marginTop: "10px" }}>{item.title}</p>}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
