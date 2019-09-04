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

      const arrayDecLength = arrayDecision.length
      const arrayDecLength2 = arrayDecision.length - 1

      if (arrayDecLength === 1) {
        pBadTag = arrayDecision[0]
      } else if (arrayDecLength > 1) {
        pBadTag = arrayDecision[Math.floor(Math.random() * arrayDecLength2)]
      } else {
        pBadTag = pBad.idea
      }

      const mashUp = `So, your name is ${spName}.  That is ${pName} And let\'s see here.  As your current business you selected ${spBus} ${pJob} The years at business question is unique. It provides me both a time constraint, but more importantly a "general feeling" you have about your business.  Your general feeling comment was ${secspYrs}. This comment has allowed me to breach your fleshy goo spaces and extract business data.  You indicated a time constraint of ${spYrs}. ${pYrs} The first word that came to your head was ${spFreud}. I mean really? ${pFreud} Lastly, the business goal you selected was ${spAtt}. I am going to brutally, robotically honest here. ${pGoal} But all that being said, let us take a look at the customized Bad Business Idea that my robot algorithm, acquired for the low price of 3 human souls, has come up with for you. *begin happy computing noises* `

      document.querySelector('#conclusionsMashup').textContent = mashUp
      document.querySelector('#badBusinessIdea').textContent = pBadTag
} else if (pageBody.className === "contactPageBody") {

    let contactName = ''
    let contactEmail = ''
    let contactCategory = ''
    let contactTagList = ''
    let contactIdeaVal = ''

    const formData = document.querySelector("#contactUs")
    formData.addEventListener('submit', function(e){
      e.preventDefault()
      contactName = e.target.elements.contactFN4.value
      contactEmail = e.target.elements.emailType4.value
      contactCategory = e.target.elements.contactCat.value
      contactTagList = e.target.elements.contactTags.value
      contactIdeaVal = e.target.elements.contactIdeaInput.value

      let data = {
        Name: contactName,
        Email: contactEmail,
        Category: contactCategory,
        TagList: contactTagList,
        BadBusinessIdea: contactIdeaVal
      }
      data = JSON.stringify(data)

      console.log(data);

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
      })


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
