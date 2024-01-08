import { ReactNode } from 'react'

interface ListGroupProps {
    items: string[],
    onItemClick: (item: string) => void
}

const ListGroup = ({items, onItemClick}: ListGroupProps) => {
    return (
        <ul className="list-group">
            {items.map((item, index) => {
                return <li className="list-group-item" key={index} onClick={() => {
                    onItemClick(item)
                }}>{item}</li>
            })}
        </ul>
    )
}

export default ListGroup