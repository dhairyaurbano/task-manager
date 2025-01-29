<script>
	import ButtonComponent from "./FormComponents/Buttons/UIButtons/ButtonComponent.svelte";
	import TextAreaView from "./FormComponents/Form UIComponents/TextAreaView.svelte";
	import TextView from "./FormComponents/Form UIComponents/TextView.svelte";
  import {activeTab, CompanyDetails,steps} from '../../../lib/CompanyTab/formdatahandling.js'

  function savedetials(){
    console.log("Company name: "+ $CompanyDetails.companyName);
    console.log("Company website: "+ $CompanyDetails.companyWebsite);
    console.log("GST Number: "+ $CompanyDetails.gstNumber);
    console.log("Company Description: "+ $CompanyDetails.companydescription);

    console.log("Company location: "+ $CompanyDetails.companylocation);
    console.log("Company zip code: "+ $CompanyDetails.zipcode);
    console.log("Bill to: "+ $CompanyDetails.billto);
    console.log("Location Description: "+ $CompanyDetails.locationdesc);

    console.log("data saved sucessfully");
  }
  function addlocationHandler(){
    console.log("Add location button clicked");
  }



  const options = [
        { value: "bandlore", label: "Banglore" },
        { value: "kolkatta", label: "Kolkatta" },
        { value: "chennai", label: "Chennai" }
    ];
</script>
<div class="p-6 w-full bg-[#00000015] rounded-lg shadow-md">
  <div class="flex flex-row items-center justify-between">
    <div><h2 class="text-2xl font-semibold text-gray-700 text-start mb-6">Location Details</h2></div>
    <ButtonComponent 
      bgcolor="bg-black" 
      leadingimg="/location_on_icon.png" 
      label="Add Location" 
      textcolor="text-white" 
      rounded="rounded-lg" 
      onClick={addlocationHandler} 
      type="button" 
      focusringcolor="focus-gray-100"
    />
  </div>
  
    <form action="" method="POST">

    <div class="mb-3">
      <label for="dropdown" class="block text-sm font-medium text-gray-600 ">
          Status Location
          <span class="text-red-500">*</span>
      </label>
      <select id="dropdown" bind:value={$CompanyDetails.companylocation} class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required>
          <option value="" disabled selected>Select Location</option>
          {#each options as option}
              <option value={option.value}>{option.label}</option>
          {/each}
      </select>
  </div>
    
    <TextView 
      id="zipCode" 
      label="ZIP Code" 
      name="zipCode" 
      placeholder="123456" 
      inputtype="number" 
      required={true} 
      bind:value={$CompanyDetails.zipcode}
    />
    
    <TextView 
      id="billto" 
      label="Bill to" 
      name="billTo" 
      placeholder="abcdef" 
      inputtype="text" 
      required={true} 
      bind:value={$CompanyDetails.billto} 
    />

        <TextAreaView 
  id="description" 
  label="Description" 
  name="description" 
  placeholder="Enter description (optional)" 
  bind:value={$CompanyDetails.locationdesc} 
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