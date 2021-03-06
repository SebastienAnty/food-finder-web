import { useContext, useState, useEffect } from "react";
import { RestaurantContext } from "../App";
import RestaurantCard from "./RestaurantCard";
import { useContext } from "react";


export default function RandomRestaurant(){
    const { restaurants } = useContext(RestaurantContext)
    const [randomIndex, setRandomIndex] = useState(0);
    const getRandom = () => {
        const _randomIndex = Math.floor(Math.random() * restaurants.length);
        setRandomIndex(_randomIndex)
    }
    useEffect(getRandom, [restaurants])
}