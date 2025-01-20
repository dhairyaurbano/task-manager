<script>
    export let text = "Default Text";
    export let linking=false;
    export let selectedStat=false;
</script>
  
<div class="flex flex-col items-center">
  <!-- Circular Block -->
   {#if selectedStat}
  <div class="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#01AFF2] text-white font-bold text-lg pr-0">
    {text}
  </div>
  
  {:else}
  <div class="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white text-black font-medium text-lg pr-0 border border-gray-500">
    {text}
  </div>
  {/if}

  
  <!-- this is the vertical line  -->
  {#if linking}
  <div class="w-0.5 h-16 bg-[#00000017]"></div>
  {/if}
</div>
  