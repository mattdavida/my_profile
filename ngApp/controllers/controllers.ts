namespace myapp.Controllers {

    export class HomeController {
        public email = {};
        public emailSent = false;
        public successMessage = "";


        public sendEmail() {
          this.emailSent = true;
          this.$http.post("/contact", this.email).then((data) => {
            console.log(this.email)
            this.emailSent = true;
            this.successMessage = "Email successfully sent!  I promise to reach out A.S.A.P"
            this.$timeout(() => {
              this.emailSent = false;
              this.email = {};
            }, 3000).catch((err) => {
              console.error(err);
            })
          }).catch((err) => {
            console.error(err);
          });
        }

        constructor(private $http, private $timeout) {
      }
    }
}
