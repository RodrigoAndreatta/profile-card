import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML + CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
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
];

function App() {
  return (
    <div className="card">
      <Avatar name="rodrigo" photoName="rodrigo.png" />
      <div className="data">
        <Intro
          name="Rodrigo Andreatta"
          descricao="Estudante de Análise e Desenvolvimento de Sistemas na Impacta, com foco em desenvolvimento Full-Stack. Possuo conhecimentos em JavaScript, HTML, CSS, Git/GitHub, React, consumo de APIs, manipulação do DOM e fundamentos de desenvolvimento back-end."
        />
        <SkillList />
      </div>
    </div>
  );
}
function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.photoName} alt={props.name} />
    </div>
  );
}

function Intro(props) {
  return (
    <div className="">
      <h1>{props.name}</h1>
      <p>{props.descricao}</p>
    </div>
  );
}

function SkillList() {
  // advanced intermediate beginner
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
          emoji={
            skill.level === "advanced"
              ? "💪"
              : skill.level === "intermediate"
                ? "👍"
                : "👶"
          }
        />
      ))}
    </ul>
  );
  // return (
  //   <ul className="skill-list">
  //     <Skill skill="HTML + CSS 💪" color="#2257E6" />
  //     <Skill skill="JavaScript 💪" color="yellow" />
  //     <Skill skill="Git and GitHub 👍" color="#E84F33" />
  //     <Skill skill="React 🌎" color="#61DAFB" />
  //   </ul>
  // );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
