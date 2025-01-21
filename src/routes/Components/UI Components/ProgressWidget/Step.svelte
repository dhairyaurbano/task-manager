<script>
    import CircularBlock from './CircularBlock.svelte';;
    export let stepText = "1";
    export let selected=false;
  export let companyText = "Company Details";
  export let descriptionText = "Add Company name and description";
  export let link=false;
</script>
<div class="flex flex-row  rounded-lg min-w-64 bg-white">
        <!-- Outer Container with dynamic height based on content -->
        <div class="flex flex-col bg-white  min-w-64 rounded-lg px-2 mx-2 items-end text-right">
          <span class="text-[#26323881] font-sans text-sm">Step: {stepText}</span>
          <span class="text-[#1e1e1eec] font-semibold">{companyText}</span>
          <span class="text-[#1e1e1e] font-normal text-xs">{descriptionText}</span>
        </div>


      <div class="relative pt-1">
        <CircularBlock text={stepText} selectedStat={selected} />
        {#if link}
        <!-- this is the vertical line  -->
        <div class="w-0.5 h-16 absolute top-[54px] left-[25px] bg-[#00000017]"></div>
        <div class="h-[50px]"></div>
        {/if}
</div>
</div>
