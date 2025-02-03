import { writable } from 'svelte/store';

// Create a writable store with an initial value
export const CompanyDetailsSystemTab = writable({
  companyName: '',
  companyWebsite: '',
  PONumber: [],
  companydescription: '',
  companylocation:'',
  systemname:'',
  systemid:'',
});
export let activeTab = writable(0);
export let activeSystemTab = writable(0);
export let systemSubTabs = writable(['System 1']);



export let steps = writable([
    {
      stepText: "1",
      companyText: "Company Details",
      descriptionText: "Add Company name and description",
      link: true,
      selected: true,
    },
    {
      stepText: "2",
      companyText: "System",
      descriptionText: "Add multiple System and Tasks",
      link: false,
      selected: false,
    },
  ]);