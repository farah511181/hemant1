import { PNG } from 'pngjs'
import fs from 'fs'

const input = 'src/assets/logo/logo-transparent.png'
const output = 'src/assets/logo/logo-white.png'

const png = PNG.sync.read(fs.readFileSync(input))
const { width, height, data } = png

// Find bounding box of the opaque letters (alpha > 50)
let minX = width, minY = height, maxX = 0, maxY = 0
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * 4
    if (data[i + 3] > 50) {
      if (x < minX) minX = x
      if (y < minY) minY = y
      if (x > maxX) maxX = x
      if (y > maxY) maxY = y
    }
  }
}

const bw = maxX - minX + 1
const bh = maxY - minY + 1

// Recolor letters to pure white, preserving the exact alpha shape; crop to bbox
const out = new PNG({ width: bw, height: bh })
for (let y = 0; y < bh; y++) {
  for (let x = 0; x < bw; x++) {
    const si = ((y + minY) * width + (x + minX)) * 4
    const di = (y * bw + x) * 4
    out.data[di] = 255
    out.data[di + 1] = 255
    out.data[di + 2] = 255
    out.data[di + 3] = data[si + 3]
  }
}

fs.writeFileSync(output, PNG.sync.write(out))
console.log('White wordmark written:', output, (bw + 'x' + bh) + ' bytes=' + fs.statSync(output).size)
