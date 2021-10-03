import { useState } from "react";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="rounded-md bg-gray-100 p-5 mb-5 flex flex-wrap gap-4">
      <section className="text-center ml-auto">
        <button
          onClick={() => setQuantity((quantity) => quantity + 1)}
          className="bg-white rounded-full w-8 h-8 font-bold text-sm mb-3"
        >
          +
        </button>
        <h3 className="text-sm font-bold mb-3">{quantity}</h3>
        <button
          onClick={() => setQuantity((quantity) => Math.max(quantity - 1, 0))}
          className="bg-white rounded-full w-8 h-8 font-bold text-sm"
        >
          -
        </button>
      </section>
      <img
        className="w-28 h-28 rounded-md mr-auto"
        src={item.image}
        alt={item.name}
      />
      <section className="flex-1">
        <header className="flex mb-1">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <h3 className="text-blue-800 text-right font-bold ml-auto text-lg">
            CAD {item.price}
          </h3>
        </header>

        <p>{item.description}</p>
      </section>
    </main>
  );
};

export default CartItem;
