<script>
    import { tableData,assignee } from '$lib/TaskDetails/addtaskdatahandling.js';
	import ButtonComponent from "./FormComponents/Buttons/UIButtons/ButtonComponent.svelte";
    import {isOpen} from '../../../lib/TaskDetails/addtaskdatahandling.js';
	import SystemTabTable from "../UI Components/Tables/SystemTabTable.svelte";
	import TaskStatusDropDown from '../UI Components/DropDownMenus/TaskStatusDropDown.svelte';
    import { templatePopUpOpen,selectedTemplate } from "$lib/SystemTab/templatePopUp.js";

    // $isOpen=false;
    function addingTask(){
        const newRow = [
            $tableData.length,
            "New Task",
            "Pending"
        ];
        const numberOfColumns = $tableData[0].length;
        for (let i = newRow.length; i < numberOfColumns;i++) {
            newRow.push("Pending"); 
        }
        tableData.update(data => {
            data.push(newRow);
            return data;
        });

        assignee.update(data => {
            data.push(["Not assigned",""]);
            return data;
        });
    }
    function importtemplate(){
        console.log("Template imported");
        $templatePopUpOpen=true;
    }

</script>



<div class="flex flex-col max-w-full">
    <div class="flex flex-row justify-between items-center ">
        <div class=" flex justify-center items-center ">
            <h2 class="text-2xl font-semibold text-gray-700 text-center">User Task & Status</h2>
        </div>
        
        <div class="flex">
            <div class="px-2">
                <ButtonComponent
                  label="Add Task"
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
                  onClick={addingTask}
                />
            </div>
    
                <div class="">
                    <ButtonComponent
                  label="Import Tempalte"
                  bgcolor="bg-[#000000]"
                  textcolor="text-white"
                  bordercolor="border-black"
                  focusringcolor="focus:ring-gray-400"
                  hoverbg=""
                  rounded="rounded-lg"
                  leadingimg="/uploadtemplate.png"
                  leadingalt="Import Template"
                  laggingimg=""
                  laggingalt=""
                  type="button"
                  onClick={importtemplate}
                />
                </div>
        </div>
    </div>
    <div class="w-full border-b-2 border-gray-300 mt-4"></div>

    {#if $selectedTemplate===1}
    <SystemTabTable/>
    {:else}
    <SystemTabTable/>
    {/if} 

</div>

