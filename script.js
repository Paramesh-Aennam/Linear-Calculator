let queue = []
function calculator(){
    const symbol = this.dataset.sym;
    console.log(symbol)
    if(symbol == '='){
        var res = 0;
        const first_ele = queue.shift()
        let error = false
        if("+-*/".includes(first_ele)){
            queue = []
            const result = document.getElementById('result')
            result.innerHTML = `Error`
            error = true
        }
        res = first_ele
        while(queue.length != 0){
            const ele = queue.shift()
            if(queue.length != 0){
                let next_ele = queue.shift()
                console.log(queue+" : "+ele)
                // console.log(next_ele)
                if(("+-*/".includes(ele) && "+-*/".includes(next_ele))){
                    queue = []
                    const result = document.getElementById('result')
                    result.innerHTML = `Error`
                    error = true
                    return;
                }
                next_ele = parseInt(next_ele)
                console.log("next : "+next_ele)
                while(queue.length != 0 && !("+-*/".includes(queue[0]))){
                    const num = queue.shift()
                    next_ele = next_ele*10 + parseInt(num);
                    console.log(next_ele+" ")
                }
                console.log("nextt : "+next_ele+" res :"+res)
                if(ele == '+'){
                    res = Number(res) + Number(next_ele)
                }else if(ele== '-'){
                    res -= parseInt(next_ele)
                }else if(ele == 'x'){
                    res *= next_ele
                }else if(ele == '/'){
                    res /= next_ele
                }else{

                }
                console.log(res+" "+queue)
            }
            console.log(res+" "+queue)
        }
        if(!error){
            const result = document.getElementById('result')
            result.innerHTML = `${res.toString()}`
            console.log("Success")
        }
        return;
    }else if(symbol == 'AC'){
        queue = []
    }else if(symbol == '⌫'){
        if(queue.length != 0)
            queue.pop();
    }else{
        queue.push(symbol)
    }
    const result = document.getElementById('result')
    console.log(queue)
    result.innerHTML = `<p>${queue.join('')}<p>`
}

document.querySelectorAll('.button').forEach(btn => {
    btn.addEventListener('click', calculator)
})