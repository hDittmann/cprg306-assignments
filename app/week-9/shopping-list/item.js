function Item({ name, quantity, category, onSelect }) {
    return (
        <li onClick={onSelect} className="bg-gray-800 p-3 rounded border-l-4 border-blue-500 cursor-pointer hover:bg-gray-700">
            <div className="font-medium">{name}</div>
            <div className="text-sm text-gray-400 mt-1">
                Quantity: {quantity} • Category: {category}
            </div>
        </li>
    );
}

export default Item;
