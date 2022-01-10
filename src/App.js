import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect } from "react";
import Serdin from './images/Serdincontinent.png'
import Canaban from './images/Canabancontinent.png'
import TerradePrata from './images/terradepratacontinent.png'
import Ellia from './images/Elliacontinent.png'
import Xenia from './images/Xeniacontinent.png'
import Aton from './images/Atoncontinent.png'
import Arquimidia from './images/Arquimidiacontinent.png'

import Elesis from './images/elesisbase.png'
import ElesisOne from './images/ElesisOne.png'
import ElesisTwo from './images/ElesisTwo.png'
import ElesisThree from './images/ElesisThree.png'
import ElesisFour from './images/ElesisFour.png'


import Lire from './images/lirebase.png'



const contInfo = [

  {
    name: "Serdin",
    description: "Serdin is one of two kingdoms that rule on Bermesiah, the other being Kanavan. Founded at least 1500 years ago by Scarde Vi Serdin, it is the kingdom of magic, and many phenomenal warriors such as Arme and Edel hail from Serdin. There are also two known organizations within the kingdom: the Violet Mage guild, and the Knights of Serdin. Serdin is currently ruled by a Queen with no mention of a King suggesting that Serdin is ruled by a monarchy. Similarly, Kanavan is ruled by a Queen as well and once a King when first founded.",
    imgaddr: Serdin
  },

  {
    name: "Kanavan",
    description: "Kanavan is one of the two kingdoms that rule on Bermesiah, the other being Serdin. Founded at least 1500 years ago by Esnar Din Kanavan, it is the kingdom of swordsmanship and many phenomenal swordsmen such as Elesis, Ronan, Elscud and Sieghart hail from Kanavan. There are also four known organizations within the kingdom: the Kanavan Royal Guard, the Ruby Knights, the Kanavan Trackers, and the Existor. Kanavan is currently ruled by a Queen and once a King when first founded. Similarly, Serdin is ruled by a Queen as well, but with no mention of a King in its history.",
    imgaddr: Canaban
  },

  {
    name: "Silver Land",
    description: "Silver Land is an island located near the Bermesiah continent that is steadily being polluted by the darkness coming from Xenia. It is home to the Silver Knights, a guild of martials artists who were all but eradicated by the acts of a single traitor. Only Jin and his mentor Asin Tairin survived the massacre, but the two were separated during the siege. According to Jin's profile, it is said that Silver Land was once attached to the Xenia continent.",
    imgaddr: TerradePrata
  },

  {
    name: "Ellia",
    description: "Ellia is one of the two major continents in the world of Aernas, the other being Bermesiah. Before the addition of Archimedia, the map of Ellia in the game was supposed to represent the continent in its entirety but later on became recognized simply as the peninsula. Ellia is the fourth region explored by the Grand Chase consisting of eight regular dungeons and one Hero Dungeon. In Grand Chase Dimensional Chaser, the peninsula is the eighth unlockable area with three regular dungeons.",
    imgaddr: Ellia
  },

  {
    name: "Xenia",
    description: "Xenia is a floating archipelago to the north of Aernas. It consists of eight dungeons and is home to the Deities, but the whole land is falling under a new age of darkness.",
    imgaddr: Xenia
  },

  {
    name: "Alcubra",
    description: "Alcubra, also known as Atum is a region in Ellia and precedes Archimedia. Though mainly a desert-esque region, the southwest area of Alcubra is forested and teeming with plant life. This is one of the few regions where all dungeons have a platform map. On their way to Archimedia, the Chase land ashore on Alcubra. There, they learn that the continent houses a mysterious artifact: the Crown of Sands, and are prompted to find it.",
    imgaddr: Aton
  },

  {
    name: "Archimedia",
    description: "Archimedia is the region upon which Kounat, Mari's kingdom, once existed. Thanks to Ashtaroth, Kounat was destroyed as a result of a huge explosion, and the crater that sits in the heart of the land might be where the kingdom once stood. The capital of the dwarves of Archimedia, Thunder Hammer, and the capital of the elves of Archimedia, Zeruel, also exist here. Both of their kings were vaporized in the explosion that engulfed Kounat, and, blaming each other for the cause, have been at war with each other ever since. According to legend, Archimedia is nicknamed the 'endless land of warfare', referring to the constant fighting between the dwarves and elves",
    imgaddr: Arquimidia
  },

];

