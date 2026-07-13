import router from 'express';
import addListing from "../Controller/landing.Controller.js"
const landingRouter = router();

landingRouter.get('/', addListing);

export default landingRouter;