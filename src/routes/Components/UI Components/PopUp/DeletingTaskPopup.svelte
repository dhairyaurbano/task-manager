<script>

	import ButtonComponent from "../../Forms/FormComponents/Buttons/UIButtons/ButtonComponent.svelte";
  import {isDeletePopUpOpen} from '../../../../lib/TaskDetails/deletingtask.js';
  import {tableData as tableDataSystem,assignee as systemDataassignee} from "$lib/TaskDetails/addtaskdatahandling.js";
  import {tableData as tableDataTemplate,assignee as templateAssignee} from "$lib/Templates/addingtemplate.js";
  import { deletingrowidx } from "$lib/TaskDetails/deletingtask.js";
  export let context="templatetab";

  $: currentTableData = context === "templatetab" ? tableDataTemplate : tableDataSystem;
  $: currentAssignee = context === "templatetab" ? templateAssignee : systemDataassignee;

  function ClosePanel() {
    isDeletePopUpOpen.set(false); 
    }
  function DeleteRow(){
    isDeletePopUpOpen.set(true);

        console.log("Delete Row " + $deletingrowidx);

        currentTableData.update(data => {
            console.table(data);
            const updatedData = [...data]; 
            updatedData.splice($deletingrowidx, 1);
            console.table(updatedData);
            return updatedData; 
        });
        currentAssignee.update(data => {
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
    <div class="bg-white rounded-lg shadow-lg max-w-1/2 p-6">
      <div class="items-end justify-end flex">
        <button
        type="button"
        on:click={ClosePanel}>
    <img src="/close.png" alt="Close icon" class="w-5 h-5" />
    </button>
  
      </div>
      <div class="flex " >
        <img src="/deletetaskimg.png" alt="Delete task" class="w-[275px] h-[237px]" />
        <div class=" flex flex-col items-center justify-center ">
          <div class="flex">
            <span class="text-2xl font-medium">Delete Task:</span>
          </div>
          <div>
            <span class="text-xl font-normal">Do you want to delete <strong>{$currentTableData[$deletingrowidx][1]}</strong> Task?</span>
          </div>
          <div class="flex my-5  items-center justify-center min-w-64">
            
            <div class="flex-1 flex justify-center items-center">
              <ButtonComponent 
                label="Delete" 
                bgcolor="bg-red-600" 
                textcolor="text-white" 
                bordercolor="border-red-500" 
                rounded="rounded-xl"
                onClick={()=>DeleteRow()} 
              />
            </div>
            <div class="flex-1 flex justify-center items-center">
              <ButtonComponent 
                label="Cancel" 
                textcolor="text-black" 
                bordercolor="border-black" 
                rounded="rounded-xl" 
                onClick={ClosePanel}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
