import { PNG } from 'pngjs'
import fs from 'fs'

const input = 'src/assets/logo/logo.png'
const output = 'src/assets/logo/logo-transparent.png'

const png = PNG.sync.read(fs.readFileSync(input))
const { width, height, data } = png

// Sample the background color from the outer border band (assumed beige/cream)
let sampleR = 0, sampleG = 0, sampleB = 0, count = 0
const step = Math.max(1, Math.floor(Math.min(width, height) / 40))
for (let y = 0; y < height; y += step) {
  for (let x = 0; x < width; x += step) {
    const onEdge = x < 3 || y < 3 || x >= width - 3 || y >= height - 3
    if (onEdge) {
      const i = (y * width + x) * 4
      sampleR += data[i]; sampleG += data[i + 1]; sampleB += data[i + 2]; count++
    }
  }
}
sampleR = Math.round(sampleR / count)
sampleG = Math.round(sampleG / count)
sampleB = Math.round(sampleB / count)

// Make near-background pixels transparent (flood via color distance)
const tolerance = 60
for (let i = 0; i < data.length; i += 4) {
  const dist =
    Math.abs(data[i] - sampleR) +
    Math.abs(data[i + 1] - sampleG) +
    Math.abs(data[i + 2] - sampleB)
  if (dist < tolerance) {
    data[i + 3] = 0
  }
}

const outPng = new PNG({ width, height })
outPng.data = data
fs.writeFileSync(output, PNG.sync.write(outPng))

const size = fs.statSync(output).size
console.log('Logo size:', width + 'x' + height)
console.log('Sampled background color:', [sampleR, sampleG, sampleB])
console.log('Output written:', output, '(' + size + ' bytes)')
