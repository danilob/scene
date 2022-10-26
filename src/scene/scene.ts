import {
  Scene,
  AxesHelper,
  AmbientLight,
  DirectionalLight,
  Mesh,
  SphereGeometry,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
  MeshPhongMaterial,
  CylinderGeometry,
  ExtrudeGeometry,
  Shape,
  ShapeGeometry,
  Vector3
} from 'three'
import { renderer, updateRenderer } from '../core/renderer'

import { gui } from '../core/gui'

export const scene = new Scene()

// Axes Helper
const axesHelper = new AxesHelper(0.5)
scene.add(axesHelper)

gui.addInput(axesHelper, 'visible', {
  label: 'AxesHelper'
})

const ambientLight = new AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new DirectionalLight('#ffffff', 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 500
directionalLight.shadow.normalBias = 0.5
directionalLight.position.set(0.25, 2, 2.25)

scene.add(directionalLight)

const PARAMS = {
  color: '#FB3E2F'
}

const material = new MeshPhongMaterial({
  color: new Color(PARAMS.color),
  wireframe: false
})

// const sphere = new Mesh(new SphereGeometry(0.75, 32, 32), material)
// sphere.position.set(0, 2, 0)
// sphere.castShadow = true

// const sphereCtrls = gui.addFolder({
//   title: 'Sphere'
// })

// sphereCtrls.addInput(sphere.position, 'x', {
//   label: 'pos x',
//   min: -10,
//   max: 10,
//   step: 0.1
// })
// sphereCtrls.addInput(sphere.position, 'y', {
//   label: 'pos y',
//   min: -10,
//   max: 10,
//   step: 0.1
// })
// sphereCtrls.addInput(sphere.position, 'z', {
//   label: 'pos z',
//   min: -10,
//   max: 10,
//   step: 0.1
// })
// sphereCtrls.addInput(PARAMS, 'color').on('change', (e) => {
//   sphere.material.color = new Color(e.value)
// })

// sphereCtrls.addInput(sphere.material, 'wireframe')

const radiusTop = 2
const radiusBottom = 2
const height = 1
const radialSegments = 3
const shape1 = new Mesh(
  new CylinderGeometry(radiusTop, radiusBottom, height, radialSegments),
  material
)
shape1.position.set(0, 2, 0)
shape1.rotation.set(Math.PI / 2, 0, 0)
scene.add(shape1)

const shape2 = new Mesh(
  new CylinderGeometry(radiusTop, radiusBottom, height, radialSegments),
  material
)
shape2.position.set(3, 2, 0)
shape2.rotation.set(Math.PI / 2, 0, 0)
scene.add(shape2)

const shape22 = new Mesh(
  new CylinderGeometry(radiusTop, radiusBottom, height, radialSegments),
  material
)
shape22.position.set(-1.7, 1.05, 0)
shape22.rotation.set(-Math.PI / 2, 0, 0)
scene.add(shape22)

const shape3 = new Mesh(
  new CylinderGeometry(radiusTop, radiusBottom, height, radialSegments),
  material
)
shape3.position.set(3, 4, 0)
shape3.rotation.set(-Math.PI / 2, 0, 0)
scene.add(shape3)

const shape33 = new Mesh(
  new CylinderGeometry(radiusTop, radiusBottom, height, radialSegments),
  material
)
shape33.position.set(4.7, 1.05, 0)
shape33.rotation.set(-Math.PI / 2, 0, 0)
scene.add(shape33)

const shape4 = new Mesh(
  new CylinderGeometry(radiusTop, radiusBottom, height, radialSegments),
  material
)
shape4.position.set(0, 4, 0)
shape4.rotation.set(-Math.PI / 2, 0, 0)
scene.add(shape4)

const shape5 = new Mesh(
  new CylinderGeometry(radiusTop, radiusBottom, height, radialSegments),
  material
)
shape5.position.set(1.5, 4.6, 0)
shape5.rotation.set(Math.PI / 2, 0, 0)
scene.add(shape5)

const shape6 = new Mesh(
  new CylinderGeometry(radiusTop, radiusBottom, height, 5),
  material
)
shape6.position.set(1.48, 5.85, 0)
shape6.rotation.set(Math.PI / 2, Math.PI / 1.25, 0)
scene.add(shape6)

const plane = new Mesh(
  new PlaneGeometry(20, 20, 20, 20),
  new MeshToonMaterial({
    color: new Color('#444')
  })
)

plane.receiveShadow = true
plane.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane)

export function updateScene() {
  updateRenderer()
}
