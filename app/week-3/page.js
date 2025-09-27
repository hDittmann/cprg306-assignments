// - List element
// - Checkbox element
// - Description/Definition element
// Users response: "Want to see groceries clearly laid out, and showing what to get/not to get, as well as what the item is, such as brand, type of cheese/milk, etc.
// Reusability: Can reuse list and element anywhere, and checkbox, while having less use cases, is arguably more important

// What is/are the use case(s) of the UI element(s)? and who uses it?
// - List element: easily and clearly see what groceries are needed
// - Checkbox element: mark items as found/notfound
// - Description/Definition element: see what the item is, such as brand, type of cheese/milk, etc. Cause theres alotta types
// - Devs will reuse list and description/definition elements in many, many places. Checkbox is less common, but still useful
//    - List can be used to list out contact info, pricing, employees, products, etc.
//    - Description/Definition can be used to describe anything, such as product info, employee info, etc.
//    - Checkbox can be used in forms, task lists, settings pages, surveys, etc.

// What is a minimal definition of done?
// - List element: Lists simply the names of items
// - Description/Definition element: Single sentence description of item
// - Checkbox element: Can be checked

// What information will change in each application of the code?
// - List element: The items in the list??
// - Description/Definition element: Amount of text, and the text itself??
// - Checkbox element: Whether it is checked or not??

// Is there any information or styling that will be static on each invocation of the code?
// Honestly no, if i have to reuse it it should follow the styling of the page its on

// Will this be probably used in other files? if yes than it should be it's own component file
// I would like to, so I'll split them

// Can the component be broken up into smaller elements? if yes, how does it make sense to split it up into pieces?
// List can, into lists within lists within lists... As well as list and listItem. Description can, probably into some kind of header and body, and checkbox no.


import React from "react";
import Link from "next/link";
import ItemList from "../week-3/item-list";

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