import { writable } from 'svelte/store';
  export let isOpen = writable(false);
  export let tableData = writable([
    ['SL NO.', 'Task', 'Status'], // First row contains column headers
    
]);
export let assignee = writable([["Unassigned"],[""]]);