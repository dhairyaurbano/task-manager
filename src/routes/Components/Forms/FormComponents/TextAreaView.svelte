<script>
    export let name="name";
    export let label = "Text View";
    export let id="id";
    export let placeholder="Enter description (optional)";
    export let value="";
</script>
<div class="mb-3">
    <label for={id} class="block text-sm font-medium text-gray-600 mb-1">{label}</label>
    <textarea id={id} name={name} rows="1" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder={placeholder}
bind:value={value}></textarea>  </div>