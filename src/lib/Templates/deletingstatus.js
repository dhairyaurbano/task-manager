import { writable } from 'svelte/store';
  export let isDeleteStatusPopUpOpen = writable(false);
  export let currDeletingColumnIdx = writable(2);
