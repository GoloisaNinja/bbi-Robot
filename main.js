let surveyName = ''
let pageBody = document.querySelector('body')

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
// =============================================================

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
      if (e.target.elements.inputImpAttrib.value === 'click to choose an option...') {
        alert('You obviously missed an option Meatbag! Give me your data!')
      } else {
      if (e.target.elements.inputImpAttrib.value === "Random") {
        e.target.elements.inputImpAttrib.value = getRandom(randBusinessGoal)
      }
      surveyName = 'First Name: ' + e.target.elements.fName.value
      startCon = 'Startup Concept: ' + e.target.elements.inputBusType4.value
      startConClean = e.target.elements.inputBusType4.value
      triggerWord = 'Startup Trigger Word: ' + e.target.elements.inputFreud.value
      triggerClean = e.target.elements.inputFreud.value
      startUpAttrib = 'Important Startup Attribute: ' + e.target.elements.inputImpAttrib.value
      startAttribClean = e.target.elements.inputImpAttrib.value
      localStorage.setItem('First Name', surveyName.trim())
      localStorage.setItem('Startup Concept', startCon.trim())
      localStorage.setItem('Startup Concept Clean', startConClean.trim())
      localStorage.setItem('Trigger', triggerWord.trim())
      localStorage.setItem('Trigger Clean', triggerClean.trim())
      localStorage.setItem('Startup Attribute', startUpAttrib.trim())
      localStorage.setItem('Startup Attribute Clean', startAttribClean.trim())
      window.location = 'results.html'
      }
    })

// INDEX HTML - ASSIGNS VARS AND FUNCTIONS
// =========================================================================================

  } else if (pageBody.className === 'mainPageBody') {
      let pBadTag = ''
      let bulletArray = generateBullets()

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
        instaDismiss.style.display = 'none'
        document.getElementById('instaP').textContent = ''
        document.getElementById('statusBar').style.display = ''
        document.getElementById('barContSpace').style.display = ''
        document.getElementById('statText').textContent = getRandom(loadArray)
        setTimeout(function(){
          document.getElementById('statusBar').style.display = 'none'
          instaDismiss.style.display = ''
          document.getElementById('instaP').textContent = pBadTag
        }, 2000)
      })

      instaClose.addEventListener('click', function(e){
        localStorage.clear()
        if (document.getElementById('instaP').innerHTML != 'Enter your startup idea tag or trigger word...') {
          history.go(0)
        }
      })

      instaDismiss.addEventListener('click', function(e){
        localStorage.clear()
        if (document.getElementById('instaP').innerHTML != 'Enter your startup idea tag or trigger word...') {
          history.go(0)
        }
      })

// RESULTS HTML - GATHERS LOCAL STORAGE - ASSIGNS VARS - RUNS QUANTUM FUNC
// ==========================================================================================

  } else if (pageBody.className === "resultsPage") {
      const listName = localStorage.getItem('First Name')
      const listStartCon = localStorage.getItem('Startup Concept')
      const listTrigger = localStorage.getItem('Trigger')
      const listStartAttrib = localStorage.getItem('Startup Attribute')

      document.querySelector('#result1').textContent = listName
      document.querySelector('#result2').textContent = listStartCon
      document.querySelector('#result3').textContent = listTrigger
      document.querySelector('#result4').textContent = listStartAttrib


// CLEAN UP OF USER INPUT RESPONSES FOR USE IN MASHUP

      let spName = listName.split(":")
      let spStartCon = listStartCon.split(":")
      let spTrigger = listTrigger.split(":")
      let spStartAttrib = listStartAttrib.split(":")

// MORE CLEAN UP

      spName = spName[1]
      spStartCon = spStartCon[1]
      spTrigger = spTrigger[1]
      spStartAttrib = spStartAttrib[1]

// WITTY ARRAY JUDGEMENTS FOR MASHUP

      const pName = getRandom(hateYourNameArray)
      const pStartUp = getRandom(hateYourStartUpArray)
      const pTrigger = getRandom(triggerJudgementArray)
      const pGoal = getRandom(businessGoalJudgement)

// MASHUP CREATION FROM ABOVE SECTIONS AND SELECTIONS

      const mashUp = `So, your name is ${spName}.  That is ${pName} And let\'s see here.  Your StartUp Idea was ${spStartCon} ${pStartUp} Your StartUp Trigger word was ${spTrigger}. ${pTrigger} Lastly, the most important attribute to your StartUp was ${spStartAttrib}. ${pGoal} Based on the limited and terrible data you gave me, let us see if I can flesh (get it?) out your Bad Business Idea! `

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
