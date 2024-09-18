import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
    const [results, setResults] = useState({ restaurants: [], shops: [], services: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const query = new URLSearchParams(useLocation().search).get('query');

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await axios.get(`/api/search?query=${encodeURIComponent(query)}`);
                setResults(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching search results');
                setLoading(false);
            }
        };

        fetchResults();
    }, [query]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Search Results for "{query}"</h1>
            <h2>Restaurants</h2>
            <ul>
                {results.restaurants.map((restaurant) => (
                    <li key={restaurant._id}>{restaurant.name} - Rating: {restaurant.rating}</li>
                ))}
            </ul>
            <h2>Shops</h2>
            <ul>
                {results.shops.map((shop) => (
                    <li key={shop._id}>{shop.name} - Rating: {shop.rating}</li>
                ))}
            </ul>
            <h2>Services</h2>
            <ul>
                {results.services.map((service) => (
                    <li key={service._id}>{service.name} - Rating: {service.rating}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;
