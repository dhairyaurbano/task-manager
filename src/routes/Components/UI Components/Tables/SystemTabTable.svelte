<script>
    import { tableData } from '../../../../lib/TaskDetails/addtaskdatahandling.js';
    import { isDeletePopUpOpen } from '../../../../lib/TaskDetails/deletingtask.js';
    import Tableaddbutton from '../../Forms/FormComponents/Buttons/UIButtons/Tableaddbutton.svelte';
	import TaskCellhoverButton from '../../Forms/FormComponents/Buttons/HoverButtons/TaskCellhoverButton.svelte';
	import TaskStatusDropDown from '../DropDownMenus/TaskStatusDropDown.svelte';
    import AddTask from '../PopUp/AddTask.svelte';
	import DeletingTaskPopup from '../PopUp/DeletingTaskPopup.svelte';
    import NotApplicable from '../TaskStatus/NotApplicable.svelte';
    import Pending from '../TaskStatus/Pending.svelte';
    import Yes from '../TaskStatus/Yes.svelte';
	import StatusCell from './TableComponent/StatusCell.svelte';
  import {isDeleteStatusPopUpOpen} from '$lib/TaskDetails/deletingstatus.js';
  import {isEditTaskPopUpOpen} from '$lib/TaskDetails/openeditTaskPopUp.js';
	import DeletingStatusPopup from '../PopUp/DeletingStatusPopup.svelte';
	import TaskCell from './TableComponent/TaskCell.svelte';
	import EditTaskPopUp from '../PopUp/EditTaskPopUp.svelte';
  let Statuswidget=TaskStatusDropDown;
    $tableData = [
      ['SL NO.', 'Task', 'Status 1'], // First row contains column headers
      [1, 'New Task 1', TaskStatusDropDown],
      [2, 'New Task 2', TaskStatusDropDown],
      [3, 'New Task 3', TaskStatusDropDown],
    ];


    function OpenDeletePopUp(){
      $isDeletePopUpOpen = true;
      console.log('Delete pop up is open');
    }

    let deletingrowidx=$tableData.length-1;
    let deletingcolidx=$tableData[0].length-1;
  
    let columnStyles = ['min-w-24', 'w-full', 'min-w-32']; // Fixed widths for "SL NO." and "Status", flexible for "Task"
  
    function addColumn() {
      const newColumnName = 'Status ' + ($tableData[0].length - 1);
  
      $tableData[0] = [...$tableData[0], newColumnName];
  
      for (let i = 1; i < $tableData.length; i++) {
        $tableData[i] = [...$tableData[i], TaskStatusDropDown];
      }
    }
  

function addingTask(){
  const newRow = [
            $tableData.length, // SL NO.
            "New Task", // Task Name
            Statuswidget // Status (depending on taskDetails.statusoptions)
        ];
        const numberOfColumns = $tableData[0].length;
        for (let i = newRow.length; i < numberOfColumns;i++) {
            newRow.push(TaskStatusDropDown); 
        }
        tableData.update(data => {
            data.push(newRow);
            return data;
        });
}


  </script>


  {#if $isDeletePopUpOpen}
<DeletingTaskPopup rowidx={deletingrowidx}/>
{/if}

{#if $isDeleteStatusPopUpOpen}
<DeletingStatusPopup colidx={deletingcolidx}/>
{/if}

  
{#if $isEditTaskPopUpOpen}
<EditTaskPopUp/>
{/if}
  
  <div class="mx-1 my-2 rounded-lg border-2 border-gray-300 overflow-x-auto overflow-y-visible max-w-5xl">
    <div class="overflow-x-scroll overflow-y-visible  ">
      <table class="table-auto border-collapse bg-white">
        <thead class="relative">
          <tr class="border-b overflow-x-visible">
            {#each $tableData[0] as header, index}
            <th class={`px-4 py-2 flex-1  `}>
              <div class="flex justify-center items-center {index === 1 ? 'flex-1  min-w-64 relative bg-red-100' : (index===0)?'min-w-16':'min-w-64'} ">
                {#if index >= 2}
                <div class="">
                  <StatusCell textValue={header} />
                </div>
                {:else}
                <div class="">
                  <span>{header}</span>

                </div>
                {/if}
  
                {#if header === 'Task'}
                   <div class=" absolute right-0">
                    <Tableaddbutton onClick={addingTask} />

                   </div>
                {/if}
              </div>
  
              {#if index === 0} 
                <div class="absolute -right-2 z-70 transform -translate-y-1/2">
                  <Tableaddbutton onClick={addColumn} />
                </div>
              {/if}
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
                {#if index==0}
                <div class="flex-1">
                  <span>{rowIndex+1}</span>
                </div>
                {/if}
                {#if typeof cell === 'function'}
                <svelte:component this={cell} />
                {:else if index===1}
                
                <div class="">
                  
                <TaskCell taskname={cell} assignedTo="Unassigned" rowidx={rowIndex} />
              </div>
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
  
  