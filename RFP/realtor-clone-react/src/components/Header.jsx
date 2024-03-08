import React from "react";

export default function Header() {
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      {/* here we are making the border of the header 
       "sticky" is used here to keep the header on top visible even if you scroll up and down
      and "z-50" is used to keep the header always on the top (z-1 means up and z-0 means bottom) */}
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">{/*"max-w-6xl mx-auto" is used to keep the padding in the maximize screen */}
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li>Home</li>
            <li>Offers</li>
            <li>Sign In</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
