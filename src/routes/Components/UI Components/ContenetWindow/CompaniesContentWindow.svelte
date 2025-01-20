<script>
  import CompanyDetails from "../../Forms/CompanyDetails.svelte";
  import SideNavigationbar from "../SideNavigationBar/SideNavigationbar.svelte";
  import Step from "../ProgressWidget/Step.svelte";
  import AppBar from "../AppBar/AppBar.svelte";
  import CircularBlock from '../ProgressWidget/CircularBlock.svelte';
  import LocationDetails from "../../Forms/LocationDetails.svelte";
  import { activeTab, steps } from '../../../../lib/SystemTab/formdatahandling.js';

  // Tabs Data
  let tabs = [
    { name: "Company Details" },
    { name: "Location Details" },
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

<div class="w-full p-4 border-2 rounded-3xl border-[#D7D6D6] bg-white">
  <div class="flex flex-row p-5">
    <div class="p-4 max-w-96 bg-white rounded-lg">
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

    <div class="max-w-md">
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

      <div class="p-4 bg-white rounded-lg">
        {#if $activeTab === 0}
          <CompanyDetails />
        {:else}
          <LocationDetails />
        {/if}
      </div>
    </div>
  </div>
</div>
