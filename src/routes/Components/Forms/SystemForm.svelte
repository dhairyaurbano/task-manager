<script>
	import ButtonComponent from "./FormComponents/Buttons/UIButtons/ButtonComponent.svelte";
    import { tableData } from '$lib/TaskDetails/addtaskdatahandling.js';

	import TextView from "./FormComponents/Form UIComponents/TextView.svelte";
    function goback(){
        window.history.back();
        console.log("Back button clicked");
    }
  import {activeTab,activeSystemTab, CompanyDetailsSystemTab,steps, systemSubTabs} from '../../../lib/SystemTab/formdatahandling.js';
  import {isOpen} from '../../../lib/TaskDetails/addtaskdatahandling.js';
  import {isDeletePopUpOpen} from '../../../lib/TaskDetails/deletingtask.js';
	import SystemUpdateTaskandStatus from "./SystemUpdateTaskandStatus.svelte";

    function savedetials(){
    console.log("System name: "+ $CompanyDetailsSystemTab.systemname);
    console.log("System ID: "+ $CompanyDetailsSystemTab.systemid);
        console.log("data saved sucessfully");
  }

    $isOpen=false;
    // $isDeletePopUpOpen=false;
  const systemnameoptions = [
        { value: "system1", label: "System 1" },
        { value: "system2", label: "System 2" },
        { value: "system3", label: "System 3" }
    ];



  function showtable(){
    console.log("showing table");
    console.table($tableData);
  }
</script>
<form action="" method="POST">

    <div class="mb-3">
      <label for="dropdown" class="block text-sm font-medium text-gray-600 ">
          System Name
          <span class="text-red-500 bg-">*</span>
      </label>
      <select id="dropdown" bind:value={$CompanyDetailsSystemTab.systemname} class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required>
          <option value="" disabled selected>Select Systems</option>
          {#each systemnameoptions as option}
              <option value={option.value}>{option.label}</option>
          {/each}
      </select>
  </div>

  
           <!-- System id     -->
     <TextView
     id="systemid" 
     label="System ID" 
     name="systemid" 
     placeholder="Select an option" 
     inputtype="number" 
     required={true} 
     bind:value={$CompanyDetailsSystemTab.systemid}
   />

   <SystemUpdateTaskandStatus/>
   
   <div class="flex  flex-row justify-start items-center mt-3">
       <div class="mx-2">
           <ButtonComponent
 bgcolor="bg-indigo-200"
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
           <!-- Save Button -->
      <ButtonComponent
     label="Save & Next"
     bgcolor="bg-white"
     textcolor="text-sky-500"
     bordercolor="border-sky-500"
     focusringcolor="focus:ring-sky-400"
     hoverbg="hover:bg-sky-50"
     rounded="rounded-full"
     leadingimg="/solar_arrow-left-broken.png"
     leadingalt="next Button Icon"
     laggingimg=""
     laggingalt=""
     type="submit"
     onClick={savedetials}
     />
       </div>


       <div class="mx-2"> 
        <!-- Save Button -->
   <ButtonComponent
  label="ShowTable"
  bgcolor="bg-black"
  textcolor="text-white"
  bordercolor="border-sky-500"
  focusringcolor="focus:ring-sky-400"
  hoverbg="hover:bg-sky-50"
  rounded="rounded-full"
  laggingimg=""
  laggingalt=""
  type="button"
  onClick={showtable}
  />
    </div>
       
   </div>

      
        
  </form>