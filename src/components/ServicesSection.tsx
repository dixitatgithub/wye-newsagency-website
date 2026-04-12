import { Link } from "react-router-dom";
import services from "../data/services";
import styles from "./ServicesSection.module.css";

function ServicesSection() {
    return (
        <section className={styles["services-section"]}>
            <h2>Our Services</h2>
            <div className={styles["services-grid"]}>
                {services.map((service) => (
                    <Link
                        to={`/services/${service.slug}`}
                        key={service.slug}
                        className={styles["service-card"]}
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "contain",
                                marginBottom: "15px",
                            }}
                        />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default ServicesSection;