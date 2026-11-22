use("accidentes_transito_db");

// INSERTAR
db.vehiculos_involucrados.insertOne({
  MARCA_VEHICULO: "HONDA",
  MODELO_VEHICULO: 2024,
  TIPO_VEHICULO: "MOTOCICLETA",
  EDAD_VEHICULO: 0,
  FECHA_ACCIDENTE: "11/2026",
  GRAVEDAD_ACCIDENTE: "SOLO DANOS",
  DEPARTAMENTO_ACCIDENTE: "ANTIOQUIA",
  MUNICIPIO_ACCIDENTE: "MEDELLIN",
  AUTORIDAD_DE_TRANSITO: "POLICIA NACIONAL"
});

// SELECCIONAR
db.vehiculos_involucrados.find().limit(5);

// SELECCIONAR UN DOCUMENTO
db.vehiculos_involucrados.findOne({
  MARCA_VEHICULO: "YAMAHA"
});

// ACTUALIZAR
db.vehiculos_involucrados.updateOne(
  { MARCA_VEHICULO: "HONDA" },
  {
    $set: {
      GRAVEDAD_ACCIDENTE: "CON HERIDOS"
    }
  }
);

// ELIMINAR
db.vehiculos_involucrados.deleteOne({
  MARCA_VEHICULO: "HONDA"
});
