export default function (registry, factoryNameOrType, property, injectionName) {
  var inject = registry.inject || registry.injection;
  inject.call(registry, factoryNameOrType, property, injectionName);
}