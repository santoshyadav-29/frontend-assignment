import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className=" flex flex-col  justify-between mx-32 items-center p-5 md:flex-row gap-2">
        <h1 className="my-auto rounded-xl p-2 font-bold text-orange-500 text-2xl">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            onlineSTORE
          </button>
        </h1>
        <ul className="flex gap-4 text-xl font-semibold">
          <Link to="/">
            <li className="hover:text-orange-500">Home</li>
          </Link>
          <Link to="/search">
            <li className="hover:text-orange-500">Search</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-orange-500">About</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Header;
