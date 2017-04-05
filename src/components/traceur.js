import Crafty from 'craftyjs'
import * as CONF from 'config'

export default function() {
    Crafty.c('Traceur', {
        init: function() {
            this.requires('2D, Color, Canvas, Gravity, Twoway')
            this.attr({x: 0, y: 0, w: 24, h: 46})
            this.color('teal')
            this.twoway(200, 160)
            this.gravity('Floor')
        }
    })
}