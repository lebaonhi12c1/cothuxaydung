import "@/styles/globals.css";
import { getInitialFirebase } from "@/firebase/config";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CartProvider } from "../components/CartContext";

export default function App({ Component, pageProps }) {
  getInitialFirebase();
  if (Component.getLayout) {
    return (
      <CartProvider>
        <Component.getLayout>
          <Component {...pageProps} />
        </Component.getLayout>
      </CartProvider>
    );
  }
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
