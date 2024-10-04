const news = ['asdasdasdfdf', 'fvqervrffdfd']
const btn = document.querySelector('.btn');
const container = document.querySelector('.news-container');


function fetchNews() {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            news.forEach(theme =>{
                const p = document.createElement('p');
                p.textContent = theme;
                container.appendChild(p);
            })
        }, 2000);
    });
}

btn.addEventListener('click', ()=>{
    fetchNews()
    .then(result => {
        
    }).catch(err => {
    
    });
})

