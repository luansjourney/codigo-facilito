

let url = new URL('https://jsonplaceholder.typicode.com/posts');

let parametros = {
    userId: 1,
    _limit: 5,
}

Object.keys(parametros).forEach(
    paramKey => {
        url.searchParams.append(paramKey, parametros[paramKey])
    }
);

const query = fetch(url);

console.log(query.then(
    function(response){
        response.json().then(
            function(data){
                console.log(data);
            }
        )
    }
).catch(err => console.log(err)));