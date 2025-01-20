<script>
	import ButtonComponent from "../../Forms/FormComponents/ButtonComponent.svelte";

    export let title = "App Title";
    export let subtitle = "App Subtitle";
    function backfunction(){
      window.history.back();
      console.log("Back function executed");
    }
  </script>
  
  <div class="flex items-center w-full bg-white shadow p-4 border-b border-gray-300 z-10">
    <!-- <img src="/arrow_back.png" alt="Back Icon" class="w-6 h-6 mr-4" /> -->
     <ButtonComponent leadingimg="/arrow_back.png" bordercolor="border-white"
     hoverbg="bg-grey-300" focusringcolor="focus:ring-gray-300" laggingalt="back button" onClick={backfunction}/> 
    <div class="pl-2">
      <p class="text-black text-lg font-bold">{title}</p>
      <p class="text-gray-500 text-sm">{subtitle}</p>
    </div>
  </div>