import { useEffect, useRef } from "react";
// import { Link } from 'react-router-dom'; // Import Link for navigation
import "./events_resp.css"; // Ensure this path is correct
import Navbar from "../../../components/Navbar";

const Events = () => {
  const cardSectionRef = useRef(null);
  let scrollInterval;
  let scrollDirection = 1; // 1 for right, -1 for left

  const startAutoScroll = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const scrollSpeed = isMobile ? 20 : 10; // Adjust speed for mobile

    scrollInterval = setInterval(() => {
      const { scrollLeft, scrollWidth, clientWidth } = cardSectionRef.current;

      // Change direction if it reaches the end
      if (scrollLeft + clientWidth >= scrollWidth || scrollLeft === 0) {
        scrollDirection *= -1;
      }

      cardSectionRef.current.scrollBy({
        left: scrollDirection,
        behavior: "instant",
      });
    }, scrollSpeed);
  };

  useEffect(() => {
    startAutoScroll();

    const handleMouseOver = () => clearInterval(scrollInterval);
    const handleMouseOut = () => startAutoScroll();

    const cardSectionElement = cardSectionRef.current;
    cardSectionElement.addEventListener("mouseover", handleMouseOver);
    cardSectionElement.addEventListener("mouseout", handleMouseOut);

    return () => {
      clearInterval(scrollInterval);
      cardSectionElement.removeEventListener("mouseover", handleMouseOver);
      cardSectionElement.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  const events = [
    "COMPETITIVE PROGRAMMING",
    "AI WORKSHOP",
    "ROBOTICS",
    "CYBERSECURITY",
    "WEB DEVELOPMENT",
    "GAME DEVELOPMENT",
    "DATA SCIENCE",
    "BLOCKCHAIN",
  ];

  const handleMouseMove = (e) => {
    const { clientWidth } = cardSectionRef.current;
    const { clientX } = e;

    const boundary = 50; // Pixels from edge to start scrolling
    if (clientX < boundary) {
      scrollDirection = -1; // Scroll left
    } else if (clientX > clientWidth - boundary) {
      scrollDirection = 1; // Scroll right
    }
  };

  return (
    <div className="events">
      <Navbar />
      <h1 className="h1">EVENTS</h1>
      <div
        className="card-section"
        ref={cardSectionRef}
        onMouseMove={handleMouseMove}
      >
        {events.map((title, index) => (
          <div className="card" key={index}>
            <div className="custom-div">{title}</div>
            {/* <div className="card-title">{title}</div> */}
          </div>
        ))}
      </div>

      <a className="workbutt button-85">EVENTS</a>
    </div>
  );
};

export default Events;
