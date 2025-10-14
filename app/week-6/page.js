import React from "react";
import Link from "next/link";
import ItemList from "../week-6/item-list";

export default function Page() {
    return (
        <main className="bg-gray-900 text-white p-8 min-h-screen">
            <div className="max-w-lg mx-auto">
                <h1 className="text-2xl font-bold mb-6 text-center">Shopping List</h1>
                <ItemList />
                <Link href="/">back</Link>
            </div>
        </main>
    );
}