import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';
import { terser } from "rollup-plugin-terser";
import babel from '@rollup/plugin-babel';

export default [
  {
    input: 'src/index.ts',
    plugins: [
      typescript(), // so Rollup can convert TypeScript to JavaScript
      commonjs(),
      resolve(),
      babel({ babelHelpers: 'bundled' }),
      terser(),
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
      {
        name: 'Fullpage',
        file: pkg.browser,
        format: 'umd'
      }
    ]
  }
];
