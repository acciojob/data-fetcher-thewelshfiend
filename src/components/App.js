import React from "react";
import './../styles/App.css';
import { useState, useEffect } from "react";

const App = () => {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('https://dummyjson.com/products');
            const json = await data.json();

            setProductData(json);
        }

        fetchData();
    }, []);

    return (
        <div>
            {/* Do not remove the main div */}
            {productData ? (
                <pre>
                    {productData}
                </pre>
            ) : (
                <Loader />
            )}
        </div>
    )
}

export default App

const Loader = () => {
    return (
        <div>Loading...</div>
    )
}