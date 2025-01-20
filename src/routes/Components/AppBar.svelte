<script>
    export let title = "App Title";
    export let subtitle = "App Subtitle";
  </script>
  
  <div class="flex items-center w-full bg-white shadow p-4 border-b border-gray-300 z-10">
    <img src="/back.png" alt="Back Icon" class="w-6 h-6 mr-4" />
    <div>
      <p class="text-black text-lg font-bold">{title}</p>
      <p class="text-gray-500 text-sm">{subtitle}</p>
    </div>
  </div>