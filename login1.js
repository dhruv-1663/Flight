function signInWithGoogle() {
    google.accounts.id.initialize({
        client_id: '267054957981-noltcod761u88cj1sj8q5e642jfo8p4v.apps.googleusercontent.com',
        callback: handleCredentialResponse
    });
    google.accounts.id.prompt();
}

function handleCredentialResponse(response) {
    if (response.credential) {
        var username = response.credential.id;
        // Perform any additional actions with the signed-in user
        // e.g., send the username to the server for authentication
        console.log('Signed in as: ' + username);
    } else {
        console.log('Error: ' + response.error);
    }
}