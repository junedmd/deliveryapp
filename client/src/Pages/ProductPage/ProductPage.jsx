import React, { useEffect, useState } from 'react';
import './ProductPage.css';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Sidebar from '../../Components/Sidebar/Sidebar';

function ProductPage() {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedRating, setSelectedRating] = useState(0);

    // Fetch products from Fake Store API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFiltered(data);
            })
            .catch((error) => console.error('Failed to fetch products:', error));
    }, []);

    // Apply filters and search
    useEffect(() => {
        let result = products;

        // Search filter
        if (searchTerm) {
            result = result.filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Category filter
        if (selectedCategory) {
            result = result.filter((product) => product.category === selectedCategory);
        }

        // Rating filter
        if (selectedRating > 0) {
            result = result.filter(
                (product) => Math.floor(product.rating.rate) >= selectedRating
            );
        }

        setFiltered(result);
    }, [searchTerm, selectedCategory, selectedRating, products]);

    const uniqueCategories = [...new Set(products.map((p) => p.category))];

    return (
        <div className="product-page">
            <Sidebar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                categories={uniqueCategories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
            />

            <main className="main-content">

                <div className='product-scroll'>
                    <div className="toolbar">
                        <span>Showing {filtered.length} products</span>
                    </div>

                    <div className="product-grid">
                        {filtered.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ProductPage;
