function item({ name, quantity, category }) {
    return (
        <li className="bg-gray-800 p-3 rounded border-l-4 border-blue-500">
            <div className="font-medium">{name}</div>
            <div className="text-sm text-gray-400 mt-1">
                Quantity: {quantity} • Category: {category}
            </div>
        </li>
    );
}

export default item;