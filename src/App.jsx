import React, { useEffect } from "react";
import Mainpage from "./Components/Mainpage";

const App = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      alert(
        "If the prompt doesn't give the response, refresh the page and try again..."
      );
    }
  }, []);
  return (
    <div className=" h-screen text-defaultcolor bg-mainpagebg font-opensans ">
      <Mainpage />
    </div>
  );
};

export default App;
