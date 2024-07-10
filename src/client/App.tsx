import React from "react";
import FrontCardComponent from "./components/cardComponent/Front/frontCardComponent";
const App: React.FC = () => {
  return (
    <>
      <div>기본 템플릿입니다.</div>
      <FrontCardComponent className="flex justify-center items-center"/>
    </>
  );
};

export default App;