import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border border-blue-300 rounded-xl mb-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-white overflow-hidden">
      <button 
        className="w-full py-5 flex justify-between items-center text-left px-6 transition-all duration-300 group hover:bg-gradient-to-r from-blue-100 to-blue-50"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-xl font-semibold text-blue-900 group-hover:text-blue-700 transition-colors duration-200 group-hover:translate-x-1">
          {question}
        </span>
        <ChevronDown 
          className={`w-6 h-6 transition-transform duration-300 ${
            isOpen 
              ? "rotate-180 text-blue-600 scale-110" 
              : "text-blue-400 group-hover:scale-125"
          }`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? "max-h-[800px] opacity-100 translate-y-0" 
            : "max-h-0 opacity-0 -translate-y-4"
        }`}
      >
        <p className="text-blue-800 px-6 pb-6 leading-relaxed bg-blue-50 rounded-b-xl">
          {answer}
        </p>
      </div>
    </div>
  );
};