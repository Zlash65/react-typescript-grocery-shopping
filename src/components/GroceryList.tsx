import React from "react";

import { GroceryItem } from "../interfaces/item";

interface Props {
  item: GroceryItem;
  completeItem(itemNameToDelete: string): void;
}

export default function GroceryList({ item, completeItem }: Props) {
  return (
    <div className="item flex text-white justify-center items-center">
      <span className="w-24 sm:w-48 h-10 flex items-center pl-2 m-1 text-lg bg-lightseagreen border border-solid border-gray-500 rounded-lg capitalize">{item.itemName}</span>
      <span className="w-24 sm:w-48 h-10 flex items-center pl-2 m-1 text-lg bg-lightseagreen border border-solid border-gray-500 rounded-lg">{item.quantity}</span>
      <button
        className="m-2 p-2 w-12 btn bg-danger hover:bg-danger-hover text-white rounded-lg"
        onClick={() => {
          completeItem(item.itemName);
        }}
      >
        X
      </button>
    </div>
  );
};
