import { writable } from 'svelte/store';
export const taskDetails = writable({
    taskname: '',
    taskdesc: '',
    statusoptions: '',
  });

  export let isOpen = writable(false);


  export const tableData = writable([
    ['SL NO.', 'Task', 'Status'], // First row contains column headers
    
]);