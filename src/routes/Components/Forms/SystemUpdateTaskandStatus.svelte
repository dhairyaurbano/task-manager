<script>

	import ButtonComponent from "./FormComponents/ButtonComponent.svelte";
    import {isOpen} from '../../../lib/TaskDetails/addtaskdatahandling.js';
	import AddTask from "../UI Components/PopUp/AddTask.svelte";
	import SystemTabTable from "../UI Components/Tables/SystemTabTable.svelte";


    // $isOpen=false;
    function addingTask(){
        console.log("Task added");
        $isOpen=true;
        console.log("Open status is "+ $isOpen);
    }
    function importtemplate(){
        console.log("Template imported");
    }

</script>
{#if $isOpen}
<AddTask/>
{/if}
<div class="flex flex-col ">
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

    <SystemTabTable/>
</div>

