function resetForm() {
    document.getElementById('firstName').value='';
    document.getElementById('lastName').value='';
    document.getElementById('birthDate').value='';
    document.getElementById('ageCheck').checked=false;
    var x = document.getElementById('avatar');
    var y = x.getElementsByClassName('kittens');
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].checked = false;
    }
}

function submitForm(){
    if(validation){
        var name = document.myForm.firstName.value;
        var surname = document.myForm.lastName.value;
        var birthDate = document.myForm.birthDate.value;

        var obj = {
            name: name,
            surname: surname,
            birthDate: birthDate
        };

        console.log(obj);

        alert('Imię: ' + name + '\nNazwisko: ' + surname 
        + '\nData Urodzenia: ' + birthDate + '\nCzy Pełnoletni: Tak\n')

    }
    return;
}

function validation() {

    var name = document.myForm.firstName.value;
    var surname = document.myForm.lastName.value;
    var birthDate = document.myForm.birthDate.value;
    var ageCheck = document.myForm.ageCheck.checked;
    var x = document.getElementById('avatar');
    var y = x.getElementsByClassName('kittens');
    

    alerts_sum = '';
    if (name.length < 2 || name === '') {
        alerts_sum += 'Niepoprawnie wprowadzone imię! \n';
    }

    if (surname.length < 2 || surname === '') {
        alerts_sum += 'Niepoprawnie wprowadzone nazwisko! \n';
    }

    if (birthDate === '') {
        alerts_sum += 'Wprowadź datę urodzenia! \n';
    }

    if (ageCheck === false) {
        alerts_sum += 'Musisz być pełnoletni! \n';
    }

    is_avatar = false;
    for (i = 0; i < y.length; i++) { // przejscie po tablicy
        if (y[i].checked == true) { 
            is_avatar = true;
            break;
        }
    }
    if(is_avatar === false) {
        alerts_sum += 'Musisz wybrać avatar \n';
    }

    if(alerts_sum != ''){
        alert(alerts_sum);
        return false;
    }

    console.log('true');
    alert('Ok!')
    return true;

}