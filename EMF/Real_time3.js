import {subscribe} from 'messaging'
import {background, text, html, css} from 'util'
import {tone} from 'audio'
import {setItem, getItem, getItems, subItems} from 'store'

const hsl = (hue) => `hsl(${hue}, 50%, 50%)`

var horizontal = true;

subscribe('dial', function(c) {
  var head = document.getElementById('because');
  if (horizontal) {
    head.style.top = c+'px';
  } else {
    head.style.left = c+'px';
  }

	head.style.transform = 'rotate('+c+'deg)';
})

subscribe('a', c => {
  if (c === 'pressed') {
	horizontal = true;
  }
})
subscribe('b', c => {
  if (c === 'pressed') {
    horizontal = false;
  }
})

subscribe('dial', c => tone(c + 450))

//var inp = document.createElement('input')
//inp.type = 'color'
//document.body.appendChild(inp)

html(`<h2 id="because">Yo</h2>`)
css(`
	h2 {
		position: absolute;
		top:0px; left:0px;
	}
`)

//inp.addEventListener('change', function(){
//  if(this.value)
//    setItem('color', this.value)
//})

//getItem('color').then(colourname => background(colourname));

//getItems('color').then(colours => text(colours.join(', ')))


//subItems('color', colours => text(colours.join(', ')))
