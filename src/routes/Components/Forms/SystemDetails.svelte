<script>
	import ButtonComponent from "./FormComponents/Buttons/UIButtons/ButtonComponent.svelte";
	import TextAreaView from "./FormComponents/Form UIComponents/TextAreaView.svelte";
	import TextView from "./FormComponents/Form UIComponents/TextView.svelte";
  import {activeTab,activeSystemTab, CompanyDetailsSystemTab,steps, systemSubTabs} from '../../../lib/SystemTab/formdatahandling.js';
	import LocationDetails from "./LocationDetails.svelte";
	import SystemCompanyDetails from "./SystemCompanyDetails.svelte";
	import Pending from "../UI Components/TaskStatus/Pending.svelte";
	import Applicable from "../UI Components/TaskStatus/Applicable.svelte";
	import SystemForm from "./SystemForm.svelte";

  
  

  $activeSystemTab=0;
  function addingsystem(){
    systemSubTabs.update((tabs) => [...tabs, 'System '+($systemSubTabs.length+1)]);
    $activeSystemTab=systemSubTabs.length-1;
  }
  
  



</script>
<div class="p-6 w-full bg-[#00000015]  rounded-lg shadow-md  ">
  
    <div><p class="text-2xl font-semibold text-gray-700 mb-6">System</p></div>
    
  
    <div class="w-full">
        
        <div class="flex flex-row justify-between items-center ">
            <!-- Red Div -->
            <div class="flex items-center border-b-2 border-gray-300  bg-white">
              <div class="flex   ">
                {#each $systemSubTabs as tab, index}
                  <button
                    class="cursor-pointer px-2 py-2 text-sm font-semibold transition-colors duration-300 hover:text-sky-600 "
                    class:text-[#01AFF2]={$activeSystemTab === index}
                    class:border-b-2={$activeSystemTab === index}
                    class:border-[#01AFF2]={$activeSystemTab === index}
                    on:click={() => {
                      $activeSystemTab = index; // Update active tab
                    }}
                  >
                    {tab}
                  </button>
                {/each}
              </div>
            </div>
          
            <!-- Button -->
            <ButtonComponent
              label="Add System"
              bgcolor="bg-[#00000000]"
              textcolor="text-black"
              bordercolor="border-black"
              focusringcolor="focus:ring-gray-400"
              hoverbg="hover:bg-gray-50"
              rounded="rounded-full"
              leadingimg="/add.png"
              leadingalt="Add Icon"
              laggingimg=""
              laggingalt=""
              type="button"
              onClick={addingsystem}
            />
          </div>
          
        
  
        <div class="p-4 rounded-lg">
          {#if $activeSystemTab === 0}
            <!-- <Pending/> -->
             <SystemForm/>
          {:else}
            <SystemForm/>
          {/if}
        </div>
      </div>



     
</div>

<!-- <style>
  /* Optional styles for active link or hover effects */
  a:hover {
    transition: all 0.3s ease;
  }
</style> -->