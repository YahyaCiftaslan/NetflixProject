const result = document.getElementById('result');

new URLSearchParams(window.location.search).forEach((value , name) =>{
    console.log(`${name} => ${value}`);
    result.append(`${name} => ${value}`);
    result.append(document.createElemen('br'));

})