<script>
    import CircularBlock from './CircularBlock.svelte';
	import CompanyDetails from './CompanyDetails.svelte';
    export let stepText = "1";
    export let selected=false;
  export let companyText = "Company Details";
  export let descriptionText = "Add Company name and description";
  export let link=false;
</script>
<div class="flex flex-row  rounded-lg min-w-64 bg-red-300">
    <div class=" grid grid-cols-1 ">
        <!-- Outer Container with dynamic height based on content -->
        <div class="flex flex-col bg-red-300  min-w-64 rounded-lg px-2 mx-2 items-end text-right">
          <!-- First Span -->
          <span class="text-[#26323881] font-sans">Step: {stepText}</span>
      
          <!-- Second Span -->
          <span class="text-[#1e1e1eec] font-semibold">{companyText}</span>
      
          <!-- Third Span -->
          <span class="text-[#1e1e1e] font-normal text-xs">{descriptionText}</span>
        </div>
      </div>
    <CircularBlock text={stepText} linking={link} selectedStat={selected} />
    
    

</div>