# perlinish
A fake perlin noise generator in 500 bytes that uses UTF-8 characters and a canvas element. The generate function returns a 2D array of values 0-256 although using the default settings usually creates values between 0 and 200. If you strip out parts, and optimize it, I'm sure you can get the it much smaller.

## [DEMO](https://vivianeasley.github.io/perlinish/)

## Usage
See the demo in the docs directory for an example.
```
// These values will be used if no config object provided
const config = {
width: 100,
height: 100,
fontSize: 16,
numberOfShapes: 100,
blur: 5
}

const canvasNode = document.querySelector('canvas');
// You must pass Perlinish a canvas element
const noise = perlinish(canvasNode);
// Each time you call generate you will get another random data set
const data = noise.generate(config);
```
## Config options
 - **width**: Width of the canvas element
 - **height**: Height of the canvas element
 - **fontSize**: Size of the UTF-8 characters
 - **numberOfShapes**: The number of UTF-8 characters randomly placed
 - **blur**: Blur level
