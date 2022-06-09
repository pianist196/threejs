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
        this.object = new THREE.Mesh(
            new THREE.BoxGeometry(1, 1, 1),
            new THREE.MeshStandardMaterial({color: 'aqua'})
        )
        Viewer.scene.add(this.object)
        this.object.position.z = -5
        let that = this
        Viewer.addUpdate(
            "rotate_object",
            () => {
                that.object.rotation.y += .01
            }
        )
    }


}
