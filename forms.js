window.addEventListener( "load", function () {
    function sendData() {
        var sendRequest = new XMLHttpRequest();
        var signupInfo = new FormData(form);

        sendRequest.addEventListener( "error", function(event){
            alert('An error occurred with your submission:( Please try again!');
        });
        sendRequest.addEventListener( "load", function(event) {
            alert( 'We have recived your information successfully!');
        });

        sendRequest.open('POST', "http://localhost:5000/app/new/");
        sendRequest.send(signupInfo);
    }
    var form = document.getElementById("signup");

    form.addEventListener( "submit", function( event) {
        event.preventDefault();
        sendData();
    }
    );
}
);