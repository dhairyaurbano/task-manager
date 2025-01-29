<script>
    import CompanyDetails from "../../Forms/CompanyDetails.svelte";
    import SideNavigationbar from "../SideNavigationBar/SideNavigationbar.svelte";
    import Step from "../ProgressWidget/Step.svelte";
    import AppBar from "../AppBar/AppBar.svelte";
    import CircularBlock from '../ProgressWidget/CircularBlock.svelte';
    import LocationDetails from "../../Forms/LocationDetails.svelte";
    import { activeTab, steps } from '$lib/Templates/formdatahandling.js';
	import TemplatesDetails from "../../Forms/TemplatesDetails.svelte";
  
    let tabs = [
      { name: "Tempalte Details" },
      { name: "Tasks" },
    ];
  
    $activeTab = 0;
    updateSteps(0);
  
    function updateSteps(index) {
      steps.update((allSteps) =>
        allSteps.map((step, i) => ({
          ...step,
          selected: i <= index, 
        }))
      );
    }
  </script>
  
  <div class="w-full py-1 border-2 rounded-3xl border-[#D7D6D6] ">
    <div class="flex flex-row py-3">
      <div class="p-3 max-w-96  rounded-lg">
        {#each $steps as step}
          <Step
            stepText={step.stepText}
            companyText={step.companyText}
            descriptionText={step.descriptionText}
            link={step.link}
            selected={step.selected}
          />
        {/each}
      </div>
  
      <div class="w-11/12 ">
        <div class="flex border-b-2 border-gray-300 mb-4">
          {#each tabs as tab, index}
            <div
              class="cursor-pointer px-6 py-2 text-lg font-semibold transition-colors duration-300 hover:text-sky-600"
              class:text-[#01AFF2]={$activeTab === index}
              class:border-b-2={$activeTab === index}
              class:border-[#01AFF2]={$activeTab === index}
              on:click={() => {
                $activeTab = index; // Update active tab
                updateSteps(index); // Update step selection
              }}
            >
              {tab.name}
            </div>
          {/each}
        </div>
  
        <div class="p-2 bg-white rounded-lg ">
          {#if $activeTab === 0}
            <TemplatesDetails />
          {:else}
            <LocationDetails />
          {/if}
        </div>
      </div>
    </div>
  </div>
  