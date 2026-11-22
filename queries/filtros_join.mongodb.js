use("accidentes_transito_db");

// MOTOCICLETAS
db.vehiculos_involucrados.find({
  TIPO_VEHICULO: "MOTOCICLETA"
});

// ACCIDENTES EN ANTIOQUIA
db.vehiculos_involucrados.find({
  DEPARTAMENTO_ACCIDENTE: "ANTIOQUIA"
});

// VEHÍCULOS MODELO 2020 O SUPERIOR
db.vehiculos_involucrados.find({
  MODELO_VEHICULO: { $gte: 2020 }
});

// ACCIDENTES CON HERIDOS EN ANTIOQUIA
db.vehiculos_involucrados.find({
  $and: [
    { GRAVEDAD_ACCIDENTE: "CON HERIDOS" },
    { DEPARTAMENTO_ACCIDENTE: "ANTIOQUIA" }
  ]
});
