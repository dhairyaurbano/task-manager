<script>
  // import {isDeletePopUpOpen,deletingrowidx} from '$lib/TaskDetails/deletingtask.js';
  import {editable} from "$lib/TaskDetails/testingeditablefunctionality.js";
  import {isEditTaskPopUpOpen,currentrow} from "$lib/TaskDetails/editingtask.js";
  import { tableData,assignee } from "$lib/TaskDetails/addtaskdatahandling.js";


	import DeletingTaskPopup from '../../../../UI Components/PopUp/DeletingTaskPopup.svelte';
	import EditTaskPopUp from '../../../../UI Components/PopUp/EditTaskPopUp.svelte';
  export let row=0;
    export let onclickListener;
    export let closeDeletePopUp;
    
  isEditTaskPopUpOpen.set(false);
    function openEditPopUp(row){
      console.log(`Row ${row} was clicked in edit Task`);
      currentrow.set(row);
      isEditTaskPopUpOpen.set(true);
    }

    function openDeletePopUp(row){
      console.log(`Row ${row} was clicked`);
      onclickListener(row);
    }
</script>

<!-- edit button -->
<div class=" inline-block">
                <div class="flex mb-2">
                    <button 
                    type="button"
                    class="bg-white  px-1 py-1 rounded hover:bg-gray-200"
                    on:click={() => openEditPopUp(row)}
                  >
                  <img src="/editicon.png" alt="edit icon" class="w-2 h-2" />
                  </button>
                </div>


                <!-- delete button -->
                <div class="flex">
                    <button 
                    type="button"
                    class="bg-white   px-1 py-1 rounded hover:bg-gray-200"
                    on:click={()=>openDeletePopUp(row)}
                  >
                  <img src="/deleteicon.png" alt="delete icon" class="w-2 h-2" />
                  </button>
                </div>


                
</div>