const listItems = document.querySelectorAll("#myList li");

listItems.forEach((li) => {
    li.addEventListener("click", () => {

        listItems.forEach((item) => {
            item.style.color = "";
            item.style.fontWeight = "";
        });

        li.style.color = "red";
        li.style.fontWeight = "bold";
    });
});
