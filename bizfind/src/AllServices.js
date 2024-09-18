import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams, Link } from 'react-router-dom';
import './AllServices.css';

const AllServices = () => {
    const [filteredServices, setFilteredServices] = useState([]);
    const [services, setServices] = useState([]);
    const [filters, setFilters] = useState({
        category: 'All',
        rating: 'All',
    });
    const [searchParams] = useSearchParams();

    // Function to apply filters to services
    const applyFilters = (updatedFilters) => {
        const { category, rating } = updatedFilters;
        const filtered = services.filter((service) => {
            // Normalize category comparison
            const categoryMatch = category === 'All' || service.category.toLowerCase().trim() === category.toLowerCase().trim();
            const ratingMatch = rating === 'All' || service.rating >= parseFloat(rating);
            return categoryMatch && ratingMatch;
        });
        setFilteredServices(filtered);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const updatedFilters = { ...filters, [name]: value };
        setFilters(updatedFilters);
        applyFilters(updatedFilters);
    };

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const query = new URLSearchParams(filters).toString();
                const response = await axios.get(`http://localhost:5000/api/services?${query}`);
                console.log(response.data);
                setServices(response.data);
            } catch (error) {
                console.error('Error fetching services data:', error);
            }
        };
    
        fetchServices();
    }, [filters]); 
    
    // Apply filters when services change
    useEffect(() => {
        applyFilters(filters);
    }, [services]);

    useEffect(() => {
        const categoryFromUrl = searchParams.get('category') ? decodeURIComponent(searchParams.get('category')) : 'All';
        const updatedFilters = { ...filters, category: categoryFromUrl.trim() };
        setFilters(updatedFilters);
        applyFilters(updatedFilters);
    }, [searchParams]);

    return (
        <div>
            <h1>Services</h1>
            <div className="filters">
                <select name="category" onChange={handleFilterChange} value={filters.category}>
                    <option value="All">All Categories</option>
                    <option value="Gym">Gym</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="IT Support">IT Support</option>
                    <option value="Cleaning">Cleaning</option>
                </select>

                <select name="rating" onChange={handleFilterChange} value={filters.rating}>
                    <option value="All">All Ratings</option>
                    <option value="4.0">4.0+</option>
                    <option value="4.5">4.5+</option>
                    <option value="4.8">4.8+</option>
                </select>
            </div>

            <div className="service-list">
                {filteredServices.length > 0 ? (
                    filteredServices.map((service) => (
                        <div key={service._id || service.name} className="service-card">
                            <h3>{service.name}</h3>
                            <p>Category: {service.category}</p>
                            <p>Rating: {service.rating}</p>
                            <Link to={`/services/${encodeURIComponent(service.name)}`}>
                                View Details
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No services found with the current filters.</p>
                )}
            </div>
        </div>
    );
};

export default AllServices;
