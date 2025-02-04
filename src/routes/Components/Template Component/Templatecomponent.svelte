<script>
	import { tableData, assignee } from '$lib/Templates/addingtemplate.js';
	import ButtonComponent from '../Forms/FormComponents/Buttons/UIButtons/ButtonComponent.svelte';
	export let templatelable = 'Test Template';
	export let templateid = 1;

	import { templates, selectedTemplate, templatePopUpOpen } from '$lib/SystemTab/templatePopUp.js';

	function templateSelecteion() {
		console.log('Clicked template id: ' + templateid);

		selectedTemplate.set(templateid);
		let newTableData = [];
    let newAssigneeData = [];
		if ($selectedTemplate === 1) {
			newTableData = [
				['SL NO.', 'Task', 'Status 1'],
				[1, 'New Task 1', 'Pending'],
				[2, 'New Task 2', 'Pending'],
				[3, 'New Task 3', 'Pending'],
				[4, 'New Task 4', 'Pending'],
				[5, 'New Task 5', 'In Progress'],
				[6, 'New Task 6', 'Pending'],
				[7, 'New Task 6', 'Pending']
			];
			
		} else if ($selectedTemplate === 2) {
			newTableData = [
				['SL NO.', 'Task', 'Status 1', 'Status 2'],
				[1, 'New Task 1', 'Pending', 'Pending'],
				[2, 'New Task 2', 'Pending', 'Pending'],
				[3, 'New Task 3', 'Pending', 'Pending'],
				[4, 'New Task 4', 'Pending', 'Pending'],
				[5, 'New Task 5', 'In Progress', 'Pending'],
				[6, 'New Task 6', 'Pending', 'Pending'],
				[7, 'Working on this Work', 'Pending', 'Pending']

			];
			
		} else if ($selectedTemplate === 3) {
			newTableData = [
				['SL NO.', 'Task', 'Status 1', 'Status 2', 'Status 3'],
				[1, 'New Task 1', 'Pending', 'Pending', 'Pending'],
				[2, 'New Task 2', 'Pending', 'Pending', 'Pending'],
				[3, 'New Task 3', 'Pending', 'Pending', 'Pending'],
				[4, 'New Task 4', 'Pending', 'Pending', 'Pending'],
				[5, 'New Task 5', 'In Progress', 'Pending', 'Pending'],
				[6, 'New Task 6', 'Pending', 'Pending', 'Pending']
			];
			
		} else if ($selectedTemplate === 4) {
			newTableData = [
				['SL NO.', 'Task', 'Status 1', 'Status 2', 'Status 3', 'Status 4'],
				[1, 'New Task 1', 'Pending', 'Pending', 'Pending', 'Pending'],
				[2, 'New Task 2', 'Pending', 'Pending', 'Pending', 'Pending'],
				[3, 'New Task 3', 'Pending', 'Pending', 'Pending', 'Pending'],
				[4, 'New Task 4', 'Pending', 'Pending', 'Pending', 'Pending'],
				[5, 'New Task 5', 'In Progress', 'Pending', 'Pending', 'Pending'],
				[6, 'New Task 6', 'Pending', 'Pending', 'Pending', 'Pending']
			];
			
		} else {
			newTableData = [
				['SL NO.', 'Task', 'Status 1', 'Status 2', 'Status 3', 'Status 4', 'Status 5'],
				[1, 'New Task 1', 'Pending', 'Pending', 'Pending', 'Pending', 'Pending'],
				[2, 'New Task 2', 'Pending', 'Pending', 'Pending', 'Pending', 'Pending'],
				[3, 'New Task 3', 'Pending', 'Pending', 'Pending', 'Pending', 'Pending'],
				[4, 'New Task 4', 'Pending', 'Pending', 'Pending', 'Pending', 'Pending'],
				[5, 'New Task 5', 'In Progress', 'Pending', 'Pending', 'Pending', 'Pending'],
				[6, 'New Task 6', 'Pending', 'Pending', 'Pending', 'Pending', 'Pending']
			];
			
		}
		newAssigneeData = Array(newTableData.length - 1).fill(['Not assigned', '']);

    tableData.set(newTableData);
    assignee.set(newAssigneeData);
		templatePopUpOpen.set(false);

	}
</script>

<div class="border-1 m-2 flex items-center rounded-xl border border-gray-200  p-2">
	<img src="/templateicon.png" alt="Template icon" class="h-11 w-11" />
	<span class="mx-3 text-lg">{templatelable}</span>
	<ButtonComponent
		leadingimg="./grayaddicon.png"
		rounded="rounded-xl"
		bordercolor="border-gray-300"
		type="submit "
		onClick={templateSelecteion}
	/>
</div>
