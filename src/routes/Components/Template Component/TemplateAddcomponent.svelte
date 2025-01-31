<script>

	import ButtonComponent from "../Forms/FormComponents/Buttons/UIButtons/ButtonComponent.svelte";
    import { templates } from "$lib/SystemTab/templatePopUp.js";

    function addTemplate() {
    console.log("Add template called");
    templates.update(list => {
        const newId = list.length + 1;
        return [...list, { id: newId, type: "template" }];
    });
}

</script>
<div class="flex items-center bg-white m-2 p-2 rounded-xl border border-1 border-gray-200">
    <div class="mx-auto my-auto">
        <ButtonComponent
    leadingimg="./grayaddicon.png"
    rounded="rounded-xl"
    bordercolor="border-gray-300"
    type="button"
    onClick={addTemplate}
    />
    </div>
</div>


