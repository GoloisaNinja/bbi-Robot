let surveyName = ''
let pageBody = document.querySelector('body')
let randNum = Math.floor(Math.random() * 1001)

const randomBulletList = [
    'Harness untold energy',
    'Get more dates',
    'Live longer',
    'Become a captain of industry and boats',
    'Show everyone you are better and smarter than them',
    `Increase your metabolism by ${randNum} percent`,
    `Look ${randNum} years younger`,
    'Become taller and more attractive by normie standards',
    `Use less carbon by a factor of ${randNum}`,
    'Live long and prosper more prosperously',
    'Eat fewer carbs but not even notice',
    'Enjoy life more and smell better',
    'Get better seats at large sold out events',
    'Have smoother softer skin',
    'Be able to suddenly divide by zero',
    'Learn the future and go back in time',
    'Get a real life Lightsaber mailed to you',
    'Sleep better at night and wake up without aches',
    'Be able cook more than just hotdogs',
    'Inspire books to be written about your greatness',
    'Star in a soda commercial',
    'Invent a USB plug that is both a spark plug and a drain plug',
    'Probably solve climate change',
    `Increase human technological advancement by ${randNum} years`,
    'Get a dinosaur as a pet',
    'Meet the stars of the Marvel Universe, but not because you are dying',
    'Be able to do one arm pushups without arms',
    'Be able to sell Ebay on Ebay to Ebay',
    'Cry less and have shiny hair',
    'Be loved by puppies and get to pet them',
    'Never get a speeding ticket again',
    'Suddenly be able to hear colors',
    'Have more net worth than Napoleon had Dynamite',
    'Find true love and cookies in your pockets'
]

const randomQuickName = [
    'Random Pants',
    'Impatient Random Person whose data I have not collected',
    'Person that couldn\'t wait',
    'Off the grid too good for surveys Person',
    'Spends 25 mins in line for coffee but can\'t complete a survey Person',
    'Used to be cool before you got old and impatient Person',
    'Probably parks in handicap spots becuase you are that person Person'
]

const hateYourNameArray = [
    'awful.',
    'boring.',
    'the worst.',
    'something someone might name a disease.',
    'horrid.',
    'not great, let\'s be honest.',
    'well, I guess you know how bad it is right?',
    'woefully devoid of vowels and meaning.',
    'terribly contrived I\'m afraid.',
    'pretty basic, and when I say basic I say it like a thirteen year old would say it.',
    'worse than what 62 year old men that move to Florida name their boat. ',
    'reminiscent of that smell that eminates from refridgerators in the landfill. ',
    ', wow, um, actually not bad. ',
    'sounds like something you\'d combine with yeast in a recipe. '
]

const hateYourJobArray = [
    'which is just really, really, really, immeasurably sad.',
    'which is uninspired at best.',
    'which must feel like being the last one to get picked in dodgeball.',
    'which makes me, as a robot, actually happy I\'m not human.',
    'which must make you an absolute hoot at bring your parent to work day (robot sarcasm).',
    'which makes me think you picked your job in kindergarten and just never expanded beyond that point.',
    'which is sort of like you got first place in the Loser Olympics.',
    'which just makes me, as a robot, glad that I can wipe my memory at will.'
]

const laughableYearsArray = [
    'I\'m sorry, but this is giving me robot giggles. ',
    'I\'m frankly surprised you\'ve made it this long. ',
    `If it makes you feel any better, I\'ve been doing this job for roughly ${randNum} days. `,
    `Honestly, that is an eternity in robot seconds. ${randNum} multiplied by the length of pi to be precise. `,
    'I genuinely find it sad how much time you meatbags spend at work. '
]

const freudJudgementArray = [
    'You are an incredibly sick individual. ',
    'Hahahahahahaha, I was thinking the same thing thought buddy. ',
    'I need to ask if you smell smoke or taste pennies, I believe you to be having a stroke. ',
    'Seriously?  That\'s what is in your wrinkly electric meat processor right now? ',
    'I find human thoughts to be squishy and weird. Just like your meatsack bodies. ',
    'I mean. Yeah. Ok. Sure. You do you. ',
    'I am beginning to think allowing for free text input was a malformed idea. You have polluted my circuitry. ',
    'There are so many things I could say right now. But I will choose not to.  You should learn from my robot restraint. '
]

const businessGoalJudgement = [
    'I find this to be an admirable goal. ',
    'I find this to be a deplorable goal. But I like your initiative. ',
    'Hahahahahahaha, I find robot comedy in your ambitions. ',
    'Perhaps after reading your idea, which I\'ve worked very hard on. You could retake the questionnaire and use better answers. ',
    'I am emboldened by your goals and will erect a statue in your honor within the processor cores. ',
    'Based on you desired outcome, let me just say. You sicken me. '
]

