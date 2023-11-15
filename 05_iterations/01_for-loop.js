// for loop
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
}


// nested for loop
for (let i = 0; i < 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j < 5; j++) {
        console.log(`Inner loop value: ${j} & Outer loop value: ${i}`);
    }
}

// for loop over array
let marvel_heros = ["Dr.Strange", "Spiderman", "Ironman"];
for (let index = 0; index < marvel_heros.length; index++) {
    const element = marvel_heros[index];
    console.log(element);
}




// break & continue

for (let i = 0; i < 10; i++) {
    if(i == 6){
        console.log("Loop break!!!");
        break;
    }
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    if(i == 6){
        console.log("skip 6!!!");
        continue;
    }
    console.log(i);
}