<script>
  import TextAreaView from "./FormComponents/Form UIComponents/TextAreaView.svelte";
  import TextView from "./FormComponents/Form UIComponents/TextView.svelte";
  import {activeTab, CompanyDetails,steps} from '../../../lib/CompanyTab/formdatahandling.js'
	import ButtonComponent from "./FormComponents/Buttons/UIButtons/ButtonComponent.svelte";

  function updateSteps(index) {
    steps.update((allSteps) =>
      allSteps.map((step, i) => ({
        ...step,
        selected: i <= index, // Set selected to true only for the clicked step
      }))
    );
  }

  function savedetials() {
    console.log("We have completed the company details tab , Now location detail tab");
    $activeTab = 1;
    updateSteps(1);
  }
</script>

<div class="p-6 w-full bg-[#00000015] rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold text-gray-700 text-start mb-6">Company Details</h2>
    <form action="" method="POST">
      <!-- Company Name -->
      <TextView 
        id="companyName" 
        label="Company Name" 
        name="companyName" 
        placeholder="Enter company name" 
        inputtype="text" 
        required={true}
        bind:value={$CompanyDetails.companyName} 
      />

      <!-- Company Website -->
      <TextView 
        id="companyWebsite" 
        label="Company Website" 
        name="companyWebsite" 
        placeholder="Enter company website" 
        inputtype="url" 
        required={true} 
        bind:value={$CompanyDetails.companyWebsite} 
      />

      <!-- GST Number -->
      <TextView 
        id="gstNumber" 
        label="GST Number" 
        name="gstNumber" 
        placeholder="Enter GST number" 
        inputtype="number" 
        required={true} 
        bind:value={$CompanyDetails.gstNumber} 
      />

      <!-- Description -->
      <TextAreaView 
        id="description" 
        label="Description" 
        name="description" 
        placeholder="Enter description (optional)" 
        bind:value={$CompanyDetails.companydescription}
      />

      <!-- Save Button -->
      <ButtonComponent
    label="Save Details"
    bgcolor="bg-white"
    textcolor="text-sky-500"
    bordercolor="border-sky-500"
    focusringcolor="focus:ring-sky-400"
    hoverbg="hover:bg-sky-50"
    rounded="rounded-full"
    leadingimg="/Save.png"
    leadingalt="Save Icon"
    laggingimg=""
    laggingalt=""
    type="button"
    onClick={savedetials}
/>
    </form>
</div>

<style>
  /* Optional styles for active link or hover effects */
  a:hover {
    transition: all 0.3s ease;
  }
</style>
