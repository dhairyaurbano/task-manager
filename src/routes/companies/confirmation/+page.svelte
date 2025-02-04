<script>

	import {title,subtitle} from "$lib/Appbar/titlehandling";
	import AppBar from "../../Components/UI Components/AppBar/AppBar.svelte";
	import ConfirmationContentWindow from "../../Components/UI Components/ContenetWindow/ConfirmationContentWindow/ConfirmationContentWindow.svelte";
	import SideNavigationbar from "../../Components/UI Components/SideNavigationBar/SideNavigationbar.svelte";
</script>
<div class="flex">
    <SideNavigationbar/>
    <div class="bg-white flex-grow">
        <div class="flex flex-grow">
            <AppBar title="{$title}" subtitle="{$subtitle}"/>
        </div>
<div class="p-4">
            <ConfirmationContentWindow lable="Company Details is successfully Updated"/>
</div>   
    </div>
</div>