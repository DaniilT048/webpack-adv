export default class main{
    constructor(buttonId){
        this.buttonId = document.querySelector(buttonId);
        this.counter = 0;
        if(this.buttonId){
            this.buttonId.addEventListener('click', this.clickMe.bind(this))
        }
    }
    clickMe(){
        this.counter++;
        this.buttonId.innerHTML = this.counter;
    }
}