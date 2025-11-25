"use client"

import { useEffect, useState } from "react";

export async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return [];
    const data = await res.json();
    return data.meals || [];
  } catch (err) {
    console.error("fetchMealIdeas error:", err);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (!ingredient) {
      setMeals([]);
      return () => (mounted = false);
    }

    fetchMealIdeas(ingredient)
      .then((result) => {
        if (mounted) setMeals(result || []);
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      mounted = false;
    };
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Meal Ideas</h2>
      {!ingredient && <div className="text-gray-400">Select an item to see meal ideas.</div>}

      {ingredient && (
        <div>
          <h3 className="text-md mb-2">Results for {ingredient}</h3>
          {meals.length === 0 && (
            <div className="text-gray-400">No meals found for this ingredient.</div>
          )}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {meals.map((m) => (
              <li key={m.idMeal} className="bg-gray-700 p-3 rounded flex items-center gap-3">
                {m.strMealThumb && (
                  <div className="rounded overflow-hidden">
                    <img
                      src={m.strMealThumb}
                      alt={m.strMeal}
                      width={64}
                      height={64}
                      className="object-cover rounded"
                    />
                  </div>
                )}
                <div className="font-medium">{m.strMeal}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
