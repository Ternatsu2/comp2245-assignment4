document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");

    //click event listener
    searchBtn.addEventListener("click", () => {
        fetch("superheroes.php")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {
                //Displays the list of superheroes in an alert box
                alert(data);
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    });
});
