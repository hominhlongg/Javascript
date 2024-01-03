
const newsApi = "http://localhost:3000/news"

async function render() {
    try {
        //News
        let getContentRight = $('.main-content')
        let getNewsData = await axios.get(newsApi)
        let news = getNewsData.data
        const htmlsRight = news.map(news => {
            return `
                    <ul>
                    <li>
                        <h2>
                            <a href="chitiet.html" title="">${news.description}</a>
                        </h2>
                        <div class="item">
                            <p>${news.detail}</p>
                            <div class="clr"></div>
                        </div>
                    </li>
                    </ul>
                 `
        })
        getContentRight.html(htmlsRight.join(""))
    } catch (err) {
        newError.html(`<p style='color:red;font-style:italic'>Xảy ra lỗi khi lấy dữ liệu</p>`)
    }

}
let newError = $('.new-error')
render()

