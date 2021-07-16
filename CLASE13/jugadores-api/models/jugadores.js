const sequelize = require('./conexion.js');

const findJugadores = async () => {
  // MODO PROMESAS SIN EL ASYNC/AWAIT
  // return sequelize
  //   .query("SELECT * FROM jugadores", { type: sequelize.QueryTypes.SELECT })
  //   .then((jugadores) => {
  //     console.log(jugadores);
  //     return jugadores;
  //   })
  //   .catch((error) => console.log('Error: ', error));

  // MODO ASYNC AWAIT
  let jugadores = [];
  try {
    const data = await sequelize.query(
      "SELECT * FROM jugadores INNER JOIN pais ON jugadores.pais_id = pais.id",
      { type: sequelize.QueryTypes.SELECT }
    );

    jugadores = data;
  } catch (error) {
    console.log('Error: ', error);
  } finally {
    return jugadores;
  }
};

const crearJugador = async (nuevoJugador) => {
  const nuevoJugadorValues = [];
  nuevoJugadorValues.push(nuevoJugador.nombre);
  nuevoJugadorValues.push(nuevoJugador.apellido);
  nuevoJugadorValues.push(nuevoJugador.pasaporte);
  nuevoJugadorValues.push(nuevoJugador.pais_id);

  // MODO PROMESAS SIN EL ASYNC/AWAIT
  // return sequelize.query(
  //     "INSERT INTO jugadores (nombre, apellido, pasaporte, pais_id) VALUES (?,?,?,?)",
  //     { replacements: nuevoJugadorValues, type: sequelize.QueryTypes.INSERT }
  //   )
  //   .then((data) => {
  //     const jugadorGuardado = {
  //       ...nuevoJugador,
  //       id: data[0]
  //     };

  //     console.log(jugadorGuardado);
  //     return jugadorGuardado;
  //   })
  //   .catch((error) => console.log('Error: ', error));

  // MODO ASYNC AWAIT
  try {
    const data = await sequelize.query(
      "INSERT INTO jugadores (nombre, apellido, pasaporte, pais_id) VALUES (?,?,?,?)",
      { replacements: nuevoJugadorValues, type: sequelize.QueryTypes.INSERT }
    );
    const jugadorGuardado = {
      ...nuevoJugador,
      id: data[0]
    };

    return jugadorGuardado;
  } catch (error) {
    console.log('Error: ', error);
  }
}

module.exports = {
  crearJugador,
  findJugadores
};