import { writable } from 'svelte/store';

// Create a writable store with an initial value
export const CompanyDetails = writable({
  companyName: '',
  companyWebsite: '',
  gstNumber: '',
  companydescription: '',
  companylocation:'',
  zipcode:'',
  billto:'',
  locationdesc:'',
});
export let activeTab = writable(0);


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
      companyText: "Location Details",
      descriptionText: "Add company location details",
      link: false,
      selected: false,
    },
  ]);