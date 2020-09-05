import React from 'react';
import './Home.css';
import Product from '../components/Product';

const Home: React.FC = () => {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            <div className="home__row">
                <Product
                    id={1000}
                    title="Jack & Jones Jjesheridan Shirt L/S Noos Chemise en Jean Homme"
                    image="https://images-na.ssl-images-amazon.com/images/I/81g1EnZ1frL._AC_UX466_.jpg"
                    price={27.93}
                    rating={5} />
                <Product
                    id={1000}
                    title="Jack & Jones Jjesheridan Shirt L/S Noos Chemise en Jean Homme"
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    price={27.93}
                    rating={5} />
            </div>
            <div className="home__row">
                <Product
                    id={1000}
                    title="Jack & Jones Jjesheridan Shirt L/S Noos Chemise en Jean Homme"
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    price={27.93}
                    rating={5} />
                <Product
                    id={1000}
                    title="Jack & Jones Jjesheridan Shirt L/S Noos Chemise en Jean Homme"
                    image="https://images-na.ssl-images-amazon.com/images/I/81g1EnZ1frL._AC_UX466_.jpg"
                    price={27.93}
                    rating={5} />
                <Product
                    id={1000}
                    title="Jack & Jones Jjesheridan Shirt L/S Noos Chemise en Jean Homme"
                    image="https://images-na.ssl-images-amazon.com/images/I/81g1EnZ1frL._AC_UX466_.jpg"
                    price={27.93}
                    rating={5} />
            </div>
            <div className="home__row">
                <Product
                    id={1000}
                    title="Jack & Jones Jjesheridan Shirt L/S Noos Chemise en Jean Homme"
                    image="https://images-na.ssl-images-amazon.com/images/I/81g1EnZ1frL._AC_UX466_.jpg"
                    price={27.93}
                    rating={5} />
            </div>
        </div >
    );
};

export default Home;
