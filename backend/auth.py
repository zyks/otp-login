VALID_USER_CREDENTIALS = (
    ("admin@test.com", "admin123"),
    ("user@test.com", "user123")
)

OTP_AUTH_USERS = [
    "admin@test.com",
]

VALID_OTP = "111111"

VALID_AUTH_TOKEN = "ebd28cc7-61d1-40ef-9679-0ae84df7808d"


def validate_credentials(email: str, password: str):
    return any(map(lambda valid_credentials: valid_credentials == (email, password), VALID_USER_CREDENTIALS))


def validate_authentication_code(otp: str):
    return otp == VALID_OTP


def is_otp_auth_required(email):
    return email in OTP_AUTH_USERS


def generate_auth_token():
    return VALID_AUTH_TOKEN
