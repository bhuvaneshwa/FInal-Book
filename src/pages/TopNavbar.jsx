import { useState, useEffect } from 'react';

export default function TopNavbar() {
  const texts = [
    "First Time Buyers - Use code BZRL to get 15% off | Free shipping on orders above Rs599",
    "Second text to display",
    "Third text to display",
    // Add more texts as needed
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [currentTextIndex, texts.length]);

  return (
    <div>
      <div className="px-8 py-2 dark:bg-blue-950 dark:text-white">
        <div className="flex items-center justify-center py-2"> {/* Center align horizontally */}
          <div className="text-center"> {/* Center align text */}
            <h1>{texts[currentTextIndex]}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}