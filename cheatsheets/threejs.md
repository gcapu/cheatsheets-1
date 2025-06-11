---
title: Three.js
layout: 2017/sheet
tags: [javascript, graphics, webgl]
category: JavaScript
updated: 2024-06-05
description: |
  A cheatsheet for Three.js, a popular JavaScript library for creating 3D graphics in the browser.
---

## Basic Setup
{: .-one-column}

A minimal Three.js application needs a scene, a camera, and a renderer.

```javascript
import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

## Basic Setup
{: .-two-column}


### Animation Loop
{: .-two-column}

To animate the scene, you need a render loop using `requestAnimationFrame`.

```javascript
function animate() {
  requestAnimationFrame(animate);

  // animations go here
  // cube.rotation.x += 0.01;

  renderer.render(scene, camera);
}

animate();
```

### Adding an object
{: .-two-column}

Objects in Three.js are called `Meshes`. A mesh is made of a `Geometry` and a `Material`.

```javascript
// Geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Mesh (Object)
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

## Core Components

### Scene
{: .-three-column}

The scene is the container for all your objects, lights, and cameras. It's the root of the scene graph.

```javascript
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeeeeee);

// Fog
scene.fog = new THREE.Fog(0xffffff, 10, 100);
// or
scene.fog = new THREE.FogExp2(0xffffff, 0.01);
```
*   `scene.add(object)`
*   `scene.remove(object)`
*   `scene.getObjectByName('name')`

### Renderer
{: .-three-column}

The renderer is responsible for drawing the scene from the camera's perspective.

```javascript
const renderer = new THREE.WebGLRenderer({ 
  antialias: true,
  alpha: true // transparent background
});
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);

// For physically correct lighting
renderer.physicallyCorrectLights = true; // deprecated
renderer.useLegacyLights = false; // new way

document.body.appendChild(renderer.domElement);

// Rendering the scene
renderer.render(scene, camera);
```

### Cameras
{: .-three-column}

Cameras determine what is rendered on the screen.

#### PerspectiveCamera
Used to mimic the way the human eye sees.
```javascript
const camera = new THREE.PerspectiveCamera(
  fov,    // field of view (deg)
  aspect, // aspect ratio
  near,   // near clipping plane
  far     // far clipping plane
);
```

#### OrthographicCamera
Renders a scene without perspective.
```javascript
const camera = new THREE.OrthographicCamera(
  left, right,
  top, bottom,
  near, far
);
```

## Core Building Blocks
{: .-three-column}

### Geometries

Built-in shapes for your objects. All can be translated, rotated, and scaled.

*   `BoxGeometry`
*   `SphereGeometry`
*   `PlaneGeometry`
*   `CylinderGeometry`
*   `ConeGeometry`
*   `TorusGeometry`
*   `TorusKnotGeometry`
*   `DodecahedronGeometry`
*   `IcosahedronGeometry`
*   `OctahedronGeometry`
*   `TetrahedronGeometry`
*   `CircleGeometry`
*   `RingGeometry`
*   `ShapeGeometry`
*   `TubeGeometry`
*   `ExtrudeGeometry`
*   `LatheGeometry`
*   `BufferGeometry` (for custom shapes)

### Materials

Define the appearance of objects. These determine how the object reflects light.

*   `MeshBasicMaterial` (not affected by lights)
*   `MeshStandardMaterial` (PBR material, realistic)
*   `MeshPhysicalMaterial` (advanced PBR)
*   `MeshLambertMaterial` (for non-shiny surfaces)
*   `MeshPhongMaterial` (for shiny surfaces)
*   `MeshToonMaterial` (cartoon-style shading)
*   `MeshNormalMaterial` (maps normal vectors to RGB)
*   `LineBasicMaterial` (for lines)
*   `PointsMaterial` (for points)
*   `ShaderMaterial` (for custom GLSL shaders)
*   `RawShaderMaterial` (custom GLSL shaders with less automation)
*   `SpriteMaterial` (for sprites)

### Lights

Illuminate the scene. Without light, most materials will appear black.

*   `AmbientLight(color, intensity)`
*   `DirectionalLight(color, intensity)`
*   `PointLight(color, intensity, distance, decay)`
*   `SpotLight(color, intensity, distance, angle, penumbra, decay)`
*   `HemisphereLight(skyColor, groundColor, intensity)`
*   `RectAreaLight(color, intensity, width, height)` (only works with `MeshStandardMaterial` and `MeshPhysicalMaterial`)

## Loaders & Controls
{: .-two-column}

### Asset Loaders

Load external assets like models, textures, and fonts.

*   `TextureLoader` - for images.
*   `CubeTextureLoader` - for cubemaps (skyboxes).
*   `GLTFLoader` - for `.gltf` and `.glb` models.
*   `OBJLoader` - for `.obj` models.
*   `FBXLoader` - for `.fbx` models.
*   `FontLoader` - for fonts for `TextGeometry`.

```javascript
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

loader.load('model.gltf', (gltf) => {
  scene.add(gltf.scene);
}, undefined, (error) => {
  console.error(error);
});
```

### Camera Controls and Helpers
{: .-two-column}

#### Controls

*   `OrbitControls` - rotate, pan, and zoom the camera.
*   `TrackballControls` - similar to orbit but no fixed pole.
*   `FlyControls` - for first-person-like navigation.
*   `PointerLockControls` - for first-person shooters.

```javascript
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const controls = new OrbitControls(camera, renderer.domElement);
controls.update(); // must be called in animation loop if enableDamping
```

#### Helpers

Visualize components of your scene.

*   `AxesHelper(size)`
*   `GridHelper(size, divisions)`
*   `CameraHelper(camera)`
*   `DirectionalLightHelper(light)`
*   `PointLightHelper(light)`
*   `SpotLightHelper(light)`
*   `HemisphereLightHelper(light)`
*   `BoxHelper(object)`
*   `PlaneHelper(plane, size)`
*   `ArrowHelper(dir, origin, length, hex)` 