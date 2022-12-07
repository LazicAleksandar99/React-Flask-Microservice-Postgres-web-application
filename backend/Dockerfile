FROM python:3.10

WORKDIR /backend

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY .  .

CMD [ "python3" , "flask", "run", "--host=0.0.0.0"]