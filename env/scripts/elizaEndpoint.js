<?
redis.Do("incr","ChatKey")
var id =  redis.Do("get","ChatKey")
var key = "ChatMessageRequest:"+id

redis.Do("set",key,request.Body)
redis.Do("lpush","ChatRequests", key)

var resp = undefined
while (resp === undefined) {
  resp = redis.Do("get","ChatMessageResponse:"+id)
}

response.Write(resp)
?>