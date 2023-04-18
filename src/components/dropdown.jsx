import { useContext, useState } from "react";
import { GlobalContext } from "../context/global-context";
import Button from "./button";

const items = [
  { id: 1, name: "item 1" },
  { id: 2, name: "item 2" },
  { id: 3, name: "item 3" },
  { id: 4, name: "item 4" },
  { id: 5, name: "item 5" },
  { id: 6, name: "item 6" },
  { id: 7, name: "item 7" },
];

const Dropdown = () => {
  const { dropdown, toggleDropdown } = useContext(GlobalContext);
  return (
    <div className="absolute w-40 right-8">
      <div className=" bg-blue-200 ">
        {dropdown &&
          items.map((item) => (
            <p className="p-4" key={item.id}>
              {item.name}
            </p>
          ))}
        {dropdown && <Button children="checkout" onClick={toggleDropdown} />}
      </div>
    </div>
  );
};

export default Dropdown;
