import { writable } from 'svelte/store';
  export let isOpenTemplate = writable(false);
  export let tableDataTemplate = writable([
    ['SL NO.', 'Task', 'Status'], // First row contains column headers
    
]);
export let assigneeTemplate = writable([["Unassigned"],[""]]);