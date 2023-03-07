//import de toutes les ressources nécessaire au bon focntionnement du code
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js'
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js'
import { ARButton } from './node_modules/three/examples/jsm/webxr/ARButton.js';

let scene, camera, renderer;
let controller;

init();
function init() {
    const container = document.createElement('div');
    container.classList.add("dispositifInteractif");
    document.body.appendChild(container);

    // Création d'une scène ThreeJS
    scene = new THREE.Scene()

    //chargement du modèle Blender
    const Loader = new GLTFLoader()
    Loader.load('./ressources/models/SAE4X.glb', function (gltf) {
        const paints = gltf.scene
        scene.add(paints)
    })
    // Initialisation de la caméra
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 100)

    // Initialisation du point du lumière
    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1.2);
    light.position.set(0.5, 1, 0.25);
    scene.add(light);

    // Ici on vise a rendre la scène 3D, comme un rendu sur Première mais en ThreeJS
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    renderer.xr.enabled = true;
    container.appendChild(renderer.domElement);

    document.body.appendChild(ARButton.createButton(renderer)).classList.add("dispositifInteractif");


    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({ color: 0xffffff });
    function onSelect() {
        // const material = new THREE.MeshPhongMaterial( { color: 0xffffff * Math.random() } );
        const mesh = new THREE.Mesh(Loader, material);
        mesh.position.set(0, 0, - 0.3).applyMatrix4(controller.matrixWorld);
        mesh.quaternion.setFromRotationMatrix(controller.matrixWorld);
        scene.add(mesh);
    }
    controller = renderer.xr.getController(0);
    controller.addEventListener('select', onSelect);
    scene.add(controller);

    //

    window.addEventListener('resize', onWindowResize);
}


// Position de la caméra
camera.position.setZ(6);
camera.position.setX(0);
camera.position.setY(0);


// Là, le code ajuste l'affichage en fonction de la taille de l'écran
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}


// Fonction de rendu
function render() {
    renderer.render(scene, camera);
}

// Le navigateur refresh l'image 60 fois par secondes et c'est grace à ce qu'il y a juste en dessous
function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    renderer.setAnimationLoop(render)
    controls.update()
}
// appel de la fonction animate()
animate()
