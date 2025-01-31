<script>
    import { tableData,assignee } from '../../../../lib/TaskDetails/addtaskdatahandling.js';
    import { isDeletePopUpOpen } from '../../../../lib/TaskDetails/deletingtask.js';
    import Tableaddbutton from '../../Forms/FormComponents/Buttons/UIButtons/Tableaddbutton.svelte';
	import TaskCellhoverButton from '../../Forms/FormComponents/Buttons/HoverButtons/TaskCellhoverButton.svelte';
	import TaskStatusDropDown from '../DropDownMenus/TaskStatusDropDown.svelte';
	import DeletingTaskPopup from '../PopUp/DeletingTaskPopup.svelte';
	import StatusCell from './TableComponent/StatusCell.svelte';
  import {isDeleteStatusPopUpOpen} from '$lib/TaskDetails/deletingstatus.js';
  import {isEditTaskPopUpOpen} from '$lib/TaskDetails/editingtask.js';
	import DeletingStatusPopup from '../PopUp/DeletingStatusPopup.svelte';
	import TaskCell from './TableComponent/TaskCell.svelte';
	import EditTaskPopUp from '../PopUp/EditTaskPopUp.svelte';
  import { templatePopUpOpen } from "$lib/SystemTab/templatePopUp.js";
	import Templatecomponent from '../../Template Component/Templatecomponent.svelte';
	import SelectTemplatePopUp from '../PopUp/SelectTemplatePopUp.svelte';

  // let Statuswidget=TaskStatusDropDown;
    $tableData = [
      ['SL NO.', 'Task', 'Status 1'], 
      [1, 'New Task 1', "Pending"],
      [2, 'New Task 2', "Pending"],
      [3, 'New Task 3', "Pending"],
      [4, 'New Task 4', "Pending"],
      [5, 'New Task 5', "In Progress"],
      [6, 'New Task 6', "Pending"],

    ];
    $assignee = Array($tableData.length - 1).fill(["Not assigned", ""]);

    function OpenDeletePopUp(){
      $isDeletePopUpOpen = true;
      console.log('Delete pop up is open');
    }

    let deletingrowidx=$tableData.length-1;
    let deletingcolidx=$tableData[0].length-1;
  
    let columnStyles = ['min-w-16 ', 'w-full', 'w-28']; 
  
    function addColumn() {
      const newColumnName = 'Status ' + ($tableData[0].length - 1);
  
      $tableData[0] = [...$tableData[0], newColumnName];
  
      for (let i = 1; i < $tableData.length; i++) {
        $tableData[i] = [...$tableData[i], "Pending"];
      }
    }
  

function addingTask(){
  const newRow = [
            $tableData.length, 
            "New Task",
            "Pending" 
        ];
        const numberOfColumns = $tableData[0].length;
        for (let i = newRow.length; i < numberOfColumns;i++) {
            newRow.push("Pending"); 
        }
        tableData.update(data => {
            data.push(newRow);
            return data;
        });

        assignee.update(data => {
            data.push(["Not assigned",""]);
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
  
{#if $templatePopUpOpen}
<SelectTemplatePopUp/>
{/if}
<div class="mx-auto  w-full">
  <div class="threshold1:max-w-lg threshold2:max-w-xl threshold3:max-w-2xl threshold4:max-w-3xl threshold5:max-w-4xl threshold6:max-w-5xl threshold7: max-w-6xl threshold8:max-w-7xl  mx-auto"> 
    <div class="mx-auto my-2 rounded-lg border-2 border-gray-300  max-w-full p-1 bg-white">
      <div class="overflow-x-scroll overflow-y-visible  ">
        <table class="table-auto border-collapse bg-white">
          <thead class="relative ">
            <tr class="border-b ">
              {#each $tableData[0] as header, index}
              <th class={`px-2 py-2 flex-1  `}>
                <div class="flex justify-center items-center {index === 1 ? 'flex-1  min-w-48 relative ' : (index===0)?'min-w-16':'w-28 '} ">
                  {#if index >= 2}
                  <div class=" ">
                    <StatusCell textValue={header} colIdx={index}/>
                  </div>
                  {:else}
                  <div >
                    <span class="text-center text-base">{header}</span>
  
                  </div>
                  {/if}
    
                  {#if header === 'Task'}
                     <div class=" absolute right-0 ">
                      <Tableaddbutton onClick={addingTask} />
  
                     </div>
                  {/if}
                </div>
    
                {#if index === 0} 
                  <div class="absolute -right-2 z-70 transform -translate-y-1/2 top-1/2">
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
                  {#if index == 0}
              <div class="flex-1">
                <span>{rowIndex + 1}</span>
              </div>
            {:else if index === 1}
              <div>
                <TaskCell taskname={cell} assignedTo={$assignee[rowIndex][0]} rowidx={rowIndex + 1} />
              </div>
            {:else}
              <TaskStatusDropDown statusValue={cell} on:statusChange={(e) => $tableData[rowIndex + 1][index] = e.detail} />
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
  
  </div>
</div>


  
  