// code your solution here

//Instruction 1

function saturdayFun (activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

saturdayFun();
saturdayFun("bathe my dog");
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));


//Instruction 2

const mondayWork = function (activity='go to the office') {
    return `This Monday, I will ${activity}.`;
}

mondayWork();
mondayWork("work from home");
console.log(mondayWork());
console.log(mondayWork("work from home"));

//Instruction 3:

function wrapAdjective (highlight="*") {
    return function innerF (target="special") {
        return `You are ${highlight}${target}${highlight}!`
    }
}

wrapAdjective("*")("a dedicated programmer");
console.log(wrapAdjective("*")("a dedicated programmer"));


