import Crafty from 'craftyjs'
import * as CONF from 'config'
import {cc} from '../components'

export default function load() {
    Crafty.background("#eee");
    
    cc('Floor').attr({x: 0, y: CONF.H-24, w: CONF.W, h: 24})
    cc('Floor').attr({x: 500, y: CONF.H-100, w: 60, h: 6})
    cc('Floor').attr({x: 250, y: CONF.H-50, w: 60, h: 6})

    cc('Wall').attr({x: 250, y: CONF.H-50-124, w: 24, h: 124})
    
    cc('Traceur').attr({x: 300, y: 0, w: 24, h: 46})

}
