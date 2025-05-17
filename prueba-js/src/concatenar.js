export default (json) => {
  // Do your thing here!
  return json.map((value) => {
    const nombre =
      value.nombre.charAt(0).toUpperCase() +
      value.nombre.slice(1).toLowerCase();
    const apellido =
      value.apellido.charAt(0).toUpperCase() +
      value.apellido.slice(1).toLowerCase();
    const apellido2 = value.apellido2
      ? value.apellido2.charAt(0).toUpperCase() +
        value.apellido2.slice(1).toLowerCase()
      : "";
    const nombreCompleto = `${nombre} ${apellido} ${apellido2}`;

    return nombreCompleto;
  });
};
