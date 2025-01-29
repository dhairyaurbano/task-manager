<script>
    import TextAreaView from "../../Forms/FormComponents/Form UIComponents/TextAreaView.svelte";
    import TextView from "../../Forms/FormComponents/Form UIComponents/TextView.svelte";
    import { taskDetails,isOpen,tableData} from "$lib/TaskDetails/addtaskdatahandling.js";




    import { isEditTaskPopUpOpen} from "$lib/TaskDetails/openeditTaskPopUp.js";

    import ButtonComponent from "../../Forms/FormComponents/Buttons/UIButtons/ButtonComponent.svelte";
	import Pending from "../TaskStatus/Pending.svelte";
	import Applicable from "../TaskStatus/Applicable.svelte";
	import NotApplicable from "../TaskStatus/NotApplicable.svelte";
	import Yes from "../TaskStatus/Yes.svelte";
	import No from "../TaskStatus/No.svelte";
	import InProgress from "../TaskStatus/InProgress.svelte";
	import Otherstatus from "../TaskStatus/Otherstatus.svelte";
	import TaskStatusDropDown from "../DropDownMenus/TaskStatusDropDown.svelte";
  // import { getFilteredWords, insertWord, insertMultipleWords,createTrie } from '$lib/Logic/autoSuggestion.js';
  // import { writable } from 'svelte/store';
  // const filteredWords = writable([]);
  // let searchQuery = "";
  // let selectedPerson = "";


  // const dictionary = [
  //   "dhairya", "dhyey", "aman", "amiab", "rhekha", "jaya",
  //   "sushma", "naman", "pankaj", "dharmesh", "dhavan"
  // ];
  // const trie = createTrie(dictionary);

  // function filterWords() {
  //   const results = trie.search(searchQuery);
  //   filteredWords.set(results);
  // }

  // function selectPerson(name) {
  //   selectedPerson = name;
  //   searchQuery = name; // Update the input field with the selected name
  //   filteredWords.set([]); // Clear the dropdown menu
  // }



  // import { writable } from 'svelte/store';

  // export const filteredWords = writable([]);
  // let selectedPerson = ""; // Store the selected person's name

  // const dictionary = [
  //   "dhairya", "dhyey", "aman", "amiab", "rhekha", "jaya",
  //   "sushma", "naman", "pankaj", "dharmesh", "dhavan"
  // ];

  // class TrieNode {
  //   constructor() {
  //     this.children = {};
  //     this.isEnd = false;
  //   }
  // }

  // class Trie {
  //   constructor() {
  //     this.root = new TrieNode();
  //   }

  //   insert(word) {
  //     let node = this.root;
  //     for (const char of word) {
  //       if (!node.children[char]) {
  //         node.children[char] = new TrieNode();
  //       }
  //       node = node.children[char];
  //     }
  //     node.isEnd = true;
  //   }

  //   dfs(node, prefix, results) {
  //     if (node.isEnd) results.push(prefix);

  //     for (const char in node.children) {
  //       this.dfs(node.children[char], prefix + char, results);
  //     }
  //   }

  //   search(prefix) {
  //     let node = this.root;
  //     for (const char of prefix) {
  //       if (!node.children[char]) return [];
  //       node = node.children[char];
  //     }
  //     const results = [];
  //     this.dfs(node, prefix, results);
  //     return results;
  //   }
  // }

  // const trie = new Trie();
  // dictionary.forEach(word => trie.insert(word));

  // let searchQuery = "";

  // function filterWords() {
  //   const results = trie.search(searchQuery);
  //   filteredWords.set(results);
  // }

  // function selectPerson(name) {
  //   selectedPerson = name;
  //   searchQuery = name; // Update the input field with the selected name
  //   filteredWords.set([]); // Clear the dropdown menu
  // }
  


    let Statuswidget=NotApplicable;

    function getRelevantWidget(){
        if($taskDetails.statusoptions === "yes"){
            // Statuswidget= Yes;
            Statuswidget=TaskStatusDropDown;
        } else if($taskDetails.statusoptions === "no"){
            Statuswidget=   TaskStatusDropDown;
        } else if($taskDetails.statusoptions === "notapplicable"){
            Statuswidget= TaskStatusDropDown;
        }
        else if($taskDetails.statusoptions === "inprogress"){
            Statuswidget= TaskStatusDropDown;
        }
        else if($taskDetails.statusoptions === "Otherstatus"){
            Statuswidget= TaskStatusDropDown;
        } else {
            Statuswidget= TaskStatusDropDown;
        }
    }
    
  
    function toggleSystemPanel() {
      $isEditTaskPopUpOpen = false; 
      console.log("System panel closed");
      console.log($isEditTaskPopUpOpen);
    }
  
    function saveallUpdates() {
        getRelevantWidget();
      console.log("Save all details button clicked");
      console.log("Task name: "+$taskDetails.taskname);
      console.log("Task desc: "+$taskDetails.taskdesc);
      console.log("Status Option: "+$taskDetails.statusoptions);

      const newRow = [
            $tableData.length, // SL NO.
            $taskDetails.taskname, // Task Name
            Statuswidget // Status (depending on taskDetails.statusoptions)
        ];
        const numberOfColumns = $tableData[0].length;
        for (let i = newRow.length; i < numberOfColumns;i++) {
            newRow.push(TaskStatusDropDown); 
        }
        tableData.update(data => {
            data.push(newRow);
            return data;
        });

      toggleSystemPanel();
    }
  
    const taskoptions = [
      { value: "dhiraj", label: "Dhirya" },
      { value: "jatin", label: "Jatin" },
      { value: "rohan", label: "Rohan" },
      { value: "mohan", label: "Mohan" },
      { value: "sohan", label: "Rohan" },
    ];
  </script>
  

  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <!-- Modal Content -->
    <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
      <!-- Header -->
      <div class="flex flex-row justify-between items-center">
        <p class="text-2xl font-semibold text-gray-700">Edit Task</p>
        <button
          type="button"
          class="py-2 px-3 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2"
          on:click={toggleSystemPanel}
        >
          <img src="/close.png" alt="close icon" class="w-5 h-5" />
        </button>
      </div>
  
      <!-- Divider -->
      <div class="w-full border-b-2 border-gray-300 mt-4 mb-4"></div>
  
      <!-- Form Content -->
      <div class="space-y-4 ">
        <div class="flex flex-row gap-4">
            <div class="flex-1">
              <TextView
                id="billto"
                label="Task Name"
                name="taskname"
                placeholder="Enter task name"
                inputtype="text"
                required={true}
                bind:value={$taskDetails.taskname}
              />
            </div>
            
            <div class="flex-1">
              <TextAreaView
                id="description"
                label="Description"
                name="description"
                placeholder="Enter description (optional)"
                bind:value={$taskDetails.taskdesc}
              />
            </div>
          </div>
        
  
        <!-- <div>
          <label for="dropdown" class="block text-sm font-medium text-gray-600">
            Assign to
            <span class="text-red-500">*</span>
          </label>
          <select
            id="dropdown"
            bind:value={$taskDetails.statusoptions}
            class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="" disabled selected>Select Status</option>
            {#each taskoptions as option}
              <option value={option.value}>{option.label}</option>
            {/each}
          </select>
        </div> -->

        <!-- Here there was a pop up which I have removed as far -->

        



      </div>




  
      <!-- Footer -->
      <div class="flex justify-end mt-6">
        <ButtonComponent
          label="Save All Updates"
          bgcolor="bg-blue-700"
          textcolor="text-white"
          bordercolor=""
          focusringcolor="focus:ring-blue-300"
          hoverbg=""
          rounded="rounded-full"
          laggingimg="/addtaskrightarrow.png"
          laggingalt="Save and Updates"
          type="button"
          onClick={saveallUpdates}
        />
      </div>
    </div>
  </div>

  