# 2610 Django + Vite Starting Point
This project serves as a starting point you to use as a starting point for Django applications that use Vite as the asset server for development. You are welcome to us this project for all of your assignments beginning with Module 5.

## Strategy
This application is a hybrid MPA and SPA. It reuses all of the login stuff that we did at the end of module 3 - there is a separate page for signup/signin. Once a user is logged in they are redirected to the / view which then renders the SPA application created using React and Vite.

## Creating a new application
1. Clone the repo `git clone git@github.com:dittonjs/2610DjangoViteStarter.git <your-new-project-name>`. Replace `<your-new-project-name>` with the name you want give to your project.
2. Open the pyproject.toml file and change the `name` property. You should use `-` to separate words in your name for this property.

## Initial Setup
1. In the root directory, install the python dependencies `poetry install`
2. In the `client` directory, install the javascript dependencies `npm install`
3. In the `_server` directory, create a new file called `.env`
4. Copy the contents of `_server/.env.example` into the newly created `.env` file.
5. Activate the poetry env `poetry shell`
6. In the `_server` directory, run the migrations `python manage.py migrate`

## Running the appliction
1. In the `client` directory run `npm run dev`
2. In the `_server` directory (with your poetry env activated) run `python manage.py runserver`
3. Visit your application at `http://localhost:8000`
