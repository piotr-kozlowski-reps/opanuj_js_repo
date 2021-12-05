class AppRepository{

    constructor(){

        if(AppRepository.instance instanceof AppRepository){
            return AppRepository.instance;
        }

        this.storage = new AppStorage();
        this.nawykName = this.storage.get('NAWYK_NAME') || '';
        this.nawykRepo = this.storage.get('NAWYKREPO') || [];
        this.isRepositoryStateChanged = false;
        AppRepository.instance = this;
    }


    //refresh stupid but working (not so well) workaround
    getIsRepositoryStateChanged(){
        if(!this.isRepositoryStateChanged) return false;
        else{
            this.isRepositoryStateChanged = false;
            return true;
        }
    }

    //name
    setName(name){
        this.nawykName = name;
        this.storage.set('NAWYK_NAME', this.nawykName);
    }

    getName(){
        return this.nawykName;
    }

    clearName(){
        this.nawykName = '';
        this.storage.set('NAWYK_NAME', '');
    }


    //nawyki repository
    countNumberOfFilledDaysInGvenDate(year, month){
        const idPart = `${year}-${month}`;
        let result = 0;
        this.nawykRepo.forEach(nawyk => {
            if(nawyk.id.startsWith(idPart)) result++;
        });

        return result;
    }

    getDayNawykState(id){
        const currentDayNawyk = this.getNawyk(id);
        if(currentDayNawyk == null || currentDayNawyk == undefined) return undefined;
        else return currentDayNawyk.nawykState;
    }


    changeNawykState(id){

        // debugger;
        let nawyk = this.getNawyk(id);

        //there's no such key
        if (nawyk == null || nawyk == undefined){
            nawyk = {
                id: id,
                nawykState: true
            }
            this.nawykRepo.push(nawyk);
            this.storage.set('NAWYKREPO', this.nawykRepo);
            this.isRepositoryStateChanged = true;
            return;
        }

        //key is true
        if(nawyk.nawykState === true){
            this.deleteNawyk(id);
            nawyk.nawykState = false;
            this.nawykRepo.push(nawyk);
            this.storage.set('NAWYKREPO', this.nawykRepo);
            this.isRepositoryStateChanged = true;
            return;
        }

        //key is false
        if(nawyk.nawykState === false){
            this.deleteNawyk(id);
            this.storage.set('NAWYKREPO', this.nawykRepo);
            this.isRepositoryStateChanged = true;
            return;
        }


    }

    deleteNawyk(id){
        this.nawykRepo = this.nawykRepo.filter(nawyk => nawyk.id !== id);
    }

    getNawyk(id){
        const nawyk =  this.nawykRepo.find(nawyk => nawyk.id === id); 
        return nawyk == null || nawyk == undefined ? undefined : nawyk;
    }

    updateNawykInfo(id, nawykState){
        const nawyk = this.nawykRepo.find(n => n.id === id);
    }

    getNumberOfDaysONorOFFInGivenMonth(year, month, onOrOff){

        let count = 0;
        const idPart = `${year}-${month}`;
        this.nawykRepo.forEach(nawyk => {
            if(nawyk.id.startsWith(idPart) && nawyk.nawykState === onOrOff) count++;
        });

        return count;
    }

    clearNawyki(){
        this.storage.set('NAWYKREPO', []);
        this.nawykRepo = [];
    }


}