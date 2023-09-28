import { assertArrayIncludes, assertEquals, assertNotEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { multiplos } from "./Ejercicio2.ts";

Deno.test(function addTest() : void {
    assertEquals(multiplos(15), [3,5,6,9,10,12,15]);
});

Deno.test(function addTest() : void {
    assertNotEquals(multiplos(15), [3,5,6,9,10,12]);
});

Deno.test(function addTest() : void {
    assertArrayIncludes(multiplos(15), [3,5,6,9]);
});