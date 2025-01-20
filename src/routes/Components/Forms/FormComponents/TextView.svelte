<script>
    export let label = "Text View";
    export let required = false;
    export let inputtype = "text";
    export let id="id";
    export let name="name";
    export let placeholder="Enter your text";


</script>

<div class="mb-3">
    <label for={id} class="block text-sm font-medium text-gray-600 mb-1">
        {label} 
        {#if required}
        <span class="text-red-500">*</span>
        {/if}
    </label>
    <input type={inputtype} id={id} name={name} {required} class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder={placeholder}>
  </div>