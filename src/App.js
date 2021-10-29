import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home';
import RestaurantCard from './components/RestaurantCard';

export const RestaurantContext = createContext();

export default function App() {
  const [restaurants, setRestaurants] = useState();
  return (
    <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
    <div className="Food Finder">
      <Home />
    </div>
    </ RestaurantContext.Provider >
  );
}

