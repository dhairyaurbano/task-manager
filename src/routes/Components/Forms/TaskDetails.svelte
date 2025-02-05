<script>
	import ButtonComponent from "./FormComponents/Buttons/UIButtons/ButtonComponent.svelte";
	import TextAreaView from "./FormComponents/Form UIComponents/TextAreaView.svelte";
	import TextView from "./FormComponents/Form UIComponents/TextView.svelte";
  import {activeTab, CompanyDetails,steps} from '../../../lib/CompanyTab/formdatahandling.js'
	import TemplatesTable from "../UI Components/Tables/TemplatesTable.svelte";

  function validateDropdown(event) {
    const selectElement = event.target;

    if (!selectElement.value) {
      selectElement.setCustomValidity("Please select a location before proceeding.");
    } else {
      selectElement.setCustomValidity("");
    }
  }

  function savedetials(){
    console.log("Company Name: "+ $CompanyDetails.companyName);
    console.log("Company Website: "+ $CompanyDetails.companyWebsite);
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
    <div><h2 class="text-2xl font-semibold text-gray-700 text-start mb-6">Task</h2></div>

    <div class=" justify-end items-center flex">
        <div class="m-1">
            <ButtonComponent 
      bgcolor="bg-black" 
      leadingimg="/plussquare.png" 
      label="Add Task" 
      textcolor="text-white" 
      rounded="rounded-lg" 
      onClick={addlocationHandler} 
      type="button" 
      focusringcolor="focus-gray-100"
    />
        </div>

    <div class="m-1">
        <ButtonComponent 
      bgcolor="bg-black" 
      leadingimg="/plussquare.png" 
      label="Add Status" 
      textcolor="text-white" 
      rounded="rounded-lg" 
      onClick={addlocationHandler} 
      type="button" 
      focusringcolor="focus-gray-100"
    />
    </div>
    </div>
  </div>
  
    <div class="w-full border-b-2 border-gray-300 mt-2"></div>
    <!-- Yaha par ek table aaiga -->
    <TemplatesTable/>
</div>

<style>
  /* Optional styles for active link or hover effects */
  a:hover {
    transition: all 0.3s ease;
  }
</style>