let data = []

axios.get('http://localhost:3000/books').then((response)=> {
    // console.log(response.data)
    const listdata = document.getElementById('listData')
    data = response.data

    data.forEach((data,id)=> {
        // console.log(data)
        const {bookName, bookYear, bookPublisher, bookQuantity} = data
        const tableHtml = `<tr>
        <th scope="row">${id + 1}</th>
        <td>${bookName}</td>
        <td>${bookYear}</td>
        <td>${bookPublisher}</td>
        <td>${bookQuantity}</td>
        <td>
            <button class="btn btn-danger" onclick="deleteBook(${data.id})" type="submit" >
                <i class="far fa-trash-alt fa-lg"></i>
            </button> &nbsp;
            <button class="btn btn-secondary" onclick="updateBook(${data.id})">
                <i class="fas fa-pencil-alt fa-lg"></i>
            </button>
        </td>
      </tr>`

      listdata.innerHTML += tableHtml
    })
})
.catch((error) => {
    console.log(error)
})

const deleteBook = (id) => {
    axios.delete(`http://localhost:3000/books/${id}`).then((response) => {
        alert("Data delete")
        window.location.reload(true)
    })
    .catch((error) => {
        console.log(error)
    })
    
}

const updateBook = (id) => {
    const findData = data.find(data => {
        return data.id === id
    })

    console.log(findData)
    window.location.reload(true)
    if(findData) {
        const bookName = window.prompt("Book Name", findData.bookName)
        const bookYear = window.prompt("Book Year", findData.bookYear)
        const bookPublisher = window.prompt("Book Publisher", findData.bookPublisher)
        const bookQuantity = window.prompt("Book Quantity", findData.bookQuantity)

        const data = {
            bookName,
            bookYear,
            bookPublisher,
            bookQuantity,
        }
        axios.put(`http://localhost:3000/books/${id}`, data)
        window.location.reload(true)
    }
}