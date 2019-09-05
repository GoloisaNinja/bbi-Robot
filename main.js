let surveyName = ''
let pageBody = document.querySelector('body')
let randNum = Math.floor(Math.random() * 1001)

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
    'which is just really disappointing to your parents no doubt. Oh wait, are they dead?',
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
    'Honestly, that is an eternity in robot seconds. ',
    'I genuinely find it sad how much time you meatbags spend at work. '
]

const freudJudgementArray = [
    'You are an incredibly sick individual. ',
    'Hahahahahahaha, I was thinking the same thing thought buddy. ',
    'Imma act like this never happened bruh. ',
    'Really.  I mean really.  That\'s what is in your wrinkly electric meat processor right now? ',
    'I find human thoughts to be squishy and weird. Just like your meatsack bodies. ',
    'I mean. Yeah. You do you. ',
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
}]                            

console.log(badBusinessIdeaArray[2].idea);

const pageCheck = function(){
  if (pageBody.className === "surveyPage") {
    localStorage.clear()
    const mainSurveyButton = document.querySelector('#iniSurvey')
    const mainHidden = document.querySelector('#hiddenForm')
    const surveyForm = document.querySelector('#bbiQuestions')
    mainHidden.style.visibility = 'hidden'

    mainSurveyButton.addEventListener('click', function(e){
      if (mainHidden.style.visibility === 'hidden') {
          mainHidden.style.visibility = 'visible'
      } else {
          mainHidden.style.visibility = 'hidden'
      }
    })

    const randBusArrayLength = randBusinessGoal.length - 1
    const contingencyRan = randBusinessGoal[Math.floor(Math.random() * randBusArrayLength)]

    surveyForm.addEventListener('submit', function(e){
      if (e.target.elements.inputImpAttrib.value === "Random") {
        e.target.elements.inputImpAttrib.value = contingencyRan
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


    })
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

      let spName = listName.split(":")
      let spBus = listBusType.split(":")
      let spYrs = listTenure.split(":")
      let secspYrs = listTenure.split(":")
      let spFreud = listFreud.split(":")
      let spAtt = listBusAtrrib.split(":")

      spName = spName[1]
      spBus = spBus[1]
      spYrs = spYrs[1]
      secspYrs = secspYrs[2]
      spFreud = spFreud[1]
      spAtt = spAtt[1]

      const nameArrayLength = hateYourNameArray.length - 1
      const jobArrayLength = hateYourJobArray.length - 1
      const laughYrsLength = laughableYearsArray.length - 1
      const freudLength = freudJudgementArray.length - 1
      const busGoalLength = businessGoalJudgement.length - 1

      const badBusLength = badBusinessIdeaArray.length - 1


      const pName = hateYourNameArray[Math.floor(Math.random() * nameArrayLength)]
      const pJob = hateYourJobArray[Math.floor(Math.random() * jobArrayLength)]
      const pYrs = laughableYearsArray[Math.floor(Math.random() * laughYrsLength)]
      const pFreud = freudJudgementArray[Math.floor(Math.random() * freudLength)]
      const pGoal = businessGoalJudgement[Math.floor(Math.random() * busGoalLength)]

      const pBad = badBusinessIdeaArray[Math.floor(Math.random() * badBusLength)]
      let pBadTag = ''
      let arrayDecision = []
      const cleanTag = localStorage.getItem('Freud Clean').toLowerCase().trim()

      for (var i = 0; i < badBusinessIdeaArray.length; i++) {
        let modTags = badBusinessIdeaArray[i].tags.split(",")
        console.log(modTags);
        for (var z = 0; z < modTags.length; z++) {
          if (modTags[z].includes(cleanTag)) {
            arrayDecision.push(badBusinessIdeaArray[i].idea)
          }
        }
      }

      console.log(cleanTag);
      console.log(pBad);
      console.log(arrayDecision);
      
      const arrayMatch = `So here\'s the deal ${spName}, you entered ${cleanTag} as your trigger word and I actually matched you a Bad Business Idea! You should probably be ashamed.  `
      const arrayNoMatch = `So ${spName}, you entered ${cleanTag} as your trigger word.  I couldn\'t match you a Bad Business Idea based on ${cleanTag}. It\'s a weird word. Maybe use the contact us page to submit a BBI and be sure to base it around ${cleanTag}. Please enjoy this random bad business idea! `

      const arrayDecLength = arrayDecision.length
      const arrayDecLength2 = arrayDecision.length - 1

      if (arrayDecLength === 1) {
        pBadTag = arrayMatch + "\n" + "\n" + arrayDecision[0] 
      } else if (arrayDecLength > 1) {
        pBadTag = arrayMatch + "\n" + "\n" + arrayDecision[Math.floor(Math.random() * arrayDecLength2)]
      } else { 
        pBadTag = arrayNoMatch + "\n" + "\n" + pBad.idea
      }

      const mashUp = `So, your name is ${spName}.  That is ${pName} And let\'s see here.  As your current business you selected ${spBus} ${pJob} Your general feeling comment was ${secspYrs}. You indicated a time constraint of ${spYrs}. ${pYrs} The first word that came to your head was ${spFreud}. I mean really? ${pFreud} Lastly, the business goal you selected was ${spAtt}. ${pGoal} Your Bad Business Idea is now just a click away. `

      document.querySelector('#conclusionsMashup').textContent = mashUp
      document.querySelector('#badBusinessIdea').textContent = pBadTag
} else if (pageBody.className === "contactPageBody") {

    // let contactName = document.querySelector('#contactFN4').textContent
    // let contactEmail = document.querySelector('#emailType4').textContent
    // let contactCategory = document.querySelector('#contactCat').textContent
    // let contactTagList = document.querySelector('#contactTags').textContent
    // let contactIdeaVal = document.querySelector('#contactIdeaInput').textContent

    // let data = {
    //   Name: contactName,
    //   Email: contactEmail,
    //   Category: contactCategory,
    //   TagList: contactTagList,
    //   BadBusinessIdea: contactIdeaVal
    // }
    // data = JSON.stringify(data)
    //
    //
    // let contactName = ''
    // let contactEmail = ''
    // let contactCategory = ''
    // let contactTagList = ''
    // let contactIdeaVal = ''
    //
    //
    //
    // const formData = document.querySelector("#contactUs")
    // formData.addEventListener('submit', function(e){
    //   //e.preventDefault()
    //   contactName = e.target.elements.contactFN4.value
    //   contactEmail = e.target.elements.emailType4.value
    //   contactCategory = e.target.elements.contactCat.value
    //   contactTagList = e.target.elements.contactTags.value
    //   contactIdeaVal = e.target.elements.contactIdeaInput.value

      // let frmData = {
      //   Name: contactName,
      //   Email: contactEmail,
      //   Category: contactCategory,
      //   TagList: contactTagList,
      //   BadBusinessIdea: contactIdeaVal
      // }
      // frmData = JSON.stringify(data)
      //
      // console.log(frmData);

      function contactFunc(){
        let contactName = document.querySelector('#contactFN4').value
        let contactEmail = document.querySelector('#emailType4').value
        let contactCategory = document.querySelector('#contactCat').value
        let contactTagList = document.querySelector('#contactTags').value
        let contactIdeaVal = document.querySelector('#contactIdeaInput').value

        let frmData = {
          Name: contactName,
          Email: contactEmail,
          Category: contactCategory,
          TagList: contactTagList,
          BadBusinessIdea: contactIdeaVal
        }

        frmData = JSON.stringify(frmData)

        console.log(frmData);

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

      const submitCon = document.querySelector('#contactSubmit')
      submitCon.addEventListener('click', function(){
        contactFunc()
      })
      const submitThank = document.querySelector('#sendThank')
      submitThank.addEventListener('click', function(){
        document.location.reload(true)
      })

      // const myUrl = "contact.php"
      // const xContact = new XMLHttpRequest()
      // xContact.open("POST", myUrl, true)
      // xContact.setRequestHeader('Content-Type', 'application/json')
      // xContact.send(data)
      // $('#contactSent').modal('show')

      // const xhttp = new XMLHttpRequest()
      //   xhttp.onreadystatechange = function(){
      //   if (this.readystatechange === 4 && this.status === 200) {
      //     $('#contactSent').modal('show')
      //   }
      // }
      // xhttp.open('POST', 'contact.php', true)
      // xhttp.send(data)
      // $('#contactSent').modal('show')
      // $('#contactUs')[0].reset()
      //})

      // const endContact = document.querySelector("#sendThank")
      // endContact.addEventListener('click', function(e){
      //   document.getElementById('#contactUs').reset()
      // })
      // const myUrl = "contact.php"
      // const xContact = new XMLHttpRequest()
      // xContact.open("POST", myUrl, true)
      // xContact.setRequestHeader('Content-Type', 'application/json')
      // xContact.send(JSON.stringify({
      //   Name: contactName,
      //   Email: contactEmail,
      //   Category: contactCategory,
      //   TagList: contactTagList,
      //   BadBusinessIdea: contactIdeaVal
      // }))

      // $.post("contact.php", {
      //   Name: contactName,
      //   Email: contactEmail,
      //   Category: contactCategory,
      //   TagList: contactTagList,
      //   BadBusinessIdea: contactIdeaVal
      // })




  }
}

pageCheck()
