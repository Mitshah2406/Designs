search.addEventListener('keyup', () => {
    let search = document.getElementById('search').value.toUpperCase();
    let results = document.getElementsByTagName('a');
    for (let index = 0; index < results.length; index++) {
        let content = results[index];
        let value = content.textContent || content.innerText;
        console.log(content)
        if (value.toUpperCase().indexOf(search) > -1) {
            results[index].style.display = "";
        }
        else {
            results[index].style.display = "none";
        }
    }
})