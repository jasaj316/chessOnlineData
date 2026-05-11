
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//game state variables
let wPlayerName, wp1, wp2, wp3, wp4, wp5, wp6, wp7, wp8, wr1, wr2, wn1, wn2, wb1, wb2, wq, wk, bPlayerName, bp1, bp2, bp3, bp4, bp5, bp6, bp7, bp8, br1, br2, bn1, bn2, bb1, bb2, bq, bk;
let localData;

//scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

//add renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//create and add objects
//#region
let glb, wp1Glb, wp2Glb, wp3Glb, wp4Glb, wp5Glb, wp6Glb, wp7Glb, wp8Glb, wr1Glb, wr2Glb, wn1Glb, wn2Glb, wb1Glb, wb2Glb, wqGlb, wkGlb, bp1Glb, bp2Glb, bp3Glb, bp4Glb, bp5Glb, bp6Glb, bp7Glb, bp8Glb, br1Glb, br2Glb, bn1Glb, bn2Glb, bb1Glb, bb2Glb, bqGlb, bkGlb;
const loader = new GLTFLoader();
//white pawns
glb = await loader.loadAsync('public/pawn.glb');
scene.add(wp1Glb = glb.scene);
glb = await loader.loadAsync('public/pawn.glb');
scene.add(wp2Glb = glb.scene);
glb = await loader.loadAsync('public/pawn.glb');
scene.add(wp3Glb = glb.scene);
glb = await loader.loadAsync('public/pawn.glb');
scene.add(wp4Glb = glb.scene);
glb = await loader.loadAsync('public/pawn.glb');
scene.add(wp5Glb = glb.scene);
glb = await loader.loadAsync('public/pawn.glb');
scene.add(wp6Glb = glb.scene);
glb = await loader.loadAsync('public/pawn.glb');
scene.add(wp7Glb = glb.scene);
glb = await loader.loadAsync('public/pawn.glb');
scene.add(wp8Glb = glb.scene);
//black pawns
glb = await loader.loadAsync('public/pawn.glb');
scene.add(bp1Glb = glb.scene);
glb = await loader.loadAsync('public/pawn.glb');
scene.add(bp2Glb = glb.scene);
glb = await loader.loadAsync('public/pawn.glb');
scene.add(bp3Glb = glb.scene);
glb = await loader.loadAsync('public/pawn.glb');
scene.add(bp4Glb = glb.scene);
glb = await loader.loadAsync('public/pawn.glb');
scene.add(bp5Glb = glb.scene);
glb = await loader.loadAsync('public/pawn.glb');
scene.add(bp6Glb = glb.scene);
glb = await loader.loadAsync('public/pawn.glb');
scene.add(bp7Glb = glb.scene);
glb = await loader.loadAsync('public/pawn.glb');
scene.add(bp8Glb = glb.scene);

//#endregion

//set positions of everything
function setAllPos() {
  //white pawns
  wp1Glb.position.set(-70, 0, 50);
  wp2Glb.position.set(-50, 0, 50);
  wp3Glb.position.set(-30, 0, 50);
  wp4Glb.position.set(-10, 0, 50);
  wp5Glb.position.set(10, 0, 50);
  wp6Glb.position.set(30, 0, 50);
  wp7Glb.position.set(50, 0, 50);
  wp8Glb.position.set(70, 0, 50);
  //black pawns
  bp1Glb.position.set(-70, 0, -50);
  bp2Glb.position.set(-50, 0, -50);
  bp3Glb.position.set(-30, 0, -50);
  bp4Glb.position.set(-10, 0, -50);
  bp5Glb.position.set(10, 0, -50);
  bp6Glb.position.set(30, 0, -50);
  bp7Glb.position.set(50, 0, -50);
  bp8Glb.position.set(70, 0, -50);
}
setAllPos();

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.y = 50; camera.position.z = 50;

//render loop
function animate(time) {
  controls.update();
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);



//resets the local data
function resetLocal() {
  wPlayerName = "Justin";
  wp1 = (-70, 0, 50);
  wp2 = "b2";
  wp3 = "c2";
  wp4 = "d2";
  wp5 = "e2";
  wp6 = "f2";
  wp7 = "g2";
  wp8 = "h2";
  wr1 = "a1";
  wr2 = "h1";
  wn1 = "b1";
  wn2 = "g1";
  wb1 = "c1";
  wb2 = "f1";
  wq = "d1";
  wk = "e1";
  bPlayerName = "Emily";
  bp1 = "h7";
  bp2 = "g7";
  bp3 = "f7";
  bp4 = "e7";
  bp5 = "d7";
  bp6 = "c7";
  bp7 = "b7";
  bp8 = "a7";
  br1 = "h8";
  br2 = "a8";
  bn1 = "g8";
  bn2 = "b8";
  bb1 = "f8";
  bb2 = "c8";
  bq = "d8";
  bk = "e8";
}

//set server data
async function setServer() {
  const params = `?wPlayerName=${wPlayerName}&wp1=${wp1}&wp2=${wp2}&wp3=${wp3}&wp4=${wp4}&wp5=${wp5}&wp6=${wp6}&wp7=${wp7}&wp8=${wp8}&wr1=${wr1}&wr2=${wr2}&wn1=${wn1}&wn2=${wn2}&wb1=${wb1}&wb2=${wb2}&wq=${wq}&wk=${wk}&bPlayerName=${bPlayerName}&bp1=${bp1}&bp2=${bp2}&bp3=${bp3}&bp4=${bp4}&bp5=${bp5}&bp6=${bp6}&bp7=${bp7}&bp8=${bp8}&br1=${br1}&br2=${br2}&bn1=${bn1}&bn2=${bn2}&bb1=${bb1}&bb2=${bb2}&bq=${bq}&bk=${bk}`;
  const blob = await fetch(`https://chessonlinedata.netlify.app/.netlify/functions/sessionData${params}&set=true`);
}

//set local data
function setLocal(json) {
  console.log(json);
  localData = json;
}

//get server data
async function getServer() {
  const blob = await fetch(`https://chessonlinedata.netlify.app/.netlify/functions/sessionData`);
  const json = await blob.json();
  setLocal(json);
}
getServer();