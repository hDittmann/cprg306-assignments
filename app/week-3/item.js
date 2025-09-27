function item({ name, quantity, category }) {
    return (
        <li>
            <span className="font-bold text-lg mr-4">{name} </span>
            <span className="">{quantity} </span>
            <span className="">{category}</span>
        </li>
    );
}

export default item;