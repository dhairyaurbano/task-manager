<script>
	import ButtonComponent from "./Components/Forms/FormComponents/ButtonComponent.svelte";
	import Tableaddbutton from "./Components/Forms/FormComponents/Tableaddbutton.svelte";
	import TablehoverButton from "./Components/Forms/FormComponents/TablehoverButton.svelte";
	import TaskStatusDropDown from "./Components/UI Components/DropDownMenus/TaskStatusDropDown.svelte";
import PageFrames from "./Components/UI Components/pageFrames.svelte";
	import DeletingTaskPopup from "./Components/UI Components/PopUp/DeletingTaskPopup.svelte";
	import SystemTabTable from "./Components/UI Components/Tables/SystemTabTable.svelte";
	import StatusCell from "./Components/UI Components/Tables/TableComponent/StatusCell.svelte";
	import InProgress from "./Components/UI Components/TaskStatus/InProgress.svelte";
	import No from "./Components/UI Components/TaskStatus/No.svelte";
	import NotApplicable from "./Components/UI Components/TaskStatus/NotApplicable.svelte";
	import Otherstatus from "./Components/UI Components/TaskStatus/Otherstatus.svelte";
	import Yes from "./Components/UI Components/TaskStatus/Yes.svelte";
	import {editable} from "$lib/TaskDetails/testingeditablefunctionality.js";
	editable.set(true);


	function clickfunction(){
		// editable.update((value) => !value);
	editable.set(true);

	}

  </script>

<!-- <Yes/>
<No/>
<NotApplicable/> -->

    <!-- <PageFrames/> -->
<!-- <DeletingTaskPopup/> -->
	<!-- <TablehoverButton/> -->

	<!-- <SystemTabTable/> -->
	<!-- <TaskStatusDropDown/> -->
<!-- <!-- <InProgress/> -->
<!-- <Otherstatus/>  -->

<StatusCell />

<ButtonComponent
      bgcolor="bg-white"
      textcolor="text-sky-500"
      bordercolor="bg-white"
      focusringcolor="focus:ring-sky-400"
      hoverbg="hover:bg-sky-50"
      rounded="rounded-full"
      leadingimg="/solar_arrow-right-broken.png"
      leadingalt="Next Icon"
      laggingimg=""
      laggingalt=""
      type="button"
      onClick={clickfunction}
  />
   
  