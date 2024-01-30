import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown className='text-purpleSnapp-300' /> : <GoChevronLeft className='text-purpleSnapp-300' />}
      </span>
    );

    return (
      <div key={item.id} >
        <div
          className="flex font-bold  text-md gap-3 p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {icon}
          {item.label}
        </div>
        {isExpanded && <div className="border-b p-5 text-right">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x  border-t rounded">{renderedItems}</div>;
}

