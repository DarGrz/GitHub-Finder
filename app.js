//Init GitHub
const github = new GitHub;

//Init UI
const ui = new UI;



// Search input 
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
    if(userText !== '') {
        //Make HTTP call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    //Show Alert
                    ui.showAlert('User Not Found', 'alert alert-danger');

                } else {
                    //Show profile
                    ui.showProfile(data.profile);
                }
            })
    } else {
        //Clear profile
        ui.clearProfile();
    }
});

