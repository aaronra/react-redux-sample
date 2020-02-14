import Home from '../components/Home';
import AddUser from '../components/AddUser';
import Post from '../components/Post';

const router = [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/:post_id",
        component: Post
      }]
  },
  {
    path: "/add",
    component: AddUser
  },

];

export default router;
