<script>

	import ButtonComponent from "../../Forms/FormComponents/Buttons/UIButtons/ButtonComponent.svelte";
  import {isDeleteStatusPopUpOpen,currDeletingColumnIdx} from '$lib/TaskDetails/deletingstatus.js';
  import {tableData} from "$lib/TaskDetails/addtaskdatahandling.js";

  function ClosePanel() {
      $isDeleteStatusPopUpOpen = false; 
      console.log("Delete PopUp panel Closed");
      console.log($isDeleteStatusPopUpOpen);
  }



  function DeleteColumn() {
    const columnIdx = $currDeletingColumnIdx;

    console.log("Delete Column at index:", columnIdx);

    tableData.update(currentData => {
        console.log("Before Deleting Column:");
        console.table(currentData);

        const updatedData = currentData.map(row => {
            if (columnIdx >= 0 && columnIdx < row.length) { // Ensure valid index
                row = [...row.slice(0, columnIdx), ...row.slice(columnIdx + 1)];
            }
            return row;
        });

        console.log("After Deleting Column:");
        console.table(updatedData);

        return updatedData;
    });

    isDeleteStatusPopUpOpen.set(false);
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
            <span class="text-2xl font-medium">Delete Status:</span>
          </div>
          <div>
            <span class="text-xl font-normal">Do you want to delete <strong>{$tableData[0][$currDeletingColumnIdx]}</strong> Status?</span>
          </div>
          <div class="flex my-5  items-center justify-center min-w-64">
            <div class="flex-1 flex justify-center items-center">
              <ButtonComponent 
                label="Delete" 
                bgcolor="bg-red-600" 
                textcolor="text-white" 
                bordercolor="border-red-500" 
                rounded="rounded-xl"
                onClick={()=>DeleteColumn()} 
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
