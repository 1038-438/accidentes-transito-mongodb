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


db.departamentos.insertMany([
  {
    nombre: "ANTIOQUIA",
    region: "ANDINA"
  },
  {
    nombre: "CUNDINAMARCA",
    region: "ANDINA"
  },
  {
    nombre: "VALLE DEL CAUCA",
    region: "PACIFICA"
  }
]);

db.vehiculos_involucrados.aggregate([
  {
    $lookup: {
      from: "departamentos",
      localField: "DEPARTAMENTO_ACCIDENTE",
      foreignField: "nombre",
      as: "informacion_departamento"
    }
  }
]);

