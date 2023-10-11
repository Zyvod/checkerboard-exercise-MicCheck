const body = document.getElementsByTagName('body')

/* display = "flex"
flexWrap = "wrap"
width = "800px"
height = "800px"
Each tile should have the following styles:
width = "12.5%"
height = "12.5%"
*/

createContainer();

function createContainer() {
  let container = document.createElement('div')
   container.style.display = 'flex'
   container.style.flexWrap = 'wrap'
   container.style.height = '800px'
   container.style.width = '800px'
   container.style.margin = 'auto'
body[0].appendChild(container)
for ( var i = 1; i <= 8; i++)
if ( i % 2 === 0){
  makeLineWithBlack(makeRedSquare,makeBlackSquare,container);
} else {
  makeLineWithRed(makeRedSquare,makeBlackSquare,container);
}
  }

  function makeBlackSquare(container) {
    let square = document.createElement('div')
    square.style.height = '12.5%'
    square.style.width = '12.5%'
    square.style.backgroundColor = 'black'
    container.appendChild(square)
  }

  function makeRedSquare(container) {
    let square = document.createElement('div')
    square.style.height = '12.5%'
    square.style.width = '12.5%'
    square.style.backgroundColor = 'red'
    container.appendChild(square)
  }


function makeLineWithBlack(squareFunc1,squareFunc2,argu) {
  for ( var i = 0; i < 8; i++)
if ( i % 2 !== 0){
  squareFunc2(argu)
  console.log('MakeLineBlack - working true' )
} else {
  squareFunc1(argu)
  console.log('MakeLineBLack - working false')
}
}


function makeLineWithRed(squareFun1,squareFun2,arg) {
  for ( var i = 0; i < 8; i++)
  if ( i % 2 !== 0){
    squareFun1(arg)
    console.log('MakeLineRed - working true')
  } else {
    squareFun2(arg)
    console.log('MakeLineRed - working false')
  }
}