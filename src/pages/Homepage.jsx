import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Product from "../layout/Product";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (

    <div className="layout min-h-[100vh] bg-[var(--background-color)]">
      <div className="container mx-auto">
        <Header />
        <div className="hero-section   md:flex justify-center ">
          <section className="flex justify-center items- flex-col gap-5 ">
            <h1 className=" text-start text-5xl font-bold max-w-[20ch] ">
              Simplyfing <b className="text-orange-500">Market</b> Through
              E-Commerse
            </h1>
            <p className=" text-start opacity-30 max-w-[60ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              impedit facere odio earum perferendis quaerat possimus
              repellendus.
            </p>
            <button onClick={
              () => {
                navigate("/search")
              }
            }
              className="
             bg-orange-400 hover:bg-orange-500
              text-white px-5 py-2 rounded-md w-[20ch]"
            >
              Shop Now
            </button>
          </section>

          <img
            src="./background.png"
            alt="onlineSTORE"
            className="hidden lg:block w-[50%]"
          />
        </div>

        <Product
          api="https://fakestoreapi.com/products?limit=3"
          text="Featured Products"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
