var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//log mutlipe values at once
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
};

fight();

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or SKIP' to choose.");

// if player choses to fight, then fight
if (promptFight == "fight" || promptFight == "FIGHT") {
    //remove enemy's health by subtracting the amount set in the playerAttack variable
    
    enemyHealth = enemyHealth - playerAttack;
    console.log (
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health 
    if (enemyHealth <=0) {
        window.alert(enemyName + " has died!");
    } else {
        window.alert(enemyName + " stil has " + enemyHealth + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // if player choose to skip
} else if (promptFight == 'skip' || promptFight == 'SKIP') {
    // confirm player want to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
        fight();
    }
} else {
    window.alert("You need to choose a valid option. Try again!");
} // end of the fight function

// run fight function to start the game 
fight();

/*
//Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable

enemyHealth = enemyHealth - playerAttack;

//Log a reslulting message to the console so we know that it worked.

console.log(
playerName + "attacked" + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
//Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable

playerHealth = playerHealth - enemyAttack;

//Log a resluting mesage to the console so we know it worked.

console.log (
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

// check palyer's health
if (playerHealth <=0) {
    window.alert(playerName + " has died");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}

// check enemy's health

if (enemyHealth <=0) {
    window.alert(enemyName + " has died!");
}

else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
}
*/