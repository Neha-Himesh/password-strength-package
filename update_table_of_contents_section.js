document.addEventListener('DOMContentLoaded', () => {
    // Fetching main sub-menu of the dropdown
    const tableOfContentsMainSection = document.getElementById('about');
    // Fetching all the elements which are submenus of the product dropdown
    if(tableOfContentsMainSection.classList.contains('d-none')){
        tableOfContentsMainSection.classList.remove('d-none');
    }
    const tableOfContentsDocumentationSections = document.querySelectorAll('.table-of-contents-home-page-documentation[data-target]');
    // Fetching main menu of the dropdown
    const tableOfContentsDocumentationList = document.getElementById('table-of-contents-documentation-list');
 
    // Assigning previous element which was supposed to be displayed in the sub-menu as main sub-menu
    let elementHavingPreviousTargetId = tableOfContentsMainSection;

    // On mouse enter event, fetching the target data of the sub-menu element and finding the element with the matching target ID
    tableOfContentsDocumentationSections.forEach(option => {
        option.addEventListener('click', function () {
            const targetIdOfSubSection = this.dataset.target;
            const elementWithRequiredTargetId = document.getElementById(targetIdOfSubSection);
            // Adding 'd-none' class to the previous target element and removing 'd-none' from the required target ID (sub-menu)
            if (elementHavingPreviousTargetId) {
                elementHavingPreviousTargetId.classList.add('d-none');
            }
            // Assigning the required target ID to the previous target ID to save the data for the next hover
            if (elementWithRequiredTargetId) {
                elementWithRequiredTargetId.classList.remove('d-none');
                elementHavingPreviousTargetId = elementWithRequiredTargetId;
            }
        });
    });



//     // When mouse leaves the main menu, remove the 'd-none' class from the main sub-menu
//     tableOfContentsDocumentationList.addEventListener('', function () {
//         tableOfContentsMainSection.classList.remove('d-none');
//         // Adding 'd-none' class to the previous target ID, if it's not the main sub-menu
//         if (elementHavingPreviousTargetId !== tableOfContentsMainSection) {
//             elementHavingPreviousTargetId.classList.add('d-none');
//             elementHavingPreviousTargetId = tableOfContentsMainSection;
//         }
//     });
});