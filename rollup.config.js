import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { eslint } from 'rollup-plugin-eslint'

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'build',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      dir: 'build',
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom', 'styled-components'],
  plugins: [
    eslint({
      throwOnError: true
    }),
    external(),
    resolve(),
    typescript({ tsconfig: 'tsconfig.json' }),
    babel({
      extensions: ['.ts', '.tsx'],
      babelHelpers: 'bundled',
      exclude: /(node_modules|bower_components|.stories.tsx?|.test.js$2132)/,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
}
