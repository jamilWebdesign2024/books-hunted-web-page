const getStoredBook = ()=>{
    const storedBookSTR=localStorage.getItem("readList");

    if(storedBookSTR){
        const storedBookData =JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else{
        return [];
    }
};

const addToStoredDB =(id)=>{

    const storedBookData=getStoredBook();
    if(storedBookData.include(id)){
        alert('this id already exist')
    }
    else{
        storedBookData.push(id);

        const data =JSON.stringify(storedBookData);
        console.log("readlist", data);
        
    }
}

export {addToStoredDB};