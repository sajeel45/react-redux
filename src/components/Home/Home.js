import iphone from "../../assets/iphone/iphone.png";
import cart from "../../assets/cart/cart.jpg";
import "./Home.css";
const Home = () => {
    return(
        <div>
            <div className="add-to-cart">
                <img src={cart} alt="cart"/>
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="image-wrapper item">
                    <img src={iphone} alt="iphone"/>
                </div>
                <div className="text-wrapper item">
                    <span>IPhone</span>
                    <br />
                    <span>1000$</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
};

export default Home;