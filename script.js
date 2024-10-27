const ddbtn = document.getElementsByClassName('dropdown-btn');
const ddlist = document.getElementsByClassName('dropdown-list');

for (let i = 0; i < ddlist.length; i++) {
    ddlist[i].style.display = 'none';
}


for (let i = 0; i < ddbtn.length; i++) {

    ddbtn[i].addEventListener('click', function () {

        if (ddlist[i].style.display === 'none') {

            ddlist[i].style.display = 'block';
        } 

        else {

            ddlist[i].style.display = 'none';

        }
        
    });
    
    const items = ddlist[i].getElementsByClassName('dropdown-item');

    for (let j = 0; j < items.length; j++) {
        items[j].addEventListener('click', function () {
           
            ddbtn[i].textContent = this.textContent;

            ddlist[i].style.display = 'none';
        });
    }
}
