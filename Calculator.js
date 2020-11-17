// WARNING: THIS PROGRAM CONTAINS AN OPEN/UNSANITIZED EVAL, DO NOT ACCEPT CHANGED CODE OR CHANGE IT UNLESS YOU KNOW WHAT YOU ARE DOING

const algebra = require('algebra.js');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


var Equation = algebra.Equation;

function sanatise(number) {

  if (number.startsWith(".")) {
    number = `0${number}`
  }
  return (number)
}


readline.question('---------------------------------\nEnter Selection (Enter x for unknown variable when entering data)\n---------------------------------\n\n1) Birth/Death Rate\n2) Birth/Death Rate Per Thousand\n3) Population Growth Rate\n4) Population Growth Rate Per Thousand\n5) Doubling Time', function (inputPath) {

  if (inputPath.includes("1")) {
    console.log("CONVERT PERCENTAGES INTO DECIMALS (Move decimal 2 over [2.5% = .025])\n")

    readline.question("Births/Deaths:  ", function (births) {
      readline.question("Population:  ", function (population) {
        readline.question("Birth/Death Rate:  ", function (rate) {

          var x1 = algebra.parse(sanatise(births));
          var x2 = algebra.parse(`${sanatise(rate)} * ${sanatise(population)}`);
          console.log("-------Work-------")
          console.log(`${sanatise(births)} = ${sanatise(rate)} * ${sanatise(population)}`)
          var eq = new Equation(x1, x2);
          console.log(eq.toString())
          var answer = eq.solveFor("x");
          console.log("-------Answer-------")
          console.log("x = " + eval(answer.toString()).toFixed(3));
        });
      });
    });


  } else if (inputPath.includes("2")) {
    console.log("CONVERT PERCENTAGES INTO DECIMALS (Move decimal 2 over [2.5% = .025])\n")

    readline.question("Births/Deaths per thousand:  ", function (births) {
      readline.question("Birth/Death Rate:  ", function (rate) {

        var x1 = algebra.parse(`${sanatise(births)}/1000`);
        var x2 = algebra.parse(sanatise(rate));
        console.log("-------Work-------") 
        console.log(`${sanatise(births)}/1000 = ${sanatise(rate)}`)
        var eq = new Equation(x1, x2);
        console.log(eq.toString())
        var answer = eq.solveFor("x");
        console.log("-------Answer-------")
        console.log("x = " + eval(answer.toString()).toFixed(3));
      });
    });


  } else if (inputPath.includes("3")) {
    console.log("CONVERT PERCENTAGES INTO DECIMALS (Move decimal 2 over [2.5% = .025])\n")

    readline.question("Births:  ", function (births) {
      readline.question("Immigration:  ", function (immigrant) {
        readline.question("Deaths:  ", function (deaths) {
          readline.question("Emigration:  ", function (emigrate) {
            readline.question("Total Population:  ", function (population) {
              readline.question("Growth Rate:  ", function (rate) {

                var x1 = algebra.parse(`(${sanatise(births)}+${sanatise(immigrant)}) - (${sanatise(deaths)}+${sanatise(emigrate)})`);
                var x2 = algebra.parse(`${sanatise(rate)} * ${sanatise(population)}`);
                console.log("-------Work-------")
                console.log(`(${sanatise(births)}+${sanatise(immigrant)}) - (${sanatise(deaths)}+${sanatise(emigrate)}) = ${sanatise(rate)} * ${sanatise(population)}`)
                var eq = new Equation(x1, x2);
                console.log(eq.toString())
                var answer = eq.solveFor("x");
                console.log("-------Answer-------")
                console.log("x = " + eval(answer.toString()).toFixed(3));
              });
            });
          });
        });
      });
    });


  } else if (inputPath.includes("4")) {
    console.log("CONVERT PERCENTAGES INTO DECIMALS (Move decimal 2 over [2.5% = .025])\n")

    readline.question("Births:  ", function (births) {
      readline.question("Immigration:  ", function (immigrant) {
        readline.question("Deaths:  ", function (deaths) {
          readline.question("Emigration:  ", function (emigrate) {
            readline.question("Growth Rate:  ", function (rate) {

              var x1 = algebra.parse(`(${sanatise(births)}+${sanatise(immigrant)}) - (${sanatise(deaths)}+${sanatise(emigrate)})`);
              var x2 = algebra.parse(`${sanatise(rate)} * 1000`);
              console.log("-------Work-------")
              console.log(`(${sanatise(births)}+${sanatise(immigrant)}) - (${sanatise(deaths)}+${sanatise(emigrate)}) = ${sanatise(rate)} * 1000`)
              var eq = new Equation(x1, x2);
              console.log(eq.toString())
              var answer = eq.solveFor("x");
              console.log("-------Answer-------")
              console.log("x = " + eval(answer.toString()).toFixed(3));
            });
          });
        });
      });
    });
  } else if (inputPath.includes("5")) {

    readline.question("Growth Rate PERCENTAGE (Remove % sign)  ", function (rate) {
      readline.question("Years to double:  ", function (doublingyears) {

        var x1 = algebra.parse("70");
        var x2 = algebra.parse(`${sanatise(rate)} * ${sanatise(doublingyears)}`);
        console.log("-------Work-------")
        console.log(`70=${sanatise(rate)} * ${sanatise(doublingyears)}`)
        var eq = new Equation(x1, x2);
        console.log(eq.toString())
        var answer = eq.solveFor("x");
        console.log("-------Answer-------")
        console.log("x = " + eval(answer.toString()).toFixed(2));
      });
    });


  } 
  
  //Extra inputPaths would go here

  else {
    console.log("Invalid choice")
  }


});
