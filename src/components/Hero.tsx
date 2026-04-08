import heroImage from "../assets/hero.jpg";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
    const navigate = useNavigate();

    const handleSeeOffers = () => {
        navigate("/#offers");
    };
    return (

        <section className="hero">
            <img src={heroImage} alt="Shop" />

            <div className="hero-text fade-in">
                <h1>Welcome to Patel Convenience Store</h1>
                <p>Your local shop for groceries, snacks & daily essentials</p>

                <button onClick={handleSeeOffers} className="hero-button">
                    See Offers
                </button>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator" onClick={handleSeeOffers}>
                ↓
            </div>
        </section>
    );
}

export default Hero;