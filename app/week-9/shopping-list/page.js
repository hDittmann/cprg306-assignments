"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from './items.json';
import { useUserAuth } from "../../contexts/AuthContext";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (user === null) {
      router.replace('/week-9');
    }
  }, [user, router]);


  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  function handleItemSelect(item) {
    if (!item || !item.name) return;
    // Remove size/amount after comma, remove emoji characters, and trim
    let cleaned = item.name.split(',')[0].trim();
    // Remove most common emoji ranges
    cleaned = cleaned.replace(/([\p{Emoji_Presentation}\p{Emoji}\u200d])/gu, '').trim();
    // Collapse multiple spaces
    cleaned = cleaned.replace(/\s+/g, ' ');
    setSelectedItemName(cleaned);
  }

  return (
    <main className="bg-gray-900 text-white p-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Shopping List</h1>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 bg-gray-800 p-4 rounded">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>

          <div className="md:w-1/2 bg-gray-800 p-4 rounded">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>

        <div className="mt-6">
          <Link href="/week-9">back</Link>
        </div>
      </div>
    </main>
  );
}
