<script>
  import TextAreaView from "../../Forms/FormComponents/Form UIComponents/TextAreaView.svelte";
  import TextView from "../../Forms/FormComponents/Form UIComponents/TextView.svelte";
  import {tableData,assignee} from "$lib/TaskDetails/addtaskdatahandling.js";
  import {currentrow,isEditTaskPopUpOpen} from "$lib/TaskDetails/editingtask.js";
  import ButtonComponent from "../../Forms/FormComponents/Buttons/UIButtons/ButtonComponent.svelte";
import TaskStatusDropDown from "../DropDownMenus/TaskStatusDropDown.svelte";
	import NotApplicable from "../TaskStatus/NotApplicable.svelte";
import {gettingDictionaryReady,result,search,query} from '$lib/Logic/autoSuggestion.js';


let taskname=$tableData[$currentrow][1];
let taskdesc=$assignee[$currentrow-1][1];


function searchresult() {
  const dictionary = [
      "Dhairya", "Dhyey", "Aman", "Amitab", "Rekha", "Jaya",
      "Sushma", "Naman", "Pankaj", "Dharmesh", "Dhavan"
    ];
    gettingDictionaryReady(dictionary);
  }

  searchresult(); // Load dictionary on component mount

  let selectedPerson = "";

  function selectPerson(name) {
    selectedPerson = name;
    $tableData[$currentrow][1]=name;
    query.set(name); 
    result.set([]);  
  }
 

  function toggleSystemPanel() {
    $isEditTaskPopUpOpen = false; 
    console.log("System panel closed");
    console.log($isEditTaskPopUpOpen);
  }

  // function saveallUpdates() {
  //   console.log("Save all details button clicked");
  //   console.log("Task name: "+taskname);
  //   console.log("Task desc: "+taskdesc);
  //   console.log("Status Option: "+selectedPerson);

  //   tableData.update(currentData => {
  //     console.table(currentData);
  //       return currentData.map((row, index) => {
  //           if (index === currentrow) {
  //               let newRow = [...row]; // Copy row to prevent mutation
  //               newRow[1] = taskname;  // Update task name
  //               return newRow;
  //           }
  //           console.table(updatedData);
  //           return row;
  //       });
        
  //   });
  //   assignee.update(a => {
  //       a[$currentrow] = [selectedPerson,taskdesc];
  //       return [...a]; 
  //   });
  //   toggleSystemPanel();
  // }

  function saveallUpdates() {
    console.log("Save all details button clicked");
    console.log("Task name: " + taskname);
    console.log("Task desc: " + taskdesc);
    console.log("Status Option: " + selectedPerson);

    // console.log("Before update - tableData:");
    // console.table($tableData); // Log tableData before updating

    tableData.update(currentData => {
        // console.log("Inside update function - Before modification:");
        // console.table(currentData); // Log before modifying

        const updatedData = currentData.map((row, index) => {
            if (index === $currentrow) {
                console.log(`Updating row ${index}, setting taskname to:`, taskname);
                return [row[0], taskname, ...row.slice(2)]; // Correctly replace only the 2nd column (index 1)
            }
            return row;
        });

        // console.log("After modification - tableData:");
        // console.table(updatedData); // Log the modified tableData

        return updatedData;
    });

    // Log Assignee before updating
    console.log("Before update - assignee:");
    console.table($assignee);

    assignee.update(a => {
        a[$currentrow-1] = [selectedPerson,taskdesc];
        console.log("After update - assignee:");
        console.table($assignee);
        return [...a]; 
    });

    toggleSystemPanel();
}

 
</script>


<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
  <!-- Modal Content -->
  <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
    <!-- Header -->
    <div class="flex flex-row justify-between items-center">
      <p class="text-2xl font-semibold text-gray-700">Edit Task</p>
      <button
        type="button"
        class="py-2 px-3 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2"
        on:click={toggleSystemPanel}
      >
        <img src="/close.png" alt="close icon" class="w-5 h-5" />
      </button>
    </div>

    <!-- Divider -->
    <div class="w-full border-b-2 border-gray-300 mt-4 mb-4"></div>

    <!-- Form Content -->
    <div class="space-y-4 ">
      <div class="flex flex-row gap-4">
          <div class="flex-1">
            <TextView
              id="taskname"
              label="Task Name"
              name="taskname"
              placeholder="Enter task name"
              inputtype="text"
              required={true}
              bind:value={taskname}
            />
          </div>
          
          <div class="flex-1">
            <TextAreaView
              id="description"
              label="Description"
              name="description"
              placeholder="Enter description (optional)"
              bind:value={taskdesc}
            />
          </div>
        </div>
      <!-- Here there was a pop up which I have removed as far -->
      <div class="flex flex-row items-center space-x-4 ">
        <!-- "Assign to" Label -->
        <div class="flex flex-shrink-0 font-semibold text-center rounded-lg">
          <span>Assign to</span>
        </div>
      
        <!-- Filter Block -->
        <div class="relative mb-4">
          <input
            type="text"
            class="w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Type Assignee"
            bind:value={$query}  
            
          />
      
          <!-- Dropdown Menu -->
          {#if $result.length > 0}
            <ul class="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-10">
              {#each $result as word}
                <li>
                  <button
                    class="w-full text-left px-4 py-2 hover:bg-blue-100 focus:outline-none"
                    type="button"
                    on:click={() => selectPerson(word)}
                    on:keydown={(e) => { if (e.key === 'Enter') saveallUpdates }}
                  >
                    {word}
                  </button>
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      </div>
      

      



    </div>





    <!-- Footer -->
    <div class="flex justify-end mt-6">
      <ButtonComponent
        label="Save All Updates"
        bgcolor="bg-blue-700"
        textcolor="text-white"
        bordercolor=""
        focusringcolor="focus:ring-blue-300"
        hoverbg=""
        rounded="rounded-full"
        laggingimg="/addtaskrightarrow.png"
        laggingalt="Save and Updates"
        type="button"
        onClick={saveallUpdates}
      />
    </div>

  </div>
</div>

