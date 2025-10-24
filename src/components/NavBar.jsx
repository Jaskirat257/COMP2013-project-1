// This component shows the app title and cart count
const NavBar = ({ cartCount }) => (
  <nav>
    <h1>Groceries App</h1>
    <p>Hello, shopper!</p>
    {/* Cart icon with item count */}
    <div className="cart-icon">
      🛒 <span>{cartCount}</span>
    </div>
  </nav>
);
export default NavBar;