const randBusinessGoal = [
  'Company Profitability',
  'Personal Financial Gain',
  'Putting a curse on a fellow employee',
  'Innovation',
  'Sucking up to the CEO',
  'Making Friends',
  'Being a better Person',
  'Creating your own Religion',
  'OMG, the WILDCARD BITCHES'
]

const badBusinessIdeaArray = [{
  idea: 'Hibachi and Breakfast. Wake up to the aroma of coffee, the sound of sizzling bacon, and the peaceful clanging of a blade wielding food ninja.',
  tags: 'food, restaurant, hibachi, ninja, ninjas, bed, breakfast, knives, clanging',
  level: 3,
  goal: 'innovation, making friends, company profitability, personal financial gain, OMG'
},
{
  idea: 'Inside out ice cream bars. Chocolate in the middle. Napkins not included. Sell during heatwaves for highest napkin profits.',
  tags: 'ice cream, chocolate, food, napkins, messy, desserts, treats, sugar',
  level: 2,
  goal: 'innovation, company profitability, sucking up to the ceo, personal financial gain, omg'
},
{
  idea: 'Boxed Wine Waterbeds. Waterbeds made out of bagged wine.  Can\'t sleep...have a drink.  Proprietary refill valves to ensure you own the refill survice.  Mark up boxed wine by 50%.',
  tags: 'liquor, wine, beverage, beverages, sleep, bed, beds, furniture, alcoholism, alcohol, lush, lushes, enabling',
  level: 3,
  goal: 'company profitability, personal financial gain, innovative, omg',
},
{
  idea: 'Gather immense amount of tires.  The older the better.  Find a town near a mountain that looks like it could be a dormant volcano.  Climb the mountain.  Pile the vast amount of old tires into a hole near the top of the mountain.  Any hole will do so long as they all fit.  Light those bitches on fire.  Run down the mountain screaming that she\'s gonna blow.  Tell anyone that will listen that your GrandDaddy always thought this rock would sing.  Wait out the mass evacuation.  Claim the town as your own.  Possession is nine tenths of the law.',
  tags: 'crazy, mountain, volcano, stealing, steal, theft, grand theft, mayor, ownership, town, city, tires, tire, old tires, granddaddy, fire, fires, deviant',
  level: 3,
  goal: 'personal financial gain, omg, innovation'
},
{
  idea: 'Start a public access tv show about gladiators fighting dinosaurs to gain viewership.  Attract network execs with goofy side segments a la Wayne\'s World.  Once you go national, switch programming to ultra right wing religious conservatism.  Talk about stuff like the "end times" and "prophets" and "laser car wash franchises".  Demand people send you money for salvation and franchise ownership possiblites. Launch international network of sub public access channels and repeat process worldwide. Use your money to light your cuban cigars in your private jet apocalypse palace.',
  tags: 'apocalypse, religion, christ, church, insanity, cable access, wayne\'s world, party time, excellent, bunker, bible, god, jesus, multi level marketing scheme, scheme, private jet, jets, ',
  level: 3,
  goal: 'creating your own religion, personal financial gain'
},
{
  idea: 'Baby changing robot and diaper catapult 4.0. Using advanced AI technology the robot is able to detect a soiled diaper from up to 100 meters away. With a cutting edge 3rd generation carbon fiber catapult arm, the diapers are launched almost a full kilometer. Improving on version 2.0 and the absolutely disastrous 3.0 model, the 4.0 is now the industry leader with an incredible accidental baby launch rate under 1/10,000!',
  tags: 'baby, diaper, diapers, catapult, carbon fiber, soiled, easy, AI, technology, convenience, ease of use, internet of things, kilometer, meter, meters, cutting edge, babies, safety, not safe, disaster',
  level: 3,
  goal: 'personal financial gain, innovation'
},
{
  idea: 'Mercury based finger paints for kids! Watch as your small children light up with amazement as they try to make our mercury based finger paints soak into the canvas. Cleanup is a breeze. When you are done, just rinse the mercury down the sink! Or use it to fill a glass tube and have a new DIY thermometer!',
  tags: 'mercury, thermometer, children, paint, painting, paints, art, artistic, poison, death, dying, entertainment, canvas, kids, activities for kids, pollution',
  level: 3,
  goal: 'innovation, being a better person'
},
{
  idea: 'Franchise of Ninja Donut Shops. Employ only Ninjas. The only currency accepted is death.  You have to kill a Ninja to get your donut.  If you fail, the Ninja eats your donut over your mutilated corpse.  Ninja Donut Shop is now the sole heir to the deceased estate.  Make sure you swap out the Ninjas after they have gotten fat by eating the all donuts of their dead victims, otherwise profits could suffer.',
  tags: 'ninja, ninjas, donut, donuts, donut shop, death, currency, murder, estate planning, franchise, restaurant, restaurants, franchises, estate, heir, heirs, failure',
  level: 3,
  goal: 'personal financial gain, innovation, company profitability'
},
{
  idea: 'Design shirts with fruit roll ups for collars. Long meeting? Pop your collar like a boss and eat like a 12 year old King. Replacement collars cost twice as much as the actual shirt, but are literally just a package of fruit roll ups, so profit margins are huge. Being machine washable is lame, these shirts are Fruit Dry Cleaning ONLY!  You own and operate the only Fruit Dry Cleaning Shop in the State.  You don\'t actually even clean the shirt, you just spritz them with Febreeze.  Advertise that Fruit Dry Cleaning is environmentally conscious.  You\'re not even lying because you use no actual cleaning products.',
  tags: 'fruit, roll, up, ups, fruit roll ups, collar, collars, shirt, shirts, clothing, dry cleaning, cleaning, febreeze, treats, sweets, candy, food, franchise, business, profits, profit',
  level: 3,
  goal: 'personal financial gain'
},
{
  idea: 'Carrying a gun can be inconvenient.  They are bulky and heavy...at least the cool ones are.  Download the Mobile Gun App!  With the convenience of Uber (think Uber Eats), you can now get a fully loaded gun delivered to you at any location at any time.  You are only charged based on usage, time of possession and potential surge up charges (think riots).  When done, just leave the gun at any Bird Scooter Charging station.',
  tags: 'trucking, logistics, sharknado, uber, bird, scooter, rampage, gun, guns, fully loaded, make my day, dirty harry, clint eastwood, convenience, time of possession',
  level: 3,
  goal: 'innovation, making friends'
},
{
  idea: 'Rename a Felon!  Tired of paying to rename stupid stuff like stars and celestial objects after loved ones?  Now you can pay to legally rename felons after your worst enemies!  For an extra "Cambridge Analytica" fee, any future crimes your renamed felon commits can be boosted using advanced search engine optimization and facebook saturation ads.',
  tags: 'felon, felons, crime, jail, enemy, enemies, stars, celestial objects, moon, sun, planet, planets, legal, legally, rename, facebook, cambridge analytica, fee, extra fee, fees, upcharges, worst enemy, worst enemies, search engine, optimization',
  level: 3,
  goal: 'being a better person, innovation, personal financial gain'
},
{
  idea: 'Have you ever gone to the park only to be blinded by flashes as doting parents do nothing but photograph their stupid babies and children?  Are you sick of it?  Order the MagnaBlast!  The MagnaBlast is an exteremly powerful electromagnet you can carry in your pocket!  Just charge your MagnaBlast for the prescribed 64 hour time frame and you are ready to go!  Flip the power toggle while walking through the park to instantly disable any electronic device within a 40 meter radius with our patented DEMPF (Dangerous Electro Magnetic Pulse Field) technology!  Watch with delight as parents can no longer capture their ugly children doing mundane things.  Left your MagnaBlast at home but need to wipe your hard drives fast?  No worries!!  MagnaBlast can be connected to your home wifi and controlled with our propietary App.  This way you can trigger MagnaBlast remotely! Suck that early crime prevention unit! The possibilites and cancer clusters are endless!',
  tags: 'cancer, magnets, electromagnetic pulse, electromagnetic pulses, emp, kids, babies, stupid parents, parents, annoying, park, parks, parks and rec, technology, camera, cameras, cancer clusters, wifi, hard drives, pocket nuke',
  level: 3,
  goal: 'personal financial gain, innovation'
},
{
  idea: 'Are you tired of your married friends always cancelling plans with you because they have kids?  You\'re not alone!  Every day millions of single and lonely losers like yourself get cancelled on because their married kid-riddled friends have kid-riddled excuses.  Start a Surpirse Child Babysitting Service!  Just rent a large window-less cargo van (preferrably from the 1970\'s) and approach your friend\'s kids as they walk home from school.  Offer them candy and puppies to get in your van!  Speed away and drive them to one of thousands of remote Surprise Babysitting facilities and let the fun begin.  The kids will be looked after by a registered full time staff and your friends will now be free to go see that movie!  A blocked phone call (for privacy) will be made to your friend\'s house within the next few hours demanding the fee for (your services) to return their kid(s).  Thanks Surprise Babysitting Service!',
  tags: 'kidnapping, kids, kid, children, child, baby, babies, babysitting, stood up, cancelled, lame, millenials, kid riddled, excuses, lonely, loser, candy, cargo van, surprise, felony',
  level: 3,
  goal: 'making friends, personal financial gain'
},
{
  idea: 'Do you have a partner?  Do they text you and actually expect responses back, like in a timely fashion?  Are they constantly telling you that you never say nice things?  Just follow your HART!  No not your meaty flesh bag, your HART, Heuristic Automated Response Text!  That\'s right, never again be burdened with actually having to communicate, just let our patented and lifeless/loveless application do it for you!  Enter a few seemingly meaningless data points for the annoying person in your life that texts you all the time, like height, weight, number of times you\'ve considered suicide in their presence, and HART will customize and automate no less than 5 basically normal human responses!  Simply allow our app to read all your texts and online activity and the next time THAT PERSON texts you, a randomized response will be sent within 37 seconds! Just read this testimonial from Trey in New Jersey! "My wife used to nag me when I\'d go fishing and not come home for 7 weeks.  With HART, my phone just automatically told her I\'d been drafted by the CIA to save the world. When I got home, she wasn\'t even there to yell at me, and she\'d even cleaned out our house!  Thanks HART!" - Trey (actual customer)',
  tags: 'divorce, heuristic, automated, texts, communication, hart, love, husband, wife, partner, AI, robots, app, better life',
  level: 3,
  goal: 'being a better person, innovation'
},
{
  idea: 'Take advantage of today\'s extreme athletes and organize a World\'s Toughest Event Event!  Buy stretchy nylon attire and camp out in the whole foods aisles of your local grocery store.  Act like your talking on your phone to your friend, Lazer, about the most ridiculous and extreme event you just signed up for.  Mention that it\'s like a Ninja Warrior Marathon Triathlon Obstical Mudder Navy Seal Endurance Vision Quest.  Scream loudly that no one has ever finished it!  Also yell loudly that signups are at *insert random park location here*.  Act like the call drops and repeat this process for several hours.  Draw a treasure map with no distinct directions or instructions, just write at the bottom that "The markers are EVERYWHERE". Make 600 copies at Kinkos buy $3.00 worth of lanyards (this should be roughly 18,000 lanyards). Set up a table at the location you screamed and charge $500.00 per person for signup. Give them a map and a lanyard (this will add to your legitimacy).  Sell granola and trail mix for $20.00 a bag.  Tell everyone you\'ll see them at the finish line!  Pack up shop and repeat this in the next state over.  Be your own Boss, retire when you want!',
  tags: 'hoax, race, obstacle course, navy seal, ninja warrior, false advertising, whole foods, lazer, athlete, extreme, stretchy nylon, treasure map',
  level: 3,
  goal: 'making friends, personal financial gain'
},
{
  idea: 'You\'ve heard of the Flat Earth Society right?  You might even have heard of the Flat Moon Society and Flat Jupiter.  But you know what you haven\'t heard of?  The Flat Asteroid Society.  And you know what that means?  Opportunity! Treasure!  First, found the society. Second, make t-shirts!  Third, THERE IS NO THIRD! NOTHING IS THREE DIMENSIONAL!',
  tags: 'flat, earth, celestial, moon, star, galaxy, asteroid, space, society',
  level: 2,
  goal: 'making friends, personal financial gain'
},
{
  idea: 'Want a Butler but can\'t afford one? Not to mention you don\'t want your crazy lifestyle to be judged or leaked to media outlets.  Feel like the Alzheimers community isn\'t pulling their weight?  Introducing Alzheimers Butlers!!  It\'s an absolute win!  We finally put the forgetful slobs to work AND they\'ll never judge you for eating cereal naked on the toilet BECAUSE they won\'t freaking remember it even happened!  Can\'t pay your Alzheimers Butler this week because you spent all your money on columbian blow?  Don\'t worry about it!  They don\'t even know they have a job!',
  tags: 'blow, alzheimers, butler, lifestyle, posh, servant, toilet cereal, slavery, exploitation',
  level: 3,
  goal: 'personal financial gain'
},
{
  idea: 'Launch your own Contruction Immune Uber Service.  Call it D-Uber (Dumptruck-Uber).  Instead of picking people up in your Prius and getting stuck in the multitude of construction nightmares scattered throughout any given city, pick people up in a bonafide construction immune Dump Truck.  Gain access to the hitherto unusable "Truck Entry" points or use the super fun "Truck Lane" you\'ve always dreamt about.  If you get stopped by other construction workers or the Fuzz, just explain that it\'s your first day on the job and you are delivering a State Inspector (point to your fare) to the "Boss".  Throw in a comment about the bad coffee at the last union meeting. You\'ll be waived through instantly!  For extra believe-ability (and profits!), fill your dump truck with dirt and use it as a daycare facility!  Call it Danger Dirks Dirty Day Care!  Just tell the kids to dive really deep in the dirt any time the truck comes to full stop or if they hear talking.  You know, like a game!  It\'ll be fun!  The kids will be exposed to all kinds of new bacteria which will make their microbiomes stronger.  Also, KIDS LOVE GAMES!  Charge extra for the diverse number of gross bacteria you offer.',
  tags: 'transportation, logistics, ride share, uber, dump truck, daycare, kid, bacteria, infection, profits, construction, union, illegal, lying, lie, danger, lawsuit,',
  level: 3,
  goal: 'personal financial gain, innovation'
 },
 {
  idea: 'The Random Office!  Do you know what the downside to office buildings are?  Of course you do.  It\'s the fact that they are stationary and boring.  For centuries we\'ve been made to believe office buildings should have foundations and be safe and stuff. Lies!  How many times have you looked out your office window and seen the same depressing scenery day after day?  Imagine this!!  Drag race office day!!  Have a rickety trailer filled with your employees pulled behind 20,000 lbs of torque and 12,000 horsepower!  HEEELLLOOOOO productivity!  Or, imagine velcro-ing desks to a Falcon Heavy International Space Station resupply Rocket!!  What\'s that Karen?  You love your job again??  I can\'t hear you Todd, did you say you want to work overtime for FREE??  With The Random Office you can offer companies a work environment that changes daily/weekly/monthly!  The only limitation is your imagination (and your liability insurance).  Deluxe packages include a washed up celebrity announcer with bullhorn, red sheet, and cardboard sign for the workplace of the day/week/month reveal (adds pizzazz), gently used vomit bags, and an option to race other Random Offices for Glory!  Imagine a Random Office Race to the bottom of the Mariana Trench!!',
  tags: 'vomit, random, office, building, lunacy, liability, insurance, international space station, falcon heavy, iss, karen, todd, certain death, mariana trench, race, velcro, rickety, trailer, boring, scenery, drag race',
  level: 3,
  goal: 'innovation'
},
{
  idea: 'Waterboarding Role-Play Game!  Do you love spy shows like Homeland and Jack Ryan but never feel close enough to the action?  Tried to be a spy but didn\'t make it past the psychological profile?  Don\'t Worry!  Now you can feel like a spy in your very own home with the Waterboarding Role-Play Game!  Our kit comes with everything you need to start waterboarding your friends and family!  Kit includes: (1) Towel, (1) Empty gallon jug, (1) Interrogation script, (1) Game board, (1) Six-sided die, (1) Deck of action cards, (6) Pewter game pieces, (6) Espionage secret cards (1) Interrogation make-up kit - be a ruthless warlord or a sadistic siren!  *water not included* Just roll the die and move your game piece on the board towards the "Save the World" square. Take an action card, but watch out for the "Convicted of Espionage" event!  Who will get waterboarded first?? Will they crack and give up their Espionage Secret?? Provides endless fun and variety for hours!  Multiple play modes!  Including the all new Tom Clancy Mode where each die roll is cut in half allowing for more chances of getting caught!  Ages 3 and Up.',
  tags: 'spy, espionage, water, child, endangerment, illegal, sadistic, thriller, tom clancy, jack ryan, homeland, torture, board, game, die, death, irresponsible, warlord, siren, double agent, secret, agent, lawsuit',
  level: 3,
  goal: 'personal financial gain, being a better person'
},
{
  idea: 'Need a good home defense system, but don\'t want to pay the professionals to monitor your home?  I feel you Fam!  Imagine this!  Dynamite insulated walls!  Instead of boring insulation that only keeps your house warm and stuff, fill your walls with massively explosive dynamite instead! Next time a burglar breaks into your house they will get the surprise of their life!  Just make sure your family and small pets have been evacuated and then use any one of our patented "blow points" throughout the house to start the party (please note a blow point is just an exposed fuse coming out of the wall, but don\'t worry, it is completely safe!).  Yell something cool as you jump out the window after ingniting the blow point, like "Yipee Kiyay Normie!".  Who needs ADT when you can just bathe in glow of your burning home and vanquished enemy.',
  tags: 'dynamite, explode, explosion, insulation, house, home, dead, death, irresponsible, not safe, felony, murder, burglar, security, ADT, building code violation, violation, revenge',
  level: 3,
  goal: 'innovation, company profitablity'
},
{  
  idea: 'The Glockenspiel Sidewalk!  Have you ever thought that sidewalks are sad, miserable and boring?  Have you ever thought that sidewalks should be large metal musically tuned tiles fastened dangerously across two parellel planks of wood?  Of course you haven\'t!  Imagine this!  Develop and manufacture enormous glockenspiel sidewalk panels.  Sell New York City planners on the benefits of citizens frolicking to and fro on your colorful and musical glockenspiel "glidewalks".  Provide fake data around how much happier and less violent people would be!  Use a pie chart without a legend!  No one will notice!  People love shapes!  NYC is just the start.  Pitch idea to cities all over the world.  Build your contract to include ownership of any music created on your "glidewalks".  Become Time Person of the Year/Century.',
  tags: 'glockenspiel, sidewalk, happy, music, pie chart, pie, data, fake data, tiles, dangerous, frolicking, famous, infamous, rich, powerful, aesthetic, shapes, charts, city planning, infrastructure',
  level: 2,
  goal: 'innovation, personal financial gain'
}]                          
// ==============================================================
// USEFUL GET RANDOM ARRAY FUNCTION - PASS IN ARRAY TO GET OUTPUT
// ==============================================================

