// The entry file of your WebAssembly module.
import { log } from 'console';

export function add(a: i32, b: i32): i32 {
  const result = a + b;
  log(a);
  return result;
}