import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store/configureStore";
import { loadApp } from "./redux/reducers/appReducer";
import Menu from "./components/Menu";
import ViewPanel from "./components/ViewPanel";
import AvailableComponents from "./components/AvailableComponents";

const AppSetup: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const appConfig = {
      menuConfig: [{ name: "Home" }, { name: "About" }, { name: "Contact" }],
      components: [
        {
          name: "RegisterForm",
          version: "v1",
          newMenu: [
            { name: "FormV1 Home" },
            { name: "FormV1 About" },
            { name: "Contact" },
          ],
        },
        {
          name: "RegisterForm",
          version: "v2",
          newMenu: [
            { name: "FormV2 Home" },
            { name: "FormV2 About" },
            { name: "Contact" },
          ],
        },
        {
          name: "FlowDiagram",
          version: "v1",
          newMenu: [
            { name: "Flow Home" },
            { name: "Flow About" },
            { name: "Contact" },
          ],
        },
      ],
    };

    dispatch(loadApp(appConfig)); // initial app load, we can put this in reducer as well
  }, [dispatch]);

  return (
    <div>
      <AvailableComponents />
      <Menu />
      <ViewPanel />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppSetup />
    </Provider>
  );
};

export default App;
