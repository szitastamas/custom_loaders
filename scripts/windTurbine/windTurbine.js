import { appendCSS } from '../../main.js';

export function windTurbine(speed = 2500) {
  const TURBINE_COUNT = 3;
  const turbine = document.createElement('div');
  turbine.id = 'wind-turbine';
  turbine.dataset.speed = speed;

  const body = document.createElement('div');
  body.id = 'wind-turbine-body';

  const head = document.createElement('div');
  head.id = 'wind-turbine-head';
  head.style.animationDuration = `${speed}ms`;

  for (let index = 0; index < TURBINE_COUNT; index++) {
    const turbine = document.createElement('div');
    turbine.className = `turbine-${index}`;
    turbine.style.transform = `translate(-50%, -100%) rotate(${index * 120}deg)`;

    head.appendChild(turbine);
  }

  turbine.appendChild(head);
  turbine.appendChild(body);

  // Appending the CSS for this loader
  appendCSS('wind-turbine');

  return turbine;
}
