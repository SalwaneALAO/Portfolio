// Initialisation de la carte
const map = L.map('map').setView([46.603354, 1.888334], 3); // Centrage sur l'Europe

// Charger les tuiles françaises d'OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
  attribution: 'Données © <a href="https://osm.org/copyright">OpenStreetMap</a> contributeurs',
  maxZoom: 18,
}).addTo(map);

// Liste des voyages avec photos
const voyages = [
  { name: 'Malte', coords: [35.8997, 14.5146], date: 'Mars 2022', image: 'assets/malte.jpg' },
  { name: 'Autriche', coords: [48.2082, 16.3738], date: 'Juillet 2024', image: 'assets/autriche.jpg' },
  { name: 'Italie', coords: [41.9028, 12.4964], date: 'Août 2023', image: 'assets/italie.jpg' },
  { name: 'Pologne', coords: [52.2297, 21.0122], date: 'Décembre 2023', image: 'assets/pologne.jpg' },
  { name: 'Roumanie', coords: [44.4268, 26.1025], date: 'Février 2024', image: 'assets/roumanie.jpg' },
  { name: 'Arabie Saoudite', coords: [24.0002, 45.0000], date: 'Avril 2023', image: 'assets/arabie.jpg' },
];

// Ajouter des marqueurs avec popups personnalisés
voyages.forEach(voyage => {
  const popupContent = `
    <div style="text-align: center;">
      <img src="${voyage.image}" alt="${voyage.name}" style="width: 150px; border-radius: 10px; margin-bottom: 10px;">
      <h3 style="margin: 0; color: #00a6fb;">${voyage.name}</h3>
      <p style="margin: 0; font-size: 0.9rem; color: #555;">${voyage.date}</p>
    </div>
  `;

  const marker = L.marker(voyage.coords).addTo(map);
  marker.bindPopup(popupContent).on('mouseover', function (e) {
    this.openPopup();
  }).on('mouseout', function (e) {
    this.closePopup();
  });
});
