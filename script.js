// Scene
const scene = new THREE.Scene()

// Red Cube ... Mesh
const geometry = new THREE.BoxGeometry(2, 1, 2);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)
mesh.position.z = -5
mesh.position.x = -1
mesh.position.y = -1

// Border
const borderMaterial = new THREE.LineBasicMaterial({ color: 'black' })
const edgesGeometry = new THREE.EdgesGeometry(geometry)
const edgesMesh = new THREE.LineSegments(edgesGeometry, borderMaterial)
mesh.add(edgesMesh)
// Camera
const size = {
    height: 800,
    width: 1000
}
const camera = new THREE.PerspectiveCamera(75, size.width / size.height,)
// const camera = new THREE.OrthographicCamera(size.width / - 2, size.width / 2, size.height / 2, size.height / - 2, );
camera.position.z = 3
camera.position.x = 4
camera.position.y = 2
scene.add(camera)

// Render
const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
    canvas
})

renderer.setSize(size.width, size.height)
document.body.appendChild(renderer.domElement);
renderer.render(scene, camera)

window.addEventListener('keydown', (event) => {
    console.log('Key pressed:', event.key);
    if (event.key === 'ArrowUp') {
        mesh.position.z -= 0.1
    }
    if (event.key === 'ArrowDown') {
        mesh.position.z += 0.1
    }
    if (event.key === 'ArrowLeft') {
        mesh.position.x -= 0.1
    }
    if (event.key === 'ArrowRight') {
        mesh.position.x += 0.1
    }
    renderer.render(scene, camera)

});
