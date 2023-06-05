const ele = document.querySelector('.dis-none')
console.log('div display element: ', ele)

let dropdown = document.getElementById('ddlViewBy')

let ddResult = document.getElementById('dd-result')
function showDropdown() {
    const ddNames = document.getElementsByName('dd')
    console.log(ddNames)
    let output = '<ul>'
    let selected = ''

    ddNames.forEach((name) => {
        console.log('name: ', name.value)

        output += `<li>name=${name.textContent} ,value=${name.value} ${name.selected ? 'selected' : ''}</li>`

    })
    ddResult.innerHTML = output + '</ul>'
}
// ddResult.innerHTML = '<h3>hello</h3>'
showDropdown()
dropdown.addEventListener('click', showDropdown)