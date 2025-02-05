<script>
	import StatusColumnHoverButton from "../../../Forms/FormComponents/Buttons/HoverButtons/StatusColumnHoverButton.svelte";
	import TaskCellhoverButton from "../../../Forms/FormComponents/Buttons/HoverButtons/TaskCellhoverButton.svelte";

    export let taskname="Custom Task name";
    export let assignedTo="choose assigned to";
    export let onclickListener;
    let hoverbuttonvisible=false;
    export let rowidx=0;

</script>


<!-- <div class="flex"> -->
    <div class="relative  px-2"
    on:mouseenter={() => hoverbuttonvisible=true} 
    on:mouseleave={() => { hoverbuttonvisible=false;}}
  >
  <div class=" mx-3">
      <div class="flex justify-center items-center">
          <span class="font-medium">{taskname}</span>
      </div>
      <div class="flex items-center justify-center">
        <span class="font-light">
            {#if assignedTo !== "Not assigned"}
              Assigned to {assignedTo}
            {:else}
              {assignedTo}
            {/if}
          </span>
          

      </div>
  </div>
  
  
  {#if hoverbuttonvisible}
  <div class="absolute right-1 top-1/2 transform -translate-y-1/2">
    <TaskCellhoverButton row={rowidx} onclickListener={onclickListener}/>
  </div>
  {/if}
  </div>
<!-- </div> -->
