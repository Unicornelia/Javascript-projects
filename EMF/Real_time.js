import {subscribe} from 'messaging'
import {setItem, getItem, getItems, subItem, subItems} from 'store'
import {background} from 'util'

var colori = 0;
var peoplecolors = [];
subscribe('a', function(value){
  console.log(value);
  if(value === "pressed")
  {
    //pressed
    //document.body.style.background = "#ff0000"
    console.log(colori, peoplecolors);
    document.body.style.background = peoplecolors[colori];
    colori = (colori + 1) % peoplecolors.length;
  }
  else
  {
  	//released
  }
});

var inputcolor = document.createDocument('input');
inputcolor.type = 'color';

document.body.appendChild(inputcolor);

inputcolor.addEvenListener("change", function() {
  setItem("ourcolor", this.value);
})

//subscribe to remote keyframes
subItems("ourcolor", (colors) => {
  console.log("New color:", colors);
  peoplecolors = colors;
});

getItems("ourcolor")
  .then(colors => ourcolors = colors)



//hello poeple
// finction(c){my_internal_function(c)}
//c => my_internal_function(c)
