import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './AllResturants.css';

const AllRestaurants = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [filters, setFilters] = useState({
        category: 'All',
        price: 'All',
        rating: 'All',
    });
    const location = useLocation();

    const fetchRestaurants = async (filterValues) => {
        try {
            const query = new URLSearchParams(filterValues).toString();
            const response = await axios.get(`http://localhost:5000/api/restaurants?${query}`);
            setFilteredRestaurants(response.data);
        } catch (error) {
            console.error('Error fetching restaurants:', error);
        }
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedFilters = { ...filters, [name]: value };
        setFilters(updatedFilters);
        fetchRestaurants(updatedFilters);
    };

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const category = query.get('category') || 'All';
        const price = query.get('price') || 'All';
        const rating = query.get('rating') || 'All';

        const newFilters = { category, price, rating };
        setFilters(newFilters);
        fetchRestaurants(newFilters);
    }, [location.search]);

    return (
        <div className="all-restaurants-container">
            <h1>Restaurants</h1>

            <div className="filters">
                <select name="category" onChange={handleFilterChange} value={filters.category}>
                    <option value="All">All Categories</option>
                    <option value="Italian">Italian</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Indian">Indian</option>
                    <option value="Thai">Thai</option>
                </select>

                <select name="price" onChange={handleFilterChange} value={filters.price}>
                    <option value="All">All Prices</option>
                    <option value="$">$ (Cheap)</option>
                    <option value="$$">$$ (Moderate)</option>
                    <option value="$$$">$$$ (Expensive)</option>
                </select>

                <select name="rating" onChange={handleFilterChange} value={filters.rating}>
                    <option value="All">All Ratings</option>
                    <option value="4.0">4.0+</option>
                    <option value="4.5">4.5+</option>
                    <option value="4.8">4.8+</option>
                </select>
            </div>

            <div className="restaurant-list">
                {filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map((restaurant) => (
                        <div key={restaurant._id} className="restaurant-card">
                            <h3>{restaurant.name}</h3>
                            <p>Category: {restaurant.category}</p>
                            <p>Price: {restaurant.priceRange}</p>
                            <p>Rating: {restaurant.rating}</p>
                        </div>
                    ))
                ) : (
                    <p>No restaurants found with the current filters.</p>
                )}
            </div>
        </div>
    );
};

export default AllRestaurants;
