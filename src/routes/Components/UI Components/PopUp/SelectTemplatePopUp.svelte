<script>

	import ButtonComponent from "../../Forms/FormComponents/Buttons/UIButtons/ButtonComponent.svelte";
  import {isDeletePopUpOpen} from '../../../../lib/TaskDetails/deletingtask.js';
  import { tableData,assignee } from "$lib/TaskDetails/addtaskdatahandling.js";
  import { deletingrowidx } from "$lib/TaskDetails/deletingtask.js";
  import { templates,templatePopUpOpen } from "$lib/SystemTab/templatePopUp.js";
	import Templatecomponent from "../../Template Component/Templatecomponent.svelte";
	import TemplateAddcomponent from "../../Template Component/TemplateAddcomponent.svelte";
	import TemplateSearchBar from "../SearchBar/TemplateSearchBar.svelte";
    
function closeTemplatePopUp(){
    templatePopUpOpen.set(false);
}

</script>


<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
    <!-- Modal Content -->
    <div class=" rounded-lg shadow-lg max-w-xl w-full p-6 bg-white relative">
        <div>
            <div class="flex flex-row justify-between items-center px-2 ">
                <div>
                    <span class="font-semibold text-lg"> Select Template</span>
                </div>
                <div class="w-5/12 flex justify-end">
                    <TemplateSearchBar/>
                </div>
                <div class="absolute -right-2 -top-2">
                    <button
        type="button"
        class="py-2 px-2 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-red-600 rounded-xl"
        on:click={closeTemplatePopUp}
      >
        <img src="/white_close.png" alt="close icon" class="w-2 h-2" />
      </button>
                </div>
               
            </div>
            
            
            <div class="flex border border-b-1 border-gray-200 mb-4">
                </div>
                <div class="flex mb-4 border borrder-1.5 border-gray-300 rounded-lg p-1">
                    <div class="w-full h-[300px] overflow-y-auto">
                        <div class="grid grid-cols-2 w-full">
                            {#each $templates as template (template.id)}
                                <Templatecomponent templatelable="Template {template.id}" templateid={template.id}/>
                            {/each}
                            <TemplateAddcomponent />
                        </div>
                    </div>
                </div>
                
                
        </div>
        </div>
        </div>