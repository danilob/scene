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
  Vector3,
  BoxGeometry
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
  color1: '#FB3E2F',
  color2: '#000000',
  color3: '#E8D4D1',
  color4: '#2E1500',
  color5: '#ffffff',
  color6: '#FED101'
}

const material = new MeshPhongMaterial({
  color: new Color(PARAMS.color1),
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
shape1.position.set(0, 7, 0)
shape1.rotation.set(Math.PI / 2, 0, 0)
scene.add(shape1)

const shape11 = new Mesh(
  new CylinderGeometry(radiusTop, radiusBottom, height, radialSegments),
  material
)
shape11.position.set(1.5, 6.05, 0)
shape11.rotation.set(-Math.PI / 2, 0, 0)
scene.add(shape11)

const shape111 = new Mesh(
  new CylinderGeometry(radiusTop, radiusBottom, height, radialSegments),
  material
)
shape111.position.set(-1.7, 4.05, 0)
shape111.rotation.set(Math.PI / 2, 0, 0)
scene.add(shape111)

const shape2 = new Mesh(
  new CylinderGeometry(radiusTop, radiusBottom, height, radialSegments),
  material
)
shape2.position.set(3, 7, 0)
shape2.rotation.set(Math.PI / 2, 0, 0)
scene.add(shape2)

const shape22 = new Mesh(
  new CylinderGeometry(radiusTop, radiusBottom, height, radialSegments),
  material
)
shape22.position.set(-1.7, 6.05, 0)
shape22.rotation.set(-Math.PI / 2, 0, 0)
scene.add(shape22)

const shape222 = new Mesh(
  new CylinderGeometry(radiusTop, radiusBottom, height, radialSegments),
  material
)
shape222.position.set(4.65, 4.05, 0)
shape222.rotation.set(Math.PI / 2, 0, 0)
scene.add(shape222)

const shape3 = new Mesh(
  new CylinderGeometry(radiusTop, radiusBottom, height, radialSegments),
  material
)
shape3.position.set(3, 9, 0)
shape3.rotation.set(-Math.PI / 2, 0, 0)
scene.add(shape3)

const shape33 = new Mesh(
  new CylinderGeometry(radiusTop, radiusBottom, height, radialSegments),
  material
)
shape33.position.set(4.7, 6.05, 0)
shape33.rotation.set(-Math.PI / 2, 0, 0)
scene.add(shape33)

const shape4 = new Mesh(
  new CylinderGeometry(radiusTop, radiusBottom, height, radialSegments),
  material
)
shape4.position.set(0, 9, 0)
shape4.rotation.set(-Math.PI / 2, 0, 0)
scene.add(shape4)

const shape5 = new Mesh(
  new CylinderGeometry(radiusTop, radiusBottom, height, radialSegments),
  material
)
shape5.position.set(1.5, 9.6, 0)
shape5.rotation.set(Math.PI / 2, 0, 0)
scene.add(shape5)

const shape6 = new Mesh(
  new CylinderGeometry(radiusTop, radiusBottom, height, 5),
  material
)
shape6.position.set(1.48, 10.85, 0)
shape6.rotation.set(Math.PI / 2, Math.PI / 1.25, 0)
scene.add(shape6)

const pickupMaterial = new MeshPhongMaterial({
  color: new Color(PARAMS.color2),
  wireframe: false
})

const pickup1 = new Mesh(new BoxGeometry(1.7, 1, 0.5), pickupMaterial)
pickup1.position.set(1.48, 10.8, 0.35)
pickup1.rotation.set(Math.PI / 1, 0, 0)
scene.add(pickup1)

const pickup2 = new Mesh(new BoxGeometry(1.7, 1, 0.5), pickupMaterial)
pickup2.position.set(1.48, 8.5, 0.35)
pickup2.rotation.set(Math.PI / 1, 0, 0)
scene.add(pickup2)

const neckMaterial = new MeshPhongMaterial({
  color: new Color(PARAMS.color4),
  wireframe: false
})
const neck = new Mesh(new BoxGeometry(1, 9, 1), neckMaterial)
neck.position.set(1.48, 16.5, 0.1)
neck.rotation.set(Math.PI / 1, 0, 0)
scene.add(neck)

const fretMaterial = new MeshPhongMaterial({
  color: new Color(PARAMS.color3),
  wireframe: false
})

for (let i = 0; i < 22; i++) {
  const fret = new Mesh(new BoxGeometry(1, 0.02, 0.52), fretMaterial)
  fret.position.set(1.48, 12.2 + i / 2.5, 0.35)
  fret.rotation.set(Math.PI / 1, 0, 0)
  scene.add(fret)
}

const nutMaterial = new MeshPhongMaterial({
  color: new Color(PARAMS.color5),
  wireframe: false
})
const nut = new Mesh(new BoxGeometry(1, 0.1, 0.52), nutMaterial)
nut.position.set(1.48, 21, 0.4)
nut.rotation.set(Math.PI / 1, 0, 0)
scene.add(nut)

const headstock1 = new Mesh(new CylinderGeometry(1, 1, 0.7, 5), material)
headstock1.position.set(1.47, 21.5, 0)
headstock1.rotation.set(-Math.PI / 1.8, 0, 0)
scene.add(headstock1)

const headstock2 = new Mesh(new CylinderGeometry(1.1, 1.1, 0.7, 3), material)
headstock2.position.set(1.47, 22.35, -0.15)
headstock2.rotation.set(-Math.PI / 1.8, 0, 0)
scene.add(headstock2)

const headstockDetailMaterial = new MeshPhongMaterial({
  color: new Color(PARAMS.color3),
  wireframe: false
})
const headstockDetail = new Mesh(
  new CylinderGeometry(0.7, 0.7, 0.7, 5),
  headstockDetailMaterial
)
headstockDetail.position.set(1.47, 21.5, 0.01)
headstockDetail.rotation.set(-Math.PI / 1.8, 0, 0)
scene.add(headstockDetail)

const tunerMaterial = new MeshPhongMaterial({
  color: new Color(PARAMS.color6),
  wireframe: false
})
const tunerDetailMaterial = new MeshPhongMaterial({
  color: new Color(PARAMS.color5),
  wireframe: false
})
const tuner1 = new Mesh(new CylinderGeometry(0.2, 0.2, 0.2, 5), tunerMaterial)
tuner1.position.set(0.4, 21.3, 0.01)
tuner1.rotation.set(-Math.PI / 1.8, Math.PI / 1.4, 0)
scene.add(tuner1)
const tuner1Detail = new Mesh(
  new BoxGeometry(0.2, 0.2, 0.2),
  tunerDetailMaterial
)
tuner1Detail.position.set(0.65, 21.3, 0.01)
tuner1Detail.rotation.set(-Math.PI / 1.8, 0, 0)
scene.add(tuner1Detail)

const tuner2 = new Mesh(new CylinderGeometry(0.2, 0.2, 0.2, 5), tunerMaterial)
tuner2.position.set(0.35, 22.02, 0.01)
tuner2.rotation.set(-Math.PI / 1.8, Math.PI / 1.35, 0)
scene.add(tuner2)
const tuner2Detail = new Mesh(
  new BoxGeometry(0.2, 0.2, 0.2),
  tunerDetailMaterial
)
tuner2Detail.position.set(0.6, 22, 0.01)
tuner2Detail.rotation.set(-Math.PI / 1.8, -Math.PI / 1.01, 0)
scene.add(tuner2Detail)

const tuner3 = new Mesh(new CylinderGeometry(0.2, 0.2, 0.2, 5), tunerMaterial)
tuner3.position.set(0.6, 22.74, -0.2)
tuner3.rotation.set(-Math.PI / 1.8, Math.PI / 1.3, 0)
scene.add(tuner3)
const tuner3Detail = new Mesh(
  new BoxGeometry(0.3, 0.2, 0.2),
  tunerDetailMaterial
)
tuner3Detail.position.set(0.9, 22.7, -0.2)
tuner3Detail.rotation.set(-Math.PI / 1.8, -Math.PI / 1.05, 0)
scene.add(tuner3Detail)

const tuner4 = new Mesh(new CylinderGeometry(0.2, 0.2, 0.2, 5), tunerMaterial)
tuner4.position.set(2.55, 21.3, 0.01)
tuner4.rotation.set(-Math.PI / 1.8, -Math.PI / 1.4, 0)
scene.add(tuner4)
const tuner4Detail = new Mesh(
  new BoxGeometry(0.2, 0.2, 0.2),
  tunerDetailMaterial
)
tuner4Detail.position.set(2.3, 21.3, 0.01)
tuner4Detail.rotation.set(-Math.PI / 1.8, 0, 0)
scene.add(tuner4Detail)

const tuner5 = new Mesh(new CylinderGeometry(0.2, 0.2, 0.2, 5), tunerMaterial)
tuner5.position.set(2.65, 22.02, 0.01)
tuner5.rotation.set(-Math.PI / 1.8, -Math.PI / 1.35, 0)
scene.add(tuner5)
const tuner5Detail = new Mesh(
  new BoxGeometry(0.2, 0.2, 0.2),
  tunerDetailMaterial
)
tuner5Detail.position.set(2.4, 22, 0.01)
tuner5Detail.rotation.set(-Math.PI / 1.8, Math.PI / 1.04, 0)
scene.add(tuner5Detail)

const tuner6 = new Mesh(new CylinderGeometry(0.2, 0.2, 0.2, 5), tunerMaterial)
tuner6.position.set(2.3, 22.74, -0.2)
tuner6.rotation.set(-Math.PI / 1.8, -Math.PI / 1.3, 0)
scene.add(tuner6)
const tuner6Detail = new Mesh(
  new BoxGeometry(0.3, 0.2, 0.2),
  tunerDetailMaterial
)
tuner6Detail.position.set(2, 22.7, -0.2)
tuner6Detail.rotation.set(-Math.PI / 1.8, Math.PI / 1.05, 0)
scene.add(tuner6Detail)

const bridgeMaterial = new MeshPhongMaterial({
  color: new Color(PARAMS.color3),
  wireframe: false
})
const bridge = new Mesh(new BoxGeometry(1.7, 0.5, 0.6), bridgeMaterial)
bridge.position.set(1.48, 7.5, 0.35)
bridge.rotation.set(Math.PI / 1, 0, 0)
scene.add(bridge)

const bridgeDetailMaterial = new MeshPhongMaterial({
  color: new Color(PARAMS.color2),
  wireframe: false
})

for (let i = 0; i < 6; i++) {
  const bridgeDetail = new Mesh(
    new BoxGeometry(0.15, 0.15, 0.6),
    bridgeDetailMaterial
  )
  bridgeDetail.position.set(0.8 + i / 3.65, 7.5, 0.36)
  bridgeDetail.rotation.set(Math.PI / 1, 0, 0)
  scene.add(bridgeDetail)
}

const controlMaterial = new MeshPhongMaterial({
  color: new Color(PARAMS.color6),
  wireframe: false
})
const control1 = new Mesh(
  new CylinderGeometry(0.3, 0.25, 0.7, 20),
  controlMaterial
)
control1.position.set(3.6, 7.5, 0.35)
control1.rotation.set(Math.PI / 2, 0, 0)
scene.add(control1)

const control2 = new Mesh(
  new CylinderGeometry(0.3, 0.25, 0.7, 20),
  controlMaterial
)
control2.position.set(3, 6.5, 0.35)
control2.rotation.set(Math.PI / 2, 0, 0)
scene.add(control2)

const control3 = new Mesh(
  new CylinderGeometry(0.3, 0.25, 0.7, 20),
  controlMaterial
)
control3.position.set(4.5, 6.5, 0.35)
control3.rotation.set(Math.PI / 2, 0, 0)
scene.add(control3)

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
