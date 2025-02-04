<script>
	import EditText from "../../../Forms/FormComponents/Form UIComponents/EditText.svelte";

    // export let edit=true;
    export let textValue = 'Status 1';
    export let colIdx=2;
    export let context="templatetab";


    function handleInputChange(newValue) {
    textValue = newValue;
    console.log('Current Input:', textValue);
  }
</script>
<div class="w-28 ">
    <EditText
    bind:value={textValue} 
    columnIdx={colIdx}
    placeholder="Enter your text here..." 
    onInput={handleInputChange} 

  />

</div>