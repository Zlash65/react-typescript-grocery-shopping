import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import GroceryList from "./components/GroceryList";
import { GroceryItem } from "./interfaces/item";

const App: FC = () => {
  const [item, setItem] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [toBuyItem, setToBuyItem] = useState<GroceryItem[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "item") {
      setItem(event.target.value);
    } else {
      setQuantity(Number(event.target.value));
    }
  };

  const addItem = (): void => {
    const newItem = { itemName: item, quantity: quantity };
    setToBuyItem([...toBuyItem, newItem]);
    setItem("");
    setQuantity(0);
  };

  const completeItem = (itemNameToDelete: string): void => {
    setToBuyItem(
      toBuyItem.filter((item) => {
        return item.itemName !== itemNameToDelete;
      })
    );
  };

  return (
    <div className="flex items-center flex-col">
      <div className="bg-red-400 w-full justify-center items-center">
        <h1 className="text-center text-4xl font-bold m-5"> Grocery Shopping</h1><br />
        <div className="flex sm:flex-row justify-center items-center flex-col">
          <input
            className="w-48 h-10 p-2 m-2 border border-solid border-gray-800 rounded-md"
            type="text"
            placeholder="Item"
            name="item"
            value={item}
            onChange={handleChange}
          />
          <input
            className="w-48 h-10 p-2 m-2 border border-solid border-gray-800 rounded-md"
            type="number"
            placeholder="Quantity"
            name="quantity"
            value={quantity}
            onChange={handleChange}
          />
        <button
          className="m-2 p-2 w-24 btn bg-accent hover:bg-accent-hover rounded-md"
          onClick={addItem}>
          Add Item
        </button>
            </div>
      </div>
      <div className="flex items-center pt-12 flex-col">
        {toBuyItem.map((item: GroceryItem, key: number) => {
          return <GroceryList key={key} item={item} completeItem={completeItem} />;
        })}
      </div>
    </div>
  );
};

export default App;
