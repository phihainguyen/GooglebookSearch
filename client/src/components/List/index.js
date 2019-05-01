//the React object is imported from react module, this built in module and object is imported but even tho we are not using this object directly when we compile our code because there is a refence to the React we will need it to be imported
import React from "react";
import "./style.css";

// This component exports both the List and ListItem components

export const List = ({ children }) => (
  <ul className="list-group">{children}</ul>
);

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
