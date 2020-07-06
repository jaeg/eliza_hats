<?
redis.Do("incr","ChatKey")
var id =  redis.Do("get","ChatKey")
var key = "ChatMessageRequest:"+id

redis.Do("set",key,request.Body)
redis.Do("lpush","ChatRequests", key)

var resp = undefined
var tries = 0
while (resp === undefined && tries < 1000) {
  resp = redis.Do("get","ChatMessageResponse:"+id)
  tries++
}
if (tries >= 1000) {
  resp = "Unable to get a response."
}

response.Write(resp)
?>