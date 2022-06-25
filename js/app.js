

//declare the global value
const groupOfSection = document.getElementsByTagName('section');//declare a variable to put all of section in it to use this in the next steps
const groupOfNav = document.getElementById('navbar__list');// declare a variable to put the main navbar in it to use this in the next steps




// create function of  build the nav
function buildNav(){
    for(let section of groupOfSection){
        const sectionID = section.id; //create variable to put the id of the section in it
        const sectionDataNav = section.getAttribute('data-nav');//create variable to put and specify the name of the section in it
        let groupOfItems = document.createElement('li');//create (li) to put the sections 
       groupOfItems.innerHTML = `<li> <a class="menu__link" data-nav="${sectionID}"> ${sectionDataNav} </a> </li>`;
       groupOfNav.appendChild(groupOfItems);//Put the li as child in the navbar 
          
    } 
}
//Call the function assigned to build the navigation
buildNav();




// Add class 'active' to section when near top of viewport
function activateSection(){
    const elementsOfNav = document.getElementsByClassName('menu__link')// declare global variable To consult on all the element that is known by the class that is known by the menu-link 
    for(let section of groupOfSection){ //Make a for loop to go to each section to make it active

        //If the distance difference between the section and the top is less than or equal to 150 and greater than -250 or equal to it.
        
        // then it is when a screen scroll is made and the user reaches a specific section for activation
        if(section.getBoundingClientRect().top <= 150 && section.getBoundingClientRect().top >=-450)
        {
            section.classList.add('your-active-class');//activation of section
            section.classList.add('menu__link');//Putting some CSS attributes on the section after activation 
            for(item of elementsOfNav){ ////Make a for loop to go to each item in navbar to make it active
               //When the user runs a scrolling screen and reaches a certain section, he must show some Css attributes on it if the name of the data contained in the data-nav is equal to the id of the section 
                if(item.getAttribute('data-nav') == section.getAttribute('id') ){
                    item.classList.add('active_item');
                }
            }


        }else //if it didn't happen and If the condition is not met
        {
            section.classList.remove('your-active-class');//Deactivate the activation section 
            section.classList.remove('menu__link');// Deactivate show some Css attributes on it
            for(item of elementsOfNav){
                if(item.getAttribute('data-nav') == section.getAttribute('id') ){
                    item.classList.remove('active_item');//remove active class from nav list
                }
            }

        }
    }
};

//add scroll event in the site 
document.addEventListener('scroll',activateSection);


// Scroll to anchor ID using scrollTO event
groupOfNav.addEventListener("click", (x) => {
    x.preventDefault();
    if (x.target.dataset.nav) {
        document.getElementById(`${x.target.dataset.nav}`).scrollIntoView({
            behavior: "smooth"
        });
    }
});







