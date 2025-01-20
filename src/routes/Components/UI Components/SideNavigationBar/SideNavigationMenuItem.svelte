<script>
    export let href = "#";
    export let icon = null; 
    export let label = ""; 
    export let labelclass = "text-sm font-medium ml-4";
  </script>
  
  <a href={href} class="flex items-center lg:w-64 w-48 bg-[#fbfbfb] w-auto p-2  hover:text-sky-400">
    
    {#if icon}
    <span class="w-6 h-6 pl-5 pr-5" aria-hidden="true">
      <svelte:component this={icon} />
    </span>
    {/if}
  
    <span class={labelclass} >{label}</span>
  </a>
  