/*const elesisJobs = [

  {
    jobName:"Knight",
    jobDesc:"Elesis is feared by her enemies for her powerful attack skills that instantly wipe out entire groups of monsters. She leads her team at the front line of battle, advancing against enemies while defending her allies against the enemy Archers and Mages. When she charges her enemies, they go down without having a chance to retaliate. Elesis has 80% more defense points against Archer's arrows and suffers the least amount of delay among the Grand Chase members when inflicted with powerful damage from enemies.",
    jobLink:"https://grandchase.fandom.com/wiki/Knight",
    weapon:"Sword"
  },

  {
    jobName:"Spearman",
    jobDesc:"Sword Masters are experts in swordplay. This style of fighting was developed by a Bermesiahn mercenary. Contrary to the name, Sword Masters are not limited to the use of swords. They can wield a wide variety of weapons, greatly expanding the number of strategies available to them. The king or queen of a country grants the honorable title of Sword Master to a limited number of people as a reward for completing certain missions and contributing greatly to their respective countries. Elesis' grandfather, Sieghart, was once a Sword Master.",
    jobLink:"https://grandchase.fandom.com/wiki/Spearman",
    weapon:"Spear"
  },

  {
    jobName:"Sword Master",
    jobDesc:"Sword Masters are experts in swordplay. This style of fighting was developed by a Bermesiahn mercenary. Contrary to the name, Sword Masters are not limited to the use of swords. They can wield a wide variety of weapons, greatly expanding the number of strategies available to them. The king or queen of a country grants the honorable title of Sword Master to a limited number of people as a reward for completing certain missions and contributing greatly to their respective countries. Elesis' grandfather, Sieghart, was once a Sword Master.",
    jobLink:"https://grandchase.fandom.com/wiki/Sword_Master",
    weapon:"Greatsword"
  },

  {
    jobName:"Savior",
    jobDesc:"For her work against the evils of Kaze'aze and Dark Anmon, Elesis is being honored with the title of Savior. The title of Savior is reserved only for the greatest Knights whose skills have transcended those of mere mortals. Not simply a defender against evil, they defend the entire world from evil.",
    jobLink:"https://grandchase.fandom.com/wiki/Savior",
    weapon:"Dual-Wielding Swords"
  },

]*/


