import { useEffect, useState } from "react";
import { useHistory } from "react-router";

import axios from "axios";

import CartItem from "./CartItem";

const CheckoutPage = () => {
  const history = useHistory();
  const [cartItems, setCartItems] = useState([]);

  const getItems = async () => {
    const { data: items } = await axios.get("http://localhost:3001/items");
    setCartItems(items);
  };

  useEffect(getItems, []);

  const subtotal = cartItems.reduce((curr, prev) => prev.price + curr, 0);
  const tax = subtotal * 0.15;

  if (!cartItems.length) return <h1>Loading...</h1>;

  return (
    <main className="container">
      <header className="mb-4">
        <button
          onClick={() => history.push("./main")}
          className="bg-blue-500 mb-4 text-white font-semibold px-4 py-1 rounded-md mr-5"
        >
          Back to store
        </button>
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
      </header>
      <main className="md:flex gap-8">
        <main className="flex-1">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <div
            onClick={() => history.push("./main")}
            className="mb-8 border-8 border-gray-200 cursor-pointer text-center rounded-md p-6 border-dashed"
          >
            <h2 className="text-gray-300 font-bold text-xl">
              + Add more items
            </h2>
          </div>
        </main>
        <aside style={{ flexBasis: "34%" }}>
          <div className="rounded-lg bg-gray-200 p-5">
            <h1 className="text-2xl font-bold mb-6">Order Summary</h1>

            <section className="">
              {cartItems.map((item) => (
                <div key={item.id} className="flex mb-1">
                  <h3 className="text-md font-semibold mr-4">{item.name}</h3>
                  <p className="text-md font-semibold ml-auto">
                    CAD {item.price}
                  </p>
                </div>
              ))}
            </section>

            <hr className="border-gray-400 mb-2 mt-4" />
            <div className="flex mb-2">
              <h3 className="text-md font-semibold mr-4">Subtotal</h3>
              <p className="text-md font-semibold ml-auto">CAD {subtotal}</p>
            </div>
            <div className="flex mb-6">
              <h3 className="text-md font-semibold mr-4">Tax (15 %)</h3>
              <p className="text-md font-semibold ml-auto">
                CAD {tax.toFixed(2)}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-gray-500 text-md font-semibold mb-1">
                Discount code:
              </h4>
              <input type="text" className="px-2 outline-none text-gray-500" />
            </div>

            <div className="flex mb-4">
              <h3 className="text-lg font-semibold mr-4">Total</h3>
              <p className="text-lg font-semibold ml-auto">
                CAD {(subtotal + tax).toFixed(2)}
              </p>
            </div>

            <button className="bg-blue-700 p-2 text-center w-full text-white font-bold text-lg rounded-md">
              Proceed to Checkout
            </button>
          </div>
        </aside>
      </main>
    </main>
  );
};

export default CheckoutPage;
