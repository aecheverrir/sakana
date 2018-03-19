const mongoose = require("mongoose");

const CarroSchema = new mongoose.Schema({

	marca: String,
	anio: String,
	pais: String,
	modeloYlinea: String,
	traccion: String,
	puertas: String,
	cilindros: String,
	motor: String,
	valvulas_cilindro: String,
	combustible: String,
	mpg: String,
	transmicion: String,
	hp: String,
	aceleracion: String,
	pesoKG: String,
	torquelbft: String,
	velocidadmaxkm: String,
	precio: String,
	imagen: String
	
});

module.exports = mongoose.model("Carro", CarroSchema);