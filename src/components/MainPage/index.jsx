import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import axios from "axios";

import MainItem from "./MainItem"

const MainPage = () => {
  const history = useHistory();
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const { data: items } = await axios.get("https://checkout-44.herokuapp.com/items");
    setItems(items);
  };

  useEffect(getItems, []);

  const num_items = 0;
  return (
    <main className="container">
      <header className="mb-4 h-14">
        <h1 className="text-3xl font-bold float-left">Welcome to the store</h1>
        <div className="ml-40 mt-2 md:w-32 lg:w-48 float-left">
          <input type="text" className="w-80 bg-gray-400 px-2 outline-none text-white placeholder-white rounded-md" placeholder="Search for products..."/>
        </div>
        <button
            onClick={() => history.push("./checkout")}
            className="bg-blue-500 mb-4 text-white font-semibold px-4 py-1 rounded-md mr-5 float-right"
        >
          Shopping Cart ({num_items})
        </button>
      </header>
        <main className="md:flex">
          {items.map((item) => (
            <MainItem key={item.id} item={item} />
          ))}
      </main>
    </main>
  );
};

export default MainPage;
