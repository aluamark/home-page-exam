import bg1 from "./bg1.png";

export default function Banner() {
  return (
    <section
      id="hero"
      className="h-75 h-lg-50 bg-overlay"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="overlay"></div>

      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="text-center">
          <h1 className="fw-bold text-white">Discover the Latest Kpop Merch</h1>
          <p className="text-white fs-4">
            Find exclusive albums, lightsticks, and merchandise from your
            favorite kpop groups.
          </p>
          <button className="btn btn-danger btn-lg btn-hero">Shop Now</button>
        </div>
      </div>
    </section>
  );
}
