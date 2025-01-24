<script>
  import { editable  ,hoverbuttonvisible} from "$lib/TaskDetails/testingeditablefunctionality.js";
	import TablehoverButton from "./TablehoverButton.svelte";

    export let value = '';
    // export let edit=true;
    export let placeholder = 'Type here...';
    export let onInput = () => {};
    function handleInput(event) {
      value = event.target.value;
      onInput(value);
    }

    function handleKeyDown(event) {
    if (event.key === 'Enter') {
      editable.set(false);
    }
    
  }
  hoverbuttonvisible.set(false);

  </script>
  <div class="relative"
  on:mouseenter={() => hoverbuttonvisible.set(true)} 
  on:mouseleave={() => { hoverbuttonvisible.set(false); editable.set(false); }}
>
  <input
    type="text"
    bind:value
    placeholder={placeholder}
    on:input={handleInput}
    on:keydown={handleKeyDown}
    disabled={!$editable}
    class="border border-gray-300 rounded-md p-2 text-lg w-full focus:border-blue-500 focus:outline-none shadow-none border-none"
   />
 

   {#if $hoverbuttonvisible}
   <div class="absolute right-1 top-1/2 transform -translate-y-1/2">
     <TablehoverButton />
   </div>
 {/if}


  </div>
  