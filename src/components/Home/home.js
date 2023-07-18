import Header from "../Header/header";

import Caroseul from "../caroseul/caroseul";
import Category from "../categories/categories";
import Footer from "../footer/Footer";
import Product from "../Shop/shop";
import RecentProduct from "../recentProduct/recentproduct";
import Service from "../service/service";
import TopBar from "../topbar/topbar";

function Home() {
    return <>
    <TopBar/>
        <Header />
        <Caroseul />
        <Category/>
        <RecentProduct />
        {/* <Product /> */}
        <Service />
        <Footer />


    </>
}

export default Home;