import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/configureStore";
import DynamicComponentLoader from "./DynamicComponentLoader";
import { Panel } from "rsuite";

const ViewPanel: React.FC = () => {
  const currentApp = useSelector((state: RootState) => state.app.currentApp);
  return (
    <>
      {currentApp?.components?.map((componentConfig: any, index: number) => (
        <Panel>
          <DynamicComponentLoader key={index} config={componentConfig} />
        </Panel>
      ))}
    </>
  );
};

export default ViewPanel;
