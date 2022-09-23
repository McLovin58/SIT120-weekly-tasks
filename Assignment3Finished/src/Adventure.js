import info from '../AdventureInfo.json'

class Adventure{

    

    constructor(input){
          this.page = 'start'
         this.components = []
    }

    getpageinfo(chapter){
        var toreturn = ''
        toreturn = info[chapter]
        console.log(chapter)
        return (toreturn)
    }

    gotonewpage(newpage){

    }



}

export default Adventure