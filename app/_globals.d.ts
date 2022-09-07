/// <reference types="vite/client" />

declare const DEBUG: boolean;
declare const NO_DEBUG: boolean;
declare let DEBUG_CAMERA: boolean;
declare let DEBUG_FLAG0: boolean;
declare let DEBUG_FLAG1: boolean;
declare let DEBUG_FLAG2: boolean;
declare let DEBUG_FLAG3: boolean;

interface Window {
  DEBUG_CAMERA: boolean;
  DEBUG_FLAG0: boolean;
  DEBUG_FLAG1: boolean;
  DEBUG_FLAG2: boolean;
  DEBUG_FLAG3: boolean;
}

declare module "*.frag";

declare module "*.vert";

/** HTMLCanvas element declared in the page */
declare const hC: HTMLCanvasElement;

declare const b1: HTMLButtonElement;
declare const b2: HTMLButtonElement;
declare const b3: HTMLButtonElement;

declare function NO_INLINE(fn: Function);

interface Array<T> {
  reduce<U = T>(
    callbackfn: (previousValue: U | undefined, currentValue: T, currentIndex: number, array: T[]) => U | undefined,
  ): U | undefined;
}
