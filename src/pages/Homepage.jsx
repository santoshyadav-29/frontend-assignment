import Header from "../Components/Header"

const Homepage = () => {
  return (
    <div className="layout min-h-[100vh] bg-[var(--background-color)]">
      <div className="container mx-auto">
        <Header />
        <section className="flex justify-center items-center flex-col">
          <h1 className="text-4xl font-bold">Welcome to our Homepage</h1>
          <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>

          </section>
          <section>
            <img src="https://cdn.search.brave.com/serp/v1/static/brand/373c0fe6934b2f59b99a51a3a3c2d5091535c1d19cb361ed6d110ff0c4927b58-brave-logo-light.svg" alt="" />
          </section>
        </div>

      
    </div>
  )
}

export default Homepage
