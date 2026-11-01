import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import { readdir, readFile, unlink } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Finder can recreate metadata in public/ even when Git ignores it. */
function excludeMacMetadata(): Plugin {
  let outputDirectory = ''
  async function clean(directory: string): Promise<void> {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name)
      if (entry.isDirectory()) {
        await clean(path)
      } else if (entry.isFile()) {
        if (entry.name === '.DS_Store' || entry.name === '.LSOverride') {
          await unlink(path)
        } else if (entry.name.startsWith('._')) {
          // Only discard actual AppleDouble metadata, not legitimate dotfiles.
          const bytes = await readFile(path)
          if (bytes.length >= 4 && bytes.readUInt32BE(0) === 0x00051607) await unlink(path)
        }
      }
    }
  }
  return {
    name: 'exclude-macos-build-metadata',
    apply: 'build',
    configResolved(config) { outputDirectory = resolve(config.root, config.build.outDir) },
    async writeBundle() { await clean(outputDirectory) },
  }
}

export default defineConfig({
    // GitHub Pages user site: https://bhargava-suryadevara.github.io/
    base: '/',
    plugins: [react(), tailwindcss(), excludeMacMetadata()],
})
