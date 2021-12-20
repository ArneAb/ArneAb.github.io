//variables
let scene, camera, renderer, cube;

//Initialize
function init()
{
    scene = new THREE.Scene();
    camera =new THREE.PerspectiveCamera(
        75,
        window.innerWidth  /window.innerHeight,
        0.1,
        1000
    ); //Might want to change this to ortographic later
    
    renderer = new THREE.WebGLRenderer({antialias: true});
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    

    geometry = new THREE.BoxGeometry( 2, 2, 2 );
    material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    geometry = new THREE.ConeGeometry( 2, 4, 4 );
    material = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
    cone = new THREE.Mesh( geometry, material );
    scene.add( cone );
    cone.position.x = 10;
    cube.position.x = -10;


    camera.position.z = 20;
    camera.position.y = 6;

}



function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;

    cone.rotation.x += 0.01;
    cone.rotation.y += 0.02;
    renderer.render(scene,camera);
    const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( light );
}

//When the window gets resized
function onWindowResize()
{
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false)

init();
animate();
