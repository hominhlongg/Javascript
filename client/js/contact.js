const contactApi = "http://localhost:3000/contacts"
function generateUuid() {
    return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
let getNameEl = $("input[name='name']")
let getPhoneEl = $("input[name='phone']")
let getWebsiteEl = $("input[name='web']")
let getGenderEl =
    $('select').on('change', function () {
        return this
    })
let getPictureEl = $("input[name='picture']")
let getContentEl = $("textarea[name='content']")
let getSubmitEl = $("input[name='submit']")

function handleBlurInput(input) {
    var errorElement = input.parent().children()[2];
    input.blur(function () {
        if (input.val().trim() === '') {
            $(errorElement).text('Vui lòng nhập!');
            $(errorElement).attr('style', 'display: block; color: red; font-style: italic;');
            input.addClass('invalid');
        }
    })

    input.on('input', function () {
        $(errorElement).attr('style', 'display: none;');
        input.removeClass('invalid');
    })
}
// handleBlurInput(getPictureEl);

handleBlurInput(getNameEl);
handleBlurInput(getPhoneEl);
handleBlurInput(getWebsiteEl);
handleBlurInput(getGenderEl);
handleBlurInput(getContentEl);


getSubmitEl.click(async function (e) {
    e.preventDefault();
    function isRequired(inputElement) {
        var errorElement = inputElement.parent().children()[2];
        if (inputElement.val().trim() === '') {
            $(errorElement).text('Vui lòng nhập!');
            $(errorElement).attr('style', 'display: block; color: red; font-style: italic;');
            inputElement.addClass('invalid');
            return true;
        }
    }

    var check = true;
    isRequired(getNameEl) ? check = false : '';
    isRequired(getPhoneEl) ? check = false : '';
    isRequired(getWebsiteEl) ? check = false : '';
    isRequired(getContentEl) ? check = false : '';
    isRequired(getGenderEl) ? check = false : '';
    if (check) {
        var name = getNameEl.val();
        var phone = getPhoneEl.val();
        var web = getWebsiteEl.val();
        var picture = getPictureEl.val();
        var content = getContentEl.val();
        var gender = getGenderEl.val();


        var newContact = {
            id: generateUuid(),
            name,
            phone,
            web,
            picture,
            content,
            gender,
        }

        try {
            var results = await axios({
                method: "POST",
                url: contactApi,
                data: newContact
            });

            location = 'index.html?msg=1';
        } catch (error) {
            var errorElement = $('.error');
            errorElement.text('Xảy ra lỗi khi thêm!');
            $(errorElement).attr('style', 'color: red; font-style: italic;');
        }
    }
})