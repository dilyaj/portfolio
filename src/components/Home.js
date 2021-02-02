import React from 'react';
import image from "../28.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="gradient-red-purple" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-yellow-800 font-bold cursive leading-none lg:leading-snug home-name">Hello, I'm Dilya.</h1>
            </section>
        </main>
    )
}
