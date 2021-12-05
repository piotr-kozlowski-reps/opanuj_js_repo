class DayBrick extends HTMLElement{

  repository = new AppRepository();

  static get observedAttributes(){
    return ['year', 'month', 'day', 'dayOfWeek'];
  }

  constructor(){
    super();
  }

  connectedCallback(){

    let year = this.attributes[0].value;
    let month = this.attributes[1].value;
    let day = this.attributes[2].value;
    let dayOfWeek = this.attributes[3].value;

    // debugger;
    const idOfCurrentDay = `${year}-${month}-${day}`;
    const currentDayNawykState = this.repository.getDayNawykState(idOfCurrentDay);

    let dayNawykProperClass = '';
    switch(currentDayNawykState){
      
      case null || undefined:
        dayNawykProperClass = 'day-nawyki-neutral'
        break;

      case true:
        dayNawykProperClass = 'day-nawyki-on';
        break;

      case false:
        dayNawykProperClass = 'day-nawyki-off';
        break;

      default:
          dayNawykProperClass = 'day-nawyki-neutral'
    }



    this.innerHTML = `
      <div class="day-every">
        <div class="day-info">
          ${day} <span class="day-name">${dayOfWeek}</span>
        </div>
        <div class="${dayNawykProperClass}" id="${idOfCurrentDay}"></div>
      </div>
    `;

    document.getElementById(idOfCurrentDay).addEventListener('click', () => {this.onChange(event)});


  }


  onChange(event){
      const id = event.target.id;
      this.repository.changeNawykState(id);
  }



  attributeChangedCallback(attributes, oldValue, newValue){
  }






}

window.customElements.define('day-brick', DayBrick);