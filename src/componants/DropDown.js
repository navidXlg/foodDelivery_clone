import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { GoChevronRight } from 'react-icons/go';

function Dropdown({ options, value, onChange, title, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="bg-white px-2 py-4 border-b-2 cursor-pointer hover:bg-gray-100 border-gray-300"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });


  return (
    <div ref={divEl} className ={`w-full text-gray-600 border-2 py-4 relative ${className}`}>
      <div
        className="flex justify-between mx-2 items-center cursor-pointer"
        onClick={handleClick}>
        {value?.label || title }
        {isOpen ? <GoChevronRight/> : <GoChevronDown/>}
      </div>
      {isOpen && <div className="absolute  z-30 w-full rounded-lg shadow-2xl border-2 max-h-56 overflow-y-scroll  top-full">{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
