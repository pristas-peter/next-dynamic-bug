import $ from 'jquery';
export default () => {
    // have to do something with module so it is not tree shaken
    console.log($);
    return '3';
}