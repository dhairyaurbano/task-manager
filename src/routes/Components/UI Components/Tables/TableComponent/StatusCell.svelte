<script>
	import EditText from "../../../Forms/FormComponents/Form UIComponents/EditText.svelte";

    // export let edit=true;
    export let textValue = 'Status 1';

    function handleInputChange(newValue) {
    textValue = newValue;
    console.log('Current Input:', textValue);
  }
</script>
<div class="w-60">
    <EditText
    bind:value={textValue} 
    
    placeholder="Enter your text here..." 
    onInput={handleInputChange} 
  />

</div>