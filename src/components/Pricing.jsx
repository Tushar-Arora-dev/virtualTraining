import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import { useState } from 'react';

const Pricing = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  function handleSelectedCard(id) {
    setSelectedCard(id);
  }
  function handleDeselectedCard() {
    setSelectedCard(null);
  }
  return (
    <div className="mt-20 cursor-pointer" id="pricing">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Services
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className={`w-full sm:w-1/2 lg:w-1/3 p-2`}
            onMouseEnter={() => handleSelectedCard(option.id)}
            onMouseLeave={handleDeselectedCard}
          >
            <div
              className={`p-10 border border-cyan-700 rounded-xl transition-all ${
                option.id === selectedCard ? 'scale-125 bg-black' : ''
              }`}
            >
              {selectedCard === option.id ? (
                <>
                  <h2 className="text-3xl my-3">Details</h2>
                  <p> {option?.flippedText}</p>
                </> // Wrap the string in a valid JSX element
              ) : (
                <>
                  <p className="text-4xl mb-8">
                    <span className="text-cyan-500">{option.title}</span>
                    {option.title === 'Pro' && (
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-xl mb-4 ml-2">
                        (Most Popular)
                      </span>
                    )}
                  </p>
                  <ul>
                    {option.features.map((feature, index) => (
                      <li key={index} className="mt-8 flex items-center">
                        <CheckCircle2 />
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-cyan-900 border border-cyan-900 rounded-lg transition duration-200"
              >
                Know More
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
