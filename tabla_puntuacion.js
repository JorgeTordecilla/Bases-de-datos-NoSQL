//Tabla puntuacion

db.tabla_puntuacion.insertOne({
  equipo: "Equipo 1",
  equipo_id: ObjectId("61678f9490e23d0f8a2cf35b"),
  encuentros: [
    ObjectId("6412866ba9c089b29416f9b6"),
    ObjectId("6412866ba9c089b29416f9ba"),
  ],
});

db.tabla_puntuacion.insertOne({
  equipo: "Equipo 2",
  equipo_id: ObjectId("61678f9490e23d0f8a2cf35b"),
  encuentros: [ObjectId("6412866ba9c089b29416f9b6")],
});

db.tabla_puntuacion.insertOne({
  equipo: "Equipo 3",
  equipo_id: ObjectId("61678f9490e23d0f8a2cf35b"),
  encuentros: [ObjectId("6412866ba9c089b29416f9b7")],
});

db.tabla_puntuacion.insertOne({
  equipo: "Equipo 4",
  equipo_id: ObjectId("61678f9490e23d0f8a2cf35b"),
  encuentros: [
    ObjectId("6412866ba9c089b29416f9b7"),
    ObjectId("6412866ba9c089b29416f9ba"),
    ObjectId("6412866ca9c089b29416f9bc"),
  ],
});

db.tabla_puntuacion.insertOne({
  equipo: "Equipo 5",
  equipo_id: ObjectId("61678f9490e23d0f8a2cf35b"),
  encuentros: [ObjectId("6412866ba9c089b29416f9b8")],
});

db.tabla_puntuacion.insertOne({
  equipo: "Equipo 6",
  equipo_id: ObjectId("61678f9490e23d0f8a2cf35b"),
  encuentros: [
    ObjectId("6412866ba9c089b29416f9b8"),
    ObjectId("6412866ba9c089b29416f9bb"),
    ObjectId("6412866ca9c089b29416f9bc"),
  ],
});

db.tabla_puntuacion.insertOne({
  equipo: "Equipo 7",
  equipo_id: ObjectId("61678f9490e23d0f8a2cf35b"),
  encuentros: [ObjectId("6412866ba9c089b29416f9b9")],
});

db.tabla_puntuacion.insertOne({
  equipo: "Equipo 8",
  equipo_id: ObjectId("61678f9490e23d0f8a2cf35b"),
  encuentros: [
    ObjectId("6412866ba9c089b29416f9b9"),
    ObjectId("6412866ba9c089b29416f9bb"),
  ],
});
