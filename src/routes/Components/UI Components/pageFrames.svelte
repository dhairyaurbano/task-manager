<script>
	import Appbar from "./AppBar/AppBar.svelte";
	import CompaniesContentWindow from "./ContenetWindow/CompaniesContentWindow.svelte";
import SideNavigationbar from "./SideNavigationBar/SideNavigationbar.svelte";
import { activemenu } from "$lib/CompanyTab/selectednavigationmenuitem";
	import UserandGroupIcon from "./Icons/UserandGroupIcon.svelte";
	import DashbaordContentWindow from "./ContenetWindow/DashbaordContentWindow.svelte";
	import UsersContentWindow from "./ContenetWindow/UsersContentWindow.svelte";
	import TemplatesContenetWindow from "./ContenetWindow/TemplatesContenetWindow.svelte";
	import SystemContentWindow from "./ContenetWindow/SystemContentWindow.svelte";
	import NotificationsContenetWindow from "./ContenetWindow/NotificationsContenetWindow.svelte";
	import SettingsContenetWindow from "./ContenetWindow/SettingsContenetWindow.svelte";

</script>
<div class="flex">
    <SideNavigationbar/>
    <div class="bg-white flex-grow">
        <div class="flex flex-grow">
            <Appbar title="Add Company Details" subtitle="Add Company Details to create company account"/>
        </div>
<div class="p-4">
            {#if $activemenu === 0}
				<DashbaordContentWindow />
			{:else if $activemenu === 1}
				<UsersContentWindow />
			{:else if $activemenu === 2}
				<CompaniesContentWindow />
			{:else if $activemenu === 3}
				<TemplatesContenetWindow />
			{:else if $activemenu === 4}
				<SystemContentWindow />
			{:else if $activemenu === 5}
				<NotificationsContenetWindow />
			{:else}
				<SettingsContenetWindow/>
			{/if}
</div>   
    </div>
</div>
