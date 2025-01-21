<!-- <script>
    import { activemenu } from "$lib/SystemTab/selectednavigationmenuitem";
	import AppBar from "../Components/UI Components/AppBar/AppBar.svelte";
	import ContentWindow from "../Components/UI Components/ContenetWindow/CompaniesContentWindow.svelte";
	import SideNavigationbar from "../Components/UI Components/SideNavigationBar/SideNavigationbar.svelte";
    $activemenu=1;
</script>
<div class="flex">
    <SideNavigationbar/>
    <div class="bg-white flex-grow">
        <div class="flex flex-grow">
            <AppBar title="Add Company Details" subtitle="Add Company Details to create company account"/>
        </div>
<div class="p-4">
    <ContentWindow/>
</div>   
    </div>
</div> -->

<script>
	import PageFrames from "../Components/UI Components/pageFrames.svelte";
    import { activemenu } from "$lib/CompanyTab/selectednavigationmenuitem";
      
      $activemenu=1;
</script>

<PageFrames/>
