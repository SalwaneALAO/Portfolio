import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight * 0.7);
document.getElementById('sphere').appendChild(renderer.domElement);

// Sphère flottante
const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0x00a6fb, wireframe: true });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Lumière
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

camera.position.z = 10;

// Animation
function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.005;
  sphere.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate();
