//Contar registros
db.vehiculos_involucrados.countDocuments();

//Cantidad de accidentes por gravedad

db.vehiculos_involucrados.aggregate([
  {
    $group: {
      _id: "$GRAVEDAD_ACCIDENTE",
      total: { $sum: 1 }
    }
  }
]);

//Cantidad por tipo de vehículo

db.vehiculos_involucrados.aggregate([
  {
    $group: {
      _id: "$TIPO_VEHICULO",
      total: { $sum: 1 }
    }
  }
]);

//Promedio de antigüedad del vehículo

db.vehiculos_involucrados.aggregate([
  {
    $group: {
      _id: null,
      promedioEdad: {
        $avg: "$EDAD_VEHICULO"
      }
    }
  }
]);

//Total de accidentes por departamento

db.vehiculos_involucrados.aggregate([
  {
    $group: {
      _id: "$DEPARTAMENTO_ACCIDENTE",
      totalAccidentes: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      totalAccidentes: -1
    }
  }
]);


