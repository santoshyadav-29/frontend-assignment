const Header = () => {
  return (
    <>
      <nav className=" flex justify-center gap-20 mx-32 items-center p-5">
        <h1 className="my-auto rounded-xl p-2 font-bold text-orange-500 text-2xl bg-red-50">
          onlineSTORE
        </h1>
        <ul className="flex gap-4 text-xl font-semibold">
          <a href="./">Home</a>
          <a href="./">Products</a>
          <a href="./">About</a>
        </ul>
      </nav>
    </>
  );
};

export default Header;
