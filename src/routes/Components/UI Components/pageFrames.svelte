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
	// let appbartitle="Add Company Details";
	// let appbarsubtitle="Add Company Details to create company account";
	import {title,subtitle} from "$lib/Appbar/titlehandling";

	$: {
		switch ($activemenu) {
			case 0:
				$title = "Dashboard";
				$subtitle = "Overview of your system's data and insights.";
				break;
			case 1:
				$title = "Users and Groups";
				$subtitle = "Add, update, and manage user accounts.";
				break;
			case 2:
				$title = "Companies";
				$subtitle = "Manage company details and accounts.";
				break;
			case 3:
				$title = "Create Template";
				$subtitle = "Fill in the details for creating templates.";
				break;
			case 4:
				$title = "System Configuration";
				$subtitle = "Manage system-level settings and configurations.";
				break;
			case 5:
				$title = "Notifications";
				$subtitle = "View and manage system notifications.";
				break;
			default:
				$title = "Settings";
				$subtitle = "Adjust system and user preferences.";
		}
	}
</script>
<div class="flex">
    <SideNavigationbar/>
    <div class="bg-white flex-grow">
        <div class="flex flex-grow">
            <Appbar title="{$title}" subtitle="{$subtitle}"/>
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
