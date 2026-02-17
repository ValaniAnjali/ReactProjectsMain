
// The problem of shared state props drilling :  
// component composition
// sharing  state with Context
// Managing complex state with reducer

// Context Api
import Header from "./components/Header";
import Shop from "./components/Shop";
import { DUMMY_PRODUCTS } from "./dummy-products.js";
import Product from "./components/Product.jsx";
import { CartContext } from "./store/shopping-cart-context.jsx";
import CartContextProvider from "./store/shopping-cart-context.jsx";
function App() {
  

  return (
    <>
      <CartContextProvider>
        <Header/>
      <Shop >
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
      </CartContextProvider>
    </>
  );
}

export default App;

// use Contet to share values and state updating function in multiple function without using props drilling