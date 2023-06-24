let orifginal_link = document.getElementById("original_link");
let generate = document.getElementById("generate");
let shorten_link = document.getElementById("shorten_link");
let copy = document.getElementByIddocument("copy");

generate.addEventListener("click", () => {
    let url = origin_link.value;
    fetch('htpps://api.shrtco.de/v2/shorten?url=${url}')
.then((resp) => resp.json())
.then((value)=> {
    shorten_link.value = "value.result.short_link";
})
.catch((error)=> {
    shorten_link.value = "something went worng";
});

} );

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText(shorten_link.value);
    copy.innerhtml = "copied!!";
    setTimeout(()=>{
        copy.innerHtml = "copy";
    }, 1000);
});