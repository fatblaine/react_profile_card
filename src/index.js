import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Java",
    level: "intermediate",
    color: "#FF3B00",
  },
  {
    skill: "Spring",
    level: "intermediate",
    color: "#FF3B98",
  },
];

function App() {
  return (
    <div className="container">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          {/* Should contain one Skill component
          for each web dev skill that you have,
          customized with props */}
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="images/fan.jpg" alt="Fan" />;
}

function Intro() {
  return (
    <div>
      <h1>Chenghao Fan</h1>
      <p>An aspiring full-stack web developer.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((s) => (
        <Skill skillObj={s} key={s.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  const levelCon = skillObj.level;
  let emojiDis;
  if (levelCon === "advanced") {
    emojiDis = "💪";
  } else if (levelCon === "intermediate") {
    emojiDis = "👍";
  } else if (levelCon === "beginner") {
    emojiDis = "👶";
  }

  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>{emojiDis}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
