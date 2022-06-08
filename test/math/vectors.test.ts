import {
  vec2_add,
  vec2_div,
  vec2_div_scalar,
  vec2_isFinite,
  vec2_mod,
  vec2_mod_scalar,
  vec2_mul,
  vec2_new,
  vec2_new_scalar,
  vec2_scalar_add,
  vec2_scalar_div,
  vec2_scalar_mod,
  vec2_scalar_sub,
  vec2_scale,
  vec2_set,
  vec2_set_scalar,
  vec2_sub,
  vec3_add,
  vec3_div,
  vec3_div_scalar,
  vec3_isFinite,
  vec3_mod,
  vec3_mod_scalar,
  vec3_mul,
  vec3_new,
  vec3_new_scalar,
  vec3_scalar_add,
  vec3_scalar_div,
  vec3_scalar_mod,
  vec3_scalar_sub,
  vec3_scale,
  vec3_set,
  vec3_set_scalar,
  vec3_sub,
  vec4_add,
  vec4_div,
  vec4_div_scalar,
  vec4_isFinite,
  vec4_mod,
  vec4_mod_scalar,
  vec4_mul,
  vec4_new,
  vec4_new_scalar,
  vec4_scalar_add,
  vec4_scalar_div,
  vec4_scalar_mod,
  vec4_scalar_sub,
  vec4_scale,
  vec4_set,
  vec4_set_scalar,
  vec4_sub,
} from "app/math/vectors";
import { expect } from "chai";

