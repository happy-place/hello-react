function load(text,style){
    let content = document.getElementById('content');
    content.innerText = text;
    content.style = style
}

function serialize(data){
    let res = []
    for(let k in data){
        res.push(`${k}=${data[k]}`)
    }
    return res.join('&')
}