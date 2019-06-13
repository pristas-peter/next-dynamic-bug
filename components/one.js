import big from '../big';
export default () => {
    // have to do something with module so it is not tree shaken
    console.log(big.S.charAt(0));
    
    return '1';
}