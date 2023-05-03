import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  rules: [
    // weight-\d+ => font-weight:
    [/^text-w-(\d+)$/, (match) => ({ 'font-weight': match[1] + '00' })],
    [/^text-w-(bold|bolder|normal|lighter)$/, (match) => ({ 'font-weight': match[1] })],
    [/^text-h-(normal)$/, (match) => ({ 'line-height': match[1] })],
  ],
})