import React from "react";

const MainItem = ({ item }) => {
    return (
    <main className="rounded-md bg-gray-100 p-5 mb-5 gap-4 mr-24">
        <img
        className="w-62 h-62 rounded-md mr-auto"
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
        <div class="w-56 flex-none">{item.description}</div>
        </section>
        <button
        className="bg-blue-500 mb-4 mt-2 text-white font-semibold px-4 py-1 rounded-md mr-5"
        >
        Add to Cart
        </button>
    </main>
  );
};

export default MainItem;