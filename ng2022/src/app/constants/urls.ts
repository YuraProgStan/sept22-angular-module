import {environment} from '../../environments/environment';

const {API: baseURLL} = environment;

export const urls = {
  users: `${baseURLL}/users`,
  posts: `${baseURLL}/posts`,
  comments: `${baseURLL}/comments`,
}
