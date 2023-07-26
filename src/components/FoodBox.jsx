// src/components/FoodBox.jsx

import React from "react";

const FoodBox = ({ food, onDelete }) => {
  const { id, name, calories, image, servings } = food;
  const totalCalories = calories * servings;

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} style={{ height: "200px"}} />
      <p>Calories: {calories}</p>
      <p>Servings {servings}</p>
      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default FoodBox;

  




