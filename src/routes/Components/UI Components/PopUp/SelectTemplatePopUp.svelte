<script>

	import ButtonComponent from "../../Forms/FormComponents/Buttons/UIButtons/ButtonComponent.svelte";
  import {isDeletePopUpOpen} from '../../../../lib/TaskDetails/deletingtask.js';
  import { tableData,assignee } from "$lib/TaskDetails/addtaskdatahandling.js";
  import { deletingrowidx } from "$lib/TaskDetails/deletingtask.js";
  import { templates } from "$lib/SystemTab/templatePopUp.js";
	import Templatecomponent from "../../Template Component/Templatecomponent.svelte";
	import TemplateAddcomponent from "../../Template Component/TemplateAddcomponent.svelte";
	import TemplateSearchBar from "../SearchBar/TemplateSearchBar.svelte";
    




  function ClosePanel() {
    isDeletePopUpOpen.set(false); 
    }
  function DeleteRow(){
    isDeletePopUpOpen.set(true);

        console.log("Delete Row " + $deletingrowidx);

        tableData.update(data => {
            console.table(data);
            const updatedData = [...data]; 
            updatedData.splice($deletingrowidx, 1);
            console.table(updatedData);
            return updatedData; 
        });
        assignee.update(data => {
            console.table(data);
            const updatedData = [...data]; 
            updatedData.splice($deletingrowidx-1, 1);
            console.table(updatedData);
            return updatedData; 
        });
        isDeletePopUpOpen.set(false); 
  }

</script>


<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <!-- Modal Content -->
    <div class="bg-white rounded-lg shadow-lg max-w-xl w-full p-6">
        <div>
            <div class="flex flex-row justify-between items-center px-2 ">
                <div>
                    <span class="font-semibold text-lg"> Select Template</span>
                </div>
                <div>
                    <TemplateSearchBar/>
                </div>
            </div>
            <div class="flex border border-b-1 border-gray-200 mb-4">
                </div>
                <div class="flex  mb-4 border borrder-1.5 border-gray-300 rounded-lg p-1">
                    <div class="w-full max-h-[400px] overflow-y-auto">
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