let XMLHttpRequest=require("xmlhttprequest").XMLHttpRequest;
function makeAJAXCall(methodType,url,callback,async=true,data=null){
    let xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        console.log("State Changed Called.Ready State: "+ xhr.readyState+" Status:"+xhr.status);
        if(xhr.readyState ===4){
            if(xhr.status ===200 || xhr.status ==201){
                callback(xhr.status >=400){
                    console.log("Handle 400 Client Error or 500 Server Error");
                }
            }
        }
    }
}