describe("vectors", () => {
  it("vecX_new", () => {
    expect(vec2_new(1, 2)).to.deep.eq({ x: 1, y: 2 });
    expect(vec3_new(1, 2, 3)).to.deep.eq({ x: 1, y: 2, z: 3 });
    expect(vec4_new(1, 2, 3, 4)).to.deep.eq({ x: 1, y: 2, z: 3, w: 4 });
  });
  it("vecX_new_scalar", () => {
    expect(vec2_new_scalar(1)).to.deep.eq({ x: 1, y: 1 });
    expect(vec3_new_scalar(2)).to.deep.eq({ x: 2, y: 2, z: 2 });
    expect(vec4_new_scalar(3)).to.deep.eq({ x: 3, y: 3, z: 3, w: 3 });
  });
  it("vecX_set", () => {
    expect(vec2_set({ x: 0, y: 0 }, 1, 2)).to.deep.eq({ x: 1, y: 2 });
    expect(vec3_set({ x: 0, y: 0, z: 0 }, 1, 2, 3)).to.deep.eq({ x: 1, y: 2, z: 3 });
    expect(vec4_set({ x: 0, y: 0, z: 0, w: 0 }, 1, 2, 3, 4)).to.deep.eq({ x: 1, y: 2, z: 3, w: 4 });
    expect(vec2_set({}, 1, 2)).to.deep.eq({ x: 1, y: 2 });
    expect(vec3_set({}, 1, 2, 3)).to.deep.eq({ x: 1, y: 2, z: 3 });
    expect(vec4_set({}, 1, 2, 3, 4)).to.deep.eq({ x: 1, y: 2, z: 3, w: 4 });
  });
  it("vecX_set_scalar", () => {
    expect(vec2_set_scalar({}, 1)).to.deep.eq({ x: 1, y: 1 });
    expect(vec3_set_scalar({}, 2)).to.deep.eq({ x: 2, y: 2, z: 2 });
    expect(vec4_set_scalar({}, 3)).to.deep.eq({ x: 3, y: 3, z: 3, w: 3 });
  });
  it("vecX_add", () => {
    expect(vec2_add({}, { x: 1, y: 2 }, { x: 2, y: 3 })).to.deep.eq({ x: 3, y: 5 });
    expect(vec3_add({}, { x: 1, y: 2, z: 3 }, { x: 2, y: 3, z: 3 })).to.deep.eq({ x: 3, y: 5, z: 6 });
    expect(vec4_add({}, { x: 1, y: 2, z: 3, w: 1 }, { x: 2, y: 3, z: 3, w: 3 })).to.deep.eq({ x: 3, y: 5, z: 6, w: 4 });
    expect(vec2_add({ x: 1, y: 2 }, { x: 2, y: 3 })).to.deep.eq({ x: 3, y: 5 });
    expect(vec3_add({ x: 1, y: 2, z: 3 }, { x: 2, y: 3, z: 3 })).to.deep.eq({ x: 3, y: 5, z: 6 });
    expect(vec4_add({ x: 1, y: 2, z: 3, w: 1 }, { x: 2, y: 3, z: 3, w: 3 })).to.deep.eq({ x: 3, y: 5, z: 6, w: 4 });
  });
  it("vecX_scalar_add", () => {
    expect(vec2_scalar_add({}, 2, { x: 2, y: 3 })).to.deep.eq({ x: 4, y: 5 });
    expect(vec3_scalar_add({}, 2, { x: 2, y: 3, z: 4 })).to.deep.eq({ x: 4, y: 5, z: 6 });
    expect(vec4_scalar_add({}, 2, { x: 2, y: 3, z: 4, w: 5 })).to.deep.eq({
      x: 4,
      y: 5,
      z: 6,
      w: 7,
    });
  });
  it("vecX_sub", () => {
    expect(vec2_sub({}, { x: 1, y: 2 }, { x: 2, y: 4 })).to.deep.eq({ x: -1, y: -2 });
    expect(vec3_sub({}, { x: 1, y: 2, z: 3 }, { x: 2, y: 4, z: 6 })).to.deep.eq({ x: -1, y: -2, z: -3 });
    expect(vec4_sub({}, { x: 1, y: 2, z: 3, w: 1 }, { x: 9, y: 7, z: 6, w: 5 })).to.deep.eq({
      x: -8,
      y: -5,
      z: -3,
      w: -4,
    });
  });
  it("vecX_scalar_sub", () => {
    expect(vec2_scalar_sub({}, 1, { x: 2, y: 4 })).to.deep.eq({ x: -1, y: -3 });
    expect(vec3_scalar_sub({}, 2, { x: 2, y: 4, z: 6 })).to.deep.eq({ x: 0, y: -2, z: -4 });
    expect(vec4_scalar_sub({}, 3, { x: 9, y: 7, z: 6, w: 5 })).to.deep.eq({ x: -6, y: -4, z: -3, w: -2 });
  });
  it("vecX_mul", () => {
    expect(vec2_mul({}, { x: 1, y: 2 }, { x: 2, y: 3 })).to.deep.eq({ x: 2, y: 6 });
    expect(vec3_mul({}, { x: 1, y: 2, z: 3 }, { x: 2, y: 3, z: 3 })).to.deep.eq({ x: 2, y: 6, z: 9 });
    expect(vec4_mul({}, { x: 1, y: 2, z: 3, w: 1 }, { x: 2, y: 3, z: 3, w: 3 })).to.deep.eq({ x: 2, y: 6, z: 9, w: 3 });
    expect(vec2_mul({ x: 1, y: 2 }, { x: 2, y: 3 })).to.deep.eq({ x: 2, y: 6 });
    expect(vec3_mul({ x: 1, y: 2, z: 3 }, { x: 2, y: 3, z: 3 })).to.deep.eq({ x: 2, y: 6, z: 9 });
    expect(vec4_mul({ x: 1, y: 2, z: 3, w: 1 }, { x: 2, y: 3, z: 3, w: 3 })).to.deep.eq({ x: 2, y: 6, z: 9, w: 3 });
  });
  it("vecX_scale", () => {
    expect(vec2_scale({}, 2, { x: 2, y: 4 })).to.deep.eq({ x: 4, y: 8 });
    expect(vec3_scale({}, 3, { x: 2, y: 4, z: 6 })).to.deep.eq({ x: 6, y: 12, z: 18 });
    expect(vec4_scale({}, 4, { x: 9, y: 7, z: 6, w: 5 })).to.deep.eq({ x: 36, y: 28, z: 24, w: 20 });
    expect(vec2_scale({ x: 2, y: 4 }, 2)).to.deep.eq({ x: 4, y: 8 });
    expect(vec3_scale({ x: 2, y: 4, z: 6 }, 3)).to.deep.eq({ x: 6, y: 12, z: 18 });
    expect(vec4_scale({ x: 9, y: 7, z: 6, w: 5 }, 4)).to.deep.eq({ x: 36, y: 28, z: 24, w: 20 });
  });
  it("vecX_div", () => {
    expect(vec2_div({}, { x: 10, y: 33 }, { x: 2, y: 3 })).to.deep.eq({ x: 5, y: 11 });
    expect(vec3_div({}, { x: 10, y: 33, z: 55 }, { x: 2, y: 3, z: 5 })).to.deep.eq({ x: 5, y: 11, z: 11 });
    expect(vec4_div({}, { x: 10, y: 33, z: 55, w: 77 }, { x: 2, y: 3, z: 5, w: 7 })).to.deep.eq({
      x: 5,
      y: 11,
      z: 11,
      w: 11,
    });
  });
  it("vecX_div_scalar", () => {
    expect(vec2_div_scalar({}, { x: 10, y: 22 }, 2)).to.deep.eq({ x: 5, y: 11 });
    expect(vec3_div_scalar({}, { x: 10, y: 33, z: 66 }, 2)).to.deep.eq({ x: 5, y: 16.5, z: 33 });
    expect(vec4_div_scalar({}, { x: 10, y: 33, z: 66, w: 88 }, 2)).to.deep.eq({ x: 5, y: 16.5, z: 33, w: 44 });
  });
  it("vecX_scalar_div", () => {
    expect(vec2_scalar_div({}, 10, { x: 2, y: 5 })).to.deep.eq({ x: 5, y: 2 });
    expect(vec3_scalar_div({}, 100, { x: 10, y: 20, z: 5 })).to.deep.eq({ x: 10, y: 5, z: 20 });
    expect(vec4_scalar_div({}, 1000, { x: 10, y: 20, z: 100, w: 50 })).to.deep.eq({ x: 100, y: 50, z: 10, w: 20 });
  });
  it("vecX_mod", () => {
    expect(vec2_mod({}, { x: 10, y: 33 }, { x: 6, y: 5 })).to.deep.eq({ x: 4, y: 3 });
    expect(vec3_mod({}, { x: 10, y: 33, z: 55 }, { x: 7, y: 9, z: 3 })).to.deep.eq({ x: 3, y: 6, z: 1 });
    expect(vec4_mod({}, { x: 10, y: 33, z: 55, w: 77 }, { x: 7, y: 6, z: 9, w: 3 })).to.deep.eq({
      x: 3,
      y: 3,
      z: 1,
      w: 2,
    });
  });
  it("vecX_mod_scalar", () => {
    expect(vec2_mod_scalar({}, { x: 10, y: 22 }, 3)).to.deep.eq({ x: 1, y: 1 });
    expect(vec3_mod_scalar({}, { x: 10, y: 33, z: 66 }, 5)).to.deep.eq({ x: 0, y: 3, z: 1 });
    expect(vec4_mod_scalar({}, { x: 10, y: 33, z: 66, w: 88 }, 7)).to.deep.eq({ x: 3, y: 5, z: 3, w: 4 });
  });
  it("vecX_scalar_mod", () => {
    expect(vec2_scalar_mod({}, 7, { x: 2, y: 5 })).to.deep.eq({ x: 1, y: 2 });
    expect(vec3_scalar_mod({}, 7, { x: 10, y: 20, z: 5 })).to.deep.eq({ x: 7, y: 7, z: 2 });
    expect(vec4_scalar_mod({}, 7, { x: 10, y: 20, z: 100, w: 50 })).to.deep.eq({ x: 7, y: 7, z: 7, w: 7 });
  });
  it("vecx_isFinite", () => {
    expect(vec2_isFinite({ x: 0, y: NaN })).to.eq(false);
    expect(vec2_isFinite({ x: 0, y: 2 })).to.eq(true);
    expect(vec3_isFinite({ x: 0, y: Infinity, z: 3 })).to.eq(false);
    expect(vec3_isFinite({ x: 0, y: 2, z: 3 })).to.eq(true);
    expect(vec4_isFinite({ x: 0, y: -Infinity, z: 3, w: 3 })).to.eq(false);
    expect(vec4_isFinite({ x: 0, y: 2, z: 3, w: 3 })).to.eq(true);
  });
});
