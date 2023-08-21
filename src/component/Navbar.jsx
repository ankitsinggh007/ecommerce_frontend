import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Navbar = () => {
  const { loading, message, error, user, isAuthectiacted } = useSelector(
    (state) => state.User
  );
  const [quantity, setquantity] = useState(user?.cart?.length);
  useEffect(() => {
    setquantity(user?.cart?.length);
  }, [user, user?.cart]);
  return (
    <nav className="bg-primary h-14 flex justify-evenly items-center">
      <span className="basis-1/4 font-sans  italic font-bold text-2xl text-white">
        <NavLink className="cursor-pointer" to="/">
          Flipkart
        </NavLink>
      </span>
      <span className="basis-2/4 relative">
        <input
          type="text"
          className="w-full placeholder-gray-500 text-gray-700 rounded-sm pl-3 h-9 outline-none drop-shadow-md"
          placeholder="Search..."
        />
        <BiSearchAlt2 className="absolute right-2 top-1/4 text-2xl font-bold text-primary " />
      </span>
      <span className="basis-1/4">
        <NavLink
          to={isAuthectiacted?"/":"/login"}
          className="bg-white text-primary px-10  py-2 font-semibold shadow-md "
        >
          {isAuthectiacted?"Logout":"Login"}
        </NavLink>
      </span>
    </nav>
  );
};

export default Navbar;
