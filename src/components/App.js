import "./App.css";
//import Card from "./Card/Card";
import { Navigate, Route, Routes } from "react-router-dom";

import TweetsPage from "../pages/TweetsPage";
import HomePage from "../pages/HomePage/HomePage";
import SharedLayout from "./SharedLayout/SharedLayout";

export const App = () => {
  return (
    // <div className="Container">
    //   <Card />
    // </div>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
