import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; ///////////

let show = true;

// the actual scene
const sc = new THREE.Scene();

// making light /////////////////////
const li = new THREE.DirectionalLight(0xfffffff, 1);
li.position.set(5, 5, 5).set(5, 5, 5);
sc.add(li);
sc.add(new THREE.AmbientLight(0x404040));

const li2 = new THREE.DirectionalLight(0xfffffff, 1);
li2.position.set(-5, 5, -5).set(-5, 5, -5);
sc.add(li2);
sc.add(new THREE.AmbientLight(0x404040));

const cont = window.document.querySelector(".lp")

// making a camera 
const cam = new THREE.PerspectiveCamera(50, cont.clientWidth / cont.clientHeight, 0.1, 400);

// setting the position of the camera 
cam.position.z = 2.1;
cam.position.y = .9;

// adding the camera to the scene 
sc.add(cam);

// setting the renderer 
const sp = document.querySelector(".space");
const ren = new THREE.WebGLRenderer({ canvas: sp, antialias: true, alpha: true });

ren.setSize(cont.clientWidth, cont.clientHeight); // setting the size of the render in the begning
const maxpix = Math.min(window.devicePixelRatio, 2);
ren.setPixelRatio(maxpix);

// setting the orbit controls before the render takes place
const orb = new OrbitControls(cam, sp);
orb.enableDamping = true;

orb.target.set(0, .9, 0);
orb.update();

// window.addEventListener('resize', ()=>{
//     cam.aspect = cont.clientWidth/cont.clientHeight; // setting the aspect ratio of the camera when the window is resised
//     cam.updateProjectionMatrix();
//     ren.setSize(cont.clientWidth, cont.clientHeight); // setting the size of the render when the window is resised
// });

// creating the gltf loader ///////////////////////
const lo = new GLTFLoader();
let model, model2, model3, model4, model5, model6,model7, model8, model9, model10, model11;
lo.load('/integumentary.glb', (gltf) => {
    model = gltf.scene;
    sc.add(model);



    console.log("exploring the individual parts");
    model.traverse((child) => {
        console.log("- Name : ", child.name, ", Type : ", child.type);

    })




}, undefined, (error) => {
    console.log("the error", error);
});

function rm (a,b,c,d,e,f,g,h,i,j,k){
    sc.remove(a);
    sc.remove(b);
    sc.remove(c);
    sc.remove(d);
    sc.remove(e);
    sc.remove(f);
    sc.remove(g);
    sc.remove(h);
    sc.remove(i);
    sc.remove(j);
    sc.remove(k);
}

let but1 = document.querySelector("#b1");
but1.addEventListener("click", () => {
    rm(model, model2, model3, model4, model5, model6,model7, model8, model9, model10, model11);
    lo.load('/muscular.glb', (gltf) => {
    model2 = gltf.scene;
    sc.add(model2);



    console.log("exploring the individual parts");
    model2.traverse((child) => {
        console.log("- Name : ", child.name, ", Type : ", child.type);

    })




}, undefined, (error) => {
    console.log("the error", error);
});
});

let but2 = document.querySelector("#b2");
but2.addEventListener("click", () => {
    rm(model, model2, model3, model4, model5, model6,model7, model8, model9, model10, model11);
    lo.load('/skeletal.glb', (gltf) => {
    model3 = gltf.scene;
    sc.add(model3);



    console.log("exploring the individual parts");
    model3.traverse((child) => {
        console.log("- Name : ", child.name, ", Type : ", child.type);

    })




}, undefined, (error) => {
    console.log("the error", error);
});
});

let but3 = document.querySelector("#b3");
but3.addEventListener("click", () => {
    rm(model, model2, model3, model4, model5, model6,model7, model8, model9, model10, model11);
    lo.load('/reproductive.glb', (gltf) => {
    model4 = gltf.scene;
    sc.add(model4);



    console.log("exploring the individual parts");
    model4.traverse((child) => {
        console.log("- Name : ", child.name, ", Type : ", child.type);

    })




}, undefined, (error) => {
    console.log("the error", error);
});
});

