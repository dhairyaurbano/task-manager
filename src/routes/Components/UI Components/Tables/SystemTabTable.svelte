<script>
    import { tableData, isOpen } from '../../../../lib/TaskDetails/addtaskdatahandling.js';
    import Tableaddbutton from '../../Forms/FormComponents/Tableaddbutton.svelte';
    import AddTask from '../PopUp/AddTask.svelte';
    import NotApplicable from '../TaskStatus/NotApplicable.svelte';
    import Pending from '../TaskStatus/Pending.svelte';
    import Yes from '../TaskStatus/Yes.svelte';
  
    $tableData = [
      ['SL NO.', 'Task', 'Status 1'], // First row contains column headers
      ['1', 'New Task 1', NotApplicable],
      ['2', 'New Task 2', NotApplicable],
      ['3', 'New Task 3', Yes],
    ];
  
    function togglePopup() {
      $isOpen = !isOpen;
      console.log('toggle function executed successfully');
    }
  
    let columnStyles = ['min-w-24', 'flex-1', 'min-w-32']; // Fixed widths for "SL NO." and "Status", flexible for "Task"
  
    function addColumn() {
      const newColumnName = 'Status ' + ($tableData[0].length - 1);
  
      $tableData[0] = [...$tableData[0], newColumnName];
  
      for (let i = 1; i < $tableData.length; i++) {
        $tableData[i] = [...$tableData[i], NotApplicable];
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
   





 <div class="mx-1 my-2 rounded-lg border-2 border-red-700 overflow-x-auto">
    <!-- Fixed width container to restrict table growth -->
    <div class="w-full overflow-x-visible">
      <table class="table-auto border-collapse ">
        <thead class="relative">
          <tr class="border-b bg-green-100 ">
            {#each $tableData[0] as header, index}
            <th class={`px-4 py-2 text-left ${columnStyles[index]}  `}>
              <div class="absolute -right-2 z-50">
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
            <td class={`px-4 py-2 text-center ${columnStyles[index]}`}>
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
  </div> 
  