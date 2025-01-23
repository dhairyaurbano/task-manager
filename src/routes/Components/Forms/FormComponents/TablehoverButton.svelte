<script>
    function handleButtonClick(row){
        // Perform your desired actions here
        console.log(`Row ${row} was clicked`);
        
    }
    export let row=0;
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
                    on:click={() => handleButtonClick(row)}
                  >
                  <img src="/deleteicon.png" alt="delete icon" class="w-2 h-2" />
                  </button>
                </div>


                
</div>