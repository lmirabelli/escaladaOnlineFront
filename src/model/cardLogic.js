let weekDays = [
    {name: 'lunes', biSyntax: 'Lu'},
    {name: 'martes', biSyntax: 'Ma'},
    {name: 'miercoles', biSyntax: 'Mi'},
    {name: 'jueves', biSyntax: 'Ju'},
    {name: 'viernes', biSyntax: 'Vi'},
    {name: 'sabado', biSyntax: 'Sa'},
    {name: 'domingo', biSyntax: 'Do'}
]

let hoursDay = (hours) => {

    let hourBox = []
    for(let i = 0; i < 24; i++){
        let denomination = i == 0 ? 24 : i;
        hourBox.push(<div key={`h${i}`} className={hours.length === 0 ? 'unknownBox' : hours.find(d => d === denomination) ? 'trueBox' : 'falseBox'}>{i}</div>)
    }

    return hourBox
}

export {weekDays, hoursDay}