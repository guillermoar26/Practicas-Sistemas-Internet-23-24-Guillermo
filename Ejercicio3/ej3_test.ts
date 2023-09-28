import { assertEquals, assertNotEquals, assertObjectMatch } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { ordernarStrings } from "./Ejercicio3.ts";

Deno.test(function addTest() : void {
    assertEquals(ordernarStrings(["aab","aac","bbb","aaa"]), ["a","a","a"]);
});

Deno.test(function addTest() : void {
    assertNotEquals(ordernarStrings(["aab","aac","bbb","aaa"]), ["a","a","a","a","a","b","b","b"]);
});

Deno.test(function addTest() : void {
    assertObjectMatch(Object.fromEntries(ordernarStrings(["aab","aac","bbb","aaa"]).map((x: string) : [string, boolean] => [x, true])), 
    Object.fromEntries(["a", "a", "a"].map((x: string) : [string, boolean] => [x, true])));
});

