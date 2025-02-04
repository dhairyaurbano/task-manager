// store.js
import { writable } from "svelte/store";
export const selectedTemplate=writable(1);
export let templatePopUpOpen=writable(false);

// Initialize store with an array of template components
export const templates = writable([
    { id: 1, type: "template" },
    { id: 2, type: "template" },
    { id: 3, type: "template" },
    { id: 4, type: "template" },
    { id: 5, type: "template" },
    { id: 6, type: "template" },
    { id: 7, type: "template" },
    { id: 8, type: "template" },
    { id: 9, type: "template" },
    { id: 10, type: "template" }
]);

