<script>

	import ButtonComponent from "../../Forms/FormComponents/ButtonComponent.svelte";
  import {isDeletePopUpOpen} from '../../../../lib/TaskDetails/deletingtask.js';

  function ClosePanel() {
      $isDeletePopUpOpen = false; 
      console.log("Delete PopUp panel Closed");
      console.log($isDeletePopUpOpen);
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
          <div class="flex my-5  items-center justify-center w-full">
            <div class="flex-1 flex justify-center items-center">
              <ButtonComponent 
                label="Cancel" 
                textcolor="text-black" 
                bordercolor="border-black" 
                rounded="rounded-xl" 
                onClick={ClosePanel}
              />
            </div>
            <div class="flex-1 flex justify-center items-center">
              <ButtonComponent 
                label="Delete" 
                bgcolor="bg-red-600" 
                textcolor="text-white" 
                bordercolor="border-red-500" 
                rounded="rounded-xl" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
