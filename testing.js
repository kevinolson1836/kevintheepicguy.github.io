                        // // We need 3 things everytime we use Three.js
                        //  // Scene + Camera + Renderer
                        //  const scene = new THREE.Scene()
                        //  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
                        //  const renderer = new THREE.WebGLRenderer({ antialias: true})
 
                        // //  subtracting to get rid of the scroll bars
                        //  renderer.setSize( window.innerWidth-1, window.innerHeight-4 )
                        
                        //  // sets renderer background color to grey-ish
                        //  renderer.setClearColor("#aaaaaa")
                        //  document.body.appendChild( renderer.domElement )
                        //  camera.position.z = 70
                        //  camera.position.y = 30
                        

                        //  // resize canvas on resize window
                        //  window.addEventListener( 'resize', () => {
                        //      let width = window.innerWidth
                        //      let height = window.innerHeight
                        //      renderer.setSize( width, height )
                        //      camera.aspect = width / height
                        //      camera.updateProjectionMatrix()
                        //  })
                        
                        //  // basic ground
                        //  var ground_geometry = new THREE.BoxGeometry( 1000, 2, 1)
                        //  var ground_material = new THREE.MeshBasicMaterial( { color: 0x000})
                        //  var ground = new THREE.Mesh ( ground_geometry, ground_material )
                        //  scene.add( ground )

                        // function animate() {
                        //     // cube.rotation.x += 0.01;
                        //     // cube.rotation.y += 0.01;
                        //     requestAnimationFrame( animate )
                        //     renderer.render( scene, camera )
                        //     console.log("loop")
                        //    }
                        //    animate()
                        import * as THREE from 'three';

                        import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
                        import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
                        
                        
                        import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
                        
                        
                        // simplified on three.js/examples/webgl_loader_fbx.html                        
                        function main() {
                            // renderer                                                                 
                            const renderer = new THREE.WebGLRenderer({antialias: true});
                            renderer.setSize(window.innerWidth-1, window.innerHeight-4);
                            document.body.appendChild(renderer.domElement);
                        
                            // camera                                                                   
                            const camera = new THREE.PerspectiveCamera(30, (window.innerWidth / window.innerHeight), 0.1, 10000);
                            camera.position.set(0, -1, 36);
                            camera.up.set(0, 1, 0);
                            camera.lookAt(new THREE.Vector3(0, 0, 0));
                        
                            // scene and lights                                                         
                            const scene = new THREE.Scene();
                            scene.add(new THREE.AmbientLight(0xcccccc));
                            const controls =  new OrbitControls(camera, renderer.domElement)
                        
                            // load fbx model and texture                                               
                            // const objs = [];
                            // const loader = new FBXLoader();
                            // loader.load("./3dPrint.fbx", model => {
                            //     // model is a THREE.Group (THREE.Object3D)                              
                            //     const mixer = new THREE.AnimationMixer(model);
                            //     // animations is a list of THREE.AnimationClip                          
                            //     mixer.clipAction(model.animations[0]).play();
                            //     mixer.clipAction(model.animations[1]).play();
                            //     mixer.clipAction(model.animations[3]).play();
                            //     console.log(model.animations);
                            //     scene.add(model);
                            //     objs.push({model, mixer});
                            // });
                        
                            const objs = [];
                            const loader = new FBXLoader();
                            loader.load("./3dPrint.fbx", model => {
                                // model is a THREE.Group (THREE.Object3D)                              
                                const mixer = new THREE.AnimationMixer(model);
                                // animations is a list of THREE.AnimationClip
                                // mixer.clipAction(model.animations[1]).play();
                        
                                mixer.clipAction(model.animations[2]).play();
                                mixer.clipAction(model.animations[3]).play();
                                console.log(model.animations);
                                scene.add(model);
                                objs.push({model, mixer});
                            });
                            
                            // animation rendering                                                      
                            const clock = new THREE.Clock();
                            (function animate() {
                                controls.update();
                        
                                // animation with THREE.AnimationMixer.update(timedelta)                
                                objs.forEach(({mixer}) => {mixer.update(clock.getDelta());});
                                renderer.render(scene, camera);
                                requestAnimationFrame(animate);
                            })();
                            return objs;
                        }
                        
                        const objs = main();