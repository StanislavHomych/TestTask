// console.log(document.forms[2].children[0].nodeName);

let addCustomSelect = () => {


    //create new custom select
    let customSelectCreate = (optionValues) => {
        let customSelect = document.createElement('select');

        for (let i = 0; i < optionValues.length; i++) {
            let selectChild = document.createElement('option');
            selectChild.innerHTML = optionValues[i];

            customSelect.appendChild(selectChild);
        }
        return customSelect;

    }

    //remove old Selects
    let selectForms = document.querySelectorAll('select');
    selectForms.forEach((select) => { select.parentNode.removeChild(select) });

    

    let medicalSelect = customSelectCreate(["option1", "option2", "option3", "option4", "option5"]);
    let institutionSelect = customSelectCreate(["option1", "option2", "option3", "option4", "option5"]);

    console.log(medicalSelect);
    console.log(institutionSelect)


}

addCustomSelect();