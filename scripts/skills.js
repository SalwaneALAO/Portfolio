// Liste des compétences avec logos et descriptions
const skills = [
    { 
      name: "Python", 
      logo: "https://cdn-icons-png.flaticon.com/512/919/919852.png", 
      description: "Langage polyvalent utilisé pour le développement, la data science et l'IA." 
    },
    { 
      name: "R", 
      logo: "https://www.r-project.org/logo/Rlogo.png", 
      description: "Langage dédié à l'analyse statistique et à la visualisation de données."
    },
    { 
      name: "Docker", 
      logo: "https://cdn-icons-png.flaticon.com/512/919/919853.png", 
      description: "Outil pour créer, déployer et gérer des conteneurs d'application." 
    },
    { 
      name: "MySQL", 
      logo: "https://cdn-icons-png.flaticon.com/512/919/919836.png", 
      description: "Base de données relationnelle populaire pour stocker des informations."
    },
    { 
      name: "MongoDB", 
      logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png", 
      description: "Base de données NoSQL orientée documents pour les données flexibles." 
    },
    { 
      name: "Power BI", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", 
      description: "Plateforme de visualisation et d'analyse de données interactive." 
    },
    { 
      name: "Excel", 
      logo: "https://cdn-icons-png.flaticon.com/512/732/732220.png", 
      description: "Logiciel de tableur pour organiser, analyser et visualiser des données." 
    },
    { 
      name: "Word", 
      logo: "https://cdn-icons-png.flaticon.com/512/732/732223.png", 
      description: "Traitement de texte pour créer et éditer des documents professionnels."
    }
  ];
  
  // Fonction pour générer les compétences avec leurs détails
  function createSkillsCarousel() {
    const track = document.getElementById("skillsTrack");
  
    skills.forEach(skill => {
      // Création de l'élément conteneur
      const item = document.createElement("div");
      item.className = "skills-item";
  
      // Logo
      const img = document.createElement("img");
      img.src = skill.logo;
      img.alt = `${skill.name} logo`;
  
      // Nom de la compétence
      const span = document.createElement("span");
      span.textContent = skill.name;
  
      // Pop-up pour la description
      const popup = document.createElement("div");
      popup.className = "skill-popup";
      popup.textContent = skill.description;
  
      // Ajout des éléments
      item.appendChild(img);
      item.appendChild(span);
      item.appendChild(popup);
      track.appendChild(item);
    });
  }
  
  // Initialise le carousel
  document.addEventListener("DOMContentLoaded", createSkillsCarousel);
  