import { createContext, useRef } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

const AccordianContext = createContext();

function Paragraf1({ children, value, onChange, ...props }) {
  const [select, setSelect] = useState(value);

  useEffect(() => {
    onChange?.(select);
  }),
    [select];

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ select, setSelect }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  );
}

export function AcccordianItem({ children, value, trigger, ...props }) {
  const { select, setSelect } = useContext(AccordianContext);
  const open = select === value;

  const ref = useRef(null);

  return (
    <li className="border-b" {...props}>
      <header
        role="button"
        onClick={() => setSelect(open ? null : value)}
        className="flex justify-between items-center p-4 font-bold text-white poppins"
      >
        {trigger}
        <IoChevronDownSharp
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all duration-500 ease-in-out"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="p-2 pb-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}

export default Paragraf1;
