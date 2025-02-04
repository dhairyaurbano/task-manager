import { writable } from 'svelte/store';
  export let currentrow=writable(1);
  export let isEditTaskPopUpOpen = writable(false);

