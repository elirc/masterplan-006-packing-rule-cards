// The core accepts numbers, not form strings. It has no DOM or network access.
export function recommendPacking(temperatureC, weather) {
  if (typeof temperatureC !== 'number' || !Number.isFinite(temperatureC)) {
    throw new TypeError('Temperature must be a finite number.');
  }
  if (!['dry', 'rain', 'wind'].includes(weather)) {
    throw new RangeError('Choose dry, rain or wind.');
  }
  const items = ['water bottle'];
  let band;
  // Exactly 10 is mild. Exactly 25 is warm. These are product rules.
  if (temperatureC < 10) { band = 'cold'; items.push('warm layer'); }
  else if (temperatureC < 25) { band = 'mild'; items.push('light layer'); }
  else { band = 'warm'; items.push('sun hat'); }
  if (weather === 'rain') items.push('raincoat');
  if (weather === 'wind') items.push('windbreaker');
  return { band, weather, items };
}
