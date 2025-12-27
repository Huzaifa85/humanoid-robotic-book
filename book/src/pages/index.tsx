import React, { JSX, useState } from "react";

import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";



export default function Home(): JSX.Element {
  return (
    <Layout title="Humanoid Robotics Textbook">
      {/* HERO */}
      <section className="hero">
        <div className="heroText">
          <h1>
            Physical AI & <br />
            <span className="robotLine">
              Humanoid Robotics <span className="robotIcon">🤖</span>
            </span>
          </h1>

          <p>
            Master humanoid robotics, ROS 2, simulation, NVIDIA Isaac, VLA
            systems, and embodied AI to build next-generation intelligent
            machines.
          </p>

          <Link to="/Humanoid-textbook/docs/module1/intro" className="primaryBtn">
            Start Reading →
          </Link>
        </div>

        <div className="heroImage">
          <img src="img/img1.png" alt="Humanoid Robot" />
        </div>
      </section>

      <section className="whySection">
        <h2>
          Built for the Next Generation <br></br>of Intelligent Robots
        </h2>

        <div className="whyGrid">
          <div className="whyCard">
            <h3>🚀 Robotics-First Learning</h3>
            <p>
              Designed specifically for humanoid and physical AI systems —
              covering control, perception, planning, and real-world robot
              behavior from day one.
            </p>
          </div>

          <div className="whyCard">
            <h3>🧠 AI Meets the Physical World</h3>
            <p>
              Learn how modern AI models connect with sensors, actuators,
              simulators, and robots to create intelligent, embodied machines.
            </p>
          </div>

          <div className="whyCard">
            <h3>⚙️ Industry-Ready Skill Path</h3>
            <p>
              Curriculum aligned with real robotics stacks used in humanoid
              labs, startups, and research teams — preparing you for production
              systems.
            </p>
          </div>
         
        </div>
      </section>


<section className="modulesSection">
  <h2 className="whiteHeading">Explore All Modules</h2>

  <div className="modulesGrid">

    {/* Module 1 */}
    <div className="moduleCard">
      <h3>Module 1: ROS 2 Foundations</h3>
      <p>Learn ROS 2: nodes, topics, services, actions, QoS, and complete robot workflows.</p>
      <a href="/docs/modules/module1/" className="moduleButton">Open Module →</a>
    </div>

    {/* Module 2 */}
    <div className="moduleCard">
      <h3>Module 2: Simulation & Digital Twins</h3>
      <p>Master Gazebo, Unity Robotics, Isaac Sim, and robotic digital-twin training pipelines.</p>
      <a href="/docs/modules/module2/" className="moduleButton">Open Module →</a>
    </div>

    {/* Module 3 */}
    <div className="moduleCard">
      <h3>Module 3: Hardware Foundations</h3>
      <p>Motors, actuators, torque control, sensors, microcontrollers — essential robotics hardware.</p>
      <a href="/docs/modules/module3/" className="moduleButton">Open Module →</a>
    </div>

    {/* Module 4 */}
    <div className="moduleCard">
      <h3>Module 4: VLA — Vision, Language & Action</h3>
      <p>Advanced robotics AI: perception, LLM-control, action planners, and embodied intelligence.</p>
      <a href="/docs/modules/module4/" className="moduleButton">Open Module →</a>
    </div>

    {/* Module 5 */}
    <div className="moduleCard">
      <h3>Module 5: Advanced AI & Motion Control</h3>
      <p>Reinforcement learning, MPC, motion planning, and intelligent robot movement.</p>
      <a href="/docs/modules/module5/" className="moduleButton">Open Module →</a>
    </div>

    {/* Module 6 */}
    <div className="moduleCard">
      <h3>Module 6: Designing Humanoid Robots</h3>
      <p>Kinematics, actuation, morphologies, energy systems, and humanoid robot movement.</p>
      <a href="/docs/modules/module6/" className="moduleButton">Open Module →</a>
    </div>

  </div>
</section>





      {/* css code */}

      <style>{`
        * {
          box-sizing: border-box;
        }

        /* ===== PAGE BACKGROUND (SAME AS IMAGE SIDE) ===== */
        html,
        body,
        #__docusaurus,
        .main-wrapper {
          background-color: #f6f7f9 !important;
        }

        body {
          margin: 0;
          font-family: Inter, system-ui, sans-serif;
          color: #0f172a;
        }

      /* ===== PAGE BACKGROUND ===== */
html,
     body,
#__docusaurus,
.main-wrapper {
  background: #f6f7f9 !important;
}

/* ===== HERO WRAPPER (ONE SINGLE CARD) ===== */
.hero {
  min-height: 90vh;
  padding: 100px 80px;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 60px;
  align-items: center;

  background: #eaf4ff;        /* 🔥 SAME BG FOR TEXT + IMAGE */
  border-radius: 36px;
  box-shadow: 0 40px 80px rgba(15, 23, 42, 0.12);
}

/* ===== TEXT SIDE (NO EXTRA BG) ===== */
.heroText {
  background: transparent;    /* ❗ important */
  padding: 0;
}

/* ===== IMAGE SIDE (NO EXTRA BG) ===== */
.heroImage {
  background: transparent;    /* ❗ important */
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.heroImage img {
  width: 100%;
  max-width: 420px;
  border-radius: 28px;
  box-shadow: 0 25px 60px rgba(15, 23, 42, 0.35);
  transition: transform 0.6s ease, box-shadow 0.6s ease;

    opacity: 0;
  transform: translateY(20px);
  animation: textReveal 0.9s ease-out forwards;
  animation-delay: 0.25s;
  box-shadow:
    0 20px 45px rgba(56, 189, 248, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);

  position: relative;
  overflow: hidden;
}



/* ===== TEXT ===== */
.heroText h1 {
  font-size: 3.6rem;
  font-weight: 900;
  line-height: 1.15;
  color: #0f172a;

  /* entry animation (already yours) */
  opacity: 0;
  transform: translateY(30px);
  animation: headingReveal 0.9s ease-out forwards;

  /* hover setup */
  position: relative;
  display: inline-block;
  cursor: pointer;
  transition: color 0.3s ease;
}


/* 🔹 hover effects */
.heroText h1:hover {
  color: #0ea5e9;
}

.heroText h1:hover::after {
  width: 100%;
}

/* entry animation */
@keyframes headingReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.heroText p {
  margin-top: 24px;
  max-width: 520px;
  font-size: 1.05rem;
  color: #475569;

  opacity: 0;
  transform: translateY(20px);
  animation: textReveal 0.9s ease-out forwards;
  animation-delay: 0.25s;
}

/* Animations */
@keyframes headingReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes textReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* ===== BUTTON ===== */
.primaryBtn {
  display: inline-block;
  margin-top: 36px;
  padding: 14px 32px;
  background: linear-gradient(135deg, #13306eff, #0f172a);
  color: white;
  font-weight: 700;
  border-radius: 14px;
  text-decoration: none;
  transition: 0.3s;

    opacity: 0;
  transform: translateY(20px);
  animation: textReveal 0.9s ease-out forwards;
  animation-delay: 0.25s;
  
}

.primaryBtn:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(37,99,235,0.3);
}

/* ===== WHY SECTION ===== */



.whySection {
  padding: 100px 80px;
  background: #ffffff;
  text-align: center;
}

.whySection h2:hover {
  color: #0ea5e9;
}

.heroText h1:hover::after {
  width: 100%;
}
.whySection h2 {
  font-size: 2.4rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 60px;
}

.whyGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;

  background: linear-gradient(
    135deg,
    #eaf4ff 0%,
    #f2f8ff 50%,
    #eaf4ff 100%
  );

  padding: 64px;
  border-radius: 48px;

  /* 🔥 SOFTER & CLEAN SHADOW */
  box-shadow:
    0 20px 45px rgba(56, 189, 248, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);

  position: relative;
  overflow: hidden;
}



.whyGrid > * {
  position: relative;
  z-index: 1;
}


/* CARD */
.whyCard {
  background: linear-gradient(180deg, #f8fafc, #ffffff);
  padding: 36px 32px;
  border-radius: 22px;
  text-align: left;

  box-shadow:
    0 12px 30px rgba(15, 23, 42, 0.08);

  transition: 
    transform 0.35s ease,
    box-shadow 0.35s ease;
}

/* HOVER EFFECT */
.whyCard:hover {
  transform: translateY(-10px);
  box-shadow:
    0 30px 70px rgba(37, 99, 235, 0.18);
}

/* TITLE */
.whyCard h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #020617;
  margin-bottom: 14px;
}

/* TEXT */
.whyCard p {
  font-size: 0.98rem;
  line-height: 1.6;
  color: #475569;
}

.whyCard {
  background: #ffffff;
  border-radius: 24px;
  padding: 32px;

  /* ✅ SKY BLUE BORDER */
  border: 1.5px solid #7dd3fc;

  /* existing shadow */
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);

  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* ✅ HOVER EFFECT (as it is / better) */
.whyCard:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 60px rgba(56, 189, 248, 0.35);
}


.modulesSection {
  padding: 100px 80px;
  text-align: center;
}

.modulesHeading {
  font-size: 2.4rem;
  font-weight: 800;
  margin-bottom: 50px;
}

.modulesGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
}






/* ===== MODULES SECTION ===== */
.modulesSection {
  padding: 100px 80px;
  background: #f6f7f9;
  text-align: center;
}

/* HEADING */
.whiteHeading {
  font-size: 2.6rem;
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 64px;
  transition: color 0.3s ease;
  cursor: pointer;
}

/* hover on heading */
.whiteHeading:hover {
  color: #0ea5e9; /* sky blue */
}


/* GRID */
.modulesGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 36px;
}

/* MODULE CARD */
.moduleCard {
  background: #ffffff;
  padding: 36px 32px;
  border-radius: 26px;
  text-align: left;

  /* SKY BLUE BORDER */
  border: 1.5px solid #7dd3fc;

  /* SOFT DEFAULT SHADOW */
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);

  transition: 
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;
}

/* HOVER EFFECT */
.moduleCard:hover {
  transform: translateY(-10px);
  border-color: #38bdf8;
  box-shadow: 0 40px 80px rgba(56, 189, 248, 0.35);
}

/* TITLE */
.moduleCard h3 {
  font-size: 1.35rem;
  font-weight: 800;
  color: #020617;
  margin-bottom: 14px;
}

/* DESCRIPTION */
.moduleCard p {
  font-size: 1rem;
  line-height: 1.65;
  color: #475569;
  margin-bottom: 26px;
}

/* BUTTON */
.moduleButton {
  display: inline-block;
  padding: 12px 28px;
  border-radius: 14px;
  background: linear-gradient(135deg, #13306eff, #0f172a);
  color: white;
  font-weight: 700;
  text-decoration: none;

  transition: 
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

/* BUTTON HOVER */
.moduleButton:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 34px rgba(14, 165, 233, 0.45);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .modulesSection {
    padding: 80px 32px;
  }

  .whiteHeading {
    font-size: 2.1rem;
  }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 60px 32px;
  }

  .heroText h1 {
    font-size: 2.4rem;
  }
}

      `}</style>
    </Layout>
  );
}
