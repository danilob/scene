import THREE, {
  Scene,
  AxesHelper,
  AmbientLight,
  DirectionalLight,
  Mesh,
  SphereGeometry,
  MeshToonMaterial,
  PlaneGeometry,
  Color,
  BoxGeometry,
  MeshBasicMaterial,
  CircleGeometry,
  Curve,
  TubeGeometry,
  Vector2,
  Vector3,
} from "three"
import { renderer, updateRenderer } from "/src/core/renderer"

import { gui } from "/src/core/gui"

export const scene = new Scene()

// Axes Helper
const axesHelper = new AxesHelper(0.5)
scene.add(axesHelper)

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
})

const ambientLight = new AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new DirectionalLight("#ffffff", 2)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 500
directionalLight.shadow.normalBias = 0.5
directionalLight.position.set(0.25, 2, 2.25)

scene.add(directionalLight)

const PARAMS = {
  color: "#5EDCAE",
  color_2: "#00DDAE",
}

const sphere = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

sphere.position.set(0, 2, 0)
sphere.castShadow = true

const sphere_2 = new Mesh(
  new SphereGeometry(0.75, 32, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color_2),
    wireframe: false,
  })
)

///////////////////////////////////////////////


const cubo_r = new Mesh(
  new BoxGeometry(0.5, 2, 2),
  new MeshBasicMaterial({color: 0x44aa88}),
)

const cubo_l = new Mesh(
  new BoxGeometry(0.5, 2, 2),
  new MeshBasicMaterial({color: 0x44aa88}),
)
  
const circle_r = new Mesh(
  new CircleGeometry(0.50, 32, 2)
)
const circle_l = new Mesh(
  new CircleGeometry(0.50, 32, 2)
)

const cubo_r_ext = new Mesh(
  new BoxGeometry(0.25, 3/2, 3/2),
  new MeshBasicMaterial({color: 0x77aaaa}),
)

const cubo_l_ext = new Mesh(
  new BoxGeometry(0.25, 3/2, 3/2),
  new MeshBasicMaterial({color: 0x77aaaa}),
)

const aste = new Mesh(
  
)

cubo_l.position.set(-2,2,0)
cubo_l_ext.position.set(-5/2,2,0)
cubo_r.position.set(2,2,0)
cubo_r_ext.position.set(5/2,2,0)
circle_r.position.set(2.625,2,0)
circle_r.rotation.set(0,Math.PI/2,0)
circle_l.position.set(-2.625,2,0)
circle_l.rotation.set(0,-Math.PI/2,0)


scene.add(cubo_r)
scene.add(cubo_r_ext)
scene.add(cubo_l)
scene.add(cubo_l_ext)
scene.add(circle_r)
scene.add(circle_l)



//////////////////////////////////////////////
sphere_2.position.set(0,3,4)
sphere_2.scale.set(1,1,1)
sphere_2.rotation.set(0, 0, 0)
//sphere_2.castShadow = true

const sphereCtrls = gui.addFolder({
  title: "Sphere",
})




sphereCtrls.addInput(sphere.position, "x", {
  label: "pos x",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(sphere.position, "y", {
  label: "pos y",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(sphere.position, "z", {
  label: "pos z",
  min: -10,
  max: 10,
  step: 0.1,
})
sphereCtrls.addInput(PARAMS, "color").on("change", (e) => {
  sphere.material.color = new Color(e.value)
})

sphereCtrls.addInput(sphere.material, "wireframe")

scene.add(sphere)
scene.add(sphere_2)

const plane = new Mesh(
  new PlaneGeometry(10, 10, 10, 10),
  new MeshToonMaterial({
    color: new Color("#444"),
  })
)

plane.receiveShadow = true
plane.rotation.set(-Math.PI / 2, 0, 0)
scene.add(plane)

export function updateScene() {
  updateRenderer()
}
