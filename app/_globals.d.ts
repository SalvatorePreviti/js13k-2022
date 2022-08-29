/// <reference types="vite/client" />

declare const DEBUG: boolean;
declare const NO_DEBUG: boolean;
declare let DEBUG_CAMERA: boolean;

interface Window {
  DEBUG_CAMERA: boolean;
}

declare module "*.frag";

declare module "*.vert";

/** HTMLCanvas element declared in the page */

declare const hC: HTMLCanvasElement;
declare const hV: HTMLElement;

interface Array<T> {
  reduce<U = T>(
    callbackfn: (previousValue: U | undefined, currentValue: T, currentIndex: number, array: T[]) => U | undefined,
  ): U | undefined;
}
