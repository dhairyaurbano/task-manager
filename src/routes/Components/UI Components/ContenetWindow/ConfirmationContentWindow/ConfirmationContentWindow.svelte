<script>
    	import {title,subtitle} from "$lib/Appbar/titlehandling";
        import { activemenu } from "$lib/CompanyTab/selectednavigationmenuitem";
	import ButtonComponent from "../../../Forms/FormComponents/Buttons/UIButtons/ButtonComponent.svelte";
    $title = "Create Template";
    $subtitle = "Fill in the details for creating templates.";
    export let lable="New Tempalte is sucessfully created";
</script>

<div class="w-full py-1 border-2 rounded-3xl border-[#D7D6D6] ">
    <div class="flex flex-col justify-center items-center text-center py-3">
        <div class="mt-5">
            <img src="/Checkiconlarge.png", alt="tick mark icon">
        </div>

        <div class="mb-4">
            <span class="text-2xl font-semibold">{lable}</span>
        </div>
        {#if $activemenu===2}
        <div class="m-2">
            <ButtonComponent
        label="Edit Details"
        bordercolor="border-black"
        textcolor="text-gray-500 text-semibold"
        rounded="rounded-lg"
        leadingimg="/editTemplateicon.png"
        leadingalt="edit icon"
        />
        </div>
        {:else if $activemenu===3}
        <div class="flex mt-6">
            <div class="m-2">
                <ButtonComponent
            label="Edit Template"
            bordercolor="border-black"
            textcolor="text-gray-500 text-semibold"
            rounded="rounded-lg"
            leadingimg="/editTemplateicon.png"
            leadingalt="edit icon"
            />
            </div>
            <div class="m-2">
                <ButtonComponent
                label="View Template"
                rounded="rounded-lg"
                bgcolor="bg-black"
                textcolor="text-white"
                leadingimg="/viewtemplateicon.png"
                leadingalt="edit icon"
                />
            </div>
        </div>
        {:else if $activemenu===4}
        <div class="m-2">
            <ButtonComponent
        label="Edit Task and Status"
        bordercolor="border-black"
        textcolor="text-gray-500 text-semibold"
        rounded="rounded-lg"
        leadingimg="/editTemplateicon.png"
        leadingalt="edit icon"
        />
        </div>
        {/if}
    </div>
  </div>