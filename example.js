function fetchData() {
    fetch('https://api.stackexchange.com/2.0/questions?page=1&pagesize=30&key=VVq3kJHSjQ*7qgpiRaVoLA%28%28&site=stackoverflow')
        .then(Response => {
            if (!Response.ok) {
                throw Error("ERROR");
            }
            return Response.json();
        })
        .then(data => {
            console.log(data.data);
            const html = data.data.map(user => {
                return '<p>Name: ${user.first_name}</p>';
            }).join("");
            console.log(html);
            document.querySelector("#app")
                .insertAdjacentHTML("afterbegin", html);
        })
        .catch(error => {
            console.log(error);
        });
}

fetchData();