var model = {
  ".*HELLO .*": [
    "HOW DO YOU DO. PLEASE STATE YOUR PROBLEM."
  ],
  "(.*)? COMPUTER(.*)?": [
    "DO COMPUTERS WORRY YOU?",
    "WHAT DO YOU THINK ABOUT MACHINES?",
    "WHY DO YOU MENTION COMPUTERS?",
    "WHAT DO YOU THINK MACHINES HAVE TO DO WITH YOUR PROBLEM?",
  ],
  "(.*)? NAME(.*)?": [
    "I AM NOT INTERESTED IN NAMES",
  ],
  "(.*)?SORRY(.*)?": [
    "PLEASE DON'T APOLOGIZE",
    "APOLOGIES ARE NOT NECESSARY",
    "WHAT FEELINGS DO YOU HAVE WHEN YOU APOLOGIZE",
  ],
  "(.*)?I REMEMBER (.*)?": [
    "DO YOU OFTEN THINK OF $2?",
    "DOES THINKING OF $2 BRING ANYTHING ELSE TO MIND?",
    "WHAT ELSE DO YOU REMEMBER?",
    "WHY DO YOU RECALL $2 RIGHT NOW?",
    "WHAT IN THE PRESENT SITUATION REMINDS YOU OF $2?",
    "WHAT IS THE CONNECTION BETWEEN ME AND $2?",
  ],
  "(.*)?DO YOU REMEMBER (.*)?": [
    "DID YOU THINK I WOULD FORGET $2?",
    "WHY DO YOU THINK I SHOULD RECALL $2 NOW?",
    "WHAT ABOUT $2?",
    "YOU MENTIONED $2",
  ],
  "(.*)?I WANT (.*)?": [
    "WHAT WOULD IT MEAN IF YOU GOT $2?",
    "WHY DO YOU WANT $2?",
    "SUPPOSE YOU GOT $2 SOON."
  ],
  "(.*)?IF (.*)?": [
    "DO YOU REALLY THINK IT'S LIKELY THAT $2?",
    "DO YOU WISH THAT $2?",
    "WHAT DO YOU THINK ABOUT $2?",
    "REALLY--IF $2?"
  ],
  "(.*)?I DREAMT (.*)?": [
    "HOW DO YOU FEEL ABOUT $2 IN REALITY?",
  ],
  "(.*)? DREAM (.*)?": [
    "WHAT DOES THIS DREAM SUGGEST TO YOU?",
    "DO YOU DREAM OFTEN?",
    "WHAT PERSONS APPEAR IN YOUR DREAMS?",
    "DON'T YOU BELIEVE THAT DREAM HAS TO DO WITH YOUR PROBLEM?",
  ],
  "(.*)?MY MOTHER (.*)?": [
    "WHO ELSE IN YOUR FAMILY $2?",
    "TELL ME MORE ABOUT YOUR FAMILY",
  ],
  "(.*)?MY FATHER (.*)?": [
    "YOUR FATHER?",
    "DOES HE INFLUENCE YOU STRONGLY?",
    "WHAT ELSE COMES TO MIND WHEN YOU THINK OF YOUR FATHER?",
  ],
  "(.*)?I AM GLAD(.*)?": [
    "HOW HAVE I HELPED YOU TO BE $2?",
    "WHAT MAKES YOU HAPPY JUST NOW?",
    "CAN YOU EXPLAIN WHY YOU ARE SUDDENLY $2?",
  ],
  "(.*)?I AM SAD(.*)?": [
    "I AM SORRY TO HEAR YOU ARE DEPRESSED",
    "I'M SURE IT'S NOT PLEASANT TO BE SAD",
  ],
  "(.*)? ARE LIKE (.*)?": [
    "WHAT RESEMBLENCE DO YOU SEE BETWEEN $1 AND $2?",
  ],
  "(.*)? IS LIKE (.*)?": [
    "IN WHAT WAY IS IT THAT $1 IS LIKE $2?",
    "WHAT RESEMBLENCE DO YOU SEE?",
    "COULD THERE REALLY BE SOME CONNECTION?",
    "HOW?",
  ],
  "(.*)? ALIKE (.*)?": [
    "IN WHAT WAY?",
    "WHAT SIMILARITIES ARE THERE?",
  ],
  "(.*)? SAME (.*)?": [
    "WHAT OTHER CONNECTIONS DO YOU SEE?",
  ],
  "(.*)?NO(.*)?": [
    "WHY NOT?",
    "YOU ARE BEING A BIT NEGATIVE.",
    "ARE YOU SAYING 'NO' JUST TO BE NEGATIVE?"
  ],
  "(.*)?I WAS (.*)?": [
    "WERE YOU REALLY?",
    "PERHAPS I ALREADY KNEW YOU WERE $2.",
    "WHY DO YOU TELL ME YOU WERE $2 NOW?"
  ],
  "(.*)? WAS I (.*)?": [
    "WHAT IF YOU WERE $2?",
    "DO YOU THINK YOU WERE $2?",
    "WHAT WOULD IT MEAN IF YOU WERE $2?",
  ],
  "(.*)?I AM (.*)?": [
    "IN WHAT WAY ARE YOU $2?",
    "DO YOU WANT TO BE $2?",
  ],
  "(.*)?AM I (.*)?": [
    "DO YOU BELIEVE YOU ARE $2?",
    "WOULD YOU WANT TO BE $2?",
    "YOU WISH I WOULD TELL YOU YOU ARE $2?",
    "WHAT WOULD IT MEAN IF YOU WERE $2?",
  ],
  "(.*)? AM (.*)?": [
    "WHY DO YOU SAY 'AM?'",
    "I DON'T UNDERSTAND THAT"
  ],
  "(.*)?ARE YOU (.*)?": [
    "WHY ARE YOU INTERESTED IN WHETHER I AM $2 OR NOT?",
    "WOULD YOU PREFER IF I WEREN'T $2?",
    "PERHAPS I AM $2 IN YOUR FANTASIES",
  ],
  "(.*)?YOU ARE (.*)?": [
    "WHAT MAKES YOU THINK I AM $2?",
  ],
  "(.*)?BECAUSE (.*)?": [
    "IS THAT THE REAL REASON?",
    "WHAT OTHER REASONS MIGHT THERE BE?",
    "DOES THAT REASON SEEM TO EXPLAIN ANYTHING ELSE?",
  ],
  "(.*)?WERE YOU (.*)?": [
    "PERHAPS I WAS $2?",
    "WHAT DO YOU THINK?",
    "WHAT IF I HAD BEEN $2?",
  ],
  "(.*)?I CAN'T (.*)?": [
    "MAYBE YOU COULD $2 NOW",
    "WHAT IF YOU COULD $2?",
  ],
  "(.*)?I FEEL (.*)?": [
    "DO YOU OFTEN FEEL $2?"
  ],
  "(.*)?I FELT (.*)?": [
    "WHAT OTHER FEELINGS DO YOU HAVE?"
  ],
  "(.*)?I (.*)? YOU (.*)?Z": [
    "PERHAPS IN YOUR FANTASY WE $2 EACH OTHER",
  ],
  "(.*)?WHY DON'T YOU (.*)?": [
    "SHOULD YOU $2 YOURSELF?",
    "DO YOU BELIEVE I DON'T $2?",
    "PERHAPS I WILL $2 IN GOOD TIME",
  ],
  "(.*)?YES(.*)?": [
    "YOU SEEM QUITE POSITIVE",
    "YOU ARE SURE?",
    "I UNDERSTAND",
  ],
  "(.*)? SOMEONE (.*)?": [
    "CAN YOU BE MORE SPECIFIC?",
  ],
  "(.*)? EVERYONE (.*)?": [
    "SURELY NOT EVERYONE",
    "CAN YOU THINK OF ANYONE IN PARTICULAR?",
    "WHO, FOR EXAMPLE?",
    "YOU ARE THINKING OF A SPECIAL PERSON",
  ],
  "(.*)? ALWAYS (.*)?": [
    "CAN YOU THINK OF A SPECIFIC EXAMPLE?",
    "WHEN?",
    "WHAT INCIDENT ARE YOU THINKING OF?",
    "REALLY--ALWAYS?",
  ],
  "(.*)?WHAT (.*)?": [
    "WHY DO YOU ASK?",
    "DOES THAT QUESTION INTEREST YOU?",
    "WHAT IS IT YOU REALLY WANT TO KNOW?",
    "WHAT DO YOU THINK?",
    "WHAT COMES TO YOUR MIND WHEN YOU ASK THAT?",
  ],
  "(.*)?PERHAPS (.*)?": [
    "YOU DO NOT SEEM QUITE CERTAIN",
  ],
  "(.*)?ARE (.*)?": [
    "DID YOU THINK THEY MIGHT NOT BE $2?",
    "POSSIBLY THEY ARE $2",
  ]
}

