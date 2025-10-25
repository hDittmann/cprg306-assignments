"use client"

import { useState } from "react";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <main className="bg-gray-900 text-white p-8 min-h-screen">
            <div className="max-w-lg mx-auto">
                <h1 className="text-2xl font-bold mb-6 text-center">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />
                <Link href="/">back</Link>
            </div>
        </main>
    );
}