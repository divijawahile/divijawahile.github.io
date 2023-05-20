document.addEventListener("visibilitychange", function(){
    if(document.visibilityState == "visible")
    {
        document.title = "DIVIJA | MBA";
        
    }
    else{
        document.title = "Comback to portfolio";
    }
})