const categoryApi = "http://localhost:3000/cat"
async function render() {
    try {
        let getCate = $('.content-left')
        let getData = await axios.get(categoryApi)
        let categories = getData.data
        const htmls = categories.map(cat => {
            return `
            <ul>
            <li><a href="danhmuc.html?cid=${cat.id}">${cat.name}</a></li>
            </ul>
        `
        })
        getCate.html(htmls.join(""))
        getCate.prepend(`<h3>Danh mục tin</h3>`)
    } catch (err) {
        errorEl.html(`<p style='color:red;font-style:italic'>Xảy ra lỗi khi lấy dữ liệu</p>`)
    }

}
let errorEl = $('.error')
render()
