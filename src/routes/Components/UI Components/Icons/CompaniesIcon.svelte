<script>
    export let size = 6; // Set the default size
    import { activemenu } from "$lib/CompanyTab/selectednavigationmenuitem";
    let colortint="";
    $: colortint = $activemenu === 2 ? "text-sky-500" : "";
</script>
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" 
  fill="currentColor" 
  class="size-6 no-outline {colortint}"
>
  <path 
    d="M22 11h-3V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v5H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1zm-9 1v9H3V9h10zm1-5H7V3h10v8h-2V8a1 1 0 0 0-1-1zm7 14h-2v-2a1 1 0 0 0-2 0v2h-2v-8h6zM4 10h2v2H4zm4 0h4v2H8zm-4 4h2v2H4zm4 0h4v2H8zm-4 4h2v2H4zm4 0h4v2H8z"
  />
</svg>