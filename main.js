const contenedor = document.getElementById('container');
const idColorBack = document.getElementById('IdColorBack');
const idAncho = document.getElementById('IdAncho');
const idAlto = document.getElementById('IdAlto');
const idBorde = document.getElementById('IdBorde');
const idColorB = document.getElementById('IdColorBorde');
var contador = 0;

document.getElementById('btn-agregar').addEventListener('click', () => {
    agregar();
});

function agregar(){
    let elemento = document.createElement('div');
    
    if(contador == 0){
        elemento.classList.add('shape');
        elemento.classList.add('active');
    }
    else{
        deseleccionar();
        elemento.classList.add('shape');
        elemento.classList.add('active');

    }

    elemento.addEventListener('click', function () {
        deseleccionar();   
        this.classList.add('active');
        console.log(this);
        seleccionar(this);
    })

    let anterior = document.getElementsByClassName('shape')[0];
    contenedor.insertBefore(elemento,anterior); 
    seleccionar(elemento);
    contador++;
}

function seleccionar(item){
    let style = getComputedStyle(item);
 
    let rgb = style.backgroundColor.substr(4,9).split(",").map(function(item) {
        return parseInt(item, 10)});
    let color = obtenerColor(rgb[0], rgb[1], rgb[2]);
        
    idColorBack.value = color;

    idAncho.value = style.width.slice(0,-2);
    idAlto.value = style.height.slice(0,-2);
    idBorde.value =  style.borderWidth.slice(0,-2);
    
    rgb = style.borderColor.substr(4,9).split(",").map(function(item) {
        return parseInt(item, 10)});
    color = obtenerColor(rgb[0], rgb[1], rgb[2]);
        
    idColorB.value = color;
}

function deseleccionar(){
    let seleccionado = document.getElementsByClassName('active')[0];
    seleccionado.classList.remove('active');
}

function convertirHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function obtenerColor(r,v,a){
    return "#" + convertirHex(r) + convertirHex(v) + convertirHex(a);
}

idColorBack.addEventListener('change',function(){ document.getElementsByClassName('active')[0].style.backgroundColor = this.value;});

idAncho.addEventListener('change',function(){ document.getElementsByClassName('active')[0].style.width = this.value+"px"; });

idAlto.addEventListener('change',function(){ document.getElementsByClassName('active')[0].style.height = this.value+"px";});

idBorde.addEventListener('change',function(){ document.getElementsByClassName('active')[0].style.borderWidth = this.value+"px";});

idColorB.addEventListener('change',function(){document.getElementsByClassName('active')[0].style.borderColor = this.value});