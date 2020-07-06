var default_model = [
    "VERY INTERESTING",
    "I AM NOT SURE I UNDERSTAND YOU FULLY",
    "WHAT DOES THAT SUGGEST TO YOU?",
    "PLEASE CONTINUE",
    "GO ON",
    "DO YOU FEEL STRONGLY ABOUT DISCUSSING SUCH THINGS?",
  ]


function main() {
    var key = redis.Blpop(1,"DefaultResponseRequests")
    if (key != undefined && key.length > 0) {
      console.log("Chat key:" + key)
      var id = key.split(":")[1]
      console.log("ID ", id)
      var message = redis.Do("get",key)
      response = default_model[Math.floor(Math.random() * default_model.length)]
      console.log("Message: " + message)
      console.log("Response: " + response)
      redis.Do("set","ChatMessageResponse:"+id, "Response: " + response)
    } else {
      console.log("Nothing")
    }
  }
  