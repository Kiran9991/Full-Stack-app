
let submitbn = document.getElementById('submit');
let listUser = document.getElementById('user');

submitbn.addEventListener('click', storeDetails);

async function storeDetails(e) {
    try {
        e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('emailId').value;
    let phoneNo = document.getElementById('phoneNo').value;
    
    let userDetails = {
        name,
        email,
        phoneNo
    }

    // showUserDetails(userDetails);

    let response = await axios.post('https://http://localhost:5000/add-user', userDetails)
    showUserDetails(response.data);
    }
    catch(error){
        console.log(error)
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    try {
        let response = await axios.get('https://http://localhost:5000/add-user')
        for(let i=0; i<response.data.length; i++) {
            showUserDetails(response.data[i]);
        }
    }
    catch(error) {
        console.log(error)
    }
})

function showUserDetails(userDetails) {
    let li = document.createElement('li');
    li.textContent = userDetails.name + ' - '+userDetails.email+' - '+userDetails.phoneNo;

    let deletebtn = document.createElement('input');
    deletebtn.type = 'button';
    deletebtn.value = 'delete';

    async function deleteId(userId) {
        try {
        let response = await axios.delete('https://http://localhost:5000/add-user'+userId)
        }
        catch(error) {
            console.log(error)
        }
    }

    let editbtn = document.createElement('input');
    editbtn.type = 'button';
    editbtn.value = 'edit';

    async function editId(userId) {
        try {
        let response = await axios.put('https://http://localhost:5000/add-user/'+userId)
        }
        catch(error) {
            console.log(error)
        }
    }

    li.appendChild(editbtn);
    li.appendChild(deletebtn);

    deletebtn.onclick = () => {
        listUser.removeChild(li);
        deleteId(userDetails._id);
    }

    editbtn.onclick = () => {
        listUser.removeChild(li);
        editId(userDetails._id);
        deleteId(userDetails._id);
        document.getElementById('name').value = userDetails.name;
        document.getElementById('emailId').value = userDetails.email;
        document.getElementById('phoneNo').value = userDetails.phoneNo;
    }
    listUser.appendChild(li);
}