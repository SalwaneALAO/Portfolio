import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

// -----------------------------
// 1. Scène, caméra et rendu
// -----------------------------
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("globeViz").appendChild(renderer.domElement);

// -----------------------------
// 2. Création du Nuage de Points
// -----------------------------
const pointsGroup = new THREE.Group();
const sphereGeometry = new THREE.SphereGeometry(0.1, 16, 16);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00a6fb });

// Création de sphères aléatoires
for (let i = 0; i < 200; i++) {
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(
    (Math.random() - 0.5) * 20, // Position X
    (Math.random() - 0.5) * 10, // Position Y
    (Math.random() - 0.5) * 15  // Position Z
  );
  pointsGroup.add(sphere);
}

scene.add(pointsGroup);

// Lumière ambiante
const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

// Position de la caméra
camera.position.z = 15;

// -----------------------------
// 3. Animation
// -----------------------------
function animate() {
  requestAnimationFrame(animate);

  // Rotation douce du groupe de points
  pointsGroup.rotation.y += 0.001;
  pointsGroup.rotation.x += 0.0005;

  renderer.render(scene, camera);
}
animate();

// -----------------------------
// 4. Texte Animé (effet clavier)
// -----------------------------
const presentationText = `
Hi, I'm Salwane ALAO 👋

Passionate about data and interactivity.
Welcome to my data world!
`;

let currentText = "";
let index = 0;

const textContainer = document.createElement("div");
textContainer.id = "presentation";
textContainer.style.position = "absolute";
textContainer.style.top = "50%";
textContainer.style.left = "50%";
textContainer.style.transform = "translate(-50%, -50%)";
textContainer.style.color = "white";
textContainer.style.fontSize = "1.5rem";
textContainer.style.fontFamily = "monospace";
textContainer.style.textAlign = "center";
textContainer.style.zIndex = "1";
document.getElementById("globeViz").appendChild(textContainer);

function typeText() {
  if (index < presentationText.length) {
    currentText += presentationText[index];
    textContainer.textContent = currentText;
    index++;
    setTimeout(typeText, 50);
  }
}

typeText();
