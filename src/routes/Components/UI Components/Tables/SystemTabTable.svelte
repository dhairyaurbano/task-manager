<script>
    import { tableData, isOpen } from '../../../../lib/TaskDetails/addtaskdatahandling.js';
    import { isDeletePopUpOpen } from '../../../../lib/TaskDetails/deletingtask.js';
    import Tableaddbutton from '../../Forms/FormComponents/Tableaddbutton.svelte';
	import TablehoverButton from '../../Forms/FormComponents/TablehoverButton.svelte';
	import TaskStatusDropDown from '../DropDownMenus/TaskStatusDropDown.svelte';
    import AddTask from '../PopUp/AddTask.svelte';
    import NotApplicable from '../TaskStatus/NotApplicable.svelte';
    import Pending from '../TaskStatus/Pending.svelte';
    import Yes from '../TaskStatus/Yes.svelte';
  
    $tableData = [
      ['SL NO.', 'Task', 'Status 1'], // First row contains column headers
      ['1', 'New Task 1', TaskStatusDropDown],
      ['2', 'New Task 2', TaskStatusDropDown],
      ['3', 'New Task 3', TaskStatusDropDown],
    ];


    function OpenDeletePopUp(){
      $isDeletePopUpOpen = true;
      console.log('Delete pop up is open');
    }
  
    function togglePopup() {
      $isOpen = !isOpen;
      console.log('toggle function executed successfully');
    }
    $isDeletePopUpOpen=false;
  
    let columnStyles = ['min-w-24', 'flex-1', 'min-w-32']; // Fixed widths for "SL NO." and "Status", flexible for "Task"
  
    function addColumn() {
      const newColumnName = 'Status ' + ($tableData[0].length - 1);
  
      $tableData[0] = [...$tableData[0], newColumnName];
  
      for (let i = 1; i < $tableData.length; i++) {
        $tableData[i] = [...$tableData[i], TaskStatusDropDown];
      }
    }
  
    function addingTask() {
      console.log('Task added');
      $isOpen = true;
      console.log('Open status is ' + $isOpen);
    }
  </script>
  
  {#if $isOpen}
  <AddTask />
  {/if}
  
  <!-- <div class="mx-1 my-2 rounded-lg border-2  ">
    <div class=" w-auto overflow-x-auto">
      <table class="table-auto border-collapse w-11/12">
        <thead class="relative">
          <tr class="border-b bg-green-100">
            {#each $tableData[0] as header, index}
            <th class={`px-4 py-2 text-left ${columnStyles[index]}`}>
              <div class="absolute -right-2 z-51">
                  <Tableaddbutton onClick={addColumn} />
              </div>
              <div class="flex justify-between {index === 1 ? 'min-w-64' : 'flex-auto'} items-center bg-red-100">
                <span>{header}</span>
                {#if header === 'Task'}
                <Tableaddbutton onClick={addingTask} />
                {/if}
              </div>
            </th>
            {/each}
          </tr>
        </thead>
    
        <tbody>
          {#each $tableData.slice(1) as row}
          <tr class="border-b">
            {#each row as cell, index}
            <td
              class={`px-4 py-2 text-center ${columnStyles[index]}`}
            >
              <div class="flex justify-center items-center h-full">
                {#if typeof cell === 'function'}
                <svelte:component this={cell} />
                {:else}
                {cell}
                {/if}
              </div>
            </td>
            {/each}
          </tr>
          {/each}
        </tbody>
      </table>
    </div>
    
  </div> -->
   





 <div class="mx-1 my-2 rounded-lg border-2 border-gray-300 overflow-x-auto overflow-y-visible max-w-5xl">
    <!-- Fixed width container to restrict table growth -->
    <div class="overflow-x-scroll overflow-y-visible  ">
      <table class="table-auto border-collapse bg-white">
        <thead class="relative">
          <tr class="border-b  ">
            {#each $tableData[0] as header, index}
            <th class={`px-4 py-2 text-left ${columnStyles[index]}  `}>
              <div class="absolute -right-2 z-50">
                <Tableaddbutton onClick={addColumn} />
              </div>
              <div class="flex justify-between {index === 1 ? 'min-w-64' : 'flex-auto'} items-center ">
                <span>{header}</span>
                {#if header === 'Task'}
                <Tableaddbutton onClick={addingTask} />
                {/if}
              </div>
            </th>
            {/each}
          </tr>
        </thead>
        
        <tbody>
          {#each $tableData.slice(1) as row,rowIndex}
          <tr class="border-b">
            {#each row as cell, index}
            <td class={`px-4 py-2 text-center relative ${columnStyles[index]} ${index === 1 ? 'group' : ''}`}>
              <div class="flex justify-center items-center h-full">
                {#if typeof cell === 'function'}
                <svelte:component this={cell} />
                {:else}
                {cell}
                {/if}
              </div>

              {#if index === 1}
              <div class="absolute top-1/2 right-2 transform -translate-y-1/2 hidden group-hover:block">
                <TablehoverButton row={rowIndex}/>
              </div>
              {/if}

            </td>
            {/each}
          </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div> 
  