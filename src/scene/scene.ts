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
  TorusGeometry,
  CylinderGeometry,
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
  color_w: "#ECEAE3",
  color_o: "#FA7E00",
  color_b: "#62D5DB",
  color_p: "#D663BA",
  color_bb: "#C6FAE5",
}

const sphere = new Mesh(
  new SphereGeometry(0.5, 32, 32),
  new MeshToonMaterial({
    color: new Color(PARAMS.color),
    wireframe: false,
  })
)

sphere.position.set(0, 2, 0)
sphere.castShadow = true

/////////////////////

const foam_l = new Mesh(
  new TorusGeometry( 0.75 , 0.5, 20, 15),
  new MeshToonMaterial({color: PARAMS.color_bb})
)

const foam_r = new Mesh(
  new TorusGeometry( 0.75 , 0.5, 20, 15),
  new MeshToonMaterial({color: PARAMS.color_bb})
)

const speaker_r = new Mesh(
  new BoxGeometry(0.5, 2, 2),
  new MeshBasicMaterial({color: PARAMS.color_o}),
)
const speaker_l = new Mesh(
  new BoxGeometry(0.5, 2, 2),
  new MeshBasicMaterial({color: PARAMS.color_o}),
)
  
const play_symbol_r = new Mesh(
  new CircleGeometry(0.50, 2, 2)
)
const play_symbol_l = new Mesh(
  new CircleGeometry(0.50, 2, 2)
)

const cubo_r_ext = new Mesh(
  new BoxGeometry(0.28, 3/2, 3/2),
  new MeshBasicMaterial({color: PARAMS.color_w}),
)

const cubo_l_ext = new Mesh(
  new BoxGeometry(0.28, 3/2, 3/2),
  new MeshBasicMaterial({color: PARAMS.color_w}),
)

const slider_l = new Mesh(
  new BoxGeometry(0.25, 2, 0.5, 5),
  new MeshToonMaterial({color: PARAMS.color_bb})
)

// sequencia lado direito da haste
const slider_up = new Mesh(
  new BoxGeometry(0.27, 0.27, 0.55),
  new MeshToonMaterial({color: PARAMS.color_o})
)

const slider_up1 = new Mesh(
  new BoxGeometry(0.25, 0.3, 0.5),
  new MeshToonMaterial({color: PARAMS.color_b})
)

const slider_up2 = new Mesh(
  new BoxGeometry(0.25, 0.3, 0.5),
  new MeshToonMaterial({color: PARAMS.color_bb})
)

const slider_up3 = new Mesh(
  new BoxGeometry(0.25, 0.3, 0.5),
  new MeshToonMaterial({color: PARAMS.color_bb})
)

const slider_up4 = new Mesh(
  new BoxGeometry(0.25, 0.3, 0.5),
  new MeshToonMaterial({color: PARAMS.color_bb})
)


//sequencia lado esquerdo da haste 
const slider_up_l = new Mesh(
  new BoxGeometry(0.27, 0.27, 0.55),
  new MeshToonMaterial({color: PARAMS.color_o})
)

const slider_up1_l = new Mesh(
  new BoxGeometry(0.25, 0.3, 0.5),
  new MeshToonMaterial({color: PARAMS.color_b})
)

const slider_up2_l = new Mesh(
  new BoxGeometry(0.25, 0.3, 0.5),
  new MeshToonMaterial({color: PARAMS.color_bb})
)

const slider_up3_l = new Mesh(
  new BoxGeometry(0.25, 0.3, 0.5),
  new MeshToonMaterial({color: PARAMS.color_bb})
)

const slider_up4_l = new Mesh(
  new BoxGeometry(0.25, 0.3, 0.5),
  new MeshToonMaterial({color: PARAMS.color_bb})
)


// a parte de cima de haste
const headband = new Mesh(
  new BoxGeometry(0.228, 3.67, 0.5),
  new MeshToonMaterial({color: PARAMS.color_bb})
)

const slider_foam = new Mesh(
  new CylinderGeometry(0.29, 0.29, 2.5, 12,2, true),
  new MeshToonMaterial({color: PARAMS.color_p})
)

const slider_r = new Mesh(
  new BoxGeometry(0.25, 2, 0.5, 5),
  new MeshToonMaterial({color: PARAMS.color_bb})
)

const mic_bind = new Mesh(
  new SphereGeometry(0.75, 32, 20),
  new MeshToonMaterial({color: PARAMS.color_b})
)

const mic = new Mesh(
  new SphereGeometry(0.2, 32,32),
  new MeshToonMaterial({color: PARAMS.color_w})
)



speaker_l.position.set(-2,2,0)
cubo_l_ext.position.set(-2.39,2,0)
play_symbol_l.position.set(-2.53,2,0)
foam_l.position.set(-1.75,2,0)

speaker_r.position.set(2,2,0)
cubo_r_ext.position.set(2.39,2,0)
play_symbol_r.position.set(2.53,2,0)
foam_r.position.set(1.75,2,0)



// lado direito - haste posições
slider_r.position.set(2.37,3,0)
slider_up.position.set(2.35,4.1,0)
slider_up1.position.set(2.32,4.25,0)
slider_up2.position.set(2.238,4.50,0)
slider_up3.position.set(2.1,4.7,0)
slider_up4.position.set(1.90,4.849,0)

headband.position.set(0,4.918,0)
slider_foam.position.set(0,4.9,0)

//lado esquerdo - harte posições
slider_l.position.set(-2.37,3,0)
slider_up_l.position.set(-2.35,4.1,0)
slider_up1_l.position.set(-2.32,4.25,0)
slider_up2_l.position.set(-2.238,4.50,0)
slider_up3_l.position.set(-2.1,4.7,0)
slider_up4_l.position.set(-1.90,4.849,0)

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

//lado direito - haste rotação
slider_up.rotation.set(0, 0,Math.PI/15)
slider_up1.rotation.set(0, 0,Math.PI/12)
slider_up2.rotation.set(0, 0,Math.PI/8)
slider_up3.rotation.set(0, 0,Math.PI/4)
slider_up4.rotation.set(0, 0,Math.PI/3)

//lado esquerdo - haste rotação
slider_up_l.rotation.set(0, 0,-Math.PI/15)
slider_up1_l.rotation.set(0, 0,-Math.PI/12)
slider_up2_l.rotation.set(0, 0,-Math.PI/8)
slider_up3_l.rotation.set(0, 0,-Math.PI/4)
slider_up4_l.rotation.set(0, 0,-Math.PI/3)

headband.rotation.set(0, 0,Math.PI/2)
slider_foam.rotation.set(0, 0,Math.PI/2)


scene.add(speaker_r,
          cubo_r_ext,
          play_symbol_r,
          slider_r,
          foam_r,)

scene.add(speaker_l, 
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
          )

scene.add(slider_up_l, 
          slider_up1_l, 
          slider_up2_l,
          slider_up3_l, 
          slider_up4_l,
           )

scene.add(headband, 
          slider_foam,
          )
scene.add(mic_bind, mic)


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
