/// <reference types="vite/client" />

declare const DEBUG: boolean;
declare const NO_DEBUG: boolean;
declare let DEBUG_CAMERA: boolean | undefined;
declare let DEBUG_FLAG0: boolean | undefined;
declare let DEBUG_FLAG1: boolean | undefined;
declare let DEBUG_FLAG2: boolean | undefined;
declare let DEBUG_FLAG3: boolean | undefined;

type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[]
  ? ElementType
  : never;

interface Window {
  DEBUG_CAMERA: boolean | undefined;
  DEBUG_FLAG0: boolean | undefined;
  DEBUG_FLAG1: boolean | undefined;
  DEBUG_FLAG2: boolean | undefined;
  DEBUG_FLAG3: boolean | undefined;
}

declare var dev_keyboard_downKeys: Set<KEY_CODE>;

declare module "*.frag";

declare module "*.vert";

/** document.body */
declare const hB: HTMLBodyElement;

/** Main HTMLCanvas element declared in the page */
declare const hC: HTMLCanvasElement;

/** Collisions HTMLCanvas element declared in the page */
declare const hD: HTMLCanvasElement;

declare const b1: HTMLElement;
declare const b2: HTMLElement;
declare const b3: HTMLElement;
declare const b4: HTMLElement;
declare const b5: HTMLElement;

/** Souls counter */
declare const h3: HTMLCanvasElement;

/** Messages and loading text */
declare const h4: HTMLHeadingElement;

declare function NO_INLINE<T>(fn: T): T;

interface Array<T> {
  reduce<U = T>(
    callbackfn: (previousValue: U | undefined, currentValue: T, currentIndex: number, array: T[]) => U | undefined,
  ): U | undefined;
}
