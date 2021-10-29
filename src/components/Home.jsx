import { useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import { RestaurantContext } from "../App";

export default function Home() {
  const { restaurants, setRestaurants } = useContext(RestaurantContext);
  useEffect( async () => {
    try {
      const res = await fetch(`https://bocacode-intranet-api.web.app/restaurants`)
      const data = await res.json(res)
      setRestaurants(data)
    } catch (err) {
      alert(err)
    }
  }, []);
  return (
    <>
      <h1>Home</h1>
      {!restaurants
        ?<h2>Loading...</h2>
        : <div>
            {restaurants.map(rest => <RestaurantCard key={rest.id} rest={rest} />)}
          </div>
    }
    </>
  );
}

// { {!restaurant ? (
//     <h2>Loading...</h2>
//   ) : (
//     restaurant.map((rest) => {
//     //   <RestaurantCard key={rest.id} rest={rest} />
//     })
//   )} }
