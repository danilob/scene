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
  BoxGeometry,
  MeshBasicMaterial,
  CircleGeometry,
  TorusGeometry,
  CylinderGeometry,
  ColorRepresentation,
} from "three"
import * as rendererJs from "../core/renderer.js"

import { gui } from "../core/gui.js"

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
  color   : "#5EDCAE",
  color_w : "#F5F5F5",
  color_pl: "#FEDCF4",
  color_p: "#D9628D",
  color_dp: "#D663BA",
  color_lb: "#D9FFFF",
  color_s: "#F0C27F",
}

// face
const sphere = new Mesh(
  new SphereGeometry(1.3, 32, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color_s),
    wireframe: false,
})
)
const nose = new Mesh(
  new SphereGeometry(1.3, 32, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color_s),
    wireframe: false,
})
)

const shoulder = new Mesh(
  new SphereGeometry(1.3, 32, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color_s),
    wireframe: false,
})
)

sphere.position.set(0, 2.5, 0)
sphere.scale.set(1.25,1.7,1.25)
sphere.castShadow = true
scene.add(sphere)

nose.rotation.set(-Math.PI/4,0,0)
nose.position.set(0, 2.3, 1.5)
nose.scale.set(0.2,0.3,0.2)
nose.castShadow = true
scene.add(nose)

shoulder.position.set(0, -0.5, 0)
shoulder.scale.set(2,0.7,0.7)
shoulder.castShadow = true
scene.add(shoulder)


const foam_l = new Mesh(
  new TorusGeometry( 0.75 , 0.5, 20, 15),
  new MeshToonMaterial({color: PARAMS.color_lb})
)

const foam_r = new Mesh(
  new TorusGeometry( 0.75 , 0.5, 20, 15),
  new MeshToonMaterial({color: PARAMS.color_lb})
)

const speaker_r = new Mesh(
  new BoxGeometry(0.5, 2, 2),
  new MeshBasicMaterial({color: PARAMS.color_p}),
)
const speaker_l = new Mesh(
  new BoxGeometry(0.5, 2, 2),
  new MeshBasicMaterial({color: PARAMS.color_p}),
)
  
const play_symbol_r = new Mesh(
  new CircleGeometry(0.50, 2, 2)
)
const play_symbol_l = new Mesh(
  new CircleGeometry(0.50, 2, 2)
)

const cubo_r_ext = new Mesh(
  new BoxGeometry(0.28, 3/2, 3/2),
  new MeshBasicMaterial({color: PARAMS.color_dp}),
)

const cubo_l_ext = new Mesh(
  new BoxGeometry(0.28, 3/2, 3/2),
  new MeshBasicMaterial({color: PARAMS.color_dp}),
)

// sequencia lado direito da haste
const slider_r = new Mesh(
  new BoxGeometry(0.25, 2, 0.5, 5),
  new MeshToonMaterial({color: PARAMS.color_dp})
)

const slider_up = new Mesh(
  new BoxGeometry(0.27, 0.27, 0.55),
  new MeshToonMaterial({color: PARAMS.color_p})
)

const slider_up1 = new Mesh(
  new BoxGeometry(0.25, 0.3, 0.5),
  new MeshToonMaterial({color: PARAMS.color_dp})
)

const slider_up2 = new Mesh(
  new BoxGeometry(0.25, 0.3, 0.5),
  new MeshToonMaterial({color: PARAMS.color_dp})
)

const slider_up3 = new Mesh(
  new BoxGeometry(0.25, 0.3, 0.5),
  new MeshToonMaterial({color: PARAMS.color_dp})
)

const slider_up4 = new Mesh(
  new BoxGeometry(0.25, 0.3, 0.5),
  new MeshToonMaterial({color: PARAMS.color_dp})
)

const slider_up5 = new Mesh(
  new BoxGeometry(0.25, 0.3, 0.5),
  new MeshToonMaterial({color: PARAMS.color_dp})
)

//sequencia lado esquerdo da haste 
const slider_l = new Mesh(
  new BoxGeometry(0.25, 2, 0.5, 5),
  new MeshToonMaterial({color: PARAMS.color_dp})
)

const slider_up_l = new Mesh(
  new BoxGeometry(0.27, 0.27, 0.55),
  new MeshToonMaterial({color: PARAMS.color_p})
)

const slider_up1_l = new Mesh(
  new BoxGeometry(0.25, 0.3, 0.5),
  new MeshToonMaterial({color: PARAMS.color_dp})
)

const slider_up2_l = new Mesh(
  new BoxGeometry(0.25, 0.3, 0.5),
  new MeshToonMaterial({color: PARAMS.color_dp})
)

const slider_up3_l = new Mesh(
  new BoxGeometry(0.25, 0.3, 0.5),
  new MeshToonMaterial({color: PARAMS.color_dp})
)

