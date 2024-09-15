import React, { useState } from "react";
import './MenuBar.css';

const MenuBar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const handleDropdownToggle = (menuItem) => {
        setOpenDropdown(openDropdown === menuItem ? null : menuItem);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("Search query:", searchQuery); // You can handle search logic here
    };

    return (
        <div className="menu-bar">
            <ul className="menu">
                <li
                    className="menu-item"
                    onMouseEnter={() => handleDropdownToggle("item1")}
                    onMouseLeave={() => handleDropdownToggle(null)}
                >
                    Restaurants
                    {openDropdown === "item1" && (
                        <ul className="dropdown">
                            <li>Restaurant 1</li>
                            <li>Restaurant 2</li>
                            <li>Restaurant 3</li>
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
                            <li>Shop 1</li>
                            <li>Shop 2</li>
                            <li>Shop 3</li>
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
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                        </ul>
                    )}
                </li>
                <li className="menu-item">
                    Contact
                </li>
            </ul>

            {/* Search Bar */}
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
