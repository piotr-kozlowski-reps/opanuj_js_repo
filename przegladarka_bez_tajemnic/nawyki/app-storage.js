class AppStorage{

    constructor(){
        this.storage = localStorage;
    }

    set(key, value){
        this.storage.setItem(key, JSON.stringify(value));
    }

    get(key){
        const retrievedData = this.storage.getItem(key);
        return JSON.parse(retrievedData);
    }

    // getAll(){
    //     const retrievedData = this.storage.getItem('NAWYKREPO');
    //     return JSON.parse(retrievedData);
    // }

}