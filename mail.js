function sendEmail(){
    console.log('hi');
    var param={
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    }

    const serviceId='service_ild3j2l'
    const templateId='template_0m74iei'

    emailjs.send(serviceId,templateId,param).then(
        (res)=>{
            console.log(res);
            document.getElementById('fullName').value =''
        document.getElementById('email').value=''
        document.getElementById('phone').value=''
        document.getElementById('message').value=''
            alert("successfully submit details")
        }
    ).catch(err=>{console.log(err);})
   
}
function sendMessage(){
    console.log('hi');
    var param={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    }

    const serviceId='service_ild3j2l'
    const templateId='template_64idxyv'

    emailjs.send(serviceId,templateId,param).then(
        (res)=>{
            console.log(res);
            document.getElementById('name').value =''
        document.getElementById('email').value=''
        document.getElementById('subject').value=''
        document.getElementById('message').value=''
            alert("successfully submit details")
        }
    ).catch(err=>{console.log(err);})
   
}

 