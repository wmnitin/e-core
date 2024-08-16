import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/configureStore";

interface DynamicComponentLoaderProps {
  config: { name: string; version: string };
}

const DynamicComponentLoader: React.FC<DynamicComponentLoaderProps> = ({
  config,
}) => {
  const components = useSelector((state: RootState) => state.app.components);
  const Component =
    components[config.name] && components[config.name][config.version];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {Component ? <Component /> : null}
    </Suspense>
  );
};

export default DynamicComponentLoader;
