import React from "react";
import './RecentReviews.css';

const RecentReviews = () =>{
    const reviews = [
        {
            reviewer: "Alice Johnson",
            business: "The Gourmet Kitchen",
            rating: 4.8,
            comment: "Amazing food and great service! Highly recommend."
        },
        {
            reviewer: "John Smith",
            business: "Tech Emporium",
            rating: 4.9,
            comment: "Best place to buy tech gadgets. Fast service and great prices."
          },
          {
            reviewer: "Linda Green",
            business: "Ace Plumbers",
            rating: 4.7,
            comment: "Quick and professional plumbing service. Will use again."
          }
    ];

    return (
        <div className="recent-reviews">
          <h3>Recent Reviews</h3>
          <div className="reviews-list">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <h4>{review.business}</h4>
                <p><strong>{review.reviewer}</strong> rated it {review.rating} stars</p>
                <p>"{review.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      );
};

export default RecentReviews;