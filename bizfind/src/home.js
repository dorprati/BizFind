import React from "react";
import './home.css';

const Home = () => {
    const topResturants = [
        {name: "The Gourmet kitchen", rating:4.8},
        {name: "Sushi World", rating: 4.6},
        {name: "Pizza Palace", rating: 4.7},
    ];

    const topServices = [
        {name: "Ace Plumbers", rating: 4.7},
        {name: "Quick Fix Mechanics", rating: 4.8},
        {name: "Sparkle Cleaning Co.", rating: 4.6},
    ];

    const topShops = [
        {name: "Tech Emporium", rating:4.9 },
        {name: "Fashion Hub", rating: 4.5},
        {name: "Green Grocers", rating:4.4},
    ];

    return(
        <div className="home">
            <h2>Welcome to Business Finder</h2>
            <p>Find the best local resturants, shops, and services in your area!</p>

            <div className="section">
                <h3>Top Resturants</h3>
                <div className="items">
                    {topResturants.map((resturant, index) =>(
                        <div key={index} className="item-card">
                            <h4>{resturant.name}</h4>
                            <p>Rating: {resturant.rating}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section">
                <h3>Top Shops</h3>
                <div className="items">
                    {topShops.map((shop, index) => (
                        <div key={index} className="item-card">
                            <h4>{shop.name}</h4>
                            <p>Rating: {shop.rating}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section">
                <h3>Top Services</h3>
                <div className="items">
                    {topServices.map((services,index) => (
                        <div key={index} className="item-card">
                            <h4>{services.name}</h4>
                            <p>Rating: {services.rating}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;