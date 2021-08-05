/*
 * @Author: Dad
 * @Date: 2021-03-23 16:53:43
 * @LastEditTime: 2021-03-23 21:33:45
 * @LastEditors: Dad
 * @Description:
 */
import React from "react";
import Button from "./pages/Button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon='coffee' theme='danger' size='10x' />
        <Menu mode='horizontal' onSelect={(index) => { console.log(index) }} defaultOpenSubMenus={['3']} defaultIndex='0'>
          <MenuItem >
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link 1
          </MenuItem>
          <MenuItem >
            cool link 2
          </MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>
              cool link 1
            </MenuItem>
            <MenuItem >
              cool link 2
            </MenuItem>
          </SubMenu>
          <MenuItem >
            cool link 3
          </MenuItem>
        </Menu>
      </header>
    </div >
  );
};

export default App;
