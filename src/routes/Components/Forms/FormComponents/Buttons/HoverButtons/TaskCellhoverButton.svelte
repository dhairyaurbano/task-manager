<script>
  import {isDeletePopUpOpen} from '$lib/TaskDetails/deletingtask.js';
  import {editable} from "$lib/TaskDetails/testingeditablefunctionality.js";
  import {isEditTaskPopUpOpen} from "$lib/TaskDetails/openeditTaskPopUp.js";

	import DeletingTaskPopup from '../../../../UI Components/PopUp/DeletingTaskPopup.svelte';
	import EditTaskPopUp from '../../../../UI Components/PopUp/EditTaskPopUp.svelte';
  export let row=0;
  $isEditTaskPopUpOpen=false;
    function handleButtonClick(row){
        // Perform your desired actions here
        // editable.set(true);
        $isEditTaskPopUpOpen=true;
        console.log("OOOOOOOOOOOOOOOOOOOO what is he up to");
        
    }
    // $isDeletePopUpOpen=false;

    function openDeletePopUp(row){
      console.log(`Row ${row} was clicked`);
      $isDeletePopUpOpen=true;
      console.log("Delete panel opened");
      // console.log("Variable status: " + $isDeletePopUpOpen);
    }
</script>

{#if $isDeletePopUpOpen}
<DeletingTaskPopup rowidx={row}/>
{/if}
<!-- edit button -->
<div class=" inline-block">
                <div class="flex mb-2">
                    <button 
                    type="button"
                    class="bg-white  px-1 py-1 rounded hover:bg-gray-200"
                    on:click={() => handleButtonClick(row)}
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