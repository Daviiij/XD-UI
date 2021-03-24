/*
 * @Author: Dad
 * @Date: 2021-03-23 21:30:35
 * @LastEditTime: 2021-03-23 21:32:19
 * @LastEditors: Dad
 * @Description: 展示button样式以及功能
 */
import React from "react";
import Button, { ButtonSize, ButtonType } from "../../components/Button/index";

const Comp: React.FC<any> = () => {
  return (
    <div>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Primary
      </Button>
      <Button disabled>disabled</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        Danger
      </Button>
      <Button btnType={ButtonType.Default}>Default</Button>
      <Button btnType={ButtonType.Link} href="#">
        link
      </Button>
    </div>
  );
};
export default Comp;
