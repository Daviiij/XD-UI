import React, { useState, useContext } from 'react'
import classNames from 'classnames';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';
import Icon from '../Icon/icon';
import Transition from "../Transition/transition";

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className }) => {
  const context = useContext(MenuContext)
  const openSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpend = (index && context.mode == 'vertical') ? openSubMenus.includes(index) : false
  const [menuOpen, setOpen] = useState<boolean>(isOpend)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical'
  });
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!menuOpen)
  }

  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => setOpen(toggle), 250);
  }

  const clickEvents = context.mode == 'vertical' ? { onClick: handleClick } : {}
  const hoverEvents = context.mode != 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) }
  } : {}

  const childrenComponent = React.Children.map(children, (child, i) => {
    const childElement = child as React.FunctionComponentElement<MenuItemProps>;
    if (childElement.type.displayName === 'MenuItem') {
      return React.cloneElement(childElement, {
        index: `${index}-${i}`
      });
    }
    console.error("Warning: Menu has a child witch is not a MenuItem Component");
    return null;
  });
  const subMenuClasses = classNames('xd-submenu', {
    'menu-opened': menuOpen
  });

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className='submenu-title' {...clickEvents}>
        {title}
        <Icon icon='angle-down' className='arrow-icon' />
      </div>
      <Transition in={menuOpen} timeout={300} animation="zoom-in-top">
        <ul className={subMenuClasses}>
          {childrenComponent}
        </ul>
      </Transition>
    </li>
  )
}

SubMenu.displayName = "SubMenu";
export default SubMenu