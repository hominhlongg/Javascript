const newsApi = "http://localhost:3000/news"

async function getNewById() {

    function getParameterByName(name, url = location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    var id = getParameterByName('cid');
    try {
        let getContentRight = $('.main-content')

        var newById = await axios.get(newsApi);
        newById = newById.data;
        const htmls = newById.filter(x => {
            return x.catId === id

        })
        if (htmls.length <= 0) {
            getContentRight.prepend(`<div class="empty" style="font-style:italic;text-align:center;user-select:none">Chưa có tin tức</div>`)
        } else {
            let news = htmls.map(n => {
                return `
                    <ul>
                            <li>
                                <h2>
                                    <a href="chitiet.html?cid=${n.id}" title="">${n.description}</a>
                                </h2>
                                <div class="item">
                                    <p>${n.detail}</p>
                                    <div class="clr"></div>
                                </div>
                            </li>
                            </ul>
                    `
            })
            getContentRight.html(news.join(""))
        }
    } catch (err) {
        newError.html(`<p style='color:red;font-style:italic'>Xảy ra lỗi khi lấy dữ liệu</p>`)
    }



}
let newError = $('.new-error')

getNewById();
