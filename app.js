document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("search");
    const resultDiv = document.getElementById("result");
    const loadingDiv = document.getElementById("loading");

    searchBtn.addEventListener("click", () => {
        const query = searchInput.value.trim();
        const url = query ? `superheroes.php?query=${encodeURIComponent(query)}` : `superheroes.php`;

        // Clear previous results and show loading
        resultDiv.innerHTML = '';
        loadingDiv.classList.remove("hidden");

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.text();
            })
            .then(data => {
                loadingDiv.classList.add("hidden");
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                loadingDiv.classList.add("hidden");
                resultDiv.innerHTML = `<p class="not-found">An error occurred: ${error.message}</p>`;
            });
    });
});
