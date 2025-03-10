

function gameObject() {
    return{
    home:{
    teamName:"Brooklyn Nets",
    colors:['Black', 'White'],
    players:[
        {
        name:"Alan Anderson",
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1,
        
    },
    {
        name:"Reggie Evan",
        number: 30,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slamDunks: 7,
        
    },
    {
        name:"Brook Lopez",
        number: 11,
        shoe: 17,
        points: 17,
        rebounds: 19,
        assists: 10,
        steals: 3,
        blocks: 1,
        slamDunks: 15,
        
    },
    { 
    name:"Mason Plumlee",
    number: 1,
    shoe: 19,
    points: 26,
    rebounds: 12,
    assists: 6,
    steals: 3,
    blocks: 8,
    slamDunks: 5,
    
},
{
    name:"Jason Terry",
    number: 31,
    shoe: 15,
    points: 19,
    rebounds: 2,
    assists: 2,
    steals: 4,
    blocks: 11,
    slamDunks: 1,
    
}
]
    },  
away:{
teamName:"Charlotte Hornets",
colors:['Turquoise', 'Purple'],
players:[
    {
    name:"Jeff Adrien",
    number: 4,
    shoe: 18,
    points: 10,
    rebounds: 1,
    assists: 1,
    steals: 2,
    blocks: 7,
    slamDunks: 2,
},
{
    name:"Bismak Biyombo",
    number: 0,
    shoe: 16,
    points: 12,
    rebounds: 4,
    assists: 7,
    steals: 7,
    blocks: 15,
    slamDunks: 10,
},
{
    name:"DeSagna Diop",
    number: 2,
    shoe: 14,
    points: 24,
    rebounds: 12,
    assists: 12,
    steals: 4,
    blocks: 5,
    slamDunks: 5,
    
},
{
    name:"Ben Gordon",
    number: 8,
    shoe: 15,
    points: 33,
    rebounds: 3,
    assists: 2,
    steals: 1,
    blocks: 1,
    slamDunks: 0,
    
},
{
    name:"Brendan Haywood",
    number: 33,
    shoe: 15,
    points: 6,
    rebounds:12,
    assists: 12,
    steals: 22,
    blocks: 5,
    slamDunks: 12,
}
]
}
    }
};


// Building functions

function homeTeamName(){
    const game = gameObject();
    return game.home.teamName;
  }
console.log(homeTeamName());


  function awayTeamName(){
    const game = gameObject();
    return game.away.teamName;
  }
console.log(awayTeamName());

console.log(gameObject());

//Building function findPlayer

function findPlayer(name) {
    if (!name) {
        console.error("Player not found!");
        return null;
    }

    const game = gameObject();
    const nameLower = name.toLowerCase();

    for (let team of [game.home, game.away]) {
        for (const player of team.players || []) {  
            if (player.name.toLowerCase() === nameLower) {
                return { name: player.name, ...player };  
            }
        }
    }

    return null;  
}

console.log(findPlayer("Brendan Haywood"));
console.log(findPlayer("Masela Ogendo"));

        
//Building function numPointsScored


function numPointsScored(playerName) {
    const player = findPlayer(playerName);
    return player ? player.points : "Player not found";
}
  console.log(numPointsScored("Brendan Haywood"));
  console.log(numPointsScored("Jason Terry"));
  console.log(numPointsScored("DeSagna Diop"));
  console.log(numPointsScored("Alan Anderson"));

  // Build a function shoeSize

  function shoeSize (playerName){ 
    const player =findPlayer(playerName);
    return player ? player.shoe: "shoeSize not found!";
  } 

console.log(shoeSize("Brendan Haywood"));
console.log(shoeSize("Ben Gordon"));
console.log(shoeSize("Bismak Biyombo",));
console.log(shoeSize("Mason Plumlee"));
console.log(shoeSize("Masela"));

// Build functions for teamColors

function teamcolors (teamName) {
    const game= gameObject();
    for (let teamKey in game){
        const team = game[teamKey];
        if (team.teamName===teamName){
            return team.colors;

        }
    }
}


console.log(teamcolors("Charlotte Hornets"));
console.log(teamcolors("Brooklyn Nets"));
    