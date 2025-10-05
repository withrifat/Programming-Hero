const getStoredBook = () =>{
    const storedBookSTR = localStorage.getItem("readList");
    if (storedBookSTR){
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    } else{
        return [];
    }
}
const addToStoredDB = (id) =>{
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)){
        alert("You have already added this book to your read list.");
    } else {
        storedBookData.push(id);
        console.log(storedBookData);
        localStorage.setItem("readList", JSON.stringify(storedBookData));
    }
}

export {addToStoredDB, getStoredBook};
