import ProductCard from "./ProductCard";
import { products } from "./products";

export default function Featured() {
  return (
    <section className="w-100 py-5">
      <h2 className="text-center py-3">Featured Products</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products.map((product, index) => (
          <div key={index} className="col">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
