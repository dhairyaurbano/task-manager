<script>
    import CompanyDetails from "./CompanyDetails.svelte";
    import SideNavigationBar from "./SideNavigationBar.svelte";
    import Step from "./Step.svelte";
    import AppBar from "./AppBar.svelte";
    import CircularBlock from './Step.svelte';
    import LocationDetails from "./LocationDetails.svelte";
    import ContentWindow from "./ContentWindow.svelte";
</script>
<div class=" fixed w-full p-4  border-2 rounded-3xl border-[#D7D6D6] mt-4 bg-amber-600">
    <div class="flex flex-row p-5">
        <!-- <div class="p-4 max-w-96 bg-amber-300 rounded-lg">
    
          {#each steps as step}
            <Step 
              stepText={step.stepText} 
              companyText={step.companyText} 
              descriptionText={step.descriptionText} 
              link={step.link} 
              selected={step.selected} 
            />
          {/each}
    
        </div> -->
    
        <div class="max-w-md">

          <!-- <div class="flex border-b-2 border-gray-300 mb-4">
            {#each tabs as tab, index}
              <div
                class="cursor-pointer px-6 py-2 text-lg font-semibold transition-colors duration-300 hover:text-sky-600"
                class:text-[#01AFF2]={activeTab === index}
                class:border-b-2={activeTab === index}
                class:border-[#01AFF2]={activeTab === index}
                on:click={() => {
                  activeTab = index;
                  updateSteps(index);
                }
                }
              >
                {tab.name}
              </div>
            {/each}
          </div> -->
    
          <!-- <div class="p-4 bg-amber-300 rounded-lg">
            {#if activeTab === 0}
              <CompanyDetails />
            {:else}
            <LocationDetails />
            {/if}        
          </div> -->
        </div>
      </div> 
    
</div>