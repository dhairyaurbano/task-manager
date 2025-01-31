<script>

	import ButtonComponent from "../Forms/FormComponents/Buttons/UIButtons/ButtonComponent.svelte";
    export let templatelable="Test Template";
    export let templateid=1;
    import { templates,selectedTemplate,templatePopUpOpen } from "$lib/SystemTab/templatePopUp.js";


    function templateSelecteion(){
        console.log("Clicked template id: "+ templateid);
        selectedTemplate.set(templateid);
        templatePopUpOpen.set(false);
    }

</script>
<div class="flex items-center bg-white m-2 p-2 rounded-xl border border-1 border-gray-200">
    <img src="/templateicon.png" alt="Template icon" class="w-11 h-11 " />
    <span class="text-lg mx-3">{templatelable}</span>
    <ButtonComponent
    leadingimg="./grayaddicon.png"
    rounded="rounded-xl"
    bordercolor="border-gray-300"
    type="button"
    onClick={templateSelecteion}
    />
</div>


