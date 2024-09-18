import React from "react";
import { Card, Row, Col, Typography } from 'antd';
import './home.css';

const { Title, Paragraph } = Typography;

const Home = () => {
    const topRestaurants = [
        { name: "The Gourmet Kitchen", rating: 4.8 },
        { name: "Sushi World", rating: 4.6 },
        { name: "Pizza Palace", rating: 4.7 },
    ];

    const topServices = [
        { name: "Ace Plumbers", rating: 4.7 },
        { name: "Quick Fix Mechanics", rating: 4.8 },
        { name: "Sparkle Cleaning Co.", rating: 4.6 },
    ];

    const topShops = [
        { name: "Tech Emporium", rating: 4.9 },
        { name: "Fashion Hub", rating: 4.5 },
        { name: "Green Grocers", rating: 4.4 },
    ];

    return (
        <div className="home">
<Title level={2}>
    Welcome to Business Finder
</Title>
            <Paragraph>Find the best local restaurants, shops, and services in your area!</Paragraph>

            <div className="section">
                <Title level={3}>Top Restaurants</Title>
                <Row gutter={[16, 16]}>
                    {topRestaurants.map((restaurant, index) => (
                        <Col xs={24} sm={12} lg={8} key={index}>
                            <Card title={restaurant.name} bordered>
                                <p>Rating: {restaurant.rating}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <div className="section">
                <Title level={3}>Top Shops</Title>
                <Row gutter={[16, 16]}>
                    {topShops.map((shop, index) => (
                        <Col xs={24} sm={12} lg={8} key={index}>
                            <Card title={shop.name} bordered>
                                <p>Rating: {shop.rating}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <div className="section">
                <Title level={3}>Top Services</Title>
                <Row gutter={[16, 16]}>
                    {topServices.map((service, index) => (
                        <Col xs={24} sm={12} lg={8} key={index}>
                            <Card title={service.name} bordered>
                                <p>Rating: {service.rating}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default Home;
