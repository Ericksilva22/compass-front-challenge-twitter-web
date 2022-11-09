import './style/style.css';
import { controlerBtn } from './modules/btn-tweet';
import { imgPost } from './modules/upload-img';
import { buttonOpacity } from './modules/btn-tweet-post';
import { darkMode } from './modules/dark-mode';
import { likePost } from './modules/tweet-like';
import { commentPost } from './modules/tweet-comment';

controlerBtn();
imgPost();
buttonOpacity();
darkMode();
likePost();
commentPost();
