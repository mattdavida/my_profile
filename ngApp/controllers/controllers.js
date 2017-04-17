var myapp;
(function (myapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($http, $timeout) {
                this.$http = $http;
                this.$timeout = $timeout;
                this.email = {};
                this.emailSent = false;
                this.successMessage = "";
            }
            HomeController.prototype.sendEmail = function () {
                var _this = this;
                this.emailSent = true;
                this.$http.post("/contact", this.email).then(function (data) {
                    console.log(_this.email);
                    _this.emailSent = true;
                    _this.successMessage = "Email successfully sent!  I promise to reach out A.S.A.P";
                    _this.$timeout(function () {
                        _this.emailSent = false;
                        _this.email = {};
                    }, 3000).catch(function (err) {
                        console.error(err);
                    });
                }).catch(function (err) {
                    console.error(err);
                });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
    })(Controllers = myapp.Controllers || (myapp.Controllers = {}));
})(myapp || (myapp = {}));
