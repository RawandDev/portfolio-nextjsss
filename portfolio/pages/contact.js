import React, { useState } from "react";
import Confetti from "react-confetti";

function contact() {
  const [confetti, setConfetti] = useState(false);

  function handleConfetti() {
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 5000);
  }

  return (
    <div>
      <div className="text-white mt-32">
        <h1 className="text-7xl sm:text-10xl font-extrabold opacity-10">
          .Contact
        </h1>
      </div>
      <div className="text-white mb-4">
        <p className="text-lg font-medium">
          I'm currently looking for new opportunities. Don't be shy to say Hi!
        </p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="grid grid-cols-1 gap-3 mt-10 md:grid-cols-2 max-w-2xl sm:w-screen sm:place-items-center sm:justify-center sm:items-center">
          <input
            type="text"
            placeholder="Name"
            className="bg-transparent border-b-2 border-white border-opacity-50 text-white focus:outline-none focus:border-opacity-100 transition-all duration-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border-b-2 border-white border-opacity-50 text-white focus:outline-none focus:border-opacity-100 transition-all duration-300"
          />
          <textarea
            placeholder="Your Message"
            className="bg-transparent border-b-2 border-white border-opacity-50 text-white focus:outline-none focus:border-opacity-100 transition-all duration-300 col-span-2 sm:w-96 mt-3 h-20"
          />
        </div>
        <button
          className="bg-white text-black font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-100 hover:text-black focus:outline-none focus:shadow-outline transition-all duration-300 mt-5"
          type="submit"
          onClick={handleConfetti}
        >
          Send
        </button>
      </div>
      {confetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={100}
          recycle={false}
        />
      )}
      {confetti && (
        <div class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 animate-pulse absolute top-10 right-0 left-0">
          <div class="flex items-center justify-center w-12 bg-green-500">
            <svg
              class="w-6 h-6 text-white fill-current"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path>
            </svg>
          </div>
          <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
              <span class="font-semibold text-green-500 dark:text-green-400">
                Success
              </span>
              <p class="text-sm text-gray-600 dark:text-gray-200">
                Email has been sent successfully.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default contact;
