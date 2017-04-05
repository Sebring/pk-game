import Crafty from 'craftyjs'
import defineScenes from './scenes'
import {defineComponents} from './components'
import * as CONF from 'config'
import {VERSION} from 'version'

Crafty.init(CONF.W, CONF.H)
console.log('PK Game', VERSION)
defineScenes()
defineComponents()
Crafty.enterScene('init')
