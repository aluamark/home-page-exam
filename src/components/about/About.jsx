import MerchCarousel from "./MerchCarousel";

export default function About() {
  return (
    <section className="d-lg-flex py-5 gap-4 gap-md-5 gap-lg-4 my-4">
      <div className="w-100 mb-4 mb-lg-0">
        <MerchCarousel />
      </div>
      <div className="d-flex justify-content-center align-items-center w-100">
        <div>
          <h2 className="text-center">Why Choose Us?</h2>
          <p>
            Our shop offers the widest selection of Kpop merchandise, exclusive
            items, and the latest releases from your favorite bands. Experience
            fast shipping, great prices, and exceptional customer service.
          </p>
        </div>
      </div>
    </section>
  );
}
