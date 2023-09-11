import React from "react";
import { MenuList } from "../helpers/MenuList";
import { upcoming } from "../helpers/upcoming";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div>
      <div className="menu">
        <h1 className="menuTitle">Ongoing Events</h1>
        <div className="menuList">
          {MenuList.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                date={menuItem.date}
              />
            );
          })}
        </div>
      </div>
      <div className="menu">
        <h1 className="menuTitle">Upcoming Events</h1> {/* Updated heading for clarity */}
        <div className="menuList">
          {upcoming.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                date={menuItem.date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;


