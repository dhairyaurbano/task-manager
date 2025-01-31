<script>
    let searchQuery = "";
  </script>
  
  <div class="flex h-10 items-center bg-gray-100 rounded-lg my-3 px-4 py-2 mx-auto">

    <img src="/search.png" alt="search" class="w-5 h-5"/>
  
    <input 
      type="text" 
      bind:value={searchQuery} 
      placeholder="Search..." 
      class="bg-transparent border-none outline-none w-full text-gray-700"
    />
  </div>
  