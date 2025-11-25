"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../../contexts/AuthContext";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (user === null) {
      router.replace("/week-10");
    }
  }, [user, router]);

  useEffect(() => {
    async function loadItems() {
      if (!user) return;
      const loadedItems = await getItems(user.uid);
      setItems(loadedItems);
    }

    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (!user) return;
    const id = await addItem(user.uid, newItem);
    const itemWithId = { id, ...newItem };
    setItems((prev) => [...prev, itemWithId]);
  };

  function handleItemSelect(item) {
    if (!item || !item.name) return;
    let cleaned = item.name.split(",")[0].trim();
    cleaned = cleaned.replace(/([\p{Emoji_Presentation}\p{Emoji}\u200d])/gu, "").trim();
    cleaned = cleaned.replace(/\s+/g, " ");
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
          <Link href="/week-10">back</Link>
        </div>
      </div>
    </main>
  );
}
