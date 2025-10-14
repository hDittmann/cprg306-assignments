"use client"

import { useState } from "react";

function NewItem() {
  const [quantity, setQuantity] = useState(1);
    
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
    return (
        <div className="text-white p-8 min-h-screen flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-6">Current quantity</h1>
            <div className="flex items-center mb-4">
                <button
                    onClick={decrement}
                    className="bg-gray-700 px-4 py-2 rounded-l hover:bg-gray-600 active:bg-gray-800 transition"
                >
                    -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                    onClick={increment}
                    className="bg-gray-700 px-4 py-2 rounded-r hover:bg-gray-600 active:bg-gray-800 transition"
                >
                    +
                </button>
            </div>
        </div>
    );
}
export default NewItem;
