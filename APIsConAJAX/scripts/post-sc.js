document.querySelector("#form").addEventListener("submit",(ev) =>{
    ev.preventDefault();

    let formData = new FormData();

    let file = document.querySelector("#avatar").files[0];

    formData.append("avatar",file);

    fetch("http://localhost:8080/files",{
        method:'POST',
        body: formData
    }).then(
        r => r.text()
    ).then(data => alert(data)).catch(err => console.log(err));

    return false;
})