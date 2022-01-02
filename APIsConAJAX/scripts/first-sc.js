
const query = fetch('https://jsonplaceholder.typicode.com/posts');

console.log(query.then(
    function(response){
        response.json().then(
            function(data){
                console.log(data);
            }
        )
    }
).catch(err => console.log(err)));