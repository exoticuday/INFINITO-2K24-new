import { useState } from "react";
import "./events_inside.css";

// Ensure to import images. Replace these paths with the correct paths to your images.
import img1 from "../../../../public/2.jpg";

const EventsInside = () => {
  const [activeSection, setActiveSection] = useState("tessaract");

  const showContent = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div>
      <main>
        <aside className="sidebar">
          <div className="sidebar-content">
            <div className="sidebar-items">
              <a href="#" onMouseOver={() => showContent("tessaract")}>
                <div className="sidebar-item">
                  <img
                    src={img1}
                    alt="TESSARACT 2.0"
                    className="sidebar-icon"
                  />
                  <h2>TESSARACT 2.0</h2>
                </div>
              </a>
              <a href="#" onMouseOver={() => showContent("gameforge")}>
                <div className="sidebar-item">
                  <img src={img1} alt="GAME FORGE" className="sidebar-icon" />
                  <h2>GAME FORGE</h2>
                </div>
              </a>
              <a href="#" onMouseOver={() => showContent("algotrek")}>
                <div className="sidebar-item">
                  <img src={img1} alt="ALGOTREK" className="sidebar-icon" />
                  <h2>ALGOTREK</h2>
                </div>
              </a>
              <a href="#" onMouseOver={() => showContent("simulatemoon")}>
                <div className="sidebar-item">
                  <img
                    src={img1}
                    alt="SIMULATE TO THE MOON"
                    className="sidebar-icon"
                  />
                  <h2>SIMULATE TO THE MOON</h2>
                </div>
              </a>
              <a href="#" onMouseOver={() => showContent("webmosiac")}>
                <div className="sidebar-item">
                  <img src={img1} alt="WEBMOSIAC" className="sidebar-icon" />
                  <h2>WEBMOSIAC</h2>
                </div>
              </a>
              {/* Duplicate items for smooth scrolling */}
              <a href="#" onMouseOver={() => showContent("tessaract")}>
                <div className="sidebar-item">
                  <img
                    src={img1}
                    alt="TESSARACT 2.0"
                    className="sidebar-icon"
                  />
                  <h2>TESSARACT 2.0</h2>
                </div>
              </a>
              <a href="#" onMouseOver={() => showContent("gameforge")}>
                <div className="sidebar-item">
                  <img src={img1} alt="GAME FORGE" className="sidebar-icon" />
                  <h2>GAME FORGE</h2>
                </div>
              </a>
              <a href="#" onMouseOver={() => showContent("algotrek")}>
                <div className="sidebar-item">
                  <img src={img1} alt="ALGOTREK" className="sidebar-icon" />
                  <h2>ALGOTREK</h2>
                </div>
              </a>
              <a href="#" onMouseOver={() => showContent("simulatemoon")}>
                <div className="sidebar-item">
                  <img
                    src={img1}
                    alt="SIMULATE TO THE MOON"
                    className="sidebar-icon"
                  />
                  <h2>SIMULATE TO THE MOON</h2>
                </div>
              </a>
              <a href="#" onMouseOver={() => showContent("webmosiac")}>
                <div className="sidebar-item">
                  <img src={img1} alt="WEBMOSIAC" className="sidebar-icon" />
                  <h2>WEBMOSIAC</h2>
                </div>
              </a>
            </div>
          </div>
        </aside>
        <section className="main-content">
          <div
            id="tessaract"
            className={`content-section ${
              activeSection === "tessaract" ? "active" : ""
            }`}
          >
            <div className="event-details">
              <h1>TESSARACT 2.0</h1>
              <p className="date">Date: 16/1/2024 - 31/1/2024</p>
              <p className="description">
                An online game development competition where participants
                showcase their creative skills in developing games using a Godot
                Engine.
              </p>
              <div className="buttons svelte-12ryxuf">
                <a href="#rules" className="a-unset register svelte-12ryxuf">
                  LEARN MORE
                </a>
                <a className="a-unset register svelte-12ryxuf">
                  Registrations Closed
                </a>
              </div>
            </div>
            <div className="secondary-content">
              <div className="structure">
                <h3>STRUCTURE</h3>
                <p className="description">
                  1. Each quiz consists of two rounds: prelims and finals.
                </p>
                <p className="description">
                  2. The top 8 Teams from the preliminary round will qualify for
                  the finals.
                </p>
                <p className="description">
                  3. The general bounce and pounce system will be followed (will
                  be further explained on-spot).
                </p>
                <p className="description">
                  Round-specific rules will be explained on spot.
                </p>
              </div>
              <div className="rules">
                <h3>RULES</h3>
                <p className="description">1. Teams of two or one.</p>
                <p className="description">
                  2. Teams should arrive at least 30 mins before the start of
                  the event for verification.
                </p>
                <p className="description">
                  3. Prelims will be in written format. Papers will be provided.
                  It is advised to bring your own pens. Finals will be on-stage.
                </p>
                <p className="description">
                  4. Adopting any kind of malpractice will lead to
                  disqualification.
                </p>
              </div>
              <div className="judging_criteria">
                <h3>Judging Criteria</h3>
                <p className="description">
                  Any malpractices t be entertained and will lead to instant
                  disqualification. Any round specific rules will be conveyed
                  before the event starts{" "}
                </p>
              </div>
              <div className="prizes">
                <h3>Prizes Worth</h3>
                <p className="description">Total Rs. 6000</p>
                <p className="description">2. Rs. 3000</p>
                <p className="description">3. Rs. 2000</p>
                <p className="description">4. Rs. 1000</p>
              </div>
            </div>
          </div>
          <div
            id="gameforge"
            className={`content-section ${
              activeSection === "gameforge" ? "active" : ""
            }`}
          >
            <div className="event-details">
              <h1>GAME FORGE</h1>
              <p className="date">Date: 16/1/2024 - 31/1/2024</p>
              <p className="description">
                An online game development competition where participants
                showcase their creative skills in developing games using a Godot
                Engine.
              </p>
              <div className="buttons svelte-12ryxuf">
                <a href="#rules" className="a-unset register svelte-12ryxuf">
                  LEARN MORE
                </a>
                <a className="a-unset register svelte-12ryxuf">
                  Registrations Closed
                </a>
              </div>
            </div>
            <div className="secondary-content">
              <div className="structure">
                <h3>STRUCTURE</h3>
                <p className="description">
                  1. Each quiz consists of two rounds: prelims and finals.
                </p>
                <p className="description">
                  2. The top 8 Teams from the preliminary round will qualify for
                  the finals.
                </p>
                <p className="description">
                  3. The general bounce and pounce system will be followed (will
                  be further explained on-spot).
                </p>
                <p className="description">
                  Round-specific rules will be explained on spot.
                </p>
              </div>
              <div className="rules">
                <h3>RULES</h3>
                <p className="description">1. Teams of two or one.</p>
                <p className="description">
                  2. Teams should arrive at least 30 mins before the start of
                  the event for verification.
                </p>
                <p className="description">
                  3. Prelims will be in written format. Papers will be provided.
                  It is advised to bring your own pens. Finals will be on-stage.
                </p>
                <p className="description">
                  4. Adopting any kind of malpractice will lead to
                  disqualification.
                </p>
              </div>
              <div className="judging_criteria">
                <h3>Judging Criteria</h3>
                <p className="description">
                  Any malpractices t be entertained and will lead to instant
                  disqualification. Any round specific rules will be conveyed
                  before the event starts{" "}
                </p>
              </div>
              <div className="prizes">
                <h3>Prizes Worth</h3>
                <p className="description">Total Rs. 6000</p>
                <p className="description">2. Rs. 3000</p>
                <p className="description">3. Rs. 2000</p>
                <p className="description">4. Rs. 1000</p>
              </div>
            </div>
          </div>
          <div
            id="algotrek"
            className={`content-section ${
              activeSection === "algotrek" ? "active" : ""
            }`}
          >
            <div className="event-details">
              <h1>ALGOTREK</h1>
              <p className="date">Date: 16/1/2024 - 31/1/2024</p>
              <p className="description">
                An online game development competition where participants
                showcase their creative skills in developing games using a Godot
                Engine.
              </p>
              <div className="buttons svelte-12ryxuf">
                <a href="#rules" className="a-unset register svelte-12ryxuf">
                  LEARN MORE
                </a>
                <a className="a-unset register svelte-12ryxuf">
                  Registrations Closed
                </a>
              </div>
            </div>
            <div className="secondary-content">
              <div className="structure">
                <h3>STRUCTURE</h3>
                <p className="description">
                  1. Each quiz consists of two rounds: prelims and finals.
                </p>
                <p className="description">
                  2. The top 8 Teams from the preliminary round will qualify for
                  the finals.
                </p>
                <p className="description">
                  3. The general bounce and pounce system will be followed (will
                  be further explained on-spot).
                </p>
                <p className="description">
                  Round-specific rules will be explained on spot.
                </p>
              </div>
              <div className="rules">
                <h3>RULES</h3>
                <p className="description">1. Teams of two or one.</p>
                <p className="description">
                  2. Teams should arrive at least 30 mins before the start of
                  the event for verification.
                </p>
                <p className="description">
                  3. Prelims will be in written format. Papers will be provided.
                  It is advised to bring your own pens. Finals will be on-stage.
                </p>
                <p className="description">
                  4. Adopting any kind of malpractice will lead to
                  disqualification.
                </p>
              </div>
              <div className="judging_criteria">
                <h3>Judging Criteria</h3>
                <p className="description">
                  Any malpractices t be entertained and will lead to instant
                  disqualification. Any round specific rules will be conveyed
                  before the event starts{" "}
                </p>
              </div>
              <div className="prizes">
                <h3>Prizes Worth</h3>
                <p className="description">Total Rs. 6000</p>
                <p className="description">2. Rs. 3000</p>
                <p className="description">3. Rs. 2000</p>
                <p className="description">4. Rs. 1000</p>
              </div>
            </div>
          </div>
          <div
            id="simulatemoon"
            className={`content-section ${
              activeSection === "simulatemoon" ? "active" : ""
            }`}
          >
            <div className="event-details">
              <h1>SIMULATE TO THE MOON</h1>
              <p className="date">Date: 16/1/2024 - 31/1/2024</p>
              <p className="description">
                An online game development competition where participants
                showcase their creative skills in developing games using a Godot
                Engine.
              </p>
              <div className="buttons svelte-12ryxuf">
                <a href="#rules" className="a-unset register svelte-12ryxuf">
                  LEARN MORE
                </a>
                <a className="a-unset register svelte-12ryxuf">
                  Registrations Closed
                </a>
              </div>
            </div>
            <div className="secondary-content">
              <div className="structure">
                <h3>STRUCTURE</h3>
                <p className="description">
                  1. Each quiz consists of two rounds: prelims and finals.
                </p>
                <p className="description">
                  2. The top 8 Teams from the preliminary round will qualify for
                  the finals.
                </p>
                <p className="description">
                  3. The general bounce and pounce system will be followed (will
                  be further explained on-spot).
                </p>
                <p className="description">
                  Round-specific rules will be explained on spot.
                </p>
              </div>
              <div className="rules">
                <h3>RULES</h3>
                <p className="description">1. Teams of two or one.</p>
                <p className="description">
                  2. Teams should arrive at least 30 mins before the start of
                  the event for verification.
                </p>
                <p className="description">
                  3. Prelims will be in written format. Papers will be provided.
                  It is advised to bring your own pens. Finals will be on-stage.
                </p>
                <p className="description">
                  4. Adopting any kind of malpractice will lead to
                  disqualification.
                </p>
              </div>
              <div className="judging_criteria">
                <h3>Judging Criteria</h3>
                <p className="description">
                  Any malpractices t be entertained and will lead to instant
                  disqualification. Any round specific rules will be conveyed
                  before the event starts{" "}
                </p>
              </div>
              <div className="prizes">
                <h3>Prizes Worth</h3>
                <p className="description">Total Rs. 6000</p>
                <p className="description">2. Rs. 3000</p>
                <p className="description">3. Rs. 2000</p>
                <p className="description">4. Rs. 1000</p>
              </div>
            </div>
          </div>
          <div
            id="webmosiac"
            className={`content-section ${
              activeSection === "webmosiac" ? "active" : ""
            }`}
          >
            <div className="event-details">
              <h1>WEBMOSIAC</h1>
              <p className="date">Date: 16/1/2024 - 31/1/2024</p>
              <p className="description">
                An online game development competition where participants
                showcase their creative skills in developing games using a Godot
                Engine.
              </p>
              <div className="buttons svelte-12ryxuf">
                <a href="#rules" className="a-unset register svelte-12ryxuf">
                  LEARN MORE
                </a>
                <a className="a-unset register svelte-12ryxuf">
                  Registrations Closed
                </a>
              </div>
            </div>
            <div className="secondary-content">
              <div className="structure">
                <h3>STRUCTURE</h3>
                <p className="description">
                  1. Each quiz consists of two rounds: prelims and finals.
                </p>
                <p className="description">
                  2. The top 8 Teams from the preliminary round will qualify for
                  the finals.
                </p>
                <p className="description">
                  3. The general bounce and pounce system will be followed (will
                  be further explained on-spot).
                </p>
                <p className="description">
                  Round-specific rules will be explained on spot.
                </p>
              </div>
              <div className="rules">
                <h3>RULES</h3>
                <p className="description">1. Teams of two or one.</p>
                <p className="description">
                  2. Teams should arrive at least 30 mins before the start of
                  the event for verification.
                </p>
                <p className="description">
                  3. Prelims will be in written format. Papers will be provided.
                  It is advised to bring your own pens. Finals will be on-stage.
                </p>
                <p className="description">
                  4. Adopting any kind of malpractice will lead to
                  disqualification.
                </p>
              </div>
              <div className="judging_criteria">
                <h3>Judging Criteria</h3>
                <p className="description">
                  Any malpractices t be entertained and will lead to instant
                  disqualification. Any round specific rules will be conveyed
                  before the event starts{" "}
                </p>
              </div>
              <div className="prizes">
                <h3>Prizes Worth</h3>
                <p className="description">Total Rs. 6000</p>
                <p className="description">2. Rs. 3000</p>
                <p className="description">3. Rs. 2000</p>
                <p className="description">4. Rs. 1000</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EventsInside;
