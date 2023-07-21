import Header from "../Components/Header";
import Product from "./Product";

const Homepage = () => {
  return (
    <div className="layout min-h-[100vh] bg-[var(--background-color)]">
      <div className="container mx-auto">
        <Header />
        <div className="hero-section flex  justify-center ">
          <section className="flex justify-center items- flex-col gap-5 ">
            <h1 className=" text-start text-5xl font-bold w-[20ch] ">
              Simplyfing <b className="text-orange-500">Market</b> Through
              E-Commerse
            </h1>
            <p className=" text-start opacity-30 max-w-[60ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              impedit facere odio earum perferendis quaerat possimus
              repellendus.
            </p>
            <button className="bg-orange-500 text-white px-5 py-2 rounded-md">
              Shop Now
            </button>
          </section>

          <img
            src="./background.png"
            alt="onlineSTORE"
            className="block w-[50%] "
          />
        </div>
        <Product
          api="https://fakestoreapi.com/products?limit=3"
          text="showcase"
        />
      </div>
    </div>
  );
};

export default Homepage;
