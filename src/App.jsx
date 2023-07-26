import "./App.css";
// App.js


import React, { useState } from "react";
import FoodBox from "./components/FoodBox";
import foodsJson from "./foods.json";
import AddFoodForm from "./components/AddFoodForm";
import FoodList from "./components/FoodList";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const handleAddFood = (newFoodItem) => {
    const addedFood = [...foods, newFoodItem];

    setFoods(addedFood)
  }

  // Function to delete a food item
  const handleDeleteFood = (foodId) => {
    const updatedFoods = foods.filter((food) => food.id !== foodId);
    setFoods(updatedFoods);
  };


  return (
    <div>
      {/* Render the AddFoodForm component*/ }
      <AddFoodForm addFood={handleAddFood}/>

      {/* Render a list of FoodBox components */}
      {foods.map((food) => (
        <FoodBox key={food.id} food={food} onDelete={handleDeleteFood} />
      ))}
    </div>
  );
}

export default App;
