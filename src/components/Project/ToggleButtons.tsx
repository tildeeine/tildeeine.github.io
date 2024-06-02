import React from 'react';

interface ToggleButtonsProps {
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
}

const ToggleButtons: React.FC<ToggleButtonsProps> = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <div className="relative flex justify-start w-56 my-4">
            <div
                className={`absolute top-0 bottom-0 w-1/2 bg-primary rounded-lg transition-all duration-500 ${selectedCategory === "personal" ? "translate-x-full" : ""
                    }`}
                style={{
                    left: selectedCategory === "technical" ? "0%" : "0%",
                }}
            />
            <div className="border relative z-10 flex border-primary rounded-lg w-full">
                <button
                    onClick={() => setSelectedCategory("technical")}
                    className={`font-bold py-2 px-4 rounded-l-lg w-1/2 ${selectedCategory === "technical" ? "text-background" : "text-primary"
                        }`}
                >
                    Technical
                </button>
                <button
                    onClick={() => setSelectedCategory("personal")}
                    className={`font-bold py-2 px-4 rounded-r-lg w-1/2 ${selectedCategory === "personal" ? "text-background" : "text-primary"
                        }`}
                >
                    Personal
                </button>
            </div>
        </div>
    );
};

export default ToggleButtons;
