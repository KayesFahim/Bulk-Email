const contatctForm = document.querySelector('.fcf-form-class');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contatctForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        subject : subject.value,
        message : message.value
    }

    let xhr = new XMLHttpRequest();

    xhr.open('POST','/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText =='success'){
    alert('Email Sent');
    subject.value = '';
    message.value = '';
    }else{
    alert('Something Wrong')
    }
    }
    xhr.send(JSON.stringify(formData));

});