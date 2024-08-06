
import React, { useState, useEffect, useRef } from 'react';
import "./NewsAlert.css"
export default function NewsAlert() {
    const [isHovered, setIsHovered] = useState(false);
    const [newsItems, setNewsItems] = useState([]);
    const tickerRef = useRef(null);

    useEffect(() => {
        // Example: Fetch news data from an API
        const fetchNews = async () => {
            try {
                const response = await fetch('http://localhost:1000/api/news/fetchNews');
                const data = await response.json();
                setNewsItems(data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div
            className="ticker-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`ticker ${isHovered ? 'paused' : ''}`}
                ref={tickerRef}
            >
                <div className="ticker-content">
                    {newsItems.map((item, index) => (
                        <div className="tick" key={index}>
                            <a className='t-content' href={item.link}>{item.text}</a>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
}
