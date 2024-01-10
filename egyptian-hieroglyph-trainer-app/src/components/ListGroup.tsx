import { useState } from "react";

interface ListGroupProps {
    items: string[],
    onItemClick: (item: string) => void
}

const ListGroup = ({items, onItemClick}: ListGroupProps) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    return (
        <ul className="list-group">
            {items.map((item, index) => {
                return <li className={index === selectedIndex ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'} key={index} onClick={() => {
                    setSelectedIndex(index)
                    onItemClick(item)
                }}>{item}</li>
            })}
        </ul>
    )
}

export default ListGroup