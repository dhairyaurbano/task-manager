<script>
    import { tableDataTemplate,assigneeTemplate } from '$lib/Templates/addingtemplate.js';
    import { isDeletePopUpOpenTemplate } from '$lib/Templates/deletingtask.js';
  import { selectedTemplate,templatePopUpOpen } from "$lib/SystemTab/templatePopUp.js";
  import {isDeleteStatusPopUpOpenTemplate} from '$lib/Templates/deletingstatus.js';
  import {isEditTaskPopUpOpenTempalte} from '$lib/Templates/editingtask.js';

    import Tableaddbutton from '../../Forms/FormComponents/Buttons/UIButtons/Tableaddbutton.svelte';
	import TaskCellhoverButton from '../../Forms/FormComponents/Buttons/HoverButtons/TaskCellhoverButton.svelte';
	import Templatesdropdown from '../DropDownMenus/Templatesdropdown.svelte';
	import DeletingTaskPopup from '../PopUp/DeletingTaskPopup.svelte';
	import StatusCell from './TableComponent/StatusCell.svelte';
	import DeletingStatusPopup from '../PopUp/DeletingStatusPopup.svelte';
	import TaskCell from './TableComponent/TaskCell.svelte';
	import EditTaskPopUp from '../PopUp/EditTaskPopUp.svelte';
	import Templatecomponent from '../../Template Component/Templatecomponent.svelte';
	import SelectTemplatePopUp from '../PopUp/SelectTemplatePopUp.svelte';
    
    $tableDataTemplate = [
      ['SL NO.', 'Task', 'Status 1'], 
      [1, 'New Task 1', "Applicable"],
      [2, 'New Task 2', "Applicable"],
      [3, 'New Task 3', "Applicable"],
      [4, 'New Task 4', "Applicable"],
      [5, 'New Task 5', "Not Applicable"],
      [6, 'New Task 6', "Applicable"],

    ];
    $assigneeTemplate = Array($tableDataTemplate.length - 1).fill(["Not assigned", ""]);

    function OpenDeletePopUp(){
      $isDeletePopUpOpenTemplate = true;
      console.log('Delete pop up is open');
    }

    let deletingrowidx=$tableDataTemplate.length-1;
    let deletingcolidx=$tableDataTemplate[0].length-1;
  
    let columnStyles = ['min-w-16 ', 'w-full', 'w-28']; 
  
    function addColumn() {
      const newColumnName = 'Status ' + ($tableDataTemplate[0].length - 1);
  
      $tableDataTemplate[0] = [...$tableDataTemplate[0], newColumnName];
  
      for (let i = 1; i < $tableDataTemplate.length; i++) {
        $tableDataTemplate[i] = [...$tableDataTemplate[i], "Pending"];
      }
    }
  

function addingTask(){
  const newRow = [
            $tableDataTemplate.length, 
            "New Task",
            "Pending" 
        ];
        const numberOfColumns = $tableDataTemplate[0].length;
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


  {#if $isDeletePopUpOpenTemplate}
<DeletingTaskPopup rowidx={deletingrowidx} context="templatetab"/>
{/if}

{#if $isDeletePopUpOpenTemplate}
  <DeletingStatusPopup colidx={deletingcolidx} context="templatetab"/>
{/if}

  
{#if $isDeletePopUpOpenTemplate}
<EditTaskPopUp context="templatetab"/>
{/if}
  
{#if $templatePopUpOpen}
<SelectTemplatePopUp context="templatetab"/>
{/if}
<div class="mx-auto  w-full">
  <div class="threshold1:max-w-lg threshold2:max-w-xl threshold3:max-w-2xl threshold4:max-w-3xl threshold5:max-w-4xl threshold6:max-w-5xl threshold7: max-w-6xl threshold8:max-w-7xl  mx-auto"> 
    <div class="mx-auto my-2 rounded-lg border-2 border-gray-300  max-w-full p-1 bg-white">
      <div class="overflow-x-scroll overflow-y-visible  ">
        <table class="table-auto border-collapse bg-white">
          <thead class="relative ">
            <tr class="border-b ">
              {#each $tableDataTemplate[0] as header, index}
              <th class={`px-2 py-2 flex-1  `}>
                <div class="flex justify-center items-center {index === 1 ? 'flex-1  min-w-48 relative ' : (index===0)?'min-w-16':'w-28 '} ">
                  {#if index >= 2}
                  <div class=" ">
                    <StatusCell textValue={header} colIdx={index} context="templatetab"/>
                  </div>
                  {:else}
                  <div >
                    <span class="text-center text-base">{header}</span>
  
                  </div>
                  {/if}
    
                  {#if header === 'Task'}
                     <div class=" absolute right-0 ">
                      <Tableaddbutton onClick={addingTask} context="templatetab"/>
  
                     </div>
                  {/if}
                </div>
    
                {#if index === 0} 
                  <div class="absolute -right-2 z-70 transform -translate-y-1/2 top-1/2">
                    <Tableaddbutton onClick={addColumn} context="templatetab"/>
                  </div>
                {/if}
              </th>
              {/each}
            </tr>
          </thead>
          
          <tbody>
            {#each $tableDataTemplate.slice(1) as row,rowIndex}
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
                <TaskCell taskname={cell} assignedTo={$assigneeTemplate[rowIndex][0]} rowidx={rowIndex + 1} context="templatetab"/>
              </div>
            {:else}
              <Templatesdropdown statusValue={cell} on:statusChange={(e) => $tableDataTemplate[rowIndex + 1][index] = e.detail} context="templatetab"/>
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


  
  