//Funciones para cambiar el párrafo posterior al mapa interactivo.
function atraccion1() {
	document.getElementById("Info").innerHTML = '<h3>Alto de la Cruz</h3><img id="altoCruz" src="images/AltoCruz.png" alt="Atracción 1"><p>Montaña para prácticar senderismo de forma gratuita.</p>';
	document.getElementById("Info").scrollIntoView();
}

function atraccion2() {
	document.getElementById("Info").innerHTML = '<h3>Salto de los Micos</h3><img id="saltoMicos" src="images/SaltoMicos.JPG" alt="Atracción 2"><p>Cascada formada por 7 saltos diferentes ideal para paseo de olla.</p>';
	document.getElementById("Info").scrollIntoView();
}

function atraccion3() {
	document.getElementById("Info").innerHTML = '<h3>Finca la Maravilla</h3><img id="panela" src="images/panela.jpeg" alt="Atracción 3"><p>Finca para aprender acerca del proceso de producción de la panela.</p>';
	document.getElementById("Info").scrollIntoView();
}

function atraccion4() {
	document.getElementById("Info").innerHTML = '<h3>La Bocatoma</h3><img src="images/Bocatoma.jpg" alt="Atracción 4"><p>Fuente de agua natural rodeada de bella naturaleza y con una plaza de comidas típicas de la región.</p>';
	document.getElementById("Info").scrollIntoView();
}