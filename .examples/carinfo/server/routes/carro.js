var router = require("express").Router();
var Carro = require("../models/Carro");
var mongoose = require("mongoose");

router.get("/", (req, res) => {
	Carro.find({}, (err, carros) => {
		var carMap = [];

		carros.forEach(function(car) {
			carMap.push(car);
		}) ;
		//res.send(carMap);
		res.json(carMap);
	});
});

router.get("/:search", (req, res) => {
	
	Carro.find({modelo: req.query.modelo}, (err, carros) => {
		var carMap = [];
		console.log(req.query.modelo);
		console.log(carros);
		carros.forEach(function(car) {
			carMap.push(car);
		}) ;
		//res.send(carMap);
		res.json(carMap);
	});
});

router.post("/", function(req, res) {
  var newCarro = new Carro({
  	_id: new mongoose.Types.ObjectId(),
    marca: req.body.marca,
	anio: req.body.anio,
	pais: req.body.pais,
	modeloYlinea: req.body.modeloYlinea,
	traccion: req.body.traccion,
	puertas: req.body.puertas,
	cilindros: req.body.cilindros,
	motor: req.body.motor,
	valvulas_cilindro: req.body.valvulas_cilindro,
	combustible: req.body.combustible,
	mpg: req.body.mpg,
	transmicion: req.body.transmicion,
	hp: req.body.hp,
	aceleracion: req.body.aceleracion,
	pesoKG: req.body.pesoKG,
	torquelbft: req.body.torquelbft,
	velocidadmaxkm: req.body.velocidadmaxkm,
	precio: req.body.precio,
	imagen: req.body.imagen
  });

  newCarro.save(function(err) {
    if (err) throw err;

    res.json({
      success: true,
      token: token,
      carro: {
      	_id: newCarro._id,
        marca: newCarro.marca,
		anio: newCarro.anio,
		pais: newCarro.pais,
		modeloYlinea: newCarro.modeloYlinea,
		traccion: newCarro.traccion,
		puertas: newCarro.puertas,
		cilindros: newCarro.cilindros,
		motor: newCarro.motor,
		valvulas_cilindro: newCarro.valvulas_cilindro,
		combustible: newCarro.combustible,
		mpg: newCarro.mpg,
		transmicion: newCarro.transmicion,
		hp: newCarro.hp,
		aceleracion: newCarro.aceleracion,
		pesoKG: newCarro.pesoKG,
		torquelbft: newCarro.torquelbft,
		velocidadmaxkm: newCarro.velocidadmaxkm,
		precio: newCarro.precio,
		imagen: newCarro.imagen
      }
    });
  });
});

module.exports = router;