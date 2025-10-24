import ProductCard from './ProductCard';

// This component displays all products in a grid
const ProductsContainer = ({ products, addToCart }) => (
  <div className="product-grid">
    {/* Render each product as a card */}
  {products.map(product => (
    <ProductCard key={product.id} product={product} addToCart={addToCart} />
  ))}
</div>

);

export default ProductsContainer;