import { OrbitControls } from "https://unpkg.com/three@0.112/examples/jsm/controls/OrbitControls.js";
        import * as THREE from "https://unpkg.com/three@0.112/build/three.module.js";
        import { GLTFLoader } from "https://unpkg.com/three@0.112/examples/jsm/loaders/GLTFLoader.js";

        let scene, camera, renderer, mixer;

        init();

        function init() {
            scene = new THREE.Scene();

            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(300, 350, 500);

            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            // Adding OrbitControls
            let controls = new OrbitControls(camera, renderer.domElement);

            // Ambient light
            let ambientLight = new THREE.AmbientLight(0x404040, 1);
            scene.add(ambientLight);

            // Directional light
            let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(0, 1, 0);
            scene.add(directionalLight);

            // GLTF Loader
            let loader = new GLTFLoader();
            loader.load('model.glb', function (gltf) {
                scene.add(gltf.scene);

                // Mixer for animations
                mixer = new THREE.AnimationMixer(gltf.scene);
                gltf.animations.forEach((clip) => {
                    mixer.clipAction(clip).play();
                });

                animate();
            });
        }

        function animate() {
            requestAnimationFrame(animate);

            let delta = clock.getDelta();
            if (mixer) mixer.update(delta);

            renderer.render(scene, camera);
        }

        const clock = new THREE.Clock();