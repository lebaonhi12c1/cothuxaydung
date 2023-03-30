import Headhtml from '@/components/Headhtml';
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
function DefaultLayout({children}) {
    return (
        <div>
            <Headhtml/>
            <div>
                <Navbar/>
                {children}
                <Footer/>
            </div>
        </div>
    );
}

export default DefaultLayout;