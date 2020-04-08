ng update @angular-devkit/build-angular --allow-dirty

rm package-lock.json && npm i

ng serve --open

ng test

ng e2e
