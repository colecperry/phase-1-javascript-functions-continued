// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}


const mondayWork = function (workType = 'go to the office') {
    return `This Monday, I will ${workType}.`
}

function wrapAdjective(flareSymbol) {
    return function(phrase) {
        const intro = "You are "
        return intro + flareSymbol + phrase + flareSymbol + "!";
    }
}

