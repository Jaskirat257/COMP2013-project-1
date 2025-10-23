import ProductCard from './ProductCard';

const ProductsContainer = ({ products, addToCart }) => (
  <div className="products">
    {products.map(product => (
      <ProductCard key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
);

export default ProductsContainer;