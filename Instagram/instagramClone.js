var marioChar = document.querySelectorAll("img.character");

marioChar.forEach(function (char) {
  char.addEventListener('click', function(event) {
    var mainImg = document.querySelectorAll(".mainImg");
    mainImg[0].src = event.target.src;

    var imgPhrase = document.querySelectorAll("#phrase");
    imgPhrase[0].innerHTML = "You have selected " +name + ".\n" + charInfo;
    
    for (i = 0; i < marioChar.length; i++){
      
      switch(name | charInfo){
        
        case 0:
          name = "Mario";
          charInfo = `Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, 
          he repeatedly rescues Princess Peach from the Koopa villain Bowser and stops his numerous 
          plans to destroy him and take over the kingdom. Mario also has other enemies and rivals, including 
          Donkey Kong and Wario.`;
          break;
        
        case 1:
          name = "Luigi";
          charInfo = `Luigi is portrayed as the slightly younger but taller fraternal twin brother of Nintendo's 
          mascot Mario, and appears in many games throughout the Mario franchise, often as a sidekick to his brother.`;
          break;
        
        case 2:
          name = "Princess Peach";
          charInfo = `Peach is the princess of the fictional Mushroom Kingdom, which is constantly under attack 
          by Bowser. She often plays the damsel in distress role within the series and is the lead female. She 
          is often portrayed as Mario's love interest.`;
          break;
        
        case 3:
          name = "Toad";
          charInfo = `He is portrayed as a citizen of the Mushroom Kingdom and is one of Princess Peach's most 
          loyal attendants; constantly working on her behalf.`;
          break;

        case 4:
          name = "Yoshi";
          charInfo = `A fictional anthropomorphic dinosaur who appears as Mario and Luigi's sidekick. Yoshi's prehensile 
          tongue can extend a considerable distance to grab distant objects or access otherwise out-of-reach areas. After 
          grabbing objects, Yoshi may swallow the object to produce a distinctive spotted egg, which can then be thrown.`;
          break;

        case 5:
          name = "Goombas";
          charInfo = `The first enemy players encounter. They are usually brown and are most commonly seen 
          walking around aimlessly, often as an obstacle.`;
          break;

        case 6:
          name = "Koopa Troopa";
          charInfo = `They are among the oldest recurring enemies in the seriesWhen defeated, Koopas may flee 
          from or retreat inside their shells, which can usually be used as weapons. Koopa shells are a recurring 
          weapon. which they can be fired as projectiles against other racers. Despite making up the bulk of Bowser's 
          army, known as the "Koopa Troop", Koopas as a species are often shown to be peaceful, some teaming up with 
          Mario. An undead Koopa Troopa becomes a Dry Bones.`;
          break;

        case 7:
          name = "Wario";
          charInfo = `Originally portrayed as an exaggerated version of Mario, his name is a combination of Mario's 
          name and the Japanese word warui, meaning "bad". Lore states that Wario was a childhood rival to Mario and Luigi 
          who became jealous of their success.`;
          break;

        case 8:
          name = "Waluigi";
          charInfo = `He plays the role of Luigi's rival and nemesis and accompanies Wario in spin-offs from the main 
          Mario series, often for the sake of causing mischief. described Waluigi as someone who has a lot of self-pity and 
          would "cheat to win." `;
          break;

        default:
          name = "Bowser";
          charInfo = `Bowser is the leader and most powerful of the turtle-like Koopa race, and has been the greedy nemesis of 
          Mario ever since his first appearance. His ultimate goals are to marry Princess Peach, defeat Mario, and conquer the 
          Mushroom Kingdom.`;
          break;

      }
    }
  })
});




// $(function changeImg(event){

// })

// // var superMarioChar = ["Mario", "Luigi", "Princess Peach", "Toad", "Yoshi", "Goomba", "Koba", "Wario", "Wailuigi", "Bowser"]
// // var phrase = document.getElementsByClassName("phrase").innerHTML = ("You've selected " + superMarioChar);

// var char = document.getElementsByClassName("character");

// var charPhrase = document.getElementsByClassName("phrase");


// for (i = 0; i < char.length; i++){
//     charPhrase[i].addEventListener("click", changePhrase);
//     // charPhrase[i].innerHTML = "You have selected ";
// }

// function changePhrase(){
//     alert("Click detected!");
// }
