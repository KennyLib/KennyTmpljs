(function (window, document) {
    var KennyTmpl = {
        init: function (tempHTML, data, callback) {
            var _this = this;
            tempHTML = _this.logicRealize(tempHTML);
            for (var item in data) {
                tempHTML = tempHTML.replace("{" + item + "}", data[item]);
            }
            callback(tempHTML);
        },
        logicRealize: function (str) {

            return str;
        }
    }
    window.KennyTmpl = window.KennyTmpl || KennyTmpl;
})(window, document);
