import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  //event handler

  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 && <p>No Items in List</p>}
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
