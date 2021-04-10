import { windTurbine } from './scripts/windTurbine/windTurbine.js';

export const appendCSS = (loaderType) => {
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.href = `styles/${loaderType}/${loaderType}.css`;
  document.querySelector('head').prepend(style);
};

const container = document.getElementById('loader-container');

// Wind Turbine
container.appendChild(windTurbine());
