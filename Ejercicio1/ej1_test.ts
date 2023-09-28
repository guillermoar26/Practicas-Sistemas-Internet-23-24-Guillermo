import { assertEquals, assertNotEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { quicksort } from "./Ejercicio1.ts";

Deno.test(function addTest():void {
    assertEquals(quicksort([6,89,33,44,2,11,61,7,9,2,-2]), [-2,2,2,6,7,9,11,33,44,61,89]);
});

Deno.test(function addTest():void {
    assertNotEquals(quicksort([6,89,33,44,2,11,61,7,9,2,-2]), [-2,2,2,6,7,9,11,33,44,61]);
});

Deno.test(function addTest():void {
    assertNotEquals(typeof quicksort([6,89,33,44,2,11,61,7,9,2,-2]), "string");
});
