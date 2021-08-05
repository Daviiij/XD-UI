import React, { InputHTMLAttributes, ReactElement } from "react";
import classNames from "classnames";
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from "../Icon/icon";

type InputSize = 'lg' | 'sm'
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean;
  size?: InputSize;
  icon?: IconProp;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
  onLeftClick?: () => void;
  onIconClick?: () => void;
  onRightClick?: () => void;
  inputRef?: any;
}

export const Input: React.FC<InputProps> = (props) => {
  const { disabled, size, icon, prepend, append, style, placeholder, children, inputRef,
    onIconClick, onLeftClick, onRightClick, ...restProps } = props;

  const classes = classNames('xd-input-wrapper', {
    'is-disabled': disabled,
    [`input-size-${size}`]: size,
    'input-group': prepend || append,
    'input-group-append': append,
    'input-group-prepend': prepend,
  });

  return (
    <div className={classes} style={style}>
      {prepend && <div onClick={onLeftClick} className="xd-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper" onClick={onIconClick} ><Icon icon={icon} /></div>}
      <input placeholder={placeholder}
        className="xd-input-inner" ref={inputRef}
        disabled={disabled} {...restProps} />
      {children}
      {append &&
        <div onClick={onRightClick} className="xd-input-group-append">{append}</div>
      }
    </div>
  )
}