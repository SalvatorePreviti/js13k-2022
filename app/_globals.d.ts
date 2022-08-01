/// <reference types="vite/client" />

declare const DEBUG: boolean;

declare module "*.frag";

declare module "*.vert";

/** HTMLCanvas element declared in the page */
declare const hC: HTMLCanvasElement;

interface Array<T> {
  reduce<U = T>(
    callbackfn: (previousValue: U | undefined, currentValue: T, currentIndex: number, array: T[]) => U | undefined,
  ): U | undefined;
}
