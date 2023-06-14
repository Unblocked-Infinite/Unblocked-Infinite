const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const gameInfo = urlParams.get('gameInfo');

if (gameInfo == "" || gameInfo == null || gameInfo == undefined) {
    window.location.href = "./games.html";
}

var game = {
    "cluster-rush": [
        "../games/cluster-rush/index.html",
        "Cluster Trucks",
        ["./screenshots/cluster/s1.jpeg", "./screenshots/cluster/s2.jpg", "./screenshots/cluster/s3.jpg"],
        "Clustertruck is a fast-paced, physics-based platformer game developed by Landfall Games. The objective of the game is to navigate through various obstacle courses by jumping and running on top of a moving fleet of trucks. The player must use their skills to avoid obstacles such as swinging hammers, falling boulders, and collapsing buildings. The game features a variety of levels, each with its unique set of challenges, and players must complete each level while racing against the clock. The game's simple yet addictive gameplay and unique premise have made it a popular title among gamers. Additionally, the game's colorful visuals, lively soundtrack, and challenging difficulty make for an immersive and enjoyable gaming experience.Clustertruck offers a range of gameplay modes, including an endless mode and a level editor, allowing players to create and share their own custom levels with the community. The game also features a wide selection of unlockable abilities, such as double jumping, slowing down time, and a grappling hook, adding to the variety of gameplay and offering different ways to approach each level."
    ],
    "backroom": [
        "../games/backrooms/index.html",
        "Back Rooms",
        ["./screenshots/backroom/s1.jpg", "./screenshots/backroom/s2.webp", "./screenshots/backroom/s3.webp"],
        "The Backrooms game is an immersive and chilling experience that takes players on a journey through a seemingly endless maze of interconnected rooms. It is based on the concept of the Backrooms, a fictional universe where individuals find themselves trapped in a surreal and unsettling environment. As players navigate through dimly lit hallways, decrepit rooms, and eerie corridors, they must solve puzzles, avoid dangerous entities, and unravel the mysteries of their surroundings. The game's atmospheric sound design, haunting visuals, and unexpected encounters create a sense of constant tension and unease, making it an unforgettable adventure for those seeking a truly immersive and terrifying gaming experience. Are you brave enough to enter the Backrooms?"
    ],
    "vex7": [
        "../games/vex7/index.html",
        "VEX 7",
        ["./screenshots/vex7/s1.png", "./screenshots/vex7/s2.jpg", "./screenshots/vex7/s3.jpg"],
        "Vex 7 is a challenging platform game developed by Amazing Adam. The game features a stick figure character, who the player must control through a series of levels filled with obstacles and traps. The objective of the game is to reach the end of each level, collecting stars and avoiding obstacles along the way. The game has a variety of different levels with different themes, such as water, ice, and fire, each with their unique set of challenges. The game's physics-based mechanics make for a satisfying gameplay experience, with the player needing to use precise timing and skillful jumps to progress through each level."
    ],
    "subway": [
        "../games/subway/index.html",
        "Subway Surfers",
        ["./screenshots/subway/s1.webp", "./screenshots/subway/s2.webp", "./screenshots/subway/s3.jpg"],
        "Subway Surfers is a popular mobile game developed by Kiloo and SYBO Games. It was released in 2012 and has since then become one of the most downloaded games on both Android and iOS platforms. The game is set in a busy subway station where the player takes on the role of a graffiti artist who has been caught by the inspector and his dog. The player must run along the tracks, avoid obstacles and collect coins while being chased by the inspector and his dog. The game has simple controls, and players can swipe left, right, up and down to dodge obstacles and collect power-ups. Subway Surfers has a variety of characters, hoverboards, and outfits that players can unlock using coins and keys. The game also has daily challenges and events that keep players engaged and coming back for more."
    ],
    "motox3mp": [
        "../games/motox3m2/index.html",
        "Moto X3M",
        ["./screenshots/motox3m2/s1.jpg", "./screenshots/motox3m2/s2.jpg", "./screenshots/motox3m2/s3.jpg"],
        "Moto X3M Pool Party is an exciting and addictive online motorcycle racing game. As the name suggests, the game takes place in a pool party setting, with players racing their motorcycles through a variety of water-themed levels. The game features stunning graphics and fast-paced gameplay, as well as a range of obstacles to overcome, including jumps, loops, and obstacles. Players can choose from a range of different motorcycles and customize their appearance to suit their style. With over 20 challenging levels to complete, Moto X3M Pool Party offers hours of fun and entertainment. One of the unique features of Moto X3M Pool Party is its physics-based gameplay. Players must carefully control their motorcycle as they race through the levels, adjusting their speed and trajectory to avoid obstacles and land jumps."
    ],
    "bloons4": [
        "../games/bloonstd4/index.html",
        "Bloons TD 4",
        ["./screenshots/bloons4/s1.jpg", "./screenshots/bloons4/s2.jpg", "./screenshots/bloons4/s3.webp"],
        "Bloons TD 4 is a popular tower defense game that has been entertaining players for over a decade. The game puts players in the shoes of a monkey commander, tasked with defending their territory against an onslaught of colorful balloons. Players must strategically place towers along the path to pop the balloons before they can reach the end of the path. The game offers a variety of different towers to choose from, each with its unique strengths and weaknesses. With each level, the balloons become more challenging to pop, requiring players to carefully plan their tower placement and upgrade choices. One of the best things about Bloons TD 4 is its addictively fun gameplay."
    ],
    "templerun2": [
        "../games/temple-run-2/index.html",
        "Temple Run 2",
        ["./screenshots/temple/s1.jpg", "./screenshots/temple/s2.jpg", "./screenshots/temple/s3.jpg"],
        "Temple Run 2 is a thrilling endless running game that has captured the hearts of mobile gamers around the world. The game takes players on an exciting adventure through ancient temples, as they run, jump, slide, and dodge obstacles in a bid to escape the clutches of a demonic monkey. The game features stunning graphics and immersive sound effects, which help to create an intense and engaging gaming experience. Players can collect coins and power-ups along the way, which can help them to unlock new characters and upgrade their abilities. One of the key features of Temple Run 2 is its simple yet addictive gameplay. The controls are easy to learn, but difficult to master, requiring players to have lightning-fast reflexes and quick decision-making skills"
    ],
    "pokemon": [
        "../games/pokemonfirered/index.html",
        "Pokemon Fire Red",
        ["./screenshots/pokemon/s1.jpg", "./screenshots/pokemon/s2.jpg", "./screenshots/pokemon/s3.png"],
        "Pokemon FireRed is a classic role-playing game that has captured the hearts of players around the world. The game follows the story of a young trainer on a journey to become the very best, like no one ever was. Players explore the Kanto region, catching and training Pokemon along the way, in a quest to defeat the eight gym leaders and eventually challenge the Elite Four. The game features a variety of different Pokemon to catch and train, each with its unique strengths and weaknesses. With its engaging story, lovable characters, and addictive gameplay, Pokemon FireRed is a timeless classic that continues to be enjoyed by players of all ages."
    ],
    "mario": [
        "../games/mario/index.html",
        "Mario 64",
        ["./screenshots/mario/s1.jpg", "./screenshots/mario/s2.jpg", "./screenshots/mario/s3.webp"],
        "Super Mario 64 is a classic platformer game that revolutionized the genre with its 3D graphics and innovative gameplay. The game follows Mario on a quest to rescue Princess Peach from the clutches of Bowser, the main villain of the game. Players explore various worlds within Peach's castle, collecting Power Stars to progress to new levels. The game features a variety of enemies and obstacles to overcome, as well as a range of power-ups to help Mario on his journey. With its charming characters, colorful graphics, and engaging gameplay, Super Mario 64 has become a beloved classic among gamers."
    ],
    "vex5": [
        "../games/vex5/index.html",
        "VEX 5",
        ["./screenshots/vex5/s1.jpg", "./screenshots/vex5/s2.jpg", "./screenshots/vex5/s3.jpg"],
        "Vex 5 is a challenging platform game developed by Amazing Adam. The game features a stick figure character, who the player must control through a series of levels filled with obstacles and traps. The objective of the game is to reach the end of each level, collecting stars and avoiding obstacles along the way. The game has a variety of different levels with different themes, such as water, ice, and fire, each with their unique set of challenges. The game's physics-based mechanics make for a satisfying gameplay experience, with the player needing to use precise timing and skillful jumps to progress through each level."
    ],
    "geometrydash": [
        "../games/geometrydash/index.html",
        "Geometry Dash",
        ["./screenshots/geo/s1.jpg", "./screenshots/geo/s2.jpg", "./screenshots/geo/s3.jpg"],
        "Geometry Dash is a popular mobile and PC game that is all about fast-paced platforming action and rhythm-based gameplay. In this game, players control a customizable character through a series of challenging levels filled with obstacles and hazards. The levels are designed with vibrant colors, shapes, and patterns that synchronize with the background music to create an immersive experience. Players must time their jumps, flips, and slides perfectly to avoid the obstacles and progress through each level. With its addictive gameplay, challenging difficulty, and customizable features, Geometry Dash has become a popular game among gamers of all ages."
    ],
    "tunnelrush": [
        "../games/tunnelrush/index.html",
        "Tunnel Rush",
        ["./screenshots/tunnelrush/s1.png", "./screenshots/tunnelrush/s2.jpg", "./screenshots/tunnelrush/s3.jpg"],
        "Tunnel Rush is an adrenaline-fueled, fast-paced game that challenges players to navigate through an endless tunnel filled with obstacles. The game is simple yet addictive, as players must use their reflexes and hand-eye coordination to avoid obstacles and survive for as long as possible. As the speed of the tunnel increases, so does the difficulty of the game, providing a thrilling and intense experience. Tunnel Rush has gained popularity among gamers of all ages and skill levels due to its easy-to-learn gameplay, visually appealing graphics, and challenging gameplay. Whether playing alone or competing with friends, Tunnel Rush offers a fun and exciting way to test your skills and reflexes."
    ],
    "bitlife": [
        "../games/bitlife/index.html",
        "Bitlife",
        ["./screenshots/bitlife/s1.jpg", "./screenshots/bitlife/s2.png", "./screenshots/bitlife/s3.png"],
        "BitLife is a life simulation game that has gained immense popularity since its release. In BitLife, players live out virtual lives from birth to death, making choices that impact their character's life story. The game allows players to experience different life paths, ranging from a successful and fulfilling life to a life of crime and chaos. The game is praised for its vast range of choices and the freedom it gives players to create unique stories. Players can choose their character's gender, name, and even country of birth, adding to the game's realism. The game includes various aspects of life, including education, career, relationships, and even the ability to have children. With regular updates and new features, BitLife continues to keep players engaged and entertained. BitLife offers an exciting and immersive experience, making it one of the most popular life simulation games available."
    ],
    "retrobowl": [
        "../games/retrobowl/index.html",
        "Retro Bowl",
        ["./screenshots/retrobowl/s1.avif", "./screenshots/retrobowl/s2.jpg", "./screenshots/retrobowl/s3.jpeg"],
        "RetroBowl is a classic-style football game that combines arcade-style gameplay with modern graphics and features. The game is inspired by the classic football games of the 80s and 90s and offers players the chance to take control of their own football team. In RetroBowl, players can create and customize their team, selecting players from a pool of available athletes and improving their team's skills and abilities over time. The game includes both offense and defense gameplay, giving players the chance to control their team's strategies on both sides of the ball. The game's retro-style graphics and sound effects give it a unique charm, while its easy-to-learn gameplay makes it accessible for players of all skill levels. RetroBowl has gained a dedicated fan base due to its addictive gameplay, customization options, and overall nostalgic feel. With regular updates and new features, RetroBowl continues to provide players with an enjoyable and engaging football experience."
    ],
    "superhot": [
        "../games/superhot/index.html",
        "Super Hot",
        ["./screenshots/superhot/s1.jpg", "./screenshots/superhot/s2.webp", "./screenshots/superhot/s3.jpg"],
        "Superhot is a unique first-person shooter game that has gained widespread popularity for its innovative gameplay mechanics. The game's primary feature is its 'time moves only when you move' gameplay, which allows players to manipulate time by slowing it down or speeding it up based on their movement. This creates a strategic element to the gameplay, where players must plan their movements and shots carefully to succeed. The game features stylized graphics and a minimalist art style, creating a visually striking and immersive experience. The game's levels are designed as puzzles, with players having to navigate through various environments while avoiding obstacles and enemy attacks. The game's challenging difficulty level and engaging gameplay have made it a hit among gamers of all levels. With a range of levels and challenges, Superhot offers an exciting and unique gameplay experience that keeps players coming back for more."
    ],
    "hardestgame": [
        "../games/worlds-hardest-game/index.html",
        "Hardest Game",
        ["./screenshots/hardestgame/s1.jpg", "./screenshots/hardestgame/s2.webp", "./screenshots/hardestgame/s3.webp"],
        "The Hardest Game is a popular online game that lives up to its name, offering a challenging and frustrating gameplay experience. The game requires players to navigate a red square through a series of obstacles while avoiding blue circles that act as enemies. The game's difficulty lies in the precision required to move the square through the obstacles, with even the slightest mistake resulting in the player's failure and having to restart the level. The game's simple graphics and sound effects add to its difficulty, as players must rely solely on their skills and reflexes to succeed. Despite its simple premise, The Hardest Game has gained a dedicated fan base due to its addictive gameplay and the satisfaction of finally completing a level after many attempts. With a range of levels of increasing difficulty, The Hardest Game offers a challenging and engaging experience that tests players' patience and perseverance."
    ],
    "csgo": [
        "../games/csgo-clicker/index.html",
        "CSGO Clicker",
        ["./screenshots/csgo/s1.jpg", "./screenshots/csgo/s2.jpeg", "./screenshots/csgo/s3.jpeg"],
        "A CSGO clicker game is a popular genre of game that challenges players to click their way to success by earning points that can be used to purchase weapons and upgrades. The game is inspired by the popular first-person shooter game, Counter-Strike: Global Offensive (CSGO), and allows players to simulate the experience of buying and upgrading weapons in the game. In a CSGO clicker game, players must click rapidly on the screen to earn points, which they can then use to purchase weapons and upgrades, such as skins and accessories. The game's addictive nature comes from the desire to earn enough points to purchase the best weapons and upgrades, which can then be used to earn even more points and progress through the game. With various levels of difficulty and a range of weapons and upgrades to choose from, a CSGO clicker game offers an engaging and entertaining experience for players of all levels."
    ],
    "hardestgame2": [
        "../games/worlds-hardest-game-2/index.html",
        "Hardest Game 2",
        ["./screenshots/hardestgame/s1.jpg", "./screenshots/hardestgame/s2.webp", "./screenshots/hardestgame/s3.webp"],
        "The Hardest Game is a popular online game that lives up to its name, offering a challenging and frustrating gameplay experience. The game requires players to navigate a red square through a series of obstacles while avoiding blue circles that act as enemies. The game's difficulty lies in the precision required to move the square through the obstacles, with even the slightest mistake resulting in the player's failure and having to restart the level. The game's simple graphics and sound effects add to its difficulty, as players must rely solely on their skills and reflexes to succeed. Despite its simple premise, The Hardest Game has gained a dedicated fan base due to its addictive gameplay and the satisfaction of finally completing a level after many attempts. With a range of levels of increasing difficulty, The Hardest Game offers a challenging and engaging experience that tests players' patience and perseverance."
    ],
    "vex3": [
        "../games/vex3/index.html",
        "VEX 3",
        ["./screenshots/vex3/s1.jpg", "./screenshots/vex3/s2.jpg", "./screenshots/vex3/s3.webp"],
        "Vex 3 is a challenging platform game developed by Amazing Adam. The game features a stick figure character, who the player must control through a series of levels filled with obstacles and traps. The objective of the game is to reach the end of each level, collecting stars and avoiding obstacles along the way. The game has a variety of different levels with different themes, such as water, ice, and fire, each with their unique set of challenges. The game's physics-based mechanics make for a satisfying gameplay experience, with the player needing to use precise timing and skillful jumps to progress through each level."
    ],
    "vex4": [
        "../games/vex4/index.html",
        "VEX 4",
        ["./screenshots/vex4/s1.jpg", "./screenshots/vex4/s2.jpg", "./screenshots/vex4/s3.webp"],
        "Vex 4 is a challenging platform game developed by Amazing Adam. The game features a stick figure character, who the player must control through a series of levels filled with obstacles and traps. The objective of the game is to reach the end of each level, collecting stars and avoiding obstacles along the way. The game has a variety of different levels with different themes, such as water, ice, and fire, each with their unique set of challenges. The game's physics-based mechanics make for a satisfying gameplay experience, with the player needing to use precise timing and skillful jumps to progress through each level."
    ],
    "stc": [
        "../games/stc/index.html",
        "Street Cars 2",
        ["./screenshots/stc/s1.jpg", "./screenshots/stc/s2.jpg", "./screenshots/stc/s3.jpg"],
        "Madalin Stunt Cars 2 is a popular online game that offers an exciting and immersive driving experience. The game features a range of customizable cars that players can use to perform stunts and race against other players. The game's physics-based mechanics allow players to perform a range of impressive stunts, including flips, spins, and jumps, with each car having unique handling characteristics. The game features a range of different environments, from cityscapes to desert landscapes, each with unique obstacles and challenges. The game's multiplayer mode allows players to race against other players online, adding an element of competition to the gameplay. The game's graphics are impressive, with detailed car models and environments that add to the overall immersive experience. With regular updates and new cars and environments added, Madalin Stunt Cars 2 offers an exciting and entertaining experience that keeps players engaged and coming back for more."
    ],
    "eatio": [
        "../games/eatio/index.html",
        "Eat IO",
        ["./screenshots/eatio/s1.jpg", "./screenshots/eatio/s2.jpg", "./screenshots/eatio/s3.jpg"],
        "Eat.io is an exhilarating multiplayer online game that combines elements of strategy, competition, and growth. In this fast-paced and addictive title, players find themselves immersed in a vibrant virtual world where the objective is to consume objects or other players to expand in size. With intuitive controls and a dynamic environment, players must navigate through a bustling arena while strategically maneuvering to outwit opponents and claim victory."
    ],
    "drivemad": [
        "../games/drive-mad/index.html",
        "DriveMad",
        ["./screenshots/drivemad/s1.jpg", "./screenshots/drivemad/s2.jpg", "./screenshots/drivemad/s3.jpg"],
        "DriveMad is an adrenaline-fueled racing game that pushes the boundaries of speed, skill, and competition. Get ready to unleash your inner race car driver as you take control of powerful and meticulously designed vehicles, tearing through immersive tracks in a quest for victory. With stunning graphics and realistic physics, every turn, drift, and acceleration will leave you on the edge of your seat. Choose from a diverse selection of high-performance cars and customize them to your liking, optimizing their performance to gain the upper hand against your opponents."
    ],
    "cookie": [
        "../games/cookie-clicker/index.html",
        "Cookie Clicker",
        ["./screenshots/cookie/s1.jpg", "./screenshots/cookie/s2.png", "./screenshots/cookie/s3.jpg"],
        "Cookie Clicker is a delightful and addictive incremental game that revolves around the simple act of clicking cookies. Prepare to embark on a mouthwatering journey as you click your way to cookie domination. With each click, you earn cookies that can be used to purchase upgrades, unlock new cookie-generating structures, and expand your cookie empire. As your cookie count grows exponentially, you'll witness the satisfying progression from a humble cookie clicker to a global baking tycoon. The game's charming pixel art style, whimsical upgrades, and humorous achievements create an engaging and captivating experience that will keep you hooked for hours."
    ],
    "amoungus": [
        "../games/among-us/index.html",
        "Amoung Us",
        ["./screenshots/amoungus/s1.jpg", "./screenshots/amoungus/s2.jpg", "./screenshots/amoungus/s3.jpg"],
        "Among Us is a thrilling and suspenseful multiplayer game that takes place aboard a spacecraft or a space station, where players assume the roles of crewmates and impostors. The objective is to either complete tasks as a crewmate to ensure the ship's smooth operation or deceive and eliminate crewmates as an impostor, without getting caught. The game tests your deduction skills, teamwork, and ability to deceive and detect lies. As a crewmate, you must work together with others to identify the impostors and vote them out, while impostors must cleverly blend in, sabotage the crew's efforts, and eliminate unsuspecting crewmates one by one. With its minimalist yet visually engaging graphics and the element of surprise around every corner."
    ],
    "slope": [
        "../games/slope/index.html",
        "Slope",
        ["./screenshots/slope/s1.png", "./screenshots/slope/s2.png", "./screenshots/slope/s3.png"],
        "Slope is a thrilling and addictive 3D endless running game that challenges players to navigate a fast-paced and treacherous slope. Prepare to embark on a gravity-defying adventure as you control a rolling ball through a twisting, turning, and ever-changing course. Your objective is to survive as long as possible while avoiding obstacles and pitfalls that threaten to derail your progress. With its sleek graphics, smooth controls, and dynamic gameplay, Slope keeps you on the edge of your seat as you make split-second decisions and rely on your reflexes to overcome the challenges ahead. As the speed increases, the intensity ramps up, and every moment becomes a test of skill and concentration."
    ],
    "slope2": [
        "../games/slope2/index.html",
        "Slope 2",
        ["./screenshots/slope/s1.png", "./screenshots/slope/s2.png", "./screenshots/slope/s3.png"],
        "Slope 2 is a thrilling and addictive 3D endless running game that challenges players to navigate a fast-paced and treacherous slope. Prepare to embark on a gravity-defying adventure as you control a rolling ball through a twisting, turning, and ever-changing course. Your objective is to survive as long as possible while avoiding obstacles and pitfalls that threaten to derail your progress. With its sleek graphics, smooth controls, and dynamic gameplay, Slope 2 keeps you on the edge of your seat as you make split-second decisions and rely on your reflexes to overcome the challenges ahead. As the speed increases, the intensity ramps up, and every moment becomes a test of skill and concentration."
    ],
    "10mtd": [
        "../games/10mtd/index.html",
        "10 Minutes Till Dawn",
        ["./screenshots/10mtd/s1.jpg", "./screenshots/10mtd/s2.jpg", "./screenshots/10mtd/s3.jpg"],
        "10 Minutes Till Dawn is an adrenaline-pumping 2D ghost shooter that plunges players into a haunting and action-packed supernatural world. As a fearless ghost hunter, you find yourself trapped in a mysterious location infested with malevolent spirits. With only 10 minutes until dawn, you must navigate through eerie environments, armed with an arsenal of ghost-busting weapons. Your goal is to eradicate the spectral menace that lurks within, using your quick reflexes and precise aim to vanquish the supernatural threats that emerge from every shadow. As the minutes tick away, the intensity ramps up, with increasingly challenging enemies and spine-chilling encounters. "
    ],
}

