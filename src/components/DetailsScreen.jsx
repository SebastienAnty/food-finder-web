import { RestaurantContext } from "../App";
import React, { useContext, useEffect, useState } from "react";



export default function DetailsScreen() {
    const { selectedRest, restaurants, setRestaurants } = useContext(RestaurantContext);
    const [thisRest, setThisRest] = useState()
    useEffect(() => {
        if(restaurants, setRestaurants) {
            const _thisRest = restaurants.find(r => r.id === selectedRest)
            setThisRest(_thisRest)
        }
    }, [selectedRest, restaurants])
    if(!thisRest) {
        return 
    }
}
