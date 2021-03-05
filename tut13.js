let a = document.links;
Array.from(a).forEach(function(element){
    if(element.href.includes("deep")){
        console.log(element.href);
    }

})

