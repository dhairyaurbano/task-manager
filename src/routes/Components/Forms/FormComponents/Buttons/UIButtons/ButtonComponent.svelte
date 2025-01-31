<script>
    export let label = "";
    export let bgcolor = "";
    export let leadingimg = "";
    export let leadingalt = "";
    export let textcolor = "";
    export let laggingimg = "";
    export let laggingalt = "";
    export let bordercolor = "";
    export let focusringcolor = "";
    export let hoverbg = "";
    export let rounded = "";
    export let type="button";
    export let onClick = () => {};
</script>

<div class="text-center">
    <button
        type={type}
        class={`${bgcolor} ${textcolor} ${hoverbg} ${focusringcolor} ${rounded} py-2 px-3 flex items-center justify-center gap-2 border border-1  ${bordercolor} focus:outline-none focus:ring-2 focus:ring-offset-2`}
        on:click={onClick}
    >
        {#if leadingimg !== ""}
            <img src={leadingimg} alt={leadingalt} class="w-5 h-5" />
        {/if}

        {#if label !== ""}
            <span>{label}</span>
        {/if}

        {#if laggingimg !== ""}
            <img src={laggingimg} alt={laggingalt} class="w-5 h-5" />
        {/if}
    </button>
</div>
