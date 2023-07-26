// src/components/AddFoodForm.jsx


import { useState } from "react";

function AddFoodForm({addFood}) {
    
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleNameInput = e => setName(e.target.value);
  
    const handleImageInput = e => setImage(e.target.value);
  
    const handleCaloriesInput = e => setCalories(e.target.value);
  
    const handleServingsInput = e => setServings(e.target.checked);


    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = { name, image, calories, servings };
       
        addFood(newFood); 
        setName("");
        setImage("");
        setCalories("");
        setServings("");
      };

      
         
  
    return (
      <div className="food">
        <h4>Add Food</h4>
        <form onSubmit={handleSubmit}> 
          <label>Name </label>
          <input 
            type="text" 
            name="name" 
            value={name} 
            onChange={handleNameInput} 
          />
  
          <label>Image </label>
          <input 
            type="text" 
            name="image" 
            value={image} 
            onChange={handleImageInput} 
          />
  
          <label>Calories</label>
          <input 
            type="number" 
            name="calories" 
            value={calories} 
            onChange={handleCaloriesInput} 
          />
  
          <label>Servings </label>
          <input 
            type="number" 
            name="servings" 
            checked={servings} 
            onChange={handleServingsInput} 
          />
  
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
  
  export default AddFoodForm;
  