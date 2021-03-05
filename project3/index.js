console.log('hello');

country = 'in';
let apikey = 'b7019880a6df40b490f2947dca2ecb81';
const sources = 'google-news-in';
//grab the news container
newsAccordian = document.getElementById('newsAccordian');

const xhr = new XMLHttpRequest
xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apikey}`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            //console.log(element, index)

            let news = `<div class="card">
             <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                        <button class="btn btn-link  collapsed" type="button" data-toggle="collapse"
                            data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                           <b>Breaking News${ index + 1 }:</b>  ${element['title']} 
                            </button>
                        </h2>
                    </div>

                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                        data-parent="#newsAccordian">
                        <div class="card-body">${element['content']}.<a href="${element['url']}"target="_blank">Read more here</a>
                    </div>
             </div>
        </div>`
            newsHtml += news
        });
        newsAccordian.innerHTML = newsHtml;
    }

    else {
        console.log("Some error occured")
    }
}
xhr.send();


