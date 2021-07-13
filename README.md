Simple React and Flask app with OTP two-factor authentication.

### Starting the project
1. Clone repository `git clone git@github.com:zyks/otp-2fa-login.git`
2. Run `cp .env_sample .env` to create `.env` file in root folder
3. Run `docker-compose up` to build images and start containers
4. Visit `localhost:3000` in your browser to open React app


### Authentication
There are 2 users credentials hardcoded, user `admin@test.com` has 2FA enabled and it is required to 
insert OTP when logging in. `111111` will be always accepted as valid OTP.
```
email: admin@test.com
password: admin123
```
```
email: user@test.com
password: user123
```
