const form = document.querySelector('form');
const input = document.getElementById("uv-search-engine")
const error = document.getElementById("uv-error");
const errorCode = document.getElementById("uv-error-code")

form.addEventListener('submit', async event => {
    event.preventDefault();
    const url = search(address.value, searchEngine.value);
    location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});
