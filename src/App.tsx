/*
 * @Author: Dad
 * @Date: 2021-03-23 16:53:43
 * @LastEditTime: 2021-03-23 21:33:45
 * @LastEditors: Dad
 * @Description:
 */
import React, { useState } from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
import { Transition } from "./components/Transition";
import { Input } from "./components/Input/input";

const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(false)
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
        <Button size={ButtonSize.Large} btnType={ButtonType.Primary} onClick={() => { setShow(!show) }}>显示</Button>
        <Transition in={show} timeout={300} animation='zoom-in-left'>
          <div>
            <p>
              Hallo,world
            </p>
            <p>
              Hallo,javaScript
            </p>
            <p>
              Hallo,XD
            </p>
          </div>
        </Transition>
        <Input size='sm' prepend='left' onLeftClick={() => { alert('leftBtn') }} append='right' onRightClick={() => { alert('rightBtn') }} />
        <Input disabled />
      </header>
    </div >
  );
};

export default App;
