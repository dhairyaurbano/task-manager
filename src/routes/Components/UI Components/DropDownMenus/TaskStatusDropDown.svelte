<script>
  import { onMount } from "svelte";
  export let statusValue = "Pending";
  let isOpen = false; 
  let dropdowniconVisible = false;
  
  let options = [
    {
      id: 1,
      label: "Yes",
      bgColor: "bg-green-100",
      textColor: "text-green-700",
      dotColor: "bg-green-700",
    },
    {
      id: 2,
      label: "No",
      bgColor: "bg-red-100",
      textColor: "text-red-700",
      dotColor: "bg-red-700",
    },
    {
      id: 3,
      label: "Not Applicable",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700",
      dotColor: "bg-yellow-700",
    },
    {
      id: 4,
      label: "In Progress",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
      dotColor: "bg-blue-700",
    },
    {
      id: 5,
      label: "Other Status",
      bgColor: "bg-fuchsia-100",
      textColor: "text-fuchsia-700",
      dotColor: "bg-fuchsia-700",
    },
  ];

  let selectedOption = options.find(option => option.label === statusValue) || options[2];

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function selectOption(option) {
    selectedOption = option;
    statusValue = option.label;
    isOpen = false;
  }
</script>

<div class="relative min-w-28">
<!-- Dropdown Trigger -->
<button
  type="button"
  class="w-full flex items-center justify-between py-2 hover:border rounded-lg bg-white hover:shadow-md z-30"
  on:click={toggleDropdown}
  on:mouseenter={() => dropdowniconVisible = true}  
  on:mouseleave={() => dropdowniconVisible = false}
>
  <div class="flex items-center justify-center w-full">
    <div class={`rounded-full  p-1 mx-2 flex flex-row items-center ${selectedOption.bgColor}`}>
      <div class={`rounded-full flex items-center justify-center w-2 h-2 mx-1 ${selectedOption.dotColor}`}></div>
      <span class={`font-normal text-sm text-nowrap ${selectedOption.textColor}`}>
        {selectedOption.label}
      </span>
    </div>
  </div>
  
</button>

<!-- Dropdown Menu -->
{#if isOpen}
  <div class="absolute left-0 mt-2 w-full rounded-lg shadow-lg bg-white border z-70 " style="z-index: 9999;">
    {#each options as option}
      <div
        class="cursor-pointer px-4 py-1 hover:bg-gray-100 flex items-center justify-center text-center"
        on:click={() => selectOption(option)}
      >
        <div class={`rounded-full p-1 flex flex-row items-center ${option.bgColor}`}>
          <div class={`rounded-full flex items-center justify-center w-2 h-2 mx-1 ${option.dotColor}`}></div>
          <span class={`font-normal text-nowrap text-sm ${option.textColor}`}>
            {option.label}
          </span>
        </div>
      </div>
    {/each}
  </div>
{/if}
</div>