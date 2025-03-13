document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");
    const infoBox = document.getElementById("info-box");
  
    circles.forEach((circle) => {
      circle.addEventListener("mouseenter", (e) => {
        const title = e.target.dataset.title;
        const details = e.target.dataset.details;
  
        // Mettre à jour le contenu de la boîte d'informations
        infoBox.textContent = `${title} - ${details}`;
  
        // Positionner la boîte au-dessus du cercle
        const rect = e.target.getBoundingClientRect();
        infoBox.style.top = `${rect.top - 60 + window.scrollY}px`;
        infoBox.style.left = `${rect.left + rect.width / 2}px`;
  
        // Afficher la boîte
        infoBox.style.display = "block";
      });
  
      circle.addEventListener("mouseleave", () => {
        // Cacher la boîte
        infoBox.style.display = "none";
      });
    });
  });
  