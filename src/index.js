module.exports = function warmup(temperature) {
  temperature = temperature * 9 / 5;
  temperature = temperature + 32;
  return temperature;
};
