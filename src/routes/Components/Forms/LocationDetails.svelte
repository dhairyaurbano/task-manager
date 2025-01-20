<script>
	import TextAreaView from "./FormComponents/TextAreaView.svelte";
	import TextView from "./FormComponents/TextView.svelte";

</script>
<div class="p-6 min-w-96 bg-[#00000015] rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold text-gray-700 text-start mb-6">Location</h2>
    <form action="#" method="POST">
      <TextView
      id="companyLocation" 
      label="Company Location" 
      name="companyLocation" 
      placeholder="Location 1" 
      inputtype="text" 
      required={true} 
    />
    
    <TextView 
      id="zipCode" 
      label="ZIP Code" 
      name="zipCode" 
      placeholder="123456" 
      inputtype="number" 
      required={true} 
    />
    
    <TextView 
      id="gstNumber" 
      label="Bill to" 
      name="billTo" 
      placeholder="abcdef" 
      inputtype="text" 
      required={true} 
    />



      <!-- Description -->
      <!-- <div class="mb-3">
          <label for="description" class="block text-sm font-medium text-gray-600 mb-1">Description</label>
          <textarea id="description" name="description" rows="1" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter description (optional)"></textarea>
        </div> -->

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
        <!-- <CircularBlock text="Hello!" /> -->
        
    </form>
</div>

<style>
  /* Optional styles for active link or hover effects */
  a:hover {
    transition: all 0.3s ease;
  }
</style>