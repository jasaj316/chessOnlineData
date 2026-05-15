import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { resetData } from './resetData.js';

//game state object
let localData = {};

//scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

//add renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//input chess code, return vector3
function decodePos(code = "a1") {
  return new THREE.Vector3(((code.charCodeAt(0) - 96) * 20) - 90, 0, (code.charAt(1) * 20) - 90);
}

//object variables
let glb, wp1Glb, wp2Glb, wp3Glb, wp4Glb, wp5Glb, wp6Glb, wp7Glb, wp8Glb, wr1Glb, wr2Glb, wn1Glb, wn2Glb, wb1Glb, wb2Glb, wqGlb, wkGlb, bp1Glb, bp2Glb, bp3Glb, bp4Glb, bp5Glb, bp6Glb, bp7Glb, bp8Glb, br1Glb, br2Glb, bn1Glb, bn2Glb, bb1Glb, bb2Glb, bqGlb, bkGlb;
//array of glb objects. [0]=white [1]=black [2]=board
const glbArr = [[wp1Glb, wp2Glb, wp3Glb, wp4Glb, wp5Glb, wp6Glb, wp7Glb, wp8Glb, wr1Glb, wr2Glb, wn1Glb, wn2Glb, wb1Glb, wb2Glb, wqGlb, wkGlb], [bp1Glb, bp2Glb, bp3Glb, bp4Glb, bp5Glb, bp6Glb, bp7Glb, bp8Glb, br1Glb, br2Glb, bn1Glb, bn2Glb, bb1Glb, bb2Glb, bqGlb, bkGlb]];

//loads all pieces into the scene
const loader = new GLTFLoader();
for (let c = 0; c < 2; c++) {
  glb = await loader.loadAsync('public/pawn.glb');
  scene.add(glbArr[c][0] = glb.scene);
  glb = await loader.loadAsync('public/pawn.glb');
  scene.add(glbArr[c][1] = glb.scene);
  glb = await loader.loadAsync('public/pawn.glb');
  scene.add(glbArr[c][2] = glb.scene);
  glb = await loader.loadAsync('public/pawn.glb');
  scene.add(glbArr[c][3] = glb.scene);
  glb = await loader.loadAsync('public/pawn.glb');
  scene.add(glbArr[c][4] = glb.scene);
  glb = await loader.loadAsync('public/pawn.glb');
  scene.add(glbArr[c][5] = glb.scene);
  glb = await loader.loadAsync('public/pawn.glb');
  scene.add(glbArr[c][6] = glb.scene);
  glb = await loader.loadAsync('public/pawn.glb');
  scene.add(glbArr[c][7] = glb.scene);
  glb = await loader.loadAsync('public/rook.glb');
  scene.add(glbArr[c][8] = glb.scene);
  glb = await loader.loadAsync('public/rook.glb');
  scene.add(glbArr[c][9] = glb.scene);
  glb = await loader.loadAsync('public/knight.glb');
  scene.add(glbArr[c][10] = glb.scene);
  glb = await loader.loadAsync('public/knight.glb');
  scene.add(glbArr[c][11] = glb.scene);
  glb = await loader.loadAsync('public/bishop.glb');
  scene.add(glbArr[c][12] = glb.scene);
  glb = await loader.loadAsync('public/bishop.glb');
  scene.add(glbArr[c][13] = glb.scene);
  glb = await loader.loadAsync('public/queen.glb');
  scene.add(glbArr[c][14] = glb.scene);
  glb = await loader.loadAsync('public/king.glb');
  scene.add(glbArr[c][15] = glb.scene);
}

//set pieces to a hidden position
for (let i = 0; i < 16; i++) {
  glbArr[0][i].position.set(-99999, 99999, 99999);
  glbArr[1][i].position.set(-99999, 99999, 99999);
}

//assign materials
glbArr[1][15].traverse((mesh) => {
  mesh.material = new THREE.MeshStandardMaterial({ color: 0xff00ff });
});

//camera
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.y = 100; camera.position.z = -120;

//render loop
function animate(time) {
  controls.update();
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

//resets the local data
function resetLocal() {
  localData = resetData;
}

//set server data using localData
async function setServer() {
  const params = `?wPlayerName=${localData.White.PlayerName}&wp1=${localData.White.Pieces[0].pos}&wp2=${localData.White.Pieces[1].pos}&wp3=${localData.White.Pieces[2].pos}&wp4=${localData.White.Pieces[3].pos}` +
    `&wp5=${localData.White.Pieces[4].pos}&wp6=${localData.White.Pieces[5].pos}&wp7=${localData.White.Pieces[6].pos}&wp8=${localData.White.Pieces[7].pos}&wr1=${localData.White.Pieces[8].pos}` +
    `&wr2=${localData.White.Pieces[9].pos}&wn1=${localData.White.Pieces[10].pos}&wn2=${localData.White.Pieces[11].pos}&wb1=${localData.White.Pieces[12].pos}&wb2=${localData.White.Pieces[13].pos}` +
    `&wq=${localData.White.Pieces[14].pos}&wk=${localData.White.Pieces[15].pos}` +
    `&bPlayerName=${localData.Black.PlayerName}&bp1=${localData.Black.Pieces[0].pos}&bp2=${localData.Black.Pieces[1].pos}&bp3=${localData.Black.Pieces[2].pos}&bp4=${localData.Black.Pieces[3].pos}` +
    `&bp5=${localData.Black.Pieces[4].pos}&bp6=${localData.Black.Pieces[5].pos}&bp7=${localData.Black.Pieces[6].pos}&bp8=${localData.Black.Pieces[7].pos}&br1=${localData.Black.Pieces[8].pos}` +
    `&br2=${localData.Black.Pieces[9].pos}&bn1=${localData.Black.Pieces[10].pos}&bn2=${localData.Black.Pieces[11].pos}&bb1=${localData.Black.Pieces[12].pos}&bb2=${localData.Black.Pieces[13].pos}` +
    `&bq=${localData.Black.Pieces[14].pos}&bk=${localData.Black.Pieces[15].pos}`;
  const blob = await fetch(`https://chessonlinedata.netlify.app/.netlify/functions/sessionData${params}&set=true`);
  console.log(`https://chessonlinedata.netlify.app/.netlify/functions/sessionData${params}&set=true`);
}

//get server data, set localData, set positions
async function getServer() {
  const blob = await fetch(`https://chessonlinedata.netlify.app/.netlify/functions/sessionData`);
  const json = await blob.json();
  localData = json;
  for (let i = 0; i < 16; i++) {
    glbArr[0][i].position.set(...decodePos(localData.White.Pieces[i].pos));
    glbArr[1][i].position.set(...decodePos(localData.Black.Pieces[i].pos));
  }
}
//starting new game
resetLocal();

//update loop
//setInterval(() => {
setServer();
getServer();
//}, 2000);
