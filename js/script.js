let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI;

searchBtn.addEventListener('click', (e)  => {
    let userText = searchUser.value;
    if(userText != ''){
        //Fetch Api

        fetch(`https://api.github.com/users/${userText}`).then(result => result.json())
        .then(data => {

            if(data.message == "Not Found"){
                ui.showAlert("User Not Found", "alert alert-danger");
            }else{
                ui.showProfile(data);
            }
        })
    }else{
        // clear profile
    }
});