<script>
    import TextAreaView from "./FormComponents/Form UIComponents/TextAreaView.svelte";
    import TextView from "./FormComponents/Form UIComponents/TextView.svelte";
    import {activeTab, CompanyDetailsSystemTab,steps} from '../../../lib/SystemTab/formdatahandling.js'
      import ButtonComponent from "./FormComponents/Buttons/UIButtons/ButtonComponent.svelte";
  
    updateSteps(0);
    function updateSteps(index) {
      steps.update((allSteps) =>
        allSteps.map((step, i) => ({
          ...step,
          selected: i <= index, // Set selected to true only for the clicked step
        }))
      );
    }

     
    function savedetials() {
      console.log("We have completed the company details tab , Now location detail tab");
      $activeTab = 1;
      updateSteps(1);
    }
    function goback(){
        window.history.back();
        console.log("Back button clicked");
    }

    const CompanyNameoptions = [
        { value: "company1", label: "Company 1" },
        { value: "company2", label: "Company 2" },
        { value: "company3", label: "COmpany 3" }
    ];

    const CompanyLoationoptions = [
        { value: "bandlore", label: "Banglore" },
        { value: "kolkatta", label: "Kolkatta" },
        { value: "chennai", label: "Chennai" }
    ];

    const CompanyPONumberoptions = [
        { value: "12345", label: "12345" },
        { value: "23456", label: "23456" },
        { value: "34567", label: "34567" }
    ];
  </script>
  
  <div class="p-6 max-w-full bg-[#00000015] rounded-lg shadow-md ">
      <h2 class="text-2xl font-semibold text-gray-700 text-start mb-6">Company Details</h2>
      <form action="" method="POST">
        <!-- Company Name -->
        <div class="mb-3">
            <label for="dropdown" class="block text-sm font-medium text-gray-600 ">
                System Name
                <span class="text-red-500">*</span>
            </label>
            <select id="dropdown" bind:value={$CompanyDetailsSystemTab.companyName} class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required>
                <option value="" disabled selected>Select Company</option>
                {#each CompanyNameoptions as option}
                    <option value={option.value}>{option.label}</option>
                {/each}
            </select>
        </div>
  
        <!-- Company Location -->

        <div class="mb-3">
            <label for="dropdown" class="block text-sm font-medium text-gray-600 ">
                Company Location
                <span class="text-red-500">*</span>
            </label>
            <select id="dropdown" bind:value={$CompanyDetailsSystemTab.companylocation} class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required>
                <option value="" disabled selected>Select Location</option>
                {#each CompanyLoationoptions as option}
                    <option value={option.value}>{option.label}</option>
                {/each}
            </select>
        </div>
  
        <!-- GST Number -->

        <div class="mb-3">
            <label for="dropdown" class="block text-sm font-medium text-gray-600 ">
                PO Number
                <span class="text-red-500">*</span>
            </label>
            <select id="dropdown" bind:value={$CompanyDetailsSystemTab.PONumber} class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" required>
                <option value="" disabled selected>Select PO Number</option>
                {#each CompanyPONumberoptions as option}
                    <option value={option.value}>{option.label}</option>
                {/each}
            </select>
        </div>
  
        <!-- Description -->
        <TextAreaView 
          id="description" 
          label="Description" 
          name="description" 
          placeholder="Description" 
          bind:value={$CompanyDetailsSystemTab.companydescription}
        />
  
        <!-- Save Button -->
        <div class="flex  flex-row justify-start items-center">
            <div class="mx-2">
                <ButtonComponent
      bgcolor="bg-white"
      textcolor="text-sky-500"
      bordercolor="bg-white"
      focusringcolor="focus:ring-sky-400"
      hoverbg="hover:bg-sky-50"
      rounded="rounded-full"
      leadingimg="/solar_arrow-right-broken.png"
      leadingalt="Next Icon"
      laggingimg=""
      laggingalt=""
      type="button"
      onClick={goback}
  />
            </div>
            <div class="mx-2">
                <ButtonComponent
                label="Save & Next"
                bgcolor="bg-white"
                textcolor="text-sky-500"
                bordercolor="border-sky-500"
                focusringcolor="focus:ring-sky-400"
                hoverbg="hover:bg-sky-50"
                rounded="rounded-full"
                leadingimg="/solar_arrow-left-broken.png"
                leadingalt="Next Icon"
                laggingimg=""
                laggingalt=""
                type="button"
                onClick={savedetials}
            />
            </div>
            
        </div>
      </form>
  </div>
  
  <style>
    /* Optional styles for active link or hover effects */
    a:hover {
      transition: all 0.3s ease;
    }
  </style>
  