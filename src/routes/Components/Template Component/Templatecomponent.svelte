<script>
  import { tableData,assignee } from "$lib/TaskDetails/addtaskdatahandling.js";
	import ButtonComponent from "../Forms/FormComponents/Buttons/UIButtons/ButtonComponent.svelte";
    export let templatelable="Test Template";
    export let templateid=1;

    import { templates,selectedTemplate,templatePopUpOpen } from "$lib/SystemTab/templatePopUp.js";


    function templateSelecteion(){
        console.log("Clicked template id: "+ templateid);
        selectedTemplate.set(templateid);
        templatePopUpOpen.set(false);
        if(templateid==1){
            $tableData = [
            ['SL NO.', 'Task', 'Status 1'], 
            [1, 'New Task 1', "Pending"],
            [2, 'New Task 2', "Pending"],
            [3, 'New Task 3', "Pending"],
            [4, 'New Task 4', "Pending"],
            [5, 'New Task 5', "In Progress"],
            [6, 'New Task 6', "Pending"],

            ];
            $assignee = Array($tableData.length - 1).fill(["Not assigned", ""]);
        }
        else if(templateid==2){
            $tableData = [
            ['SL NO.', 'Task', 'Status 1','Status 2'], 
            [1, 'New Task 1', "Pending","Pending"],
            [2, 'New Task 2', "Pending","Pending"],
            [3, 'New Task 3', "Pending","Pending"],
            [4, 'New Task 4', "Pending","Pending"],
            [5, 'New Task 5', "In Progress","Pending"],
            [6, 'New Task 6', "Pending","Pending"],

            ];
            $assignee = Array($tableData.length - 1).fill(["Not assigned", ""]);
        }
        else if(templateid==3){
            $tableData = [
            ['SL NO.', 'Task', 'Status 1','Status 2','Status 3'], 
            [1, 'New Task 1', "Pending", "Pending", "Pending"],
            [2, 'New Task 2', "Pending", "Pending", "Pending"],
            [3, 'New Task 3', "Pending", "Pending", "Pending"],
            [4, 'New Task 4', "Pending", "Pending", "Pending"],
            [5, 'New Task 5', "In Progress", "Pending", "Pending"],
            [6, 'New Task 6', "Pending", "Pending", "Pending"],

            ];
            $assignee = Array($tableData.length - 1).fill(["Not assigned", ""]);
        }

        else if(templateid==4){
            $tableData = [
            ['SL NO.', 'Task', 'Status 1','Status 2','Status 3','Status 4'], 
            [1, 'New Task 1', "Pending", "Pending", "Pending", "Pending"],
            [2, 'New Task 2', "Pending", "Pending", "Pending", "Pending"],
            [3, 'New Task 3', "Pending", "Pending", "Pending", "Pending"],
            [4, 'New Task 4', "Pending", "Pending", "Pending", "Pending"],
            [5, 'New Task 5', "In Progress", "Pending", "Pending", "Pending"],
            [6, 'New Task 6', "Pending", "Pending", "Pending", "Pending"],

            ];
            $assignee = Array($tableData.length - 1).fill(["Not assigned", ""]);
        }

        else{
            $tableData = [
            ['SL NO.', 'Task', 'Status 1','Status 2','Status 3','Status 4','Status 5'], 
            [1, 'New Task 1', "Pending", "Pending", "Pending", "Pending","Pending"],
            [2, 'New Task 2', "Pending", "Pending", "Pending", "Pending","Pending"],
            [3, 'New Task 3', "Pending", "Pending", "Pending", "Pending","Pending"],
            [4, 'New Task 4', "Pending", "Pending", "Pending", "Pending","Pending"],
            [5, 'New Task 5', "In Progress", "Pending", "Pending", "Pending","Pending"],
            [6, 'New Task 6', "Pending", "Pending", "Pending", "Pending","Pending"],

            ];
            $assignee = Array($tableData.length - 1).fill(["Not assigned", ""]);
        }

    }

</script>
<div class="flex items-center bg-white m-2 p-2 rounded-xl border border-1 border-gray-200">
    <img src="/templateicon.png" alt="Template icon" class="w-11 h-11 " />
    <span class="text-lg mx-3">{templatelable}</span>
    <ButtonComponent
    leadingimg="./grayaddicon.png"
    rounded="rounded-xl"
    bordercolor="border-gray-300"
    type="button"
    onClick={templateSelecteion}
    />
</div>


