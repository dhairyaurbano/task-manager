import { assignee, tableData } from '$lib/TaskDetails/addtaskdatahandling';
import { writable } from 'svelte/store';


export const currentworkingtable=writable(tableData);
export const currentworkingassignee=writable(assignee);
