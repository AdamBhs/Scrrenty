"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const DropdownList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="filter-trigger">
          <figure>
            <Image
              src="/assets/icons/hamburger.svg"
              alt="hamburger"
              width={14}
              height={14}
            />
            Most recent
          </figure>
          <Image
            src="/assets/icons/arrow-down.svg"
            alt="arrow down"
            width={20}
            height={20}
          />
        </div>
      </div>
      {isOpen && (
        <ul className="dropdown">
          {["Most recent", "Most viewed", "Most liked"].map((item) => (
            <li key={item} className="list-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
