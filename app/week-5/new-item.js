"use client"

import { useState } from "react";

function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    function increment() {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }
    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        const item = {
            name: name,
            quantity: quantity,
            category: category
        };

        console.log(item);
        // alert!!
        alert(`Item: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <div className="text-white p-8 min-h-screen flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-6">Current quantity</h1>
            {/* i hate styling in a non css file for lining som stuff up so this might be scuffed */}
            <div className="flex items-center mb-4 gap-4">
                <button onClick={decrement}
                    className="bg-gray-700 px-4 py-2 rounded-l hover:bg-gray-600 active:bg-gray-800 transition">
                    -
                </button>
                <span className="px-4">{quantity}</span>
                <button onClick={increment}
                    className="bg-gray-700 px-4 py-2 rounded-r hover:bg-gray-600 active:bg-gray-800 transition">
                    +
                </button>

                <select value={category} onChange={(e) => setCategory(e.target.value)}
                    className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition text-white">
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen-foods">Frozen Foods</option>
                    <option value="canned-goods">Canned Goods</option>
                    <option value="dry-goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="item name"
                className="mb-4 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition" />

            <button onClick={handleSubmit}
                className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 active:bg-gray-800 transition">
                Add item
            </button>
        </div>
    );
}

export default NewItem;
