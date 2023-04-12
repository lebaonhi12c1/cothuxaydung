import Headhtml from '@/components/Headhtml';
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { CartProvider } from '@/components/CartContext'; // Thêm dòng này

function DefaultLayout({children}) {
    return (
        <div>
            <Headhtml/>
            <div>
                <Navbar/>
                <CartProvider> 
                    {children}
                </CartProvider> 
                <Footer/>
            </div>
        </div>
    );
}

export default DefaultLayout;
