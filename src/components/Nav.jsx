import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const { Header } = Layout;
const Nav = () => {
  const items = [

    {
      key: 1,
      label: <Link to={"/articleapple"}>Article Apple</Link>
    },
    {
      key: 2,
      label: <Link to={"/tech"}>Tech</Link>
    },
    {
      key: 3,
      label: <Link to={"/tesla"}>Article about Tesla</Link>
    },
    {
      key: 4,
      label: <Link to={"/wallstreetjournal"}>Wall Street Journal</Link>
    },
  ];

  return (
    <div className={"main"}>
      <h2
        style={{
          position: "relative",
          top: "20px",
          color: "#F50720 ",

          textAlign: "center",

          fontFamily: "Pacifico' cursive"
        }}
      >
        Samachar App
      </h2>
      <Header
        style={{
          backgroundColor: "white",
        }}
      >
        <div className="logo" />
        <Menu
          theme="#07F57A"
          mode="horizontal"
          color="red"
          defaultSelectedKeys={["2"]}
          items={items} style={{ display: "flex", justifyContent: "center", Color: "red" }}
        />
      </Header>
    </div>
  );
};

export default Nav;
