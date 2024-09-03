import React, { useState } from 'react';
import styles from './evein.module.css';

// Import event components
import Football from './Football';
import Basketball from './Basketball';
import Cricket from './Cricket';
import Tennis from './Tennis';
import Chess from './Chess';
import Ludo from './Ludo';

// Import images
import footballimg from '../images/football.png'
import baskimg from '../images/basketball.png'
import chessimg from '../images/chess.png'
import crickimg from '../images/cricket.png'
import ludoimg from '../images/ludo.png'
import tennisimg from '../images/tennis.png'


// Mapping for event components
const eventComponents = {
  football: <Football />,
  basketball: <Basketball />,
  cricket: <Cricket />,
  tennis: <Tennis />,
  ludo: <Ludo />,
  chess: <Chess />,
  kabaddi: <Chess />,
  race: <Chess />,
  volleyball: <Chess />,
};

// Mapping for sport images
const sportImages = {
  football: footballimg,
  basketball: baskimg,
  cricket: crickimg,
  tennis: tennisimg,
  ludo:ludoimg,
  chess:chessimg,
  kabaddi: chessimg,
  race: ludoimg,
  volleyball:crickimg 
};

const Evein = () => {
  const [selectedSport, setSelectedSport] = useState("football");

  const handleIconClick = (sportKey) => {
    setSelectedSport(sportKey);
  };

  return (
    <div className={styles.sportsPage}>
        <h1 className={styles.title}>Events</h1>
      {/* Section 1: Sports Icons */}
      <div className={styles.sportsIcons}>
        {Object.keys(eventComponents).map((sportKey) => (
            <div className={styles.icobox}>
          <div
            key={sportKey}
            className={styles.sportIcon}
            onClick={() => handleIconClick(sportKey)}
            style={{ 
              backgroundImage: `url(${sportImages[sportKey]})`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
          </div>
          <p className={styles.sportName}>{sportKey.charAt(0).toUpperCase() + sportKey.slice(1)}</p>
          </div>
        ))}
      </div>

      {/* Section 2: Event Description */}
      <div className={styles.eventDescription}>
        {selectedSport ? (
          <div className={styles.descriptionBox}>
            {eventComponents[selectedSport]}
          </div>
        ) : (
          <div className={styles.placeholder}>
            <h1>Infintio 2024</h1>
            
            <p>Select a sport to see the description</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Evein;
