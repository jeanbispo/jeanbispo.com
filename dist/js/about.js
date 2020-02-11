"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var About = function () {
    function About() {
        _classCallCheck(this, About);

        this.initTpl();
    }

    _createClass(About, [{
        key: "initTpl",
        value: function initTpl() {
            this.tpl = "\n\n            <nav id=\"nav\" class=\"container\">\n                <div class=\"brand\">\n                    <h1 id=\"site-name\"><a href=\"/\">Jean Bispo</a></h1>\n                </div>\n                <button id=\"nav-toggler\"><img src=\"assets/menu.svg\" alt=\"\"></button>\n                <div id=\"menu\">\n                    <ul>\n                        <li><a class=\"enabled\" href=\"about.html\">about</a></li>\n                        <li><a class=\"disabled\" href=\"\">blog</a></li>\n                        <li><a class=\"enabled\" target=\"_blank\" href=\"https://www.linkedin.com/in/jeanbispo/\">linkedin</a></li>\n                        <li><a class=\"disabled\" href=\"\">cv</a></li>\n                    </ul>\n                </div>\n                \n            </nav>\n            <main class=\"site-content\">\n                <section class=\"box\">\n                    \n                   \n                </section>\n            </main>\n        ";
        }
    }, {
        key: "render",
        value: function render() {
            document.getElementById("root").innerHTML = this.tpl;
        }
    }]);

    return About;
}();

new About().render();