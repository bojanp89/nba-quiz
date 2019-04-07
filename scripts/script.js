const endpoint = 'https://raw.githubusercontent.com/bttmly/nba/master/data/teams.json';

const teams = [];

fetch(endpoint)//fetch gets the data from the url and returns a promise.
   .then(blob => blob.json())//then run json on the blob of data which gives you the array of data you want.
   .then(data => teams.push(...data))// then push the items into the cities array using a spread operator.

function findMatch(wordToMatch, teams) {//takes in a 'word to match' and takes in the now populated teams array.
   return teams.filter(team => {//return the teams array and run the filter method on it, each object is a 'team.'
      const regex = new RegExp(wordToMatch, 'gi');// wordToMatch is whatever the user passes in. 'gi' will be global and insensitive.
      return team.simpleName.match(regex);//return the team.simpleName that matches the regex.
   })
}

function displayTeam() {
   // const matchedTeam = findMatch(this.value, teams);
   const wordToMatch = this.value.charAt(0).toUpperCase() + this.value.slice(1);
   // console.log(wordToMatch);
   teams.filter(function(team) {
      if (team.simpleName == wordToMatch) {
         console.log(team.simpleName);
      }
   })
}

// const matchedTeam = teams.filter(function(team) {
//    if (team.simpleName === 'kings') {
//       return true;
//    }
// })
// console.log(matchedTeam);



const teamInput = document.querySelector('input');

// teamInput.addEventListener('change', displayTeam);//on 'change', run the displayTeam function.
teamInput.addEventListener('keyup', displayTeam);//on 'keyup', run the dfisplayTeam function.


