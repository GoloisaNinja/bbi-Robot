// ==============================================================
// USEFUL GET RANDOM ARRAY FUNCTION - PASS IN ARRAY TO GET OUTPUT
// ==============================================================

  const getRandom = function(arr){
    return arr[Math.floor(Math.random() * arr.length)]
  }

// =============================================================
// RANDOM NUMBER GENERATOR
// ============================================================

  const generateRandNum = function (){
    return Math.floor(Math.random() * 1001)
  }

// ============================================================
// MAIN PAGE BULLET POINT RANDOMIZER FUNCTION
// ============================================================

  const generateBullets = function(){
    let bulletArray = []
    for (var i = 0; i < 3; i++) {
      let el = getRandom(randomBulletList)
        while (bulletArray.includes(el)) {
          el = getRandom(randomBulletList)
        }
      bulletArray.push(el)
    }
  return bulletArray
  }

// =============================================================
// HIDE/SHOW FORM BASEO ON BUTTON CLICKS
// =============================================================

  const hideSurvey = function() {
    mainSurveyButton.addEventListener('click', function(e){
      if (mainHidden.style.visibility === 'hidden') {
          mainHidden.style.visibility = 'visible'
      } else {
          mainHidden.style.visibility = 'hidden'
      }
    })
  }

// ==================================================================================
// RETURNS LOCAL STORAGE ITEMS AS OBJECTS TO BE USED IN LOOPS THAT ASSIGN IDEAS LATER
// ==================================================================================

  const criteriaChecks = function (){
        if (pageBody.className === 'mainPageBody modal-open') {
          return {
            quickOne: localStorage.getItem('Quick Tag').toLowerCase().trim()
          }
        } else {
          return {
            stageOne: localStorage.getItem('Trigger Clean').toLowerCase().trim(),
            stageTwo: localStorage.getItem('Startup Attribute Clean').toLowerCase().trim(),
            stageThree: localStorage.getItem('Startup Concept Clean').toLowerCase().trim(),
          }
        }
      }

// ====================================================================================================
// FOR LOOPS AND IFS TO PROPERLY FILL ARRAYS WITH BBI'S AND ALSO THE TAGS/WORDS THAT PROMPTED THE MATCH
// ====================================================================================================

  const populateBBIArrays = function (){
    let arrayDecision = []
    let triggerMatch = []
    let attribMatch = []
    let startConMatch = []
    if (pageBody.className === 'mainPageBody modal-open') {
      for (var k = 0; k < badBusinessIdeaArray.length; k++) {
        let modTags = badBusinessIdeaArray[k].tags.split(",")
        console.log(modTags);
        for (var l = 0; l < modTags.length; l++) {
          if (modTags[l].includes(criteriaChecks().quickOne)) {
            triggerMatch.push(badBusinessIdeaArray[k].idea)
          }
        }
      }
    } else {
        for (var v = 0; v < badBusinessIdeaArray.length; v++) {
          let modTags = badBusinessIdeaArray[v].tags.split(",")
          let modAttrib = badBusinessIdeaArray[v].goal.split(",")
          let modCon = criteriaChecks().stageThree.split(" ")
          console.log(modCon);
          for (var t = 0; t < modTags.length; t++) {
            if (modTags[t].trim().includes(criteriaChecks().stageOne)) {
              triggerMatch.push(badBusinessIdeaArray[v].idea)
              if (!startConMatch.includes(modTags[t].trim())) {
                  startConMatch.push(modTags[t].trim())
                }
              }
              for (var q = 0; q < modCon.length; q++) {
                if (modCon[q].trim().includes(modTags[t].trim())) {
                  triggerMatch.push(badBusinessIdeaArray[v].idea)
                  if (!startConMatch.includes(modCon[q].trim())) {
                    startConMatch.push(modCon[q].trim())
                  }
                }
              }
          }
          for (var y = 0; y < modAttrib.length; y++) {
            if (modAttrib[y].trim().includes(criteriaChecks().stageTwo) && !attribMatch.includes(badBusinessIdeaArray[v].idea)) {
              attribMatch.push(badBusinessIdeaArray[v].idea)
              if (!startConMatch.includes(modAttrib[y].trim())) {
                startConMatch.push(modAttrib[y].trim())
              }
            }
          }
        }
      }
    return {
        tm: triggerMatch,
        am: attribMatch,
        scM: startConMatch
    }
  }

// ==============================================================
// QUANTUM BBI FUNCTION - TAKES NAME PARAM AND OUTPUTS VAR pBadTag
//===============================================================

  const quantumBBI = function(name){

    const pBad = getRandom(badBusinessIdeaArray)
    let pBadTag = ''
    let arrayMatch = ''
    let arrayNoMatch = ''
    let spName = name

  // POPULATE ARRAYS USING FUNCTION

    const tMatch = populateBBIArrays().tm
    const aMatch = populateBBIArrays().am
    const scmMatch = populateBBIArrays().scM

  // MAKE A PRETTY STRING FOR THE MASHUP - CALL OUT WHAT MATCHED

    let matchData = ''
    let match1 = ''
    if (scmMatch.length > 0) {
      match1 = true
      for (var g = 0; g < scmMatch.length; g++) {
        matchData += '-' + scmMatch[g] + "\n"
      }
    } else {
      match1 = false
    }

  // BASED ON PAGE BODY MODAL CLASS NAME - A RANDOMIZED OUTPUT IS GENERATED

    if (pageBody.className === 'mainPageBody modal-open') {
      arrayMatch = `So here\'s the deal ${getRandom(randomQuickName)}, you entered ${criteriaChecks().quickOne} as your trigger word and I actually matched you a Bad Business Idea! You should probably be ashamed.  `
      arrayNoMatch = `So ${getRandom(randomQuickName)}, you entered ${criteriaChecks().quickOne} as your trigger word.  I couldn\'t match you a Bad Business Idea based on ${criteriaChecks().quickOne}. It\'s a weird word. Maybe use the contact us page to submit a BBI and be sure to base it around ${criteriaChecks().quickOne}. Please enjoy this random bad business idea! `
    } else {
      if (match1 === true) {
        arrayMatch = `So here\'s the deal ${spName}, I somehow matched your gooey brain data to my relational rational systems. Here is the breakdown of what my superior circuits keyed in on: \n ${matchData} \n Congratulations, you should be ashamed. `
      } else {
        arrayNoMatch = `So ${spName}, I mean wow.  Literally no matches whatsoever across all my data centers.  Given that your StartUp idea clearly lacks merit, I'll give you an amazing random Bad Business Idea intead!  Maybe visit the Contact Us page when you are done here and submit your idea so you can see it next time... `
     }
    }

    // TRIGGER MATCH IS PRIORITY THEN ATTRIBUTE MATCH IF ALL
    // ELSE FAILS JUST GENERATE A RANDOM BAD IDEA - pBadTag IS GENERATED AND RETURNED FOR OUTPUT

    if (tMatch.length === 1) {
      pBadTag = arrayMatch + "\n" + "\n" + tMatch[0]
      return pBadTag
    } else if (tMatch.length > 1) {
      pBadTag = arrayMatch + "\n" + "\n" + getRandom(tMatch)
      return pBadTag
    } else if (aMatch.length === 1){
      pBadTag = arrayMatch + "\n" + "\n" + aMatch[0]
      return pBadTag
    } else if (aMatch.length > 1){
      pBadTag = arrayMatch + "\n" + "\n" + getRandom(aMatch)
      return pBadTag
    } else  {
      pBadTag = arrayNoMatch + "\n" + "\n" + pBad.idea
      return pBadTag
    }

  }
