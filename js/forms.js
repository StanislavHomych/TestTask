let optionsMedical = ["option1", "option2", "option3", "option4", "option5"];
let optionsInstitution = ["option1", "option2", "option3", "option4", "option5"];
let optionsInquiry = ["option1", "option2", "option3", "option4", "option5"];



let createCustomSelect = (options, placeholder) => {

    //remove old selects
    let selectForms = document.querySelectorAll('select');
    selectForms.forEach((select) => {
        select.style.display = "none";
    });


    let selectMain = document.createElement('div');
    selectMain.classList.add('select__main', "forms__input", 'placeholderSelect');

    let innerValueOfSelect = document.createElement('span');
    innerValueOfSelect.classList.add('innerValue');
    
    selectMain.appendChild(innerValueOfSelect);
    innerValueOfSelect.innerHTML = placeholder;

    //select arrow
    let selectArrow = document.createElement('div');
    selectArrow.classList.add('selectArrowClosed', 'selectArrow');
    selectMain.appendChild(selectArrow);


    //show or hide options
    let showOptions;

    selectMain.addEventListener('click', () => {

        if (showOptions) {
            showOptions = false;
            optionsWrap.style.display = "none";
            selectArrow.classList.remove('selectArrowOpen');
            selectArrow.classList.add('selectArrowClosed');
        } else {
            showOptions = true;
            optionsWrap.style.display = "flex";

            selectArrow.classList.remove('selectArrowClosed');
            selectArrow.classList.add('selectArrowOpen');
        }

    });



    //hide options when you clicked outside of the select
    document.body.addEventListener('click', (e) => {
        if (!selectMain.contains(e.target)) {
            showOptions = false;
            optionsWrap.style.display = "none";

        }
    })

    //create options block

    let optionsWrap = document.createElement('div');
    optionsWrap.classList.add('selectwrapper');
    optionsWrap.style.display = 'none';

    for (let i = 0; i < options.length; i++) {
        let optionElement = document.createElement('div');
        optionElement.innerHTML = options[i];
        optionElement.classList.add('selectitem');


        //hover effect for options
        optionElement.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "#F2F2F2"
            e.target.style.paddingLeft = "10px"
        })
        optionElement.addEventListener('mouseout', (e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.paddingLeft = "0px";

        })


        //add chosen option value to selectMain 
        optionElement.addEventListener('click', (e) => {
            if (selectMain.firstChild.classList.value === 'innerValue') {
                selectMain.removeChild(selectMain.firstChild);
            }
            let newInnerValueOfSelect = document.createElement('span');
            newInnerValueOfSelect.classList.add('innerValue');

            newInnerValueOfSelect.innerHTML = e.target.innerHTML;
            selectMain.insertBefore(newInnerValueOfSelect, selectMain.firstChild);

        })
        optionsWrap.appendChild(optionElement);
    }

    selectMain.appendChild(optionsWrap);

    return selectMain



}



createCustomSelect(optionsInstitution, "Practice / Institution*")

let institutionElement = document.getElementById('institution');
let medicalElement = document.getElementById('medical');
let inquiryElement = document.getElementById('inquiry');


institutionElement.appendChild(createCustomSelect(optionsInstitution, "Practice / Institution*"));
medicalElement.appendChild(createCustomSelect(optionsMedical, "Medical / Profession*"));
inquiryElement.appendChild(createCustomSelect(optionsInquiry, "Type of inquiry*"));