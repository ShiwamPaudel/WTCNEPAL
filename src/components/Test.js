



import { useState } from 'react';

const Test = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);

  const handleSubmenu = (index) => {
    setSubmenuIndex(index);
  };

  const handleSubmenuHide = () => {
    setSubmenuIndex(null);
  };

  let submenu2 = [
    {
      name: "Biochemistry Instruments and Reagents",
      sub:[
        {
          menu:"hello1"
        }
      ]
    },
    {
      name: "Blood Gas & Electrolyte Analyzer",
      sub:[
        {
          menu:"hello2"
        }
      ]
    },
    {
      name: "Glucometer",
      sub:[
        {
          menu:"hello3"
        }
      ]  
    },
    {
      name: "Hematology Instruments and Reagents",
      sub:[
        {
          menu:"hello1"
        }
      ]
    },
    {
      name: "Liquid, Sample and Cell Handling",
      sub:[
        {
          menu:"hello1"
        }
      ]
    },
    {
      name: "Immunoassay Analyzers",
      sub:[
        {
          menu:"hello1"
        }
      ]
    },
    {
      name: "ELISA and Flexible C. Difficile Testing",
      sub:[
        {
          menu:"hello1"
        }
      ]
    },
    {
      name: "Vacutainer and View Finder",
      sub:[
        {
          menu:"hello1"
        }
      ]
    },
    {
      name: "Histopathology Instruments",
      sub:[
        {
          menu:"hello1"
        }
      ]
    },
    {
      name: "Protein Analyzer",
      sub:[
        {
          menu:"hello1"
        }
      ]
    },
  ];

  return (
    <ul className="list-none">
      {submenu2.map((item, index) => (
        <li key={index} onMouseEnter={() => handleSubmenu(index)} onMouseLeave={handleSubmenuHide} className="relative capitalize border-b-[0.5px] border-b-[white]/[0.3] hover:text-[#0000CC] bg-[#1CABD3] text-white py-[20px] px-[15px] transition-colors duration-300 ease-out font-semibold cursor-pointer">
          {item.name}
          {submenuIndex === index && (
            <ul className="absolute top-full left-0 bg-white w-full py-2">
              {item.sub.map((subItem, subIndex) => (
                <li key={subIndex} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{subItem.menu}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};


export default Test