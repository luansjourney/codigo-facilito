

let url = new URL('https://jsonplaceholder.typicode.com/posts');
let postUrl = 'https://jsonplaceholder.typicode.com/posts';

let parametros = {
    userId: 1,
    _limit: 5,
}
let postParams = {
    title:'foo',
    body:'bar',
    userId: 1,
}

Object.keys(parametros).forEach(
    paramKey => {
        url.searchParams.append(paramKey, parametros[paramKey])
    }
);

const query = fetch(url);

const postQuery = fetch(postUrl, {
    method:'POST',
    body: JSON.stringify(postParams),
    headers: {
        "Content-type":"application/json;charset=UTF-8"
    }
})

/* console.log(query.then(
    function(response){
        response.json().then(
            function(data){
                console.log(data);
            }
        )
    }
).catch(err => console.log(err))); */

console.log(postQuery.then(
    function(response){
        response.json().then(
            function(data){
                console.log(data);
            }
        )
    }
).catch(err => console.log(err)))