import Crafty from 'craftyjs'
import * as CONF from 'config'

export default function load() {
    Crafty.background("#000");
    
    Crafty.e("2D, DOM, Text")
          .attr({ w: CONF.W-6, h: 50, x: 0, y: 50 })
          .text("PK Game")
          .textAlign('center')
          .textColor("#eee")
          .textFont({size: '20pt'})
          .css({ "border": "3px solid red"})

    Crafty.e("2D, DOM, Text, Keyboard")
          .attr({ w: CONF.W, h: 50, x: 0, y: 120 })
          .text("Press space to play")
          .textAlign('center')
          .textFont({size: '18pt'})
          .textColor("#eee")
          .bind("EnterFrame", function(frameData) {
          if (this.isDown("SPACE")) {
            Crafty.enterScene('main')
          }
        })
}