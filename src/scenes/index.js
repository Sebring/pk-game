import Crafty from 'craftyjs'
import init from './init'
import main from './main'

export default function loadScenes() {
    Crafty.defineScene('init', init)
    Crafty.defineScene('main', main)
}