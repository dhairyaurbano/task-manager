<script>

	import ButtonComponent from "../../Forms/FormComponents/Buttons/UIButtons/ButtonComponent.svelte";
  // import {isDeletePopUpOpen} from '$lib/TaskDetails/deletingtask.js';



  // export let tableData=[[]];
  // export let assigneeData=[[]];
  // export let deletingrowidx=1;
export let closedeletePopup;

  // export let rowidx=1;
  function DeleteRow(){
    console.log("Sirf print karanae kae lilae print kara raha hu...");
  }

  function ClosePanel() {
    console.log("Sirf print karanae kae lilae print kara raha hu...");

    // isDeletePopUpOpen.set(false); 
    closedeletePopup();
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
        <img src="/deletetaskimg.png" alt="Delete Image" class="w-[275px] h-[237px]" />
        <div class=" flex flex-col items-center justify-center ">
          <div class="flex">
            <span class="text-2xl font-medium">Delete Task:</span>
          </div>
          <div>
            <span class="text-xl font-normal">Do you want to delete this Task?</span>
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
