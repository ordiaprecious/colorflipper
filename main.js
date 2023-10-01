var flipper=document.getElementById('wide')
var colours=['red','blue','green','pink','yellow','brown','grey','lemon','orange','black']
var g=0
var z=0
function color(x){
    flipper.style.background=colours[g++];
    document.getElementById('wide').value=colours[z++];
}
