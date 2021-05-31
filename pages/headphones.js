import Header from '../Components/Home/Header';
import Footer from '../Components/Footer';
import Desc from '../Components/Home/Desc';
import Categories from '../Components/Home/Categories';

const Headphones = () => {
    return (
        <div className="headphones">
            <Header />
            <h1 className="headphones-title">Headphones</h1>
            <Categories />
            <Desc />
            <Footer />
        </div>
    );
};

export default Headphones;
