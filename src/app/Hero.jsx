import React from 'react';

export default function Hero() {
  return (
    <div className="bg-blue-200 py-24 text-center">
      <h1 className="text-5xl font-extrabold">Headline</h1>
      <p className="mt-8 text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere illum dolorem reprehenderit obcaecati praesentium nemo vitae autem temporibus, vel fuga impedit eum iste debitis quasi quod sit voluptate tenetur voluptatum!</p>
      <button className="mt-12 inline-block px-6 py-3 rounded-full border-solid bg-violet-500 text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
        Call To Action
      </button>
    </div>
  );
}
