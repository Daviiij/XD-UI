/*
 * @Author: Dad
 * @Date: 2021-03-23 16:53:43
 * @LastEditTime: 2021-03-23 21:33:45
 * @LastEditors: Dad
 * @Description:
 */
import React from "react";
import Button from "./pages/Button";
import Alert from "./components/Alert";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <Alert />
      </header>
    </div>
  );
};

export default App;
