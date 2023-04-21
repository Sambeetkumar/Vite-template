import React from "react";

export default function Section2() {
  return (
    <div className="my-4 flex flex-col gap-8">
      <h1 className="text-2xl md:text-3xl bg-gray-700 w-full p-2">Lorem</h1>
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        neque sunt quis eos fugit recusandae itaque nesciunt quos eaque saepe
        rerum consequuntur minima, molestiae veniam, voluptates ex, illo quo
        minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
        dolor vero eveniet debitis sequi maiores, distinctio rerum at ut alias,
        consectetur doloremque totam itaque quis tempora reiciendis, cumque
        minus dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quasi explicabo ipsam nam quae nisi ab labore ad sint quaerat sapiente,
        repellat quo necessitatibus porro consequuntur incidunt veniam ratione
        aut eveniet?
      </p>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit:
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-between my-4 mx-8">
          <ul className="list-disc text-lg flex flex-col space-y-4">
            <li>item1</li>
            <li>item1</li>
            <li>item1</li>
            <li>item1</li>
            <li>item1</li>
            <li>item1</li>
          </ul>
          <img
            src="https://plus.unsplash.com/premium_photo-1676321046449-3acb3cd47e81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="image2"
            className="bg-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
