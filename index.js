document.getElementById('addBook').addEventListener("submit", (event) => {
    event.preventDefault();

    const bookName = document.getElementById('bookName').value
    const bookYear = document.getElementById('bookYear').value
    const bookPublisher = document.getElementById('bookPublisher').value
    const bookQuantity = document.getElementById('bookQuantity').value

    const data = {
        bookName,
        bookYear,
        bookPublisher,
        bookQuantity,
    }
    // console.log(data)

    axios.post('http://localhost:3000/books', data).then((response)=> {
        console.log('Data berhasil di tambah' + response)
        window.location.reload(true)
    })
    .catch((error) => {
        console.log('Data gagal di tambah' + error)
    })
})