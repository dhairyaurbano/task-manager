<script>
  import TextAreaView from "./FormComponents/Form UIComponents/TextAreaView.svelte";
  import TextView from "./FormComponents/Form UIComponents/TextView.svelte";
  import {activeTab, CompanyDetails,steps} from '../../../lib/CompanyTab/formdatahandling.js'
	import ButtonComponent from "./FormComponents/Buttons/UIButtons/ButtonComponent.svelte";


  function validateCompanyName(event) {
    const selectElement = event.target;

    if (!selectElement.value) {
      selectElement.setCustomValidity("Please Enter Valid company name");
    } else {
      selectElement.setCustomValidity("");
    }
  }

  function updateSteps(index) {
    steps.update((allSteps) =>
      allSteps.map((step, i) => ({
        ...step,
        selected: i <= index,
      }))
    );
  }

  function savedetials() {
    console.log("We have completed the company details tab , Now location detail tab");
    event.preventDefault(); // Prevent form submission
    const form = event.target.closest("form");


    if (!form.checkValidity()) {
      // If form is invalid, show validation messages
      form.reportValidity();
      return;
    }
    
    activeTab.set(1);
    updateSteps(1);
  }
</script>

<div class="p-6 w-full bg-[#00000015] rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold text-gray-700 text-start mb-6">Company Details</h2>
    <form on:submit action="" method="POST">
      <!-- Company Name -->
      <TextView 
        id="companyName" 
        label="Company Name" 
        name="companyName" 
        placeholder="Enter company name" 
        inputtype="text" 
        required={true}
        bind:value={$CompanyDetails.companyName} 
        on:invalid={validateCompanyName} 
        on:input={validateCompanyName}
      />

      <!-- Company Website -->
      <TextView 
        id="companyWebsite" 
        label="Company Website" 
        name="companyWebsite" 
        placeholder="Enter company website" 
        inputtype="url" 
        required={false} 
        bind:value={$CompanyDetails.companyWebsite} 
      />

      <!-- GST Number -->
      <TextView 
        id="gstNumber" 
        label="GST Number" 
        name="gstNumber" 
        placeholder="Enter GST number" 
        inputtype="number" 
        required={false} 
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
    type="submit"
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
