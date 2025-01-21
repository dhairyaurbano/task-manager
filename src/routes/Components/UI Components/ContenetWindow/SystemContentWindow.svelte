<script>
    import SideNavigationbar from "../SideNavigationBar/SideNavigationbar.svelte";
    import Step from "../ProgressWidget/Step.svelte";
    import AppBar from "../AppBar/AppBar.svelte";
    import CircularBlock from '../ProgressWidget/CircularBlock.svelte';
    import { activeTab, steps } from '../../../../lib/SystemTab/formdatahandling.js';
	import SystemCompanyDetails from "../../Forms/SystemCompanyDetails.svelte";
	import SystemDetails from "../../Forms/SystemDetails.svelte";
  
    // Tabs Data
    let tabs = [
      { name: "Company Details" },
      { name: "System Details" },
    ];
  
    $activeTab = 0;
  
    function updateSteps(index) {
      steps.update((allSteps) =>
        allSteps.map((step, i) => ({
          ...step,
          selected: i <= index, // Set selected to true only for the clicked step
        }))
      );
    }
  </script>
  
  <div class="w-full p-1 border-2 rounded-3xl border-[#D7D6D6] ">
    <div class="flex flex-row p-3">
      <div class="p-4 max-w-96  rounded-lg">
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
  
      <div class="w-full ">
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
  
        <div class="p-2 bg-white rounded-lg">
          {#if $activeTab === 0}
            <SystemCompanyDetails/>
          {:else}
            <SystemDetails/>
          {/if}
        </div>
      </div>
    </div>
  </div>
  