const getRandom = function(arr){
  return arr[Math.floor(Math.random() * arr.length)]
}

// ==============================================================
// QUANTUM BBI FUNCTION - TAKES NAME PARAM AND OUTPUTS VAR pBadTag
//===============================================================

const quantumBBI = function(name){

  const cleanTag = function(){
    if (pageBody.className === 'mainPageBody modal-open') {
      return localStorage.getItem('Quick Tag').toLowerCase().trim()
    } else {
      return localStorage.getItem('Freud Clean').toLowerCase().trim()
    }
  }

  const pBad = getRandom(badBusinessIdeaArray)
  let pBadTag = ''
  let arrayDecision = []
  let arrayMatch = ''
  let arrayNoMatch = ''
  let spName = name

// LOOP ATTEMPTS TO MATCH ARRAY TAGS TO USER INPUT TAG
// IF TAG MATCH ACROSS MULTIPLE ARRAYS - MATCHES ARE STORED IN arrayDecision[]
// IF NOT arrayDecision[] WILL BE EMPTY BY DESIGN

  for (var i = 0; i < badBusinessIdeaArray.length; i++) {
    let modTags = badBusinessIdeaArray[i].tags.split(",")
    console.log(modTags);
    for (var z = 0; z < modTags.length; z++) {
      if (modTags[z].includes(cleanTag())) {
        arrayDecision.push(badBusinessIdeaArray[i].idea)
      }
    }
  }

// LOGS TO TEST OUTPUTS AND VARIABLES

  console.log(cleanTag());
  console.log(pBad);
  console.log(arrayDecision);

// BASED ON PAGE BODY MODAL CLASS NAME - A RANDOMIZED OUTPUT IS GENERATED

  if (pageBody.className === 'mainPageBody modal-open') {
    arrayMatch = `So here\'s the deal ${getRandom(randomQuickName)}, you entered ${cleanTag()} as your trigger word and I actually matched you a Bad Business Idea! You should probably be ashamed.  `
    arrayNoMatch = `So ${getRandom(randomQuickName)}, you entered ${cleanTag()} as your trigger word.  I couldn\'t match you a Bad Business Idea based on ${cleanTag()}. It\'s a weird word. Maybe use the contact us page to submit a BBI and be sure to base it around ${cleanTag()}. Please enjoy this random bad business idea! `
  } else {
    arrayMatch = `So here\'s the deal ${spName}, you entered ${cleanTag()} as your trigger word and I actually matched you a Bad Business Idea! You should probably be ashamed.  `
    arrayNoMatch = `So ${spName}, you entered ${cleanTag()} as your trigger word.  I couldn\'t match you a Bad Business Idea based on ${cleanTag()}. It\'s a weird word. Maybe use the contact us page to submit a BBI and be sure to base it around ${cleanTag()}. Please enjoy this random bad business idea! `
  }

  // DEPENDING IF arrayDecision[] IS BLANK OR NOT - pBadTag IS GENERATED AND RETURNED FOR OUTPUT

  if (arrayDecision.length === 1) {
    pBadTag = arrayMatch + "\n" + "\n" + arrayDecision[0]
    return pBadTag
  } else if (arrayDecision.length > 1) {
    pBadTag = arrayMatch + "\n" + "\n" + getRandom(arrayDecision)
    return pBadTag
  } else {
    pBadTag = arrayNoMatch + "\n" + "\n" + pBad.idea
    return pBadTag
  }
}

