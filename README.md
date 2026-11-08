# nad_a3
NAD Network Application security

## Testing

- user name: lian and password: helloWorld@123
- client computer can access:

    -   https://zlungler5069-nad-a3.onrender.com/
## Setup
Django Setup and Run Commands

Step 1 - Create a superuser
python src/manage.py createsuperuser

Step 2 - Create database migrations
python src/manage.py makemigrations

Step 3 - Apply migrations to the database
python src/manage.py migrate

Step 4 - Collect static files
python src/manage.py collectstatic

Step 5 - Run the development server
python src/manage.py runserver
    
## How to run between different machine
- Add ip here
```
ALLOWED_HOSTS = [
    'localhost',
    '127.0.0.1',
    'https://zlungler5069-nad-a3.onrender.com/'
]
```
- python manage.py runserver <<ip here>>:8000
- or
- py -m uvicorn posts_proj.asgi:application --reload
- make sure to install using pip
```

asgiref==3.13.0
boto3==1.43.124
botocore==1.43.124
certifi==2026.10.23
click==8.5.1
crispy-bootstrap5==2026.9
dj-database-url==3.1.2
Django==6.1.2
django-crispy-forms==2.7
django-storages==1.14.6
gunicorn==26.2.0
h11==0.16.0
jmespath==1.1.0
pillow==13.0.0
psycopg2-binary==2.9.13
python-dateutil==2.9.0.post0
python-dotenv==1.2.4
s3transfer==0.19.3
six==1.17.0
sqlparse==0.6.1
tzdata==2026.6
urllib3==2.8.0
uvicorn==0.54.0
whitenoise==6.12.0

```
- Make sure to fill https://supabase.com
```
SUPA_S3_ACCESS_KEY_ID=<<access key id>>
SUPA_S3_SECRET_ACCESS_KEY=<<access key of your database>>
SUPA_STORAGE_BUCKET_NAME=<<storage's name>>
SUPA_S3_ENDPOINT_URL=<<storage end point url>>
SUPA_S3_REGION_NAME=<<region where storage is host>>
SUPA_S3_CUSTOM_DOMAIN=<<url folder for your media>>
SECRET_KEY=<<django secret key>>
DATABASE_URL=<<connection string for database>>
```
## How to setup storage in supabase
- Once you create project name 
- Storage > Create database > folder name
- Connect > Direct > Transfer pooler
- set that storage to public for now

## Load local database to supabase (after .env with database url is setup) Inside terminal
- python manage.py dumpdata > data.json
- python manage.py dumpdata posts profiles > data.json
