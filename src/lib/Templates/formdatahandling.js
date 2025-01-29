import { writable } from 'svelte/store';

// Create a writable store with an initial value
export const CompanyDetails = writable({
  templateName: '',
  templatedescription: '',
});
export let activeTab = writable(0);


export let steps = writable([
    {
      stepText: "1",
      companyText: "Template Details",
      descriptionText: "Add Template name and description",
      link: true,
      selected: true,
    },
    {
      stepText: "2",
      companyText: "Add Task",
      descriptionText: "Create Tasks",
      link: false,
      selected: false,
    },
  ]);