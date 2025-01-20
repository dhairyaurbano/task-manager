<!-- SideNavigation.svelte -->
<script>
	import HomeIcon from '../Icons/HomeIcon.svelte';
    import SideNavigationMenuItem from './SideNavigationMenuItem.svelte';
    import ContactIcon from '../Icons/ContactIcon.svelte';
	import DashboardIcon from '../Icons/DashboardIcon.svelte';
	import UserandGroup from '../Icons/UserandGroupIcon.svelte';
	import UserandGroupIcon from '../Icons/UserandGroupIcon.svelte';
	import SettingsIcon from '../Icons/SettingsIcon.svelte';
	import NotificationsIcon from '../Icons/NotificationsIcon.svelte';
	import SystemIcon from '../Icons/SystemIcon.svelte';
	import TemplatesIcon from '../Icons/TemplatesIcon.svelte';
	import CompaniesIcon from '../Icons/CompaniesIcon.svelte';
	import CompanyLogo from '../Icons/companyLogo.svelte';
	import SearchBar from './searchBar.svelte';
    const menuItems = [
    
      { href: '/dashboard', icon: DashboardIcon, label: 'Dashboard'},
      { href: '/userandgroups', icon: UserandGroupIcon, label: 'User and Group' },
      { href: '/companies', icon: CompaniesIcon, label: 'Companies' },
      { href: '/templates', icon: TemplatesIcon, label: 'Templates' },
      { href: '/system', icon: SystemIcon, label: 'System' },
      { href: '/notifications', icon: NotificationsIcon, label: 'Notifications' },
      { href: '/settings', icon: SettingsIcon, label: 'Settings' },
    ];
  </script>
  <div>
    <nav class="lg:w-64 w-48 bg-[#FBFBFB] text-black h-full fixed  pr-3 flex flex-col justify-between">
       
      <div class="flex flex-col items-center space pt-3">
        <div class="flex items-center space gap-x-3 pt-3">
          <img src="/logo.png" alt="Logo" class="w-10 h-10"/>
          <p class="text-lg font-semibold text-left">
            <span class="text-red-500 mr-1">Timesheet</span> 
            <br>
            <span class="text-sky-400 mr-1">Management</span>
          </p>
        </div>
        <SearchBar/> 

      <ul class="space-y-1 mt-2">
        {#each menuItems as item}
          <li>
            <SideNavigationMenuItem href={item.href} icon={item.icon} label={item.label} labelclass={item.labelclass} />
          </li>
        {/each}
        
      </ul>
      </div>


        <div class="pb-6 ">
          <a 
            href="/logout" 
            class="flex items-center lg:w-64 w-48 bg-[#fbfbfb] w-auto p-2  hover:text-sky-400">
            <img src="/logout.png" alt="Logout Icon" class="w-6 h-6 ml-4" />
            <p class="text-sm font-medium ml-2">Logout</p>
          </a>
        </div>

      </nav>
  </div>

  