export const mangleConfig = {
  reserved: ["x", "y", "z", "w"],
};

export const floatRoundAmount = 6;

export const global_defs = {
  DEV: false,
  DEBUG: false,
  NO_DEBUG: true,
  __REACT_DEVTOOLS_GLOBAL_HOOK__: undefined,
  "import.meta.hot": false,
  "import.meta.url": "index.js",
  "import.meta": { url: "index.js", hot: false },
};

export const browserPureFunctions = [
  "Math.abs",
  "Math.acos",
  "Math.acosh",
  "Math.asin",
  "Math.asinh",
  "Math.atan",
  "Math.atanh",
  "Math.atan2",
  "Math.ceil",
  "Math.cbrt",
  "Math.expm1",
  "Math.clz32",
  "Math.cos",
  "Math.cosh",
  "Math.exp",
  "Math.floor",
  "Math.fround",
  "Math.hypot",
  "Math.imul",
  "Math.log",
  "Math.log1p",
  "Math.log2",
  "Math.log10",
  "Math.max",
  "Math.min",
  "Math.pow",
  "Math.random",
  "Math.round",
  "Math.sign",
  "Math.sin",
  "Math.sinh",
  "Math.sqrt",
  "Math.tan",
  "Math.tanh",
  "Math.trunc",
  "Object.getOwnPropertyDescriptor",
  "Object.getOwnPropertyDescriptors",
  "Object.getOwnPropertyNames",
  "Object.getOwnPropertySymbols",
  "Object.is",
  "Object.create",
  "Object.getPrototypeOf",
  "Object.isExtensible",
  "Object.isFrozen",
  "Object.isSealed",
  "Object.keys",
  "Object.entries",
  "Object.fromEntries",
  "Object.values",
  "Reflect.apply",
  "Reflect.get",
  "Reflect.getOwnPropertyDescriptor",
  "Reflect.has",
  "Reflect.isExtensible",
  "Reflect.ownKeys",

  "DOMMatrix",
  "Object",
  "Function",
  "Array",
  "Number",
  "parseFloat",
  "parseInt",
  "Boolean",
  "String",
  "Symbol",
  "Date",
  "Promise",
  "RegExp",
  "Error",
  "TypeError",
  "SyntaxError",
  "EvalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError",
  "ArrayBuffer",
  "Uint8Array",
  "Int8Array",
  "Uint16Array",
  "Int16Array",
  "Uint32Array",
  "Int32Array",
  "Float32Array",
  "Float64Array",
  "Uint8ClampedArray",
  "BigUint64Array",
  "BigInt64Array",
  "DataView",
  "Map",
  "BigInt",
  "Set",
  "WeakMap",
  "WeakSet",
  "Proxy",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape",
  "isFinite",
  "isNaN",
  "find",
  "btoa",
  "atob",
];
