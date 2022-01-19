// 19ff9016f579465c9b9bf88a6287ed68
let apiKey = '19ff9016f579465c9b9bf88a6287ed68';
// Grab the news Container
let newsAccordion = document.getElementById('newsAccordion');
// create an xhr 
const xhr = new XMLHttpRequest();
// Create a get request
xhr.open('Get', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=19ff9016f579465c9b9bf88a6287ed68', true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
       articles.forEach(function(element, index) {
           
       console.log(element,index);
            let news = `<div class="accordion-item">
<h2 class="accordion-header" id="heading${index}">
    <button class="accordion-button" type="button" data-bs-toggle="collapse${index}"
        data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
      <img src = "${element['urlToImage']}" style = "width:180px; height:150px;">
       &nbsp; &nbsp;  ${element['title']}
    </button>
</h2>
    <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}"
        data-bs-parent="#newsAccordion">
        <div class="accordion-body">
           ${element['content']} <a href = "${element['url']}" target = "_blank">Read More Here</a>
        </div>
    </div>
    </div>`;
    newsHtml += news;
       });
        newsAccordion.innerHTML = newsHtml;
        //    console.log(articles);
    } else {
        console.log("some error occured");
    }
}
xhr.send();
