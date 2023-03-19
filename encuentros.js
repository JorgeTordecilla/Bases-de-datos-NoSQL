// Encuentros

db.encuentros.insertOne({
  fecha: new Date("2023-03-15T10:00:00Z"),
  equipos: [
    {
      nombre: "Equipo 1",
      puntos: 27,
      equipo_id: ObjectId("64128579a9c089b29416f9aa"),
    },
    {
      nombre: "Equipo 2",
      puntos: 15,
      equipo_id: ObjectId("64128579a9c089b29416f9ab"),
    },
  ],
  arbitro: ObjectId("6412859da9c089b29416f9b2"),
});

db.encuentros.insertOne({
  fecha: new Date("2023-03-16T14:00:00Z"),
  equipos: [
    {
      nombre: "Equipo 3",
      puntos: 18,
      equipo_id: ObjectId("64128579a9c089b29416f9ac"),
    },
    {
      nombre: "Equipo 4",
      puntos: 27,
      equipo_id: ObjectId("64128579a9c089b29416f9ad"),
    },
  ],
  arbitro: ObjectId("6412859da9c089b29416f9b2"),
});

db.encuentros.insertOne({
  fecha: new Date("2023-03-17T19:00:00Z"),
  equipos: [
    {
      nombre: "Equipo 5",
      puntos: 23,
      equipo_id: ObjectId("64128579a9c089b29416f9ae"),
    },
    {
      nombre: "Equipo 6",
      puntos: 27,
      equipo_id: ObjectId("6412857aa9c089b29416f9af"),
    },
  ],
  arbitro: ObjectId("6412859da9c089b29416f9b3"),
});

db.encuentros.insertOne({
  fecha: new Date("2023-03-18T16:00:00Z"),
  equipos: [
    {
      nombre: "Equipo 7",
      puntos: 21,
      equipo_id: ObjectId("6412857aa9c089b29416f9b0"),
    },
    {
      nombre: "Equipo 8",
      puntos: 27,
      equipo_id: ObjectId("6412857aa9c089b29416f9b1"),
    },
  ],
  arbitro: ObjectId("6412859da9c089b29416f9b3"),
});

//4tos de final
db.encuentros.insertOne({
  fecha: new Date("2023-03-18T16:00:00Z"),
  equipos: [
    {
      nombre: "Equipo 1",
      puntos: 20,
      equipo_id: ObjectId("64128579a9c089b29416f9aa"),
    },
    {
      nombre: "Equipo 4",
      puntos: 27,
      equipo_id: ObjectId("64128579a9c089b29416f9ad"),
    },
  ],
  arbitro: ObjectId("6412859da9c089b29416f9b4"),
});

db.encuentros.insertOne({
  fecha: new Date("2023-03-18T16:00:00Z"),
  equipos: [
    {
      nombre: "Equipo 6",
      puntos: 21,
      equipo_id: ObjectId("6412857aa9c089b29416f9af"),
    },
    {
      nombre: "Equipo 8",
      puntos: 27,
      equipo_id: ObjectId("6412857aa9c089b29416f9b1"),
    },
  ],
  arbitro: ObjectId("6412859da9c089b29416f9b4"),
});

// final

db.encuentros.insertOne({
  fecha: new Date("2023-03-18T16:00:00Z"),
  equipos: [
    {
      nombre: "Equipo 6",
      puntos: 27,
      equipo_id: ObjectId("6412857aa9c089b29416f9af"),
    },
    {
      nombre: "Equipo 4",
      puntos: 24,
      equipo_id: ObjectId("64128579a9c089b29416f9ad"),
    },
  ],
  arbitro: ObjectId("6412859da9c089b29416f9b5"),
});
