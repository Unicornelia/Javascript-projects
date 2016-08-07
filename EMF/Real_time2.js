import {subscribe} from 'messaging'
import {background, html} from 'util'
import {tone} from 'audio'
import {setItem, getItem, subItems} from 'store'

document.body.style.background = '#fc0'
//document.currentScript.className = 'visible'

/*
const hsl = (hue) => `hsl(${hue}, 50%, 50%)`

subscribe('a', c => {
  let colour = 360*Math.random()
  let bgcol = hsl(colour)
  console.log('a', colour, bgcol)
  background(bgcol)
})
*/


var input = document.createElement('input')

input.addEventListener('change', function(d) {
	console.log(this.value)
    tone(this.value, 50)
    setItem('note', this.value)
})

document.body.insertBefore(input, document.currentScript)

subItems('note', (notes) => {
  notes.forEach(n => tone(n, 50))
})
