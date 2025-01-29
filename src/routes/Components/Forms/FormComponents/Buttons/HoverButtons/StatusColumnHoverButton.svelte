<script>
    import {isDeleteStatusPopUpOpen} from '$lib/TaskDetails/deletingstatus.js';
    import {editable} from "$lib/TaskDetails/testingeditablefunctionality.js";
      import DeletingTaskPopup from '../../../../UI Components/PopUp/DeletingTaskPopup.svelte';
	import DeletingStatusPopup from '../../../../UI Components/PopUp/DeletingStatusPopup.svelte';
      function handleButtonClick(row){
          // Perform your desired actions here
          editable.set(true);
          
      }
      export let row=0;
      // $isDeletePopUpOpen=false;
  
      function openDeletePopUp(row){
        console.log(`Row ${row} was clicked`);
        
  
        $isDeleteStatusPopUpOpen=true;
        console.log("Delete panel opened");
        console.log("Variable status: " + $isDeleteStatusPopUpOpen);
    }
  
      
  </script>
  {#if $isDeleteStatusPopUpOpen}
  <DeletingStatusPopup/>
  {/if}
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