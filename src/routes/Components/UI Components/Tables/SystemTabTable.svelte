<script>
    import {tableData,isOpen} from '../../../../lib/TaskDetails/addtaskdatahandling.js';
	import Tableaddbutton from '../../Forms/FormComponents/Tableaddbutton.svelte';
	import AddTask from '../PopUp/AddTask.svelte';
	import NotApplicable from '../TaskStatus/NotApplicable.svelte';
	import Pending from '../TaskStatus/Pending.svelte';

    $tableData = [
    ['SL NO.', 'Task', 'Status 1'], // First row contains column headers
    ['1', 'New Task 1', NotApplicable],
    ['2', 'New Task 2', NotApplicable],
    ['3', 'New Task 3', NotApplicable]
  ];
  function togglePopup(){
        $isOpen=!isOpen;
        console.log("toggle function executed sucessfully");
  }

  let minWidthcolumns=['min-w-32', 'min-w-64', 'min-w-32'];


  function addColumn() {
  const newColumnName = "Status "+ ($tableData[0].length - 1);
    
    $tableData[0] = [...$tableData[0], newColumnName];

    for (let i = 1; i < $tableData.length; i++) {
      $tableData[i] = [...$tableData[i], NotApplicable];
    }
  }


  function addingTask(){
        console.log("Task added");
        $isOpen=true;
        console.log("Open status is "+ $isOpen);
    }

</script>
{#if $isOpen}
<AddTask/>
{/if}

<div>
    <table class="table-auto border-collapse w-auto">
        <thead class =" relative">
            
            
          <tr class="border-b">
            <!-- Render table headers -->
             
            {#each $tableData[0] as header, index}
              <th class="px-4 py-2 bg-white {minWidthcolumns[index]}">
                <div class="absolute -right-2">
                    <Tableaddbutton onClick={addColumn} />
                </div>
                
                <div class="flex items-center justify-between">
                  <span>{header}</span>
                  {#if header === "Task"}
                    <Tableaddbutton onClick={addingTask} />
                    
                    
                  {/if}
                </div>
              </th>
            {/each}
          </tr>
        </thead>
      
        <tbody>
          <!-- Render table rows -->
          {#each $tableData.slice(1) as row}
            <tr class="border-b">
              {#each row as cell}
                <td class="px-4 py-2">
                  {#if typeof cell === 'function'}
                    <svelte:component this={cell} />
                  {:else}
                    {cell}
                  {/if}
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
</div>
