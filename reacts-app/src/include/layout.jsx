import React from 'react';
import Nav from './nav';
import Header from './header';
import Footer from './footer';

function Layout(props) {
    return ( 
        <>
            <Nav />
            <Header title={props.title} />
                {props.children}
            <Footer />
        </>
     );
}

export default Layout;