import React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="page">
      <h1>Bem-vindo ao Portfólio da Maria Fernanda</h1>
      <p>Olá! Sou Maria Fernanda Dantas, estudante de Informática no IFRJ.</p>
      <p>Com experiência em tecnologia, programação e projetos criativos.</p>
      <Link to="/sobre" className="btn-internal">
        Conheça mais sobre mim
      </Link>
    </div>
  );
}

function Sobre() {
  return (
    <div className="page">
      <h1>Sobre Mim</h1>
      <p><strong>Quem sou eu:</strong> Maria Fernanda Dantas, estudante do curso técnico de Informática no IFRJ.</p>

      <p><strong>Minhas habilidades:</strong></p>
      <ul>
        <li><strong>Desenvolvimento:</strong> React, JavaScript, HTML, CSS</li>
        <li><strong>Hardware:</strong> Arduino</li>
        <li><strong>Banco de Dados</strong></li>
        <li><strong>Design e Edição:</strong> Canva, edição de fotos e vídeos</li>
      </ul>

      <p><strong>Objetivo:</strong> Meu objetivo é seguir carreira na área da medicina, que é minha verdadeira paixão. A informática atua como um hobbie e um conhecimento complementar, que me permite trabalhar como freelancer e ampliar minhas habilidades, mas sem deixar de lado o sonho de ser médica.</p>

      <p><strong>Curiosidade:</strong> Sou apaixonada por tecnologia e também tenho interesse na área da medicina.</p>

      <Link to="/projetos" className="btn-internal">
        Veja meus projetos
      </Link>
    </div>
  );
}

function Projetos() {
  const projetos = [
    {
      nome: "Clone da Netflix",
      desc: "Recriação da interface da Netflix com React e CSS",
      link: "https://github.com/mfernandantas/applicativos"
    },
    {
      nome: "Site de Flores",
      desc: "Site institucional para empresa de flores com HTML e CSS",
      link: "https://codesandbox.io/p/sandbox/site-final-hm5ngw"
    },
    {
      nome: "Food Drop (Jogo)",
      desc: "Jogo estilo food drop inspirado no Pou, feito em Unity",
      link: "https://github.com/mfernandantas/aula27-03"
    },
    {
      nome: "Caça-Níquel com Arduino",
      desc: "Jogo interativo com Arduino e hardware",
      link: null
    }
  ];

  return (
    <div className="page">
      <h1>Meus Projetos</h1>
      <ul>
        {projetos.map((proj, idx) => (
          <li key={idx}>
            <strong>{proj.nome}</strong> – {proj.desc}
            {proj.link && (
              <div>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="link-projeto">
                  Ver código
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>
      <Link to="/" className="btn-internal">
        Voltar para Home
      </Link>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Home
        </NavLink>
        <NavLink
          to="/sobre"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Sobre
        </NavLink>
        <NavLink
          to="/projetos"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Projetos
        </NavLink>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;