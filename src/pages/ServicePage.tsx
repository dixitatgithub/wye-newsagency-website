import { useParams, Link } from "react-router-dom";
import services from "../data/services";
import styles from "./ServicePage.module.css";

function ServicePage() {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return <p>Service not found.</p>;
    }

    return (
        <div className={styles["service-page"]}>
            <Link to="/" className={styles["back-button"]}>← Back to Home</Link>
            <h1 className={styles["service-title"]}>{service.title}</h1>
            <p className={styles["service-description"]}>{service.description}</p>
            <div className={styles["service-content"]}>
                {service.content.split("\n").map((line, idx) => (
                    <p key={idx}>{line.trim()}</p>
                ))}
            </div>
        </div>
    );
}

export default ServicePage;