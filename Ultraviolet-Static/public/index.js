const form = document.querySelector('form');
const input = document.getElementById("uv-search-engine")

form.addEventListener('submit', async event => {
    event.preventDefault();

    const url = search(address.value, searchEngine.value);
    location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});
