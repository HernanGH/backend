var express = require('express');
const { findJugadores, crearJugador } = require('../models/jugadores');
var router = express.Router();

/* GET jugadores listing. */
router.get('/', async (req, res, next) => {
  const jugadores = await findJugadores();
  res.send({ jugadores });
});

/* POST jugadores listing. */
router.post('/', async (req, res, next) => {
  console.log(req.body);
  const nuevoJugador = req.body;
  console.log(nuevoJugador);
  const jugadorGuardado = await crearJugador(nuevoJugador);
  res.send(jugadorGuardado);
});

module.exports = router;
