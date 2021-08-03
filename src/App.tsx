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
import MenuItem from "./components/Menu/menuItem";
import Menu from "./components/Menu/menu";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0}>
          <MenuItem index={0}>
            cool link
          </MenuItem>
          <MenuItem index={1} disabled>
            cool link 1
          </MenuItem>
          <MenuItem index={2}>
            cool link 2
          </MenuItem>
          <li>hallo</li>
        </Menu>
        <Button />
        {/* <Alert /> */}
      </header> 
    </div>
  );
};

export default App;
