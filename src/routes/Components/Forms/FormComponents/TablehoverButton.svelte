<script>
  import {isDeletePopUpOpen} from '../../../../lib/TaskDetails/deletingtask.js';
  import {editable} from "$lib/TaskDetails/testingeditablefunctionality.js";
    function handleButtonClick(row){
        // Perform your desired actions here
        // console.log(`Row ${row} was clicked`);
        editable.set(true);
        
    }
    export let row=0;
    $isDeletePopUpOpen=false;

    function openDeletePopUp(){
      $isDeletePopUpOpen=true;
      console.log("Delete panel opened");
  }

    
</script>
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
                    on:click={openDeletePopUp}
                  >
                  <img src="/deleteicon.png" alt="delete icon" class="w-2 h-2" />
                  </button>
                </div>


                
</div>