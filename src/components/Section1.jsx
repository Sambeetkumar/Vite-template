import React from "react";

export default function Section1() {
  return (
    <section className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-3 gap-4 my-4">
      <div className="col-span-2 text-lg md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis beatae
        eius quis inventore facere officiis est aliquam harum? Libero
        accusantium numquam necessitatibus maxime culpa corporis unde fugiat
        deserunt ducimus tenetur. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Veniam voluptas eos deserunt ipsum voluptatem expedita
        architecto est fuga, ex dignissimos incidunt omnis iure optio totam
        facere explicabo unde libero dolores!
      </div>
      <div className="col-span-2 md:col-span-1">
        <img
          src="https://plus.unsplash.com/premium_photo-1678962944044-94630ddea4a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="image1"
          className="bg-auto h-[80%] w-[100%] rounded-lg"
        />
      </div>
    </section>
  );
}
