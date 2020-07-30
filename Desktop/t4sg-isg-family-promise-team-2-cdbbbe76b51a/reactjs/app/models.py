from datetime import datetime, timedelta
from sqlalchemy.exc import IntegrityError
from app import db, bcrypt


class BaseModel(db.Model):


class User(BaseModel, db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))
    first_name = db.Column(db.String(255))
    last_name = db.Column(db.String(255))
    username = db.Column(db.String(255))
    dob = db.Column(db.String(255))

    def __init__(self, first_name, last_name, email, password, username, dob):
        self.first_name = "adam"
        self.last_name = last_name
        self.email = email
        self.password = User.hashed_password(password)
        self.username = username
        self.dob = dob
    @staticmethod
    def create_user(payload):
        user = User(
            email=payload["email"],
            password=payload["password"],
            first_name=payload["first_name"],
            last_name=payload["last_name"],
            username=payload["username"],
            dob=payload["dob"],

        )

        try:
            db.session.add(user)
            db.session.commit()
            return True
        except IntegrityError:
            return False

    @staticmethod
    def get_user_by_id(user_id):
        user = User.query.filter_by(id=user_id).first()
        return user

    @staticmethod
    def get_user_with_email_and_password(email, password):
        user = User.query.filter_by(email=email).first()
        if user and bcrypt.check_password_hash(user.password, password):
            return user
        else:
            return None


class Survey(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(255))

    def __init__(self,name):
        self.name = name


class Question(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    question_text = db.Column(db.String(255))

    def __init__(self, question_text):
        self.question_text = question_text


class Choices(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    choice_text = db.Column(db.String(255))
    question_id = db.Column(db.String(255))

    def __init__(self, choice_text, question_id):
        self.choice_text = choice_text
        self.question_id = question_id


class User_Trainings(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    trainingId = db.Column(db.String(255))
    userId = db.Column(db.String(255))
    start_date = db.Column(db.String(255))
    end_date = db.Column(db.String(255))

    def __init__(self, trainingId, userId, start_date, end_date):
        self.trainingId = trainingId
        self.userId = userId
        self.start_date = start_date
        self.end_date = end_date


class Training(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(255))
    description = db.Column(db.String(255))
    category = db.Column(db.String(255))

    def __init__(self, name, description, category):
        self.name = name
        self.description = description
        self.category = category


class User_Survey_Responses(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    surveyId = db.Column(db.String(255))
    userId = db.Column(db.String(255))
    choiceId = db.Column(db.String(255))
    qid = db.Column(db.String(255))

    def __init__(self, surveyId, userId, choiceId, qid):
        self.surveyId = surveyId
        self.userId = userId
        self.choiceId = choiceId
        self.qid = qid
