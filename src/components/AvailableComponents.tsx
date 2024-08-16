import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store/configureStore";
import { ComponentConfig } from "../types";
import { changeMenu, loadComponent } from "../redux/reducers/appReducer";
import { Nav, Navbar } from "rsuite";

const AvailableComponents: React.FC = () => {
  const currentApp = useSelector((state: RootState) => state.app.currentApp);
  const allComponents = currentApp?.components;
  const dispatch = useDispatch();

  const active = async (item: ComponentConfig) => {
    const Component = await import(
      `./${item.name}/${item.version}/${item.name}`
    );
    dispatch(
      loadComponent({
        name: item.name,
        version: item.version,
        component: Component.default,
      })
    );
    dispatch(changeMenu(item.newMenu));
  };

  return (
    <Navbar>
      <Navbar.Brand href="/">EnterpriseCore Applications</Navbar.Brand>
      <Nav pullRight appearance="tabs">
        {allComponents?.map((item, index) => (
          <Nav.Item key={index} onClick={() => active(item)}>
            {item.name}-{item.version}
          </Nav.Item>
        ))}
      </Nav>
    </Navbar>
  );
};

export default AvailableComponents;
