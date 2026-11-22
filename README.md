Accidentes de Tránsito con MongoDB
Descripción del proyecto
Este proyecto tiene como objetivo almacenar, gestionar y analizar información de vehículos involucrados en accidentes de tránsito utilizando MongoDB, una base de datos NoSQL orientada a documentos. Para ello, se emplea la información contenida en el archivo VEHICULOS_INVOLUCRADOS_EN_UN_ACCIDENTE_DE_TRANSITO_LEY_2251-2022 (1), el cual contiene registros relacionados con vehículos involucrados en siniestros viales. 【1-11c8df】

MongoDB fue seleccionado debido a su flexibilidad para almacenar grandes volúmenes de datos y realizar consultas eficientes sobre información estructurada y semiestructurada. Este proyecto permite aplicar conceptos de almacenamiento, consulta y análisis de datos utilizando tecnologías Big Data. 【2-642e5d】

Caso de uso
La información relacionada con accidentes de tránsito genera grandes cantidades de registros que requieren almacenamiento eficiente y consultas rápidas para apoyar procesos de análisis y toma de decisiones. MongoDB permite almacenar estos datos en formato de documentos y realizar consultas avanzadas para obtener información relevante sobre los vehículos involucrados en los accidentes.

Base de datos
Base de datos: accidentes_transito_db
Colección principal: vehiculos_involucrados
Objetivo general
Implementar una base de datos NoSQL en MongoDB para almacenar y consultar información de vehículos involucrados en accidentes de tránsito, aplicando operaciones CRUD, consultas con filtros y operadores, y técnicas de agregación para el análisis de datos. 【2-642e5d】

Objetivos específicos
Importar datos desde un archivo CSV hacia MongoDB.
Implementar operaciones básicas de inserción, consulta, actualización y eliminación de documentos.
Realizar consultas utilizando filtros y operadores de MongoDB.
Implementar consultas de agregación para obtener estadísticas sobre los datos almacenados.
Analizar información relacionada con los accidentes de tránsito mediante consultas a la base de datos.
Consultas implementadas en MongoDB
1. Consultas básicas (CRUD)
Se implementan las siguientes operaciones sobre la colección:

Inserción de documentos mediante insertOne() e insertMany().
Consulta de documentos mediante find() y findOne().
Actualización de registros mediante updateOne() y updateMany().
Eliminación de documentos mediante deleteOne() y deleteMany().
2. Consultas con filtros y operadores
Se realizan consultas utilizando operadores de MongoDB para filtrar información específica:

Operadores de comparación: $gt, $lt, $gte, $lte.
Operadores lógicos: $and, $or, $in.
Búsquedas específicas utilizando filtros sobre los campos de la colección.
Relación entre colecciones mediante $lookup, equivalente a una operación JOIN en bases de datos relacionales.
3. Consultas de agregación
Se implementan consultas de agregación para obtener estadísticas y análisis de los datos:

Conteo de documentos con countDocuments().
Agrupación de registros mediante $group.
Cálculo de totales utilizando $sum.
Obtención de promedios mediante $avg.
Ordenamiento de resultados con $sort.
Herramientas utilizadas
MongoDB
MongoDB Compass
MongoDB Shell
Git
GitHub
Aplicación del proyecto
La implementación permite almacenar y analizar información de vehículos involucrados en accidentes de tránsito, facilitando la consulta de registros, la generación de estadísticas y el análisis de información mediante herramientas NoSQL. Este proyecto fue desarrollado como apoyo a la actividad académica de almacenamiento y consultas de datos en Big Data. 【2-642e5d】【1-11c8df】

Autor
Jorge Luis Hernández Matías

Repositorio
Repositorio creado para la gestión de la base de datos, las consultas desarrolladas y la documentación correspondiente del proyecto.
