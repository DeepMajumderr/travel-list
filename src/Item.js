export default function Item({ item, onDeleteItem, onToggleItem }) {

    return (
        <li>
            <input type="checkbox" value={item.packed} onChange={() => onToggleItem(item.id)} />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                <span style={{ marginRight: "0.5rem" }}>{item.quantity}</span>
                {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}
