export default (json) => {
  // Do your thing here!
  return (
    json
      .map((value) => value.edad)
      .reduce((acumulado, edad) => acumulado + edad, 0) / json.length
  );
};
