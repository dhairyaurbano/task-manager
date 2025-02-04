<script>
    export let onClick = () => {}; // Default to a no-op function
    export let context="templatetab";

</script>

<div class="text-center">
    <button
        type="button"
        class="bg-gray-200 focus:focus-gray-300 rounded-md flex items-center justify-center gap-2"
        on:click={onClick}
    >
        <img src="/add.png" alt="add icon" class="w-5 h-5" />
    </button>
</div>
