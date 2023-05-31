const num = /^[0-9]{0,3}$/;

function validate(input) {
  let errors = {};
  if (!input.name) errors.name = `Se requiere un nombre`;
  if (!num.test(input.hp))
    errors.hp = "Se requiere un numero menor de 3 digitos";
  if (!num.test(input.attack))
    errors.attack = "Se requiere un numero menor de 3 digitos";
  if (!num.test(input.defense))
    errors.defense = "Se requiere un numero menor de 3 digitos";
  if (!num.test(input.speed))
    errors.speed = "Se requiere un numero menor de 3 digitos";
  if (!num.test(input.height))
    errors.height = "Se requiere un numero menor de 3 digitos";
  if (!num.test(input.weight))
    errors.weight = "Se requiere un numero menor de 3 digitos";

  return errors;
}

export default validate;
