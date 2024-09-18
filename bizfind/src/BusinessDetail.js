import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BusinessDetail.css';

const BusinessDetail = () => {
    const { name } = useParams(); // Extract business name from URL
    const [business, setBusiness] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBusiness = async () => {
            try {
                // Fetch business details by name
                const response = await axios.get(`http://localhost:5000/api/business?name=${encodeURIComponent(name)}`);
                setBusiness(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching business details');
                setLoading(false);
            }
        };

        fetchBusiness();
    }, [name]); // The effect runs when the `name` changes

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="business-detail">
            {business ? (
                <div>
                    <h1>{business.name}</h1>
                    <p><strong>Category:</strong> {business.category}</p>
                    <p><strong>Price Range:</strong> {business.priceRange}</p>
                    <p><strong>Rating:</strong> {business.rating}</p>
                    <p><strong>Description:</strong> {business.description || 'No description available'}</p>
                </div>
            ) : (
                <p>Business not found</p>
            )}
        </div>
    );
};

export default BusinessDetail;
