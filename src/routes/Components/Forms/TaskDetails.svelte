<script>
	import ButtonComponent from "./FormComponents/Buttons/UIButtons/ButtonComponent.svelte";
	import TextAreaView from "./FormComponents/Form UIComponents/TextAreaView.svelte";
	import TextView from "./FormComponents/Form UIComponents/TextView.svelte";
  import {activeTab, CompanyDetails,steps} from '../../../lib/CompanyTab/formdatahandling.js'
	import TemplatesTable from "../UI Components/Tables/TemplatesTable.svelte";
  import { goto } from '$app/navigation';



  function validateDropdown(event) {
    const selectElement = event.target;

    if (!selectElement.value) {
      selectElement.setCustomValidity("Please select a location before proceeding.");
    } else {
      selectElement.setCustomValidity("");
    }
  }

  function savedetials(){
    console.log("Save detials clicked sucessfully");
    const currentPath = window.location.pathname; // Get current path
    goto(`${currentPath}/confirmation`);
  }

  function goback(){
    console.log("Go back clicked sucessfully");
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
    <div class="flex  flex-row justify-start items-center">
      <div class="mx-2">
          <ButtonComponent
bgcolor="bg-white"
textcolor="text-sky-500"
bordercolor="bg-white"
focusringcolor="focus:ring-sky-400"
hoverbg="hover:bg-sky-50"
rounded="rounded-full"
leadingimg="/solar_arrow-right-broken.png"
leadingalt="Next Icon"
laggingimg=""
laggingalt=""
type="button"
onClick={goback}
/>
      </div>
      <div class="mx-2">
          <ButtonComponent
          label="Save & Next"
          bgcolor="bg-white"
          textcolor="text-sky-500"
          bordercolor="border-sky-500"
          focusringcolor="focus:ring-sky-400"
          hoverbg="hover:bg-sky-50"
          rounded="rounded-full"
          leadingimg="/solar_arrow-left-broken.png"
          leadingalt="Next Icon"
          laggingimg=""
          laggingalt=""
          type="submit"
          onClick={savedetials}
      />
      </div>
      
  </div>
</div>

<style>
  /* Optional styles for active link or hover effects */
  a:hover {
    transition: all 0.3s ease;
  }
</style>