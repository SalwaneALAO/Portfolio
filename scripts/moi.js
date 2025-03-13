import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
import { GLTFLoader } from 'https://threejs.org/examples/js/loaders/GLTFLoader.js';

// -----------------------------
// 1. Initialisation de la Scène
// -----------------------------
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("moi3D").appendChild(renderer.domElement);

// Lumière ambiante et directionnelle
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// -----------------------------
// 2. Chargement des Poissons Réalistes
// -----------------------------
const loader = new GLTFLoader();
const fishes = [];
const fishData = [
  { name: "Créativité", color: 0x00a6fb, position: [-3, 2, -5], detail: "Toujours des idées nouvelles !", level: 80 },
  { name: "Collaboration", color: 0x4caf50, position: [3, -1, -5], detail: "On réussit mieux ensemble.", level: 90 },
  { name: "Dynamisme", color: 0xff6347, position: [-2, -2, -6], detail: "Une énergie sans limite.", level: 85 },
  { name: "Passion", color: 0xfcbf49, position: [2, 1, -5], detail: "Je m'investis totalement.", level: 95 }
];

// Charger un modèle de poisson (GLTF)
fishData.forEach((fishInfo) => {
  loader.load('https://threejs.org/examples/models/gltf/Fish.glb', (gltf) => {
    const fish = gltf.scene;

    // Positionner et ajuster le modèle
    fish.position.set(...fishInfo.position);
    fish.scale.set(0.5, 0.5, 0.5);
    fish.userData = fishInfo;

    // Appliquer une couleur solide
    fish.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set(fishInfo.color);
      }
    });

    fishes.push(fish);
    scene.add(fish);
  });
});

// -----------------------------
// 3. Interaction au Clic (Popup Histogramme)
// -----------------------------
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const infoBox = document.createElement("div");

// Style de l'infobox
infoBox.style.position = "absolute";
infoBox.style.background = "rgba(0, 0, 0, 0.8)";
infoBox.style.color = "#fff";
infoBox.style.padding = "10px";
infoBox.style.borderRadius = "8px";
infoBox.style.display = "none";
document.body.appendChild(infoBox);

window.addEventListener("click", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(fishes);

  if (intersects.length > 0) {
    const { name, detail, level } = intersects[0].object.userData;

    // Afficher les détails dans un popup
    infoBox.style.left = `${event.clientX + 10}px`;
    infoBox.style.top = `${event.clientY + 10}px`;
    infoBox.style.display = "block";
    infoBox.innerHTML = `
      <strong>${name}</strong><br>
      ${detail}<br>
      Niveau : ${level}%
      <div style="background: gray; height: 10px; margin-top: 5px;">
        <div style="width: ${level}%; background: lime; height: 100%;"></div>
      </div>
    `;
  } else {
    infoBox.style.display = "none";
  }
});

// -----------------------------
// 4. Animation de Nage des Poissons
// -----------------------------
camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);

  // Mouvement fluide des poissons
  fishes.forEach((fish, index) => {
    fish.position.x += Math.sin(Date.now() * 0.001 + index) * 0.005;
    fish.position.y += Math.cos(Date.now() * 0.001 + index) * 0.005;
  });

  renderer.render(scene, camera);
}
animate();

// -----------------------------
// 5. Responsivité
// -----------------------------
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
