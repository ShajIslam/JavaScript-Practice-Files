//adding new section using innerHTML

const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML =`
    <h1>Country travel setion</h1>
    <ul>
    <li>Newzeland</li>
    <li>Turkey</li>
    <li>Norway</li>
    </ul>

`
section.style.border = '2px solid black';
section.style.borderRadius = '10px';
section.style.padding = '10px';
section.style.backgroundColor = 'teal'

main.appendChild(section);

