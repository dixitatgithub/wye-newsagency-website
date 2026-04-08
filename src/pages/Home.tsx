import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import offersData from "../data/offers.json";
import "./Home.css";
import styles from "../modules/FeaturedDeal.module.css";


const offers: Offer[] = offersData;

type Offer = {
    name: string;
    price: string;
    image: string;
    oldPrice?: string;   // optional old price
    featured?: boolean;  // optional featured flag
};
function Home() {
    const location = useLocation();

    // ✅ Handle scroll to offers
    useEffect(() => {
        if (location.hash === "#offers") {
            const el = document.getElementById("offers");
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);

    // Featured Deal
    const featuredOffer = offers.find((o) => o.featured);

    // ✅ Offers animation
    useEffect(() => {
        const cards = document.querySelectorAll(".offer-card");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Array.from(cards).indexOf(entry.target);
                        setTimeout(() => {
                            entry.target.classList.add("show");
                        }, index * 150);
                    }
                });
            },
            { threshold: 0.2 }
        );

        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);



    return (
        <main>
            {/* HERO */}
            <Hero />

            {/* TRUST STRIP */}
            <section className="trust-strip">
                <p>✔ Local Family Shop in Wye</p>
                <p>✔ Great Weekly Offers</p>
                <p>✔ Parcel & Essential Services</p>
            </section>
            {/* FEATURED DEAL */}
            {featuredOffer && (
                <section className={styles["featured-deal"]}>
                    <img src={featuredOffer.image} alt={featuredOffer.name} />
                    <div className={styles["featured-info"]}>
                        <h2>Featured Deal</h2>
                        <h3>{featuredOffer.name}</h3>
                        <p className={styles["old-price"]}>{featuredOffer.oldPrice}</p>
                        <p className={styles.price}>{featuredOffer.price}</p>
                    </div>
                </section>
            )}

            {/* OFFERS */}
            <section id="offers">
                <h2>Special Offers</h2>
                <div className="offers">
                    {offers.map((offer, index) => (
                        <div className={`offer-card ${offer.featured ? "featured" : ""}`} key={index}>
                            <img src={offer.image} alt={offer.name} />
                            {/*}
                            <div className="offer-content">
                                <h3>{offer.name}</h3>
                                <p className="old-price">{offer.oldPrice}</p>

                                <p className="price-badge">{offer.price}</p>
                                {offer.featured && <span className="badge">HOT DEAL</span>}
                            </div>
                            */}
                            <div className="offer-content">
                                <h3>{offer.name}</h3>

                                <div className="price-row">
                                    {offer.oldPrice && (
                                        <span className="old-price">{offer.oldPrice}</span>
                                    )}
                                    <span className="price-badge">{offer.price}</span>
                                </div>

                                {offer.featured && <span className="badge">HOT DEAL</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SERVICES */}
            <section>
                <h2>Our Services</h2>
                <div className="services">
                    <div className="service-card">Newspaper Delivery</div>
                    <div className="service-card">Evri Parcel Services</div>
                    <div className="service-card">DHL Parcel Services</div>
                    <div className="service-card">Photocopying</div>
                    <div className="service-card">Dry Cleaning</div>
                </div>
            </section>

            {/* OPENING HOURS */}
            <section>
                <h2>Opening Hours</h2>
                <p>Mon - Sun: 7:00 AM - 10:00 PM</p>
            </section>

            {/* CONTACT */}
            <section>
                <h2>Contact Us</h2>
                <p>
                    <strong>Address:</strong> 38 Church Street, Wye, Ashford, TN25 5BL
                </p>
                <p>
                    <strong>Phone:</strong> 01233 812271
                </p>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500.914950126042!2d0.9352314766007509!3d51.183790471741524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47decffd7589ba61%3A0x463b92614ee32246!2sWye%20Newsagency%20ltd!5e0!3m2!1sen!2suk!4v1774600536347!5m2!1sen!2suk"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </main>
    );
}

export default Home;