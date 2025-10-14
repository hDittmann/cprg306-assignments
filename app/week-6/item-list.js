"use client"

import Item from "./item";
import { useState } from "react";
import items from "./items.json";

function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        } else if (sortBy === "group-by-category") {
            return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
        }
    });

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Sort by:</h2>
                <div className="flex gap-2">
                    <button onClick={() => setSortBy("name")} className={`px-4 py-2 rounded ${sortBy === "name"
                        ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>
                        Name
                    </button>
                    <button onClick={() => setSortBy("category")} className={`px-4 py-2 rounded ${sortBy === "category"
                        ? "bg-blue-500 text-white": "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>
                        Category
                    </button>
                    <button onClick={() => setSortBy("group-by-category")} className={`px-4 py-2 rounded ${sortBy === "group-by-category"
                        ? "bg-blue-500 text-white": "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>
                        Group by Category
                    </button>
                </div>
            </div>
            <ul className="space-y-2">
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ItemList;