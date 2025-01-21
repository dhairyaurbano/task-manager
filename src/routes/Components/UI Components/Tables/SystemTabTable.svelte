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
  
    let columnStyles = ['w-32', 'flex-1', 'w-32']; // Fixed widths for "SL NO." and "Status", flexible for "Task"
  
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
  
  <div class="mx-1 my-2 rounded-lg border-2 overflow-hidden">
    <table class="table-auto border-collapse w-full">
      <thead class="relative">
        <tr class="border-b bg-green-100">
          {#each $tableData[0] as header, index}
          <th class={`px-4 py-2 text-left ${columnStyles[index]}`}>
            <div class="absolute -right-2">
                <Tableaddbutton onClick={addColumn} />
            </div>
            <div class="flex flex-row justify-between items-center bg-red-100">
                <div class="flex flex-1 {index === 1 ? 'min-w-64' : ''} bg-amber-100">
                    <span>{header}</span>
                </div>
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
  