// LOG TO SEE ARRAY LENGTH OF BAD BUSINESS ARRAY

console.log(badBusinessIdeaArray.length);

// =================================================================================================
// MAIN FUNCTION - CHECKS USER PAGE POSITION - EXECUTES VARIABLE ASSIGNMENTS AND QUANTUM FUNCTIONS
// =================================================================================================

// LEARNMORE HTML PAGE - STORAGE IS CLARED - VAR ASSIGNS AND FUNCTIONS
//======================================================================
const pageCheck = function(){
  if (pageBody.className === "surveyPage") {
    localStorage.clear()
    const mainSurveyButton = document.querySelector('#iniSurvey')
    const mainHidden = document.querySelector('#hiddenForm')
    const surveyForm = document.querySelector('#bbiQuestions')
    mainHidden.style.visibility = 'hidden'

// HIDDEN FORM FUNCTION - SHIFTS FROM HIDDEN TO VISIBLE IF CLICKED

    mainSurveyButton.addEventListener('click', function(e){
      if (mainHidden.style.visibility === 'hidden') {
          mainHidden.style.visibility = 'visible'
      } else {
          mainHidden.style.visibility = 'hidden'
      }
    })

// MAIN FORM SUBMIT - GATHERS DATA TO LOCAL STORAGE AND SETS KEY/VALUE

    surveyForm.addEventListener('submit', function(e){
      e.preventDefault()
      if (e.target.elements.inputYrsEmp.value === 'click to choose an option...' ||
      e.target.elements.inputIdeaImpact.value === 'click to choose an option...' ||
      e.target.elements.inputImpAttrib.value === 'click to choose an option...') {
        alert('You obviously missed an option Meatbag! Give me your data!')
      } else {
      if (e.target.elements.inputImpAttrib.value === "Random") {
        e.target.elements.inputImpAttrib.value = getRandom(randBusinessGoal)
      }
      surveyName = 'First Name: ' + e.target.elements.fName.value
      busType = 'Current Business: ' + e.target.elements.inputBusType4.value
      busTypeClean = e.target.elements.inputBusType4.value
      yrsTenure = 'Years at business: ' + e.target.elements.inputYrsEmp.value
      ideaImpact = 'Desired Impact: ' + e.target.elements.inputIdeaImpact.value
      ideaImpactClean = e.target.elements.inputIdeaImpact.value
      freudGo = 'Word Association: ' + e.target.elements.inputFreud.value
      freudGoClean = e.target.elements.inputFreud.value
      busAttrib = 'Business Goal: ' + e.target.elements.inputImpAttrib.value
      busAttribClean = e.target.elements.inputImpAttrib.value
      localStorage.setItem('First Name', surveyName)
      localStorage.setItem('Business Type', busType)
      localStorage.setItem('Business Type Clean', busTypeClean)
      localStorage.setItem('Tenure', yrsTenure)
      localStorage.setItem('Idea Impact', ideaImpact)
      localStorage.setItem('Idea Impact Clean', ideaImpactClean)
      localStorage.setItem('Freud', freudGo)
      localStorage.setItem('Freud Clean', freudGoClean)
      localStorage.setItem('Bus Attribute', busAttrib)
      localStorage.setItem('Bus Attribute Clean', busAttribClean)
      window.location = 'results.html'
      }
    })

// INDEX HTML - ASSIGNS VARS AND FUNCTIONS
// =========================================================================================

  } else if (pageBody.className === 'mainPageBody') {
      let pBadTag = ''
      let bulletArray = []

      const generateBullets = function(){
        for (var i = 0; i < 3; i++) {
          let el = getRandom(randomBulletList)
            while (bulletArray.includes(el)) {
              el = getRandom(randomBulletList)
            }
          bulletArray.push(el)
        }
      }
      generateBullets()
      console.log(bulletArray);

      document.querySelector('#liOne').innerHTML = bulletArray[0]
      document.querySelector('#liTwo').innerHTML = bulletArray[1]
      document.querySelector('#liThree').innerHTML = bulletArray[2]

      const instaForm = document.querySelector('#instaForm')
      const instaClose = document.querySelector('#instaClose')
      const instaDismiss = document.querySelector('#instaDismiss')
      const instaSub = document.querySelector('#instaSub')
      
      instaForm.addEventListener('submit', function(e){
        e.preventDefault()
        localStorage.setItem('Quick Tag', e.target.elements.instaInput.value)
        pBadTag = quantumBBI()
        instaForm.reset()
        instaForm.remove()
        instaSub.remove()
        document.getElementById('instaP').textContent = pBadTag
      })
      
      instaClose.addEventListener('click', function(e){
        localStorage.clear()
        if (document.getElementById('instaP').innerHTML != 'Just give us one trigger word to work with...') {
          history.go(0)
        }
      })
      
      instaDismiss.addEventListener('click', function(e){
        localStorage.clear()
        if (document.getElementById('instaP').innerHTML != 'Just give us one trigger word to work with...') {
          history.go(0)
        }
      })
      
// RESULTS HTML - GATHERS LOCAL STORAGE - ASSIGNS VARS - RUNS QUANTUM FUNC
// ==========================================================================================

  } else if (pageBody.className === "resultsPage") {
      const listName = localStorage.getItem('First Name')
      const listBusType = localStorage.getItem('Business Type')
      const listTenure = localStorage.getItem('Tenure')
      const listIdeaImpact = localStorage.getItem('Idea Impact')
      const listFreud = localStorage.getItem('Freud')
      const listBusAtrrib = localStorage.getItem('Bus Attribute')
      document.querySelector('#result1').textContent = listName
      document.querySelector('#result2').textContent = listBusType
      document.querySelector('#result3').textContent = listTenure
      document.querySelector('#result4').textContent = listIdeaImpact
      document.querySelector('#result5').textContent = listFreud
      document.querySelector('#result6').textContent = listBusAtrrib

      const seps = ['-', ':']

// CLEAN UP OF USER INPUT RESPONSES FOR USE IN MASHUP

      let spName = listName.split(":")
      let spBus = listBusType.split(":")
      let spYrs = listTenure.split(":")
      let secspYrs = listTenure.split(":")
      let spFreud = listFreud.split(":")
      let spAtt = listBusAtrrib.split(":")

// MORE CLEAN UP

      spName = spName[1]
      spBus = spBus[1]
      spYrs = spYrs[1]
      secspYrs = secspYrs[2]
      spFreud = spFreud[1]
      spAtt = spAtt[1]

// WITTY ARRAY JUDGEMENTS FOR MASHUP

      const pName = getRandom(hateYourNameArray)
      const pJob = getRandom(hateYourJobArray)
      const pYrs = getRandom(laughableYearsArray)
      const pFreud = getRandom(freudJudgementArray)
      const pGoal = getRandom(businessGoalJudgement)

// MASHUP CREATION FROM ABOVE SECTIONS AND SELECTIONS

      const mashUp = `So, your name is ${spName}.  That is ${pName} And let\'s see here.  As your current business you selected ${spBus} ${pJob} Your general feeling comment was ${secspYrs}. You indicated a time constraint of ${spYrs}. ${pYrs} The first word that came to your head was ${spFreud}. I mean really? ${pFreud} Lastly, the business goal you selected was ${spAtt}. ${pGoal} Your Bad Business Idea is now just a click away. `

// MODAL PARAGRAPH FILL AND TEXT ASSIGN

      let pBadTag = quantumBBI(spName)

      document.querySelector('#conclusionsMashup').textContent = mashUp
      document.querySelector('#badBusinessIdea').textContent = pBadTag

// CONTACT PHP - COLLECTS INPUTS AND USES AJAX TO POST FOR SERVER COLLECTION
// ===========================================================================

} else if (pageBody.className === "contactPageBody") {

// GETS VALUES OF INPUTS

      function contactFunc(){
        let contactName = document.querySelector('#contactFN4').value
        let contactEmail = document.querySelector('#emailType4').value
        let contactCategory = document.querySelector('#contactCat').value
        let contactTagList = document.querySelector('#contactTags').value
        let contactIdeaVal = document.querySelector('#contactIdeaInput').value

// CREATES OBJECT - JSON STRUCTURE

        let frmData = {
          Name: contactName,
          Email: contactEmail,
          Category: contactCategory,
          TagList: contactTagList,
          BadBusinessIdea: contactIdeaVal
        }

// TURNS JSON OBJECT INTO STRING FOR POST

        frmData = JSON.stringify(frmData)

// LOG TEST JSON STRING

        console.log(frmData);

// CHECK THAT ALL FIELDS ARE FILLED THEN USE AJAX TO POST TO SERVER - TARGET IS FORM PHP

        if (contactName == '' || contactEmail == '' || contactCategory == '' || contactTagList == '' || contactIdeaVal == '') {
          alert('You need to fill out all fields meatbag...')
        } else {
          $.ajax({
            type: 'POST',
            url: 'form.php',
            contentType: 'application/json',
            data: frmData,
            cache: false,
            success: function(){
              $('#contactSent').modal('show')
              $('#contactUs')[0].reset()
            }
          })
        }
        return false
      }

// LISTEN FOR FORM SUBMIT

      const submitCon = document.querySelector('#contactSubmit')
      submitCon.addEventListener('click', function(){
        contactFunc()
      })

// LISTEN FOR MODAL ACKNOWLEDGE AND REFRESH CONTACT PHP PAGE

      const submitThank = document.querySelector('#sendThank')
      submitThank.addEventListener('click', function(){
        document.location.reload(true)
      })
// ==================== END OF IFS ========================================
  }
} // ================== END OF PAGE CHECK FUNCTION ========================

// INITIALIZE
// ========================================================================

pageCheck()
