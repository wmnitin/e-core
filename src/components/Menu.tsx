import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/configureStore";
import { Nav } from "rsuite";

const Menu: React.FC = () => {
  const currentApp = useSelector((state: RootState) => state.app.currentApp);
  const menuItems = currentApp?.menuConfig || [];

  return (
    <Nav
      style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
    >
      {menuItems.map((item, index) => (
        <Nav.Item key={index}>{item.name}</Nav.Item>
      ))}
    </Nav>
  );
};

export default Menu;
