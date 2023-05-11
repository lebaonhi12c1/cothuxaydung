import "@/styles/globals.css";
import { getInitialFirebase } from "@/firebase/config";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CartProvider } from "../components/CartContext";
import UserContext from "@/context/user";
import CartContext from "@/context/cart";

export default function App({ Component, pageProps }) {
  getInitialFirebase();
  if (Component.getLayout) {
    return (
      <CartProvider>
        <UserContext>
          <CartContext>
              <Component.getLayout>
                <Component {...pageProps} />
              </Component.getLayout>
          </CartContext>
        </UserContext>
      </CartProvider>
    );
  }
  return (
    <CartProvider>
     <UserContext> <CartContext><Component {...pageProps} /></CartContext></UserContext>
    </CartProvider>
  );
}
