
let x = ""
ab(x)
function ab (num){
    $("#input").val(num)
}
let deyer1 = null
let deyer2 = null
let deyer2gozlenir = false

$(".grid").on("click",function(e){
    let data = e.target

    if(data.value=="silmek"){
        x=""
        ab(x)
    }

    if(data.value == "."){
        not()
    }

    if(data.classList == "number"){
        goster(data.value)
    }
        
    if(data.classList=="hesab"){

        if(x == ""){
        console.log(555);            
            deyer1=x
        }
    }
})
function not (num){
    if(!$("#input").val().includes(".")){
        if(x==""){

            x += "0."
            ab(x)
        }else{
            x += "."
            ab(x)
        }
        
    }
}
function goster(num){
    x+=num
    ab(x)
}
console.log(deyer1);