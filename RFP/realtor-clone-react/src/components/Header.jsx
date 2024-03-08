import { useLocation, useNavigate } from "react-router-dom";
{
  /**useLocation is used to get the router address and make logic accordingly  */
}

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  {
    /*function to check what is the current route and match it and make the changes to the header  */
  }
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      {/* here we are making the border of the header 
       "sticky" is used here to keep the header on top visible even if you scroll up and down
      and "z-50" is used to keep the header always on the top (z-1 means up and z-0 means bottom) */}
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        {/*"max-w-6xl mx-auto" is used to keep the padding in the maximize screen */}
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/sign-incursor-pointer ") &&
                "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/sign-in")}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
