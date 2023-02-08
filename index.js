function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {

}
Display.prototype.add = function (book) {
    let tablebody = document.getElementById("tablebody");
    let uistring = `
        <tr>                 
            <td>${book.name}</td>
             <td>${book.author}</td>
            <td>${book.type}</td>
        </tr>`;
        tablebody.innerHTML+=uistring;
}

Display.prototype.clear = function () {
    let libform = document.getElementById("library-form");
    libform.reset();
}


// submit library-form
let libraryform = document.getElementById("library-form");
libraryform.addEventListener('submit', libraryfromsubmit);


function libraryfromsubmit(e) {
    e.preventDefault();
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById("Fiction");
    let Programming = document.getElementById("Programming");
    let Cooking = document.getElementById("Cooking");
    if (fiction.checked) {
        type = fiction.value;
    }
    if (Programming.checked) {
        type = Programming.value;
    }
    if (Cooking.checked) {
        type = Cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
    display.add(book);
    display.clear();
    console.log("submited");
}