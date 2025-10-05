import React from "react";

const Banner = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6">
        
        {/* Left Content */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black  leading-snug">
            Explore the World of Knowledge with{" "}
            <span className="text-green-600">BookVibe</span>
          </h1>
          <p className=" text-lg leading-relaxed">
            Discover thousands of books, learn new skills, and get inspired every day.
            Join our community and start your reading journey today.
          </p>
          <button className="btn text-green-600 text-lg px-8">
            Explore Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end lg:w-1/2">
          <img
            className="w-10/12 md:w-8/12 lg:w-9/12 rounded-2xl shadow-md object-cover"
            src="/books.jpg"
            alt="Stack of books"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
