Random number degrades based upon previous num

Making docker image for pi (not bothering with docker-compose)
    sudo docker build -f Dockerfile -t <imageName:ver> .
Running image 
    docker run -it --rm -p 1500:80 <imageName:ver>
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.