var iframe = document.getElementById("iframe");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var desc = document.getElementById("desc");
try {
    iframe.src = game[gameInfo][0];
    alert("Some Games Can Take 1-5 Minitues To Load");
} catch (e) {
    window.location.href = "./games.html";
}

document.title = game[gameInfo][1];
img1.src = game[gameInfo][2][0];
img2.src = game[gameInfo][2][1];
img3.src = game[gameInfo][2][2];
desc.innerText = game[gameInfo][3];




// Check if the device is a mobile device or not a computer
var isMobileOrNotComputer = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Windows Phone/i.test(navigator.userAgent) || !navigator.userAgent.match(/(iPad)|(Macintosh)|(Windows)|(Linux)/i);

if (isMobileOrNotComputer) {
    // Create the blur element
    var blurElement = document.createElement('div');
    blurElement.className = 'blur-overlay';
    document.body.appendChild(blurElement);

    // Hide overflow on mobile or non-computer devices
    document.body.style.overflow = 'hidden';

    // Create the unsupported-popup
    var popupBox = document.createElement('div');
    popupBox.className = 'unsupported-popup';

    var message = document.createElement('span');
    message.textContent = 'Your device is not supported';

    var okButton = document.createElement('button');
    okButton.textContent = 'OK';

    // Redirect to index.html when OK button is clicked
    okButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    popupBox.appendChild(message);
    popupBox.appendChild(okButton);
    document.body.appendChild(popupBox);
}


