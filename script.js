document.getElementById("ageForm").addEventListener("submit", function (event) {

    event.preventDefault()

    
    const ageInput = document.getElementById('age');
    const nameInput = document.getElementById('name');

    const age = parseInt(ageInput.value);
    const name = nameInput.value.trim();

        if (!name || !age) {
            alert ('please fill detail first')
            return
        };

        if (age<0) {
            alert ('cant go with -age')
        };


   
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (age >= 18) {
                    resolve(`Welcome, ${name}. You can vote.`);
                } else {
                    reject(`Oh sorry ${name}. You aren't old enough.`);
                }
            }, 4000);
        });
    
        promise.then(
            message => alert(message),
            error => alert(error)
        );
    

        nameInput.value = "";
        ageInput.value = "";


});

    