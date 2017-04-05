import Crafty from 'craftyjs'
import * as CONF from 'config'

export default function() {
    Crafty.c('Wall', {
        init: function() {
            this.requires('Solid, 2D, Color')
            this.color('orange')
        }
    })
}