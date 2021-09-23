import {Remote} from "https://unpkg.com/@clinth/remote@latest/dist/index.mjs";
import {getMinMaxAvg} from '../util.js';

const r = new Remote({
  useSockets: true,
  // If you're running your sketch locally and connecting to 
  // a Glitch-hosted processor:
  url: 'https://olofmodule2.glitch.me/'
});

// When data is received from the Remote, do something with it...
r.onData = (d) => {
  const freq = d.freq;
  const wave = d.wave;

  // If there's no frequency data, we're not interested
  if (!freq) return;

  // Demo: Often useful to figure out the min/max/avg
  const freqMMA = getMinMaxAvg(freq);
  console.log(freqMMA);
}

