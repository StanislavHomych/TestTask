let medicalSelectOptions = ["option1", "option2", "option3", "option4", "option5"];
let institutionSelectOptions = ["option1", "option2", "option3", "option4", "option5"];




let addCustomSelect = (medicalOptions, institutionOptions) => {


    //create new custom select
    let customSelectCreate = (optionValues) => {

        let selectWrapper = document.createElement('div');
        selectWrapper.classList.add('selectwrapper');

        let isOptionClicked = false;

        for (let i = 0; i < optionValues.length; i++) {
            let selectChild = document.createElement('div');
            selectChild.classList.add('selectitem');
            selectChild.innerHTML = optionValues[i];
            selectChild.addEventListener('mouseover', (e)=>{
                e.target.style.backgroundColor = "#F2F2F2"
                e.target.style.paddingLeft = "5px"
            })
            selectChild.addEventListener('mouseout', (e)=>{
                e.target.style.backgroundColor = "white"
                e.target.style.paddingLeft = "0"

            })
            selectChild.addEventListener('click', () => {
                if(isOptionClicked){
                    isOptionClicked = false
                }else{
                    isOptionClicked = true
                }
                if (isOptionClicked) { selectWrapper.style.display = 'none' }
            })

            selectWrapper.appendChild(selectChild);



        }

        return selectWrapper
    }

    let medicalSelect = customSelectCreate(medicalOptions);
    let institutionSelect = customSelectCreate(institutionOptions);

    medicalSelect.classList.add("forms__input", "forms__input-institution");
    institutionSelect.classList.add("forms__input", "forms__input-medical");

    //remove old Selects
    let selectForms = document.querySelectorAll('select');
    selectForms.forEach((select) => {
        select.style.display = "none";
    });

    let institutionElement = document.getElementById('institution');
    let medicalElement = document.getElementById('medical');

    institutionElement.appendChild(institutionSelect);
    medicalElement.appendChild(medicalSelect);





  


}

addCustomSelect(medicalSelectOptions, institutionSelectOptions);

