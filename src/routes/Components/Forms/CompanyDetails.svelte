<script>
  import TextAreaView from "./FormComponents/TextAreaView.svelte";
  import TextView from "./FormComponents/TextView.svelte";
</script>

<div class="p-6 w-96 bg-[#00000015] rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold text-gray-700 text-start mb-6">Company Details</h2>
    <form action="#" method="POST">
      <!-- Company Name -->
      <TextView 
        id="companyName" 
        label="Company Name" 
        name="companyName" 
        placeholder="Enter company name" 
        inputtype="text" 
        required={true} 
      />

      <!-- Company Website -->
      <TextView 
        id="companyWebsite" 
        label="Company Website" 
        name="companyWebsite" 
        placeholder="Enter company website" 
        inputtype="url" 
        required={true} 
      />

      <!-- GST Number -->
      <TextView 
        id="gstNumber" 
        label="GST Number" 
        name="gstNumber" 
        placeholder="Enter GST number" 
        inputtype="number" 
        required={true} 
      />

      <!-- Description -->
      <TextAreaView 
        id="description" 
        label="Description" 
        name="description" 
        placeholder="Enter description (optional)" 
      />

      <!-- Save Button -->
      <div class="text-center">
        <button type="submit" class="bg-white text-sky-500 border-2 border-sky-500 py-2 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
          <img src="/Save.png" alt="Save Icon" class="w-5 h-5" />
          <span>Save Details</span>
        </button>
      </div>
    </form>
</div>

<style>
  /* Optional styles for active link or hover effects */
  a:hover {
    transition: all 0.3s ease;
  }
</style>
