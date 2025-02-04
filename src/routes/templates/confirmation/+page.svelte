<script>
	import Templatecomponent from "../../Components/Template Component/Templatecomponent.svelte";
	import AppBar from "../../Components/UI Components/AppBar/AppBar.svelte";
	import TemplateConfirmationContentWindow from "../../Components/UI Components/ContenetWindow/ConfirmationContentWindow/ConfirmationContentWindow.svelte";
 


	import SideNavigationbar from "../../Components/UI Components/SideNavigationBar/SideNavigationbar.svelte";
	import {title,subtitle} from "$lib/Appbar/titlehandling";
</script>
<div class="flex">
    <SideNavigationbar/>
    <div class="bg-white flex-grow">
        <div class="flex flex-grow">
            <AppBar title="{$title}" subtitle="{$subtitle}"/>
        </div>
<div class="p-4">
            <TemplateConfirmationContentWindow/>
</div>   
    </div>
</div>