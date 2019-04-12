function init() {
  console.log("Eliza online")
}

function main() {
  var key = redis.Blpop(1,"ChatRequests")
  if (key.length > 0) {
    console.log(key)
    var id = key.split(":")[1]
    var message = redis.Do("get",key).String()[0]
    redis.Do("set","ChatMessageResponse:"+id, "Response: " + message)
  } else {
    console.log("Nothing")
  }
}
