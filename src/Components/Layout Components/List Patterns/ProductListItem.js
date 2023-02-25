import React from "react";

const ListItem = ({ products }) => {
  const {
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  } = products;
  return (
    <div>
      <h3>{title}</h3>
      <p>
        <strong>Price: </strong>
        {price}
      </p>
      <p>
        <strong>Category:</strong>
        {category}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
      <img src={image} alt={title} />
      <p>
        <strong>Rating: </strong> {rate}
      </p>
    </div>
  );
};

export default ListItem;
