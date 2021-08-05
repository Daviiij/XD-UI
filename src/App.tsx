/*
 * @Author: Dad
 * @Date: 2021-03-23 16:53:43
 * @LastEditTime: 2021-03-23 21:33:45
 * @LastEditors: Dad
 * @Description:
 */
import React, { useState } from "react";
import Button from "./components/Button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
import { Transition } from "./components/Transition";
import { Input } from "./components/Input/input";
import Upload from "./components/Upload/upload";

const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(false)

  //校验文件大小
  const checkFileSize = (file: File) => {
    if (Math.round(file.size / 1024 / 1024) > 50) {
      alert('file too big')
      return false
    }
    return true
  }

  //上传文件重命名
  const filePromise = (file: File) => {
    const newFile = new File([file], 'new_name.docx', { type: file.type })
    return Promise.resolve(newFile)
  }

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
        <Button size='lg' btnType='primary' onClick={() => { setShow(!show) }}>显示</Button>
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
        <Upload action='https://jsonplaceholder.typicode.com/posts/' beforeUpload={checkFileSize} />
      </header>
    </div >
  );
};

export default App;
