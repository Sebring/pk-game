import Crafty from 'craftyjs'
import Wall from './wall'
import Floor from './floor'
import Traceur from './traceur'

function defineComponents() {
    Wall()
    Floor()
    Traceur()
}

function createComponent(name) {
        if (Crafty.support.webgl)
            return Crafty.e(name).addComponent('WebGL')
        return Crafty.e(name).addComponent('Canvas')
}

export  {defineComponents, createComponent as cc}
