import React from "react";

const Regularlist = ({ items, resourceName, itemComponent: ItemComponent }) => {
  return (
    <>
      {items.map((item) => (
        <ItemComponent key={item.id} {...{ [resourceName]: item }} />
      ))}

      {/* {items.map((item) => (
        <ItemComponent key={item.id} {...item }} />
      ))} */}
    </>
  );
};

export default Regularlist;
