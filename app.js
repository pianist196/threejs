import Viewer from "./viewer.js";
import * as THREE from './three.module.js'

export default class {
    constructor() {
        Viewer.init({
            renderer: {
                parent: document.body,
                antialias: true,
                clearColor: 'purple',
                pixelRation: 1
            }
        })
        this.createObject()
    }


    createObject() {
        Viewer.scene.add(new THREE.GridHelper(10, 10))

        const black = new THREE.Mesh(
            new THREE.BoxGeometry(3, .1, 10),
            new THREE.MeshStandardMaterial({color: 'black'})
        )
        Viewer.scene.add(black)
        black.position.set(-4, 0, -15)

        const green = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial({color: 'green'})
        )
        green.position.set(-3, 1, 1)
        Viewer.scene.add(green)

        const yellow = new THREE.Mesh(
            new THREE.BoxGeometry(4, .1, 4),
            new THREE.MeshStandardMaterial({color: 'yellow'})
        )
        Viewer.scene.add(yellow)
        yellow.position.set(0, 1, 0)

        let isComeDown = false
        Viewer.addUpdate('transformation', () => {
            black.position.z += .05

            if (black.position.z > 0 && !isComeDown) {
                isComeDown = true
                black.add(green)
                let invertMatrix = black.matrix.clone()
                invertMatrix.invert()
                green.applyMatrix4(black.matrix)
            }
        })

        // const object = new THREE.Mesh(
        //     new THREE.BoxGeometry(1, 1, 1),
        //     new THREE.MeshStandardMaterial({color: 'aqua'})
        // )
        // Viewer.scene.add(object)
        //
        // let angle = 0
        //
        // let axis = new THREE.Vector3(1, 2, 3).normalize()
        //
        // object.rotation.set(1.5,0,0)
        //
        // Viewer.addUpdate('transformation', () => {
        //     angle += .01
        //     object.quaternion.setFromAxisAngle(axis, angle)
        // })

        // const cone = new THREE.Mesh(
        //     new THREE.ConeGeometry(.1, .2, 8),
        //     new THREE.MeshStandardMaterial({color: 'red'})
        // )
        // cone.position.z = -.54
        // cone.rotation.x = -Math.PI / 2
        //
        // cone.name = 'cone1'
        //
        // this.object.add(cone)
        // this.object.scale.set(1, 3, 4)
        //
        // const sphere = new THREE.Mesh(
        //     new THREE.SphereGeometry(.5, 8, 8),
        //     new THREE.MeshStandardMaterial({color: 'green'})
        // )
        // sphere.position.set(5, 0, -6)
        // Viewer.scene.add(sphere)
        // Viewer.addUpdate("look_at_sphere", () => {
        //     sphere.position.x += -.05
        //     that.object.lookAt(sphere.position.clone().multiplyScalar(-1))
        // })

        // const obj2 = this.object.clone()
        // obj2.position.x += 3
        // Viewer.scene.add(obj2)


        // Viewer.addUpdate(
        //     "rotate_object",
        //     () => {
        //         that.object.rotation.y += .01
        //     }
        // )
    }


}