function App() {


  const [IsGeneral , setIsGeneral] = useState(true);
  const [IsPC , setIsPC] = useState(false);


  // General Info or Game Info
    const forCharac = (whatToDisplay) => {

    setIsGeneral(false);
    setIsPC(false);

    whatToDisplay(true);

  }

    //Elesis Jobs States
    const [ElesisFirst , setElesisFirst] = useState(true);
    const [ElesisSecond , setElesisSecond] = useState(false);
    const [ElesisThird , setElesisThird] = useState(false);
    const [ElesisFourth , setElesisFourth] = useState(false);

    //Lire Jobs States
    const [LireFirst , setLireFirst] = useState(true);
    const [LireSecond , setLireSecond] = useState(false);
    const [LireThird , setLireThird] = useState(false);
    const [LireFourth , setLireFourth] = useState(false);


  //Which job to display
  const forJobs = (first, second, third, fourth , rightJob) => {
    first(false);
    second(false);
    third(false);
    fourth(false);

    rightJob(true);
  }


  const charaInfo = [ 

    {
      imgaddr: Elesis,
      firstImg: ElesisOne,
      secondImg: ElesisTwo,
      thirdImg: ElesisThree,
      fourthImg: ElesisFour,
      name: "Elesis",
      generalInfo: "Elesis was born as the eldest daughter of the Sieghart family. She was trained as hard as possible since she was old enough to handle a sword and has been the Captain of the Ruby Knights for several years. As a child, Elesis couldn't understand her father's strict upbringing. However, as she grew older, she began to understand the importance of her father's methods and dedicated all of her time to improving her strength. Her father, Elscud, joined a team as a member of the unit dedicated to tracking Kaze'aze. Elesis was distraught in learning that, during a battle between her father's tracking unit and Kaze'aze, her father had disappeared. Later Queen Serdin sent a secret letter to Elesis asking her to join the Grand Chase, a union of Kanavan and Serdin, dedicated to pursuing Kaze'aze. Upon receipt of this request, Elesis left home to head to Trial Forest in the kingdom of Serdin, the promised place. Here, she met two girls, Lire and Arme, who would forever change her fate.",
      desktopGame: "Being the first female successor of the Sieghart family, she strives to be strong and tends to act like a man. Despite not being the type to hold grudges, Sieghart's foolish antics have made things difficult on her search to find her missing father. At times when she is filled with worry or cannot think straight, she turns to train her sword to ease her mind.",
      //jobs: {elesisJobs},
  
      firstState: ElesisFirst,
      oneChange: setElesisFirst,
      oneName:"Knight",
      oneDesc:"Elesis is feared by her enemies for her powerful attack skills that instantly wipe out entire groups of monsters. She leads her team at the front line of battle, advancing against enemies while defending her allies against the enemy Archers and Mages. When she charges her enemies, they go down without having a chance to retaliate. Elesis has 80% more defense points against Archer's arrows and suffers the least amount of delay among the Grand Chase members when inflicted with powerful damage from enemies.",
      oneLink:"https://grandchase.fandom.com/wiki/Knight",
      oneWeapon:"Sword",
  
      secondState: ElesisSecond,
      twoChange: setElesisSecond,
      twoName:"Spearman",
      twoDesc:"In general, a Spearman refers to a soldier who specializes in spears. However, in the case of Elesis, her father, Elscud Sieghart, taught her the esoteric spearing technique handed down from generation to generation of their family when she was a child and showed exceptional talent. A Spearman specializes in wielding a long spear, enabling her to dodge strikes and attack enemies from a safe distance. Attacking with a long spear requires different battle strategies than fighting with a sword. Spearmen can use aggressive attack skills, like combo attacks and furious jab-and-throw attacks, and can also carry out quick multiple attacks with grace, despite their cumbersome appearance.",
      twoLink:"https://grandchase.fandom.com/wiki/Spearman",
      twoWeapon:"Spear",
  
      thirdState: ElesisThird,
      threeChange: setElesisThird,
      threeName:"Sword Master",
      threeDesc:"Sword Masters are experts in swordplay. This style of fighting was developed by a Bermesiahn mercenary. Contrary to the name, Sword Masters are not limited to the use of swords. They can wield a wide variety of weapons, greatly expanding the number of strategies available to them. The king or queen of a country grants the honorable title of Sword Master to a limited number of people as a reward for completing certain missions and contributing greatly to their respective countries. Elesis' grandfather, Sieghart, was once a Sword Master.",
      threeLink:"https://grandchase.fandom.com/wiki/Sword_Master",
      threeWeapon:"Greatsword",
  
      fourthState: ElesisFourth,
      fourChange: setElesisFourth,
      fourName:"Savior",
      fourDesc:"For her work against the evils of Kaze'aze and Dark Anmon, Elesis is being honored with the title of Savior. The title of Savior is reserved only for the greatest Knights whose skills have transcended those of mere mortals. Not simply a defender against evil, they defend the entire world from evil.",
      fourLink:"https://grandchase.fandom.com/wiki/Savior",
      fourWeapon:"Dual-Wielding Swords",
    
    },
  
    {
      imgaddr: Lire,
      name: "Lire",
      generalInfo: "Elves from Eryuell Island are famous for their combat skills, but are naturally pacifistic and try to avoid becoming involved in human conflicts. However, in recent years, the war expanded across the entire continent and a series of bizarre incidents occurred. The elves decided to end their isolation and cooperate with humans. Working together, the elves and the humans discover that Kaze'aze is responsible for the havoc that is wrecking the continent. To return peace to Eryuell Island and the continent, the elves decided to continue investigating Kaze'aze and formed the Elven Corps to combat her evil. Lire is a member of the Elven Corps that has joined the Grand Chase on behalf of the elves. ",
      desktopGame: "Born in Eryuell Island and raised away from all the irregularity of war, Lire grew up like a prissy and honorable girl. As a Sagittarius, she has noble ideas and loves freedom. She acts smoothly and expeditiously and does not worry too much about problems, but her outgoing personality drives her like a well-aimed arrow to pursue her goals. Lire likes gathering the seeds of plants and various types of flora. She also grows many vegetables in her garden but finds it difficult to get used to cooking and other household chores. She often acts as a mediator when her team members are fighting. There are times when her patience is driven to the limit, but she rarely exhibits these feelings.",
      
      firstState: LireFirst,
      oneName:"Archer",
      oneDesc:"Archers specialize in powerful long-range bow and arrow attacks and can move quickly and stealthily. Her only downside is that she is easily pursued by Knights, however, she can overcome this vulnerability by using her environment to her advantage, waiting for the perfect opportunity to strike her foes down with a vital arrow shot. Archers are designed for players who are skilled at controlling characters with precision. If Archer is guarded by another Knight in combat, she will make her enemies realize how foolish it was to confront her. Archer's most remarkable special ability is her double jump.",
      oneLink:"https://grandchase.fandom.com/wiki/Archer",
      oneWeapon:"Bow",
  
      secondState: LireSecond,
      twoName:"Crossbowman",
      twoDesc:"As the influence of the continental war extended to Eryuell Island, located at the southern tip of Bermesiah, the number of enemies the elves had to face increased. The elves' common bows, which fires one shot at a time, are difficult to deal with quickly against many enemies, so the Elders of Eryuell Island granted permission to use crossbows that have been refrained from use because of their stronger power. Crossbows are special weapons that can be easily carried and fired rapidly, and can only be used by elves who have undergone special training.",
      twoLink:"https://grandchase.fandom.com/wiki/Crossbowman",
      twoWeapon:"Crossbow",
  
      thirdState: LireThird,
      threeName:"Arch Ranger",
      threeDesc:"As the Bermesiah continent continues to suffer from the war between the humans and the forces of darkness, the elves created a special bow made of Innadril scales passed on from their ancestors with the hope of returning peace to the continent. Only the best Archers were allowed to use the bow. These elite Archers are known as Arch Rangers. Arch Rangers wield a powerful giant bow with an advanced design that enables dynamic arrow attacks that fire at incredibly high speeds.",
      threeLink:"https://grandchase.fandom.com/wiki/Arch_Ranger",
      threeWeapon:"Greatbow",
  
      fourthState: LireFourth,
      fourName:"Nova",
      fourDesc:"Novas are legendary Elven heroes whose name means 'one that will save the world from the darkness.' Lire is Eryuell Island's very first Nova. Novas are Elven archery masters who move with complete freedom and wield Composite Bows which combine the strengths of a crossbow and Great Bow. This allows for the rapid multi-shots of the crossbow and the powerful finishing blows of the giant bow to be incorporated in devastating combo attacks that can swiftly defeat enemies before they can approach a Nova. Her high jumps and agile dashes are essential to Nova's basic combat strategy of confusing and maintaining distance from enemies. Even when surrounded, Novas can use short-range skills to break through the enemy line.",
      fourLink:"https://grandchase.fandom.com/wiki/Nova",
      fourWeapon:"Composite Bow",
    
    },
  

  ]

/*
const SwitchClasses = ({ oneChange , twoChange , threeChange , fourChange }) => (

  <div className="showhide">

    <h2 onClick={() => forJobs(oneChange , twoChange, threeChange , fourChange , oneChange)}>1st</h2>
    <h2 onClick={() => forJobs(oneChange , twoChange, threeChange , fourChange , twoChange)}>2nd</h2>
    <h2 onClick={() => forJobs(oneChange , twoChange, threeChange , fourChange , threeChange)}>3rd</h2>
    <h2 onClick={() => forJobs(oneChange , twoChange, threeChange , fourChange , fourChange)}>4th</h2>

  </div>

);*/

const myVariable = 'header';

const h3first = "We'll be looking at aspects from the original game, characters, gameplay, lore and more!"

const header = (

  <div className={myVariable}>

      <h1>Welcome to Grand Chase.</h1>

      <h3 children={h3first} />

  </div>

);

const Continentes = ({ name , description , imgaddr }) => (

  <div className="continents">

    <div className="descriptionArea" >

      <h3 children = {name}/>

      <p children = {description}/>

    </div>

    <img src={imgaddr} width="45%" />

  </div>

);


const Jobs = ({link, jobName, weapon, jobDesc}) => (

    <div className="jobs">

    <a href={link}><h4 children={jobName} /></a>

    <h5>Weapon: {weapon} </h5>

    <p children={jobDesc} />

  </div>
  
);

const Characters = ({ firstImg , secondImg , thirdImg , fourthImg , oneChange , twoChange , threeChange , fourChange , firstState , secondState, thirdState, fourthState , imgaddr , name , generalInfo , desktopGame , oneLink , oneName , oneWeapon , oneDesc, twoLink , twoName , twoWeapon , twoDesc, threeLink , threeName , threeWeapon , threeDesc, fourLink , fourName , fourWeapon , fourDesc}) => (

  <div className="characters">

    <h3 children = {name} />

    <div className="charaInfo">

      <div className="descriptionArea">

        {IsGeneral &&  <p children={generalInfo} />  }

        {IsGeneral &&  <p children={desktopGame} />  }

        {IsPC &&   
        <div className="showhide">

          <h2 onClick={() => forJobs(oneChange , twoChange, threeChange , fourChange , oneChange)}>1st</h2>
          <h2 onClick={() => forJobs(oneChange , twoChange, threeChange , fourChange , twoChange)}>2nd</h2>
          <h2 onClick={() => forJobs(oneChange , twoChange, threeChange , fourChange , threeChange)}>3rd</h2>
          <h2 onClick={() => forJobs(oneChange , twoChange, threeChange , fourChange , fourChange)}>4th</h2>

        </div>}

        {IsPC && firstState && <Jobs link={oneLink} jobName={oneName} weapon={oneWeapon} jobDesc={oneDesc} />}

        {IsPC && secondState && <Jobs link={twoLink} jobName={twoName} weapon={twoWeapon} jobDesc={twoDesc} />}

        {IsPC && thirdState && <Jobs link={threeLink} jobName={threeName} weapon={threeWeapon} jobDesc={threeDesc} />}

        {IsPC && fourthState && <Jobs link={fourLink} jobName={fourName} weapon={fourWeapon} jobDesc={fourDesc} />}


      </div>

      {IsGeneral && <img src={imgaddr} width="40%" height="20%" />}

      {IsPC && firstState && <img src={firstImg} width="40%" height="20%" />}

      {IsPC && secondState && <img src={secondImg} width="40%" height="20%" />}

      {IsPC && thirdState && <img src={thirdImg} width="40%" height="20%" />}

      {IsPC && fourthState && <img src={fourthImg} width="40%" height="20%" />}



    </div>

  </div>

);



  return (

    <div className="App">


    {header}


      <div className="places">

        <h1>Grand Chase is a 2D platform action adventure, having missions divided into different continents, let's take a look at them.</h1>

        <h2>Continents</h2>

        {contInfo.map(places => <Continentes name={places.name} description={places.description} imgaddr={places.imgaddr} /> )}

      </div>

      <div className="charactersstuff">


        <h1>Here you'll learn about the playable characters in the game.</h1>

        <h2>Going from oldest to most recent!</h2>

        <div className="showhide">

          <h2 onClick={() => forCharac(setIsGeneral)}>General Information</h2>
          <h2 onClick={() => forCharac(setIsPC)}>Desktop Game</h2>

        </div>

        {charaInfo.map(details => <Characters firstImg={details.firstImg} secondImg={details.secondImg} thirdImg={details.thirdImg} fourthImg={details.fourthImg} oneChange={details.oneChange} twoChange={details.twoChange} threeChange={details.threeChange} fourChange={details.fourChange} firstState={details.firstState} secondState={details.secondState} thirdState={details.thirdState} fourthState={details.fourthState} imgaddr={details.imgaddr} name={details.name} generalInfo={details.generalInfo} desktopGame={details.desktopGame} oneLink={details.oneLink}  oneName={details.oneName}  oneWeapon={details.oneWeapon} oneDesc={details.oneDesc} twoLink={details.twoLink} twoName={details.twoName} twoWeapon={details.twoWeapon} twoDesc={details.twoDesc} threeLink={details.threeLink} threeWeapon={details.threeWeapon} threeName={details.threeName} threeDesc={details.threeDesc} fourLink={details.fourLink} fourWeapon={details.fourWeapon} fourName={details.fourName} fourDesc={details.fourDesc}  /> )}

      </div>

    </div>





/*    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */ 
  );
}

export default App;