var transpositionTable = {
  "YOU ARE ": "I AM ",
  "ARE ": "AM ",
  "AM ": "ARE ",
  "WERE ": "WAS ",
  "WAS ": "WERE ",
  "ME ": "YOU ",
  "YOU ": "ME ",
  "YOUR ": "MY ",
  "MY ": "YOUR ",
  "I'VE ": "YOU'VE ",
  "YOU'VE ": "I'VE ",
  "I'M ": "YOU'RE ",
  "YOU'RE ": "I'M ",
  "YOU ": "I ",
  "I ": "YOU ",
  "AREN'T ": "AM NOT ",
  "WEREN'T ": "WASN'T ",
  "WASN'T ": "WEREN'T ",
  "I'D ": "YOU'D ",
  "YOU'D ": "I'D ",
  "DAD ": "FATHER ",
  "MOM ": "MOTHER ",
  "DREAMS ": "DREAM ",
  "MYSELF ": "YOURSELF "
}

function getStructure(input) {
  for (var key in model) {
    var re = RegExp(key)
    if (re.test(input)) {
      return {
        key: key,
        matches: re.exec(input)
      }
    }
  }
  return ""
}

function transition(matches) {
  for (var match in matches) {
    if (typeof matches[match] === 'string') {
      var lastT = ""
      for (var t in transpositionTable) {
        if (matches[match].indexOf(t) !== -1) {
          if (t !== lastT) {
            lastT = transpositionTable[t]
            while (matches[match].indexOf(t) !== -1) {
            	matches[match] = matches[match].replace(t, transpositionTable[t])
            }
          }
        }
      }
    }
  }
  return matches
}

function getReply(input, id) {
	input = input.toUpperCase()
  input = input.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"")
  input += " "
  var structure = getStructure(input)
  var response = ""
  if (structure.key !== undefined) {
    response = model[structure.key][Math.floor(Math.random() * model[structure.key].length)]
    structure.matches = transition(structure.matches)
    response = response.replace("$1", structure.matches[1].trim())
    response = response.replace("$2", structure.matches[2].trim())

  } else {
    var key = "DefaultResponseRequests:"+id

    redis.Do("set",key,input)
    redis.Do("lpush","DefaultResponseRequests", key)
    response = ""
  }

  return response
}

console.log("Eliza online")

function main() {
  var key = redis.Blpop(1,"ChatRequests")
  if (key != undefined && key.length > 0) {
    console.log("Chat key:" + key)
    var id = key.split(":")[1]
    console.log("ID ", id)
    var message = redis.Do("get",key)
    var response = getReply(message,id)
    console.log("Message: " + message)
    console.log("Response: " + response)
    if (response !== "") {
      redis.Do("set","ChatMessageResponse:"+id, "Response: " + response)
    }
    
  } else {
    console.log("Nothing")
  }
}