let but4 = document.querySelector("#b4");
but4.addEventListener("click", () => {
    rm(model, model2, model3, model4, model5, model6,model7, model8, model9, model10, model11);
    lo.load('/nervous.glb', (gltf) => {
    model5 = gltf.scene;
    sc.add(model5);



    console.log("exploring the individual parts");
    model5.traverse((child) => {
        console.log("- Name : ", child.name, ", Type : ", child.type);

    })




}, undefined, (error) => {
    console.log("the error", error);
});
});

let but5 = document.querySelector("#b5");
but5.addEventListener("click", () => {
    rm(model, model2, model3, model4, model5, model6,model7, model8, model9, model10, model11);
    lo.load('/digestive.glb', (gltf) => {
    model6 = gltf.scene;
    sc.add(model6);



    console.log("exploring the individual parts");
    model6.traverse((child) => {
        console.log("- Name : ", child.name, ", Type : ", child.type);

    })




}, undefined, (error) => {
    console.log("the error", error);
});
});

let but6 = document.querySelector("#b6");
but6.addEventListener("click", () => {
    rm(model, model2, model3, model4, model5, model6,model7, model8, model9, model10, model11);
    lo.load('/circulatory.glb', (gltf) => {
    model7 = gltf.scene;
    sc.add(model7);



    console.log("exploring the individual parts");
    model7.traverse((child) => {
        console.log("- Name : ", child.name, ", Type : ", child.type);

    })




}, undefined, (error) => {
    console.log("the error", error);
});
});

let but7 = document.querySelector("#b7");
but7.addEventListener("click", () => {
    rm(model, model2, model3, model4, model5, model6,model7, model8, model9, model10, model11);
    lo.load('/renal.glb', (gltf) => {
    model8 = gltf.scene;
    sc.add(model8);



    console.log("exploring the individual parts");
    model8.traverse((child) => {
        console.log("- Name : ", child.name, ", Type : ", child.type);

    })




}, undefined, (error) => {
    console.log("the error", error);
});
});

let but8 = document.querySelector("#b8");
but8.addEventListener("click", () => {
    rm(model, model2, model3, model4, model5, model6,model7, model8, model9, model10, model11);
    lo.load('/respiratory.glb', (gltf) => {
    model9 = gltf.scene;
    sc.add(model9);



    console.log("exploring the individual parts");
    model9.traverse((child) => {
        console.log("- Name : ", child.name, ", Type : ", child.type);

    })




}, undefined, (error) => {
    console.log("the error", error);
});
});

let but9 = document.querySelector("#b9");
but9.addEventListener("click", () => {
    rm(model, model2, model3, model4, model5, model6,model7, model8, model9, model10, model11);
    lo.load('/endocrine.glb', (gltf) => {
    model10 = gltf.scene;
    sc.add(model10);



    console.log("exploring the individual parts");
    model10.traverse((child) => {
        console.log("- Name : ", child.name, ", Type : ", child.type);

    })




}, undefined, (error) => {
    console.log("the error", error);
});
});

let but10 = document.querySelector("#b10");
but10.addEventListener("click", () => {
    rm(model, model2, model3, model4, model5, model6,model7, model8, model9, model10, model11);
    lo.load('/integumentary.glb', (gltf) => {
    model11 = gltf.scene;
    sc.add(model11);



    console.log("exploring the individual parts");
    model11.traverse((child) => {
        console.log("- Name : ", child.name, ", Type : ", child.type);

    })




}, undefined, (error) => {
    console.log("the error", error);
});
});

window.addEventListener('resize', () => {
    cam.aspect = cont.clientWidth / cont.clientHeight; // setting the aspect ratio of the camera when the window is resised
    cam.updateProjectionMatrix();
    ren.setSize(cont.clientWidth, cont.clientHeight); // setting the size of the render when the window is resised
});

// calling the renderer again and again in a loop to make it like a video
(function adi() {
    orb.update(); // as the enableDamping is true (in line 32) we have to set the update method to sync the animation to the frame rate. without this the enableDamping wont work
    ren.render(sc, cam); // calling the renderer once
    window.requestAnimationFrame(adi);
})()