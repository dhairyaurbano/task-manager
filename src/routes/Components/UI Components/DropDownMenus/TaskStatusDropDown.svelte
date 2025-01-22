<script>
    import { onMount } from "svelte";
  
    let isOpen = false; // Controls dropdown visibility
    let selectedOption = null; // Holds the selected option
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
  
    function toggleDropdown() {
      isOpen = !isOpen;
    }
  
    function selectOption(option) {
      selectedOption = option;
      isOpen = false;
    }
  </script>
  
  <div class="relative w-64">
    <!-- Dropdown Trigger -->
    <button
    type="button"
      class="w-full flex items-center justify-between px-4 py-2 border rounded-lg bg-white shadow-sm hover:shadow-md z-30"
      on:click={toggleDropdown}
    >
      {#if selectedOption}
        <div class="flex items-center">
          <div class={`rounded-full p-1 flex flex-row items-center ${selectedOption.bgColor}`}>
            <div class={`rounded-full flex items-center justify-center w-3 h-3 ml-3 ${selectedOption.dotColor}`}></div>
            <span class={`font-normal mr-1 ${selectedOption.textColor} ml-3`}>
              {selectedOption.label}
            </span>
          </div>
        </div>
      {:else}
        <span class="text-gray-500">Select an option</span>
      {/if}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-gray-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  
    <!-- Dropdown Menu -->
    {#if isOpen}
      <div
        class="absolute left-0 mt-2 w-full rounded-lg shadow-lg bg-green-100 border z-60 "
        style="z-index: 9999;"
      >
        {#each options as option}
          <div
            class="cursor-pointer px-4 py-1 hover:bg-gray-100 flex items-center justify-center text-center"
            on:click={() => selectOption(option)}
          >
            <div class={`rounded-full p-1 flex flex-row items-center ${option.bgColor}`}>
              <div class={`rounded-full flex items-center justify-center w-3 h-3 ml-3 ${option.dotColor}`}></div>
              <span class={`font-normal mr-1 ${option.textColor} ml-3`}>
                {option.label}
              </span>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
  