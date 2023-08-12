const sections = document.querySelectorAll('section');
for(let section of sections){
    section.style.border = '2px solid black';
    section.style.padding = '10px';
    section.style.marginBottom = '10px'
    section.style.borderRadius = '10px'
}
const placesContainer = document.getElementById('places');
placesContainer.style.backgroundColor = 'yellow';


// create element

/**const li = document.createElement('li')
undefined
li.innerText = 'Testing the innerText'
'Testing the innerText'
li
<li>​Testing the innerText​</li>​ */

//create and add element 

/**let select = document.querySelector('#places ul')
--undefined
select
--<ul>​<li class=​"likes-places">​…​</li>​<li class=​"likes-places" id=​"important-place">​…​</li>​<li class=​"likes-places">​…​</li>​</ul>​
const li = document.createElement('li')
--undefined
li.innerText = 'Test list item'
--'Test list item'
li
--<li>​Test list item​</li>​
select.appendChild(li)
--<li>​…​</li> //added to slected ul
​ */


//track childNodes by index

/**const placesCont = document.getElementById('places')
 * placesCont.childNodes[3].childNodes[6]
 */

