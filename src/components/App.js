// import "babel-polyfill";
import 'regenerator-runtime/runtime'
import React from "react";
import './../styles/App.css';
import { useState, useEffect } from "react";

const App = () => {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('https://dummyjson.com/products');
            const json = await data.json();

            setProductData(JSON.stringify(json, null, 2));
        }

        fetchData();
    }, []);

    return (
        <div>
            {/* Do not remove the main div */}
            {productData ? (
                <>
                    <h1>Data Fetched from API</h1>
                    <pre>
                        {productData}
                    </pre>
                </>
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