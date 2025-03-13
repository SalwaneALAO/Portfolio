document.addEventListener("DOMContentLoaded", () => {
    const mouseTrail = document.getElementById("mouse-trail");
  
    // Écoute l'événement de mouvement de la souris sur toute la page
    document.addEventListener("mousemove", (e) => {
      // Met à jour les positions X et Y du flux bleu
      mouseTrail.style.left = `${e.clientX}px`;
      mouseTrail.style.top = `${e.clientY}px`;
  
      // Ajoute un effet de pulsation dynamique
      mouseTrail.style.transform = `translate(-50%, -50%) scale(1.5)`;
  
      setTimeout(() => {
        mouseTrail.style.transform = `translate(-50%, -50%) scale(1)`;
      }, 100);
    });
  });
  