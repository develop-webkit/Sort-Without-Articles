const bandsEl = document.querySelector("#bands");
const articles = ["the","a","an"];
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// const sortedBands = bands
// .map((band) => {
//     const regex = /^\w+/i;
//     const match = regex.exec(band);
//     for(const article of articles){
//         if(match[0].toLowerCase() === article.toLowerCase()){
//             return band.replace(match[0],"").trimStart().concat(" ",match[0]);
//         }
//     }
//     return band;
// })
// .sort()
// .map((band)=>{
//     const regex = /\w+$/i;
//     const match = regex.exec(band);
//     for(const article of articles){
//         if(match[0].toLowerCase() === article.toLowerCase()){
//             return match[0].concat(" ",band).replace(regex,"").trimEnd();
//         }
//     }
//     return band;
// });;

function stripe(item){
    return item.replace(/^(a |an |the )/i, "").trimStart();
}

for(const band of bands){
    console.log(stripe(band));
}

const sortedBands = bands.sort((a,b) => stripe(a) > stripe(b) ? 1 : -1);

const li = document.createElement("li");
for(const sortedBand of sortedBands){
    li.textContent += `<li>${sortedBand}</li>`;
}
bandsEl.innerHTML = li.innerText;


