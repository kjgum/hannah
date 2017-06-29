function Router() {
        this.routes = {};
        this.currentUrl = '';
    }
    Router.prototype.route = function(path, callback) {
        this.routes[path] = callback || function(){};
    };
    Router.prototype.refresh = function() {
        this.currentUrl = location.hash.slice(1) || '/';
        this.routes[this.currentUrl]();
    };
    Router.prototype.init = function() {
        window.addEventListener('load', this.refresh.bind(this), false);
        window.addEventListener('hashchange', this.refresh.bind(this), false);
    }
    window.Router = new Router();
    window.Router.init();
    var content = document.querySelector('.container');
    // change Page anything
    function changeBgColor(color) {
        content.style.backgroundColor = color;
    }
    Router.route('/green', function() {
        changeBgColor('#455718');
    });
    Router.route('/blue', function() {
        changeBgColor('#184557');
    });
    Router.route('/purple', function() {
        changeBgColor('#571845');
    });
