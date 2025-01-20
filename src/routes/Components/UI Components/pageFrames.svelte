<script>
	import Appbar from "./AppBar/AppBar.svelte";
	import ContentWindow from "./ContentWindow.svelte";
import SideNavigationbar from "./SideNavigationBar/SideNavigationbar.svelte";

</script>
<div class="flex">
    <SideNavigationbar/>
    <div>
        <Appbar title="Add Company Details" subtitle="Add Company Details to create company account"/>
        <ContentWindow/>
    </div>
    
</div>
