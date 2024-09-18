import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; 
import './AllShops.css'; 

const AllShops = () => {
    const [shops, setShops] = useState([]); 
    const [filteredShops, setFilteredShops] = useState([]);
    const location = useLocation();
    const [filters, setFilters] = useState({
        category: 'All',
        price: 'All',
        rating: 'All',
    });


    const fetchShops = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/shops?${query}'); 
            setShops(response.data);
            setFilteredShops(response.data); 
        } catch (error) {
            console.error('Error fetching shop data:', error);
        }
    };

    // Function to apply filters
    const applyFilters = (filterValues) => {
        const { category, price, rating } = filterValues;
        const filtered = shops.filter((shop) => {
            const categoryMatch = category === 'All' || shop.category === category;
            const priceMatch = price === 'All' || shop.price === price;
            const ratingMatch = rating === 'All' || shop.rating >= parseFloat(rating);
            return categoryMatch && priceMatch && ratingMatch;
        });
        setFilteredShops(filtered);
    };

    // Function to handle manual filter changes (dropdowns)
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedFilters = { ...filters, [name]: value };
        setFilters(updatedFilters);
        applyFilters(updatedFilters);  // Apply filters after setting the new state
    };

    // useEffect to handle URL query parameters on load or URL change
    useEffect(() => {
        fetchShops(); // Fetch shop data when the component mounts

        const query = new URLSearchParams(location.search);
        const category = query.get('category') || 'All';
        const price = query.get('price') || 'All';
        const rating = query.get('rating') || 'All';

        const newFilters = { category, price, rating };
        setFilters(newFilters);  // Update filter state
        applyFilters(newFilters);  // Apply filters immediately after setting state
    }, [location.search]);

    return (
        <div className="all-shops-container">
            <h1>Shops</h1>

            <div className="filters">
                <select name="category" onChange={handleFilterChange} value={filters.category}>
                    <option value="All">All Categories</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Books">Books</option>
                </select>

                <select name="price" onChange={handleFilterChange} value={filters.price}>
                    <option value="All">All Prices</option>
                    <option value="$">$ (Cheap)</option>
                    <option value="$$">$$ (Moderate)</option>
                    <option value="$$$">$$$ (Expensive)</option>
                    <option value="$$$$">$$$$ (Luxury)</option>
                </select>

                <select name="rating" onChange={handleFilterChange} value={filters.rating}>
                    <option value="All">All Ratings</option>
                    <option value="4.0">4.0+</option>
                    <option value="4.5">4.5+</option>
                    <option value="4.8">4.8+</option>
                </select>
            </div>

            {/* Scrolling List of Shops */}
            <div className="shop-list">
                {filteredShops.length > 0 ? (
                    filteredShops.map((shop) => (
                        <div key={shop.id} className="shop-card">
                            <h3>{shop.name}</h3>
                            <p>Category: {shop.category}</p>
                            <p>Price: {shop.priceRange}</p>
                            <p>Rating: {shop.rating}</p>
                        </div>
                    ))
                ) : (
                    <p>No shops found with the current filters.</p>
                )}
            </div>
        </div>
    );
};

export default AllShops;
