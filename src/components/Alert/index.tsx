/*
 * @Author: Dad
 * @Date: 2021-03-23 21:27:30
 * @LastEditTime: 2021-03-23 21:37:29
 * @LastEditors: Dad
 * @Description:
 */
import React from "react";
import classNames from "classnames";

export enum AlertType {
  Success = "success",
  Default = "default",
  Danger = "danger",
  Warning = "warning",
}

interface BaseAlertProps {
  className?: string;
  title?: string;
  content?: string;
  type?: AlertType;
  children: React.ReactNode;
}

const Comp: React.FC<any> = () => {
  return <div>1235</div>;
};
export default Comp;
