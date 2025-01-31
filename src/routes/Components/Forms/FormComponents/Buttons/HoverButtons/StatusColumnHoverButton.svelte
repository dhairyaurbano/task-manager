<script>
    import {isDeleteStatusPopUpOpen,currDeletingColumnIdx} from '$lib/TaskDetails/deletingstatus.js';
    import {editable} from "$lib/TaskDetails/testingeditablefunctionality.js";
	import DeletingStatusPopup from '../../../../UI Components/PopUp/DeletingStatusPopup.svelte';
export let row=0

export let colIdx=2;
      function handleButtonClick(row){
          editable.set(true);
      }  
      function openDeletePopUp(colIdx){
        currDeletingColumnIdx.set(colIdx)
        console.log(`Column ${$currDeletingColumnIdx} was clicked`);
        
  
        $isDeleteStatusPopUpOpen=true;
        console.log("Delete status panel opened");
        console.log("Variable status: " + $isDeleteStatusPopUpOpen);
    }
  
      
  </script>
  {#if $isDeleteStatusPopUpOpen}
  <DeletingStatusPopup/>
  {/if}
  <div class=" inline-block z-51">
                  <div class="flex mb-2">
                      <button 
                      type="button"
                      class="  px-1 py-1 rounded hover:bg-gray-200"
                      on:click={() => handleButtonClick(row)}
                    >
                    <img src="/editicon.png" alt="edit icon" class="w-2 h-2" />
                    </button>
                  </div>
                  <div class="flex">
                      <button 
                      type="button"
                      class="px-1 py-1 rounded hover:bg-gray-200"
                      on:click={()=>openDeletePopUp(colIdx)}
                    >
                    <img src="/deleteicon.png" alt="delete icon" class="w-2 h-2" />
                    </button>
                  </div>
  
  
                  
  </div>