const slider_up4_l = new Mesh(
  new BoxGeometry(0.25, 0.3, 0.5),
  new MeshToonMaterial({color: PARAMS.color_dp})
)
const slider_up5_l = new Mesh(
  new BoxGeometry(0.25, 0.3, 0.5),
  new MeshToonMaterial({color: PARAMS.color_dp})
)

// a parte de cima de haste
const headband = new Mesh(
  new BoxGeometry(0.23, 3.5, 0.5),
  new MeshToonMaterial({color: PARAMS.color_dp})
)

const slider_foam = new Mesh(
  new CylinderGeometry(0.28, 0.29, 2.5, 12,2),
  new MeshToonMaterial({color: PARAMS.color_pl})
)

const mic_bind = new Mesh(
  new SphereGeometry(0.75, 32, 20),
  new MeshToonMaterial({color: PARAMS.color_w})
)

const mic = new Mesh(
  new SphereGeometry(0.2, 32,32),
  new MeshToonMaterial({color: PARAMS.color_p})
)

speaker_l.position.set(-2.2,2,0)
cubo_l_ext.position.set(-2.39,2,0)
play_symbol_l.position.set(-2.53,2,0)
foam_l.position.set(-1.95,2,0)

speaker_r.position.set(2.2,2,0)
cubo_r_ext.position.set(2.39,2,0)
play_symbol_r.position.set(2.53,2,0)
foam_r.position.set(1.95,2,0)

// lado direito - haste posições
slider_r.position.set(2.37,3,0)
slider_up.position.set(2.35,4.1,0)
slider_up1.position.set(2.32,4.25,0)
slider_up2.position.set(2.238,4.50,0)
slider_up3.position.set(2.1,4.7,0)
slider_up4.position.set(1.90,4.849,0)
slider_up5.position.set(1.78,4.92,0)

headband.position.set(0,4.98,0)
slider_foam.position.set(0,4.98,0)

//lado esquerdo - harte posições
slider_l.position.set(-2.37,3,0)
slider_up_l.position.set(-2.35,4.1,0)
slider_up1_l.position.set(-2.32,4.25,0)
slider_up2_l.position.set(-2.238,4.50,0)
slider_up3_l.position.set(-2.1,4.7,0)
slider_up4_l.position.set(-1.90,4.849,0)
slider_up5_l.position.set(-1.78,4.92,0)

mic_bind.position.set(-1.75,2,1.5)
mic.position.set(-1.2,2.1,2.5)

mic_bind.scale.set(0.08,1.5,0.08)
mic.scale.set(1.2,0.7,0.7)
foam_l.scale.set(0.8,0.8,0.75)
foam_r.scale.set(0.8,0.8,0.75)

play_symbol_r.rotation.set(0,Math.PI/2,0)
play_symbol_l.rotation.set(0,-Math.PI/2,0)
mic_bind.rotation.set(-Math.PI/2,-Math.PI/10,Math.PI/7)
mic.rotation.set(0,-Math.PI/4, 0)
foam_l.rotation.set(0,Math.PI/2,0)
foam_r.rotation.set(0,Math.PI/2,0)

speaker_r.rotation.set(0,0,-Math.PI/30)
speaker_l.rotation.set(0,0,Math.PI/30)

//lado direito - haste rotação
slider_up.rotation.set(0, 0,Math.PI/15)
slider_up1.rotation.set(0, 0,Math.PI/12)
slider_up2.rotation.set(0, 0,Math.PI/8)
slider_up3.rotation.set(0, 0,Math.PI/4)
slider_up4.rotation.set(0, 0,Math.PI/3)
slider_up5.rotation.set(0, 0,Math.PI/3)

//lado esquerdo - haste rotação
slider_up_l.rotation.set(0, 0,-Math.PI/15)
slider_up1_l.rotation.set(0, 0,-Math.PI/12)
slider_up2_l.rotation.set(0, 0,-Math.PI/8)
slider_up3_l.rotation.set(0, 0,-Math.PI/4)
slider_up4_l.rotation.set(0, 0,-Math.PI/3)
slider_up5_l.rotation.set(0, 0,-Math.PI/3)

headband.rotation.set(0, 0,Math.PI/2)
slider_foam.rotation.set(0, 0,Math.PI/2)

scene.add(speaker_r,
          cubo_r_ext,
          play_symbol_r,
          slider_r,
          foam_r,
          speaker_l, 
          cubo_l_ext, 
          play_symbol_l,
          slider_l,
          foam_l,
          )

scene.add(slider_up,
          slider_up1,
          slider_up2,
          slider_up3, 
          slider_up4,
          slider_up5,
          slider_up_l, 
          slider_up1_l, 
          slider_up2_l,
          slider_up3_l, 
          slider_up4_l,
          slider_up5_l,
          )

scene.add(headband, 
          slider_foam,
          mic_bind, 
          mic,
          )

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
sphereCtrls.addInput(PARAMS, "color").on("change", (e: { value: ColorRepresentation | undefined }) => {
  sphere.material.color = new Color(e.value)
})

sphereCtrls.addInput(sphere.material, "wireframe")

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
  rendererJs.updateRenderer()
}
