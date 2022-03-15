// vars
var body = document.body
var where = 'afterbegin'
var css = "<style>*:focus {border: red 1px solid}</style>"

// functions
function insert(body,where,css) {
    body.insertAdjacentHTML(where,css)
}
function main(body,where,css) {
    insert(body,where,css)
    load()
}
function load() {
    console.log('Loaded')
}

main(body,where,css)
