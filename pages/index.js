import dynamic from 'next/dynamic';

const One = dynamic(() => import('../components/one'));
const Two = dynamic(() => import('../components/two'));
const Three = dynamic(() => import('../components/three'));

export default () => {
    return (
        <>
            Index
            <One></One>
            <Two></Two>
            <Three></Three>
        </>
    )
}