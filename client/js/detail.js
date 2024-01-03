const newsApi = "http://localhost:3000/news"

async function getUserById() {

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

        var newById = await axios.get(newsApi + '/' + id);
        newById = newById.data;
        getContentRight.html(newById.detail)
    } catch (error) {
        var errorElement = $('.new-error');
        errorElement.text('Xảy ra lỗi khi lấy dữ liệu để sửa!');
        $(errorElement).attr('style', 'color: red; font-style: italic;');
    }
}
getUserById();