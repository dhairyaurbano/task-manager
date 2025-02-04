<script>


export let tableData=[[]];
    export let assigneeData=[[]];
    export let role="addtask";
    export let onClickHandler



    export let onClick = () => {

        if (role === "addstatus") {
            // Ensure tableData is reactive
            tableData = [...tableData];

            // Generate new column name dynamically
            const newColumnName = 'Status ' + (tableData[0].length - 1);
            tableData[0] = [...tableData[0], newColumnName];

            for (let i = 1; i < tableData.length; i++) {
                tableData[i] = [...tableData[i], "Pending"];
            }
        }
        else if(role=="addtask"){
            // Create a new row with default values
            const newRow = [
                tableData.length,  // Assign new row number
                "New Task",
                "Pending"
            ];

            // Ensure all new columns are initialized with "Pending"
            const numberOfColumns = tableData[0].length;
            for (let i = newRow.length; i < numberOfColumns; i++) {
                newRow.push("Pending");
            }

            // Update tableData reactively
            tableData = [...tableData, newRow];

            // Update assigneeData reactively
            assigneeData = [...assigneeData, ["Not assigned Ho gaya", ""]];
        }
    }; 

</script>

<div class="text-center">
    <button
        type="button"
        class="bg-gray-200 focus:focus-gray-300 rounded-md flex items-center justify-center gap-2"
        on:click={onClick}
    >
        <img src="/add.png" alt="add icon" class="w-5 h-5" />
    </button>
</div>
