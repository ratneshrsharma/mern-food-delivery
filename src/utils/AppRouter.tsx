import { Route, Routes } from "react-router-dom";
import { RouterConfig } from "../config/RouterConfig";
import React from "react";

export const AppRouter: React.FC<any> = (props) => {

  return (
    <Routes>
      {RouterConfig &&
        RouterConfig.map(({ path, component: Component}, index) => {
          return (
            <Route
              key={index}
              path={path}
              element={<Component />}
            />
          );
        })}
    </Routes>
  );
};

export default AppRouter;
