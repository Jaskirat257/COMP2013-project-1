const NavBar = ({ cartCount }) => (
  <nav>
    <h1>Groceries App</h1>
    <p>Hello, shopper!</p>
    <div className="cart-icon">
      🛒 <span>{cartCount}</span>
    </div>
  </nav>
);
export default NavBar;