import React, { Fragment, useState } from "react";
import "./Drawer.scss";
import Backdrop from "../Ui/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";
import {MdArrowForward,MdClear} from 'react-icons/md'

const links = [
  { to: "/", label: "Main page", exact: true },
  { to: "/newPost", label: "Create post", exact: false },
  { to: "/about", label: "About", exact: false },
  { to: "/сontact", label: "Contacts", exact: false }
];

const Drawer = () => {
  const [state, changeState] = useState({ show: false });
  const clsDrawer = ["Drawer", state.show ? "show" : ""];
  const clsButton = ["MenuHandler", state.show ? "active" : ""];

  return (
    <Fragment>
      <nav className={clsDrawer.join(" ")}>
        <ul>
          {links.map((elem, index) => (
            <li key={index}>
              <NavLink to={elem.to} exact={elem.exact} onClick={() => changeState({show:false})} >
                {elem.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className={clsButton.join(" ")}
        onClick={() => changeState({ show: !state.show })}
      >
        {state.show ? <MdClear/>  : <MdArrowForward/> }
      </button>
      {state.show && <Backdrop handler={() => changeState({show:false})}/>}
    </Fragment>
  );
};

export default Drawer;
