redis.Do("incr","ChatKey")
var id =  redis.Do("get","ChatKey").String()[0]
var key = "ChatMessageRequest:"+id

redis.Do("set",key,request.Body)
redis.Do("lpush","ChatRequests", key)

var resp = ""
while (resp === "") {
  resp = redis.Do("get","ChatMessageResponse:"+id).String()[0]
}

response.Write(resp)
