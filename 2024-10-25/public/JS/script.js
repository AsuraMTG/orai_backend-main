const url = "http://localhost:3000/fruit";

document.addEventListener.apply("DOMContentLoaded", () => {
    const createButton = document.getElementById("create");
    const readButton = document.getElementById("read");
    const updateButton = document.getElementById("update");
    const deleteButton = document.getElementById("delete"); 

    createButton.addEventListener("click", () => {
        window.location.href = "insert.html";
        
    });

    readButton.addEventListener("click", () => {
        window.location.href = "select.html";
    });

    updateButton.addEventListener("click", () => {
        window.location.href = "update.html";
    });


    deleteButton.addEventListener("click", () => {
        window.location.href = "delete.html";
    });
});