import React from "react";
import { useParams } from "react-router-dom";

function Category() {
    const { category } = useParams();

    const data: any = {
        drinks: ["Coca-Cola", "Pepsi", "Fanta", "Water"],
        stationery: ["Pens", "Notebooks", "Markers"],
        confectionery: ["Chocolate", "Candy", "Biscuits"],
        cards: ["Birthday Cards", "Anniversary Cards"],
        topup: ["EE Top-Up", "O2 Top-Up", "Vodafone Top-Up"],
        vapes: ["Elf Bar", "Lost Mary"],
        alcohol: ["Beer", "Wine", "Spirits"],
    };

    const items = data[category as keyof typeof data];

    return (
        <main>
            <section>
                <h2>{category?.toUpperCase()}</h2>

                {!items ? (
                    <p style={{ textAlign: "center" }}>No products found.</p>
                ) : (
                    <div className="products">
                        {items.map((item: string, index: number) => (
                            <div className="product-card" key={index}>
                                <h3>{item}</h3>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}

export default Category;