import { writable } from 'svelte/store';
  export let isOpen = writable(false);
  export let tableData = writable([
    ['SL NO.', 'Task', 'Status'], 
    
]);
export let assignee = writable([["Unassigned"],[""]]);