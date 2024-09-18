import React, { useState } from "react";
import './MenuBar.css';
import { Link, useNavigate } from "react-router-dom";

const MenuBar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleDropdownToggle = (menuItem) => {
        setOpenDropdown(openDropdown === menuItem ? null : menuItem);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Redirect to a search results page or query the API
        navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    };

    return (
        <div className="menu-bar">
            <ul className="menu">
                {/* Dropdown menus */}
                <li
                    className="menu-item"
                    onMouseEnter={() => handleDropdownToggle("item1")}
                    onMouseLeave={() => handleDropdownToggle(null)}
                >
                    Restaurants
                    {openDropdown === "item1" && (
                        <ul className="dropdown">
                            <li><Link to="/restaurants">All restaurants</Link></li>
                            <li><Link to="/restaurants?category=Italian">Italian restaurants</Link></li>
                            <li><Link to="/restaurants?category=Chinese">Chinese restaurants</Link></li>
                            <li><Link to="/restaurants?category=Mexican">Mexican restaurants</Link></li>
                            <li><Link to="/restaurants?category=Indian">Indian restaurants</Link></li>
                            <li><Link to="/restaurants?category=Thai">Thai restaurants</Link></li>
                        </ul>
                    )}
                </li>
                <li
                    className="menu-item"
                    onMouseEnter={() => handleDropdownToggle("item2")}
                    onMouseLeave={() => handleDropdownToggle(null)}
                >
                    Shops
                    {openDropdown === "item2" && (
                        <ul className="dropdown">
                            <li><Link to="/shops">All shops</Link></li>
                            <li><Link to="/shops?category=Clothing">Clothing shops</Link></li>
                            <li><Link to="/shops?category=Electronics">Electronics shops</Link></li>
                            <li><Link to="/shops?category=Groceries">Groceries shops</Link></li>
                            <li><Link to="/shops?category=Furniture">Furniture shops</Link></li>
                            <li><Link to="/shops?category=Books">Books shops</Link></li>
                        </ul>
                    )}
                </li>
                <li
                    className="menu-item"
                    onMouseEnter={() => handleDropdownToggle("item3")}
                    onMouseLeave={() => handleDropdownToggle(null)}
                >
                    Services
                    {openDropdown === "item3" && (
                        <ul className="dropdown">
                            <li><Link to="/services">All services</Link></li>
                            <li><Link to="/services?category=Plumbing">Plumbing</Link></li>
                            <li><Link to="/services?category=Gym">Gym</Link></li>
                            <li><Link to="/services?category=IT Support">IT Support</Link></li>
                            <li><Link to="/services?category=Cleaning">Cleaning</Link></li>
                        </ul>
                    )}
                </li>
                <li className="menu-item">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

            <form className="search-form" onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button type="submit" className="search-button">Go</button>
            </form>
        </div>
    );
};

export default MenuBar;
