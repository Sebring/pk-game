import Crafty from 'craftyjs'
import * as CONF from 'config'

export default function() {
    Crafty.c('Floor', {
        init: function() {
            this.requires('Solid, 2D, Canvas, Color')
            this.color('gray')
        }
    })
}