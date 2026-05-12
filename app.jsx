const projects = [
  {
    title: "Site Location Voitures & Motos",

    description:
      "Plateforme moderne de location de voitures et motos de luxe avec interface responsive .",

    technologies: "HTML, CSS, JavaScript",

    link: "https://lachgaraicha053-sketch.github.io/auto-moto-luxe-location-miniprojetweb/voiture.html"
  },

  {
    title: "Run For Love",

    description:
      "Jeu 2D développé en C++ avec programmation orientée objet (POO).",

    technologies: "C++, POO",

    link: "#"
  }
];

function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>{props.title}</h3>

      <p>{props.description}</p>

      <p>
        <strong>Technologies :</strong> {props.technologies}
      </p>

      <a href={props.link} target="_blank" rel="noreferrer">
        Voir projet
      </a>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
        />
      ))}
    </div>
  );
}


function ContactForm() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert(" Veuillez remplir tous les champs");
      return;
    }

    if (!email.includes("@")) {
      alert("Email invalide");
      return;
    }

    alert("Message envoyé avec succès !");
    e.target.reset();
  };

  return (
    <form id="form" onSubmit={handleSubmit}>

      <input type="text" id="name" placeholder="Nom" />

      <input type="email" id="email" placeholder="Email" />

      <textarea id="message" rows="5" placeholder="Message"></textarea>

      <button type="submit">Envoyer</button>

    </form>
  );
}

ReactDOM.createRoot(
  document.getElementById("projects")
).render(<Projects />);

ReactDOM.createRoot(
  document.getElementById("contact-form")
).render(<ContactForm />);