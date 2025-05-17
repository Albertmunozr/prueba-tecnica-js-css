export default (word1, word2) => {
  /* CONSIDERO QUE LOS ANAGRAMAS SOLO PUEDEN SER 2 PALABRAS,
  SI QUEREMOS QUE TAMBIÉN LAS FRASES PUEDAN SER ANAGRAMAS HAY QUE QUITAR LOS ESPACIOS 
  ANTES DE COMPARAR DESCOMENTANDO LA LINEAS 9 Y 14 EN LA NORMALIZACIÓN*/

  const palabra1Normalizada = word1
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") //quitamos acentos
    //.replace(/\s/g, "") //quitamos espacios
    .toLowerCase();
  const palabra2Normalizada = word2
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") //quitamos acentos
    //.replace(/\s/g, "") //quitamos espacios
    .toLowerCase();

  return (
    palabra1Normalizada.split("").sort().join("") ===
    palabra2Normalizada.split("").sort().join("")
  );
};
