export default function HeaderComponent() {
  return (
    <header className="bg-blue-800 text-white w-full">
      {/* Row 1: Top Secondary Navigation */}
      <nav className="flex justify-start gap-4 p-2 text-sm">
        <a href="#" className="hover:text-yellow-400">Yardbird</a>
        <a href="#" className="hover:text-yellow-400">Best Buy Outlet</a>
        <a href="#" className="hover:text-yellow-400">Best Buy Business</a>
        <a href="#" className="hover:text-yellow-400">Shop with an Expert</a>
      </nav>

      {/* Row 2: Branding and Search */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <picture>  
            <img
              src="https://www.cysend.com/images/products/best-buy.svg" 
              alt="Icono de bestBuy"
              title="BestBuy es el mejor y mas barato"
              height="50"
              width="100"
            />
          </picture>
          <span className="text-sm">Menu</span> {/* Placeholder para el ícono de menú */}
        </div>
        <div className="flex-grow mx-4">
          <input
            type="search"
            placeholder="Search Best Buy"
            className="w-full p-2 rounded text-black"
          />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm">Rio Hondo Mall</span> {/* Placeholder para ícono de ubicación */}
          <span className="text-sm">Cart</span> {/* Placeholder para ícono de carrito */}
        </div>
      </div>

      {/* Row 3: Bottom Primary Navigation */}
      <nav className="flex justify-between p-2 text-sm">
        <div className="flex gap-4">
          <a href="#" className="hover:text-yellow-400">Back to School</a>
          <a href="#" className="hover:text-yellow-400">Top Deals</a>
          <a href="#" className="hover:text-yellow-400">Deal of the Day</a>
          <a href="#" className="hover:text-yellow-400">Yes, Best Buy Sells That</a>
          <a href="#" className="hover:text-yellow-400">My Best Buy Memberships</a>
          <a href="#" className="hover:text-yellow-400">Credit Cards</a>
          <a href="#" className="hover:text-yellow-400">More</a>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-yellow-400">Account</a>
          <a href="#" className="hover:text-yellow-400">Recently Viewed</a>
          <a href="#" className="hover:text-yellow-400">Order Status</a>
          <a href="#" className="hover:text-yellow-400">Saved Items</a>
        </div>
      </nav>
    </header>
  );
}