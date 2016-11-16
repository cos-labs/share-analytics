var configName = Object.keys(window.requirejs.entries).filter(function (entry) {
  return entry.match(/\/config\/environment/);
})[0];

export default window.requirejs(configName)["default"];