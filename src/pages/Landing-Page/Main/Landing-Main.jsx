import './Landing-Main.css';

function LandingMain() {
    return (
        <div
        className='w-full h-[40vh] bg-cover bg-center bg-no-repeat'
        style={{ backgroundColor: 2e3134 }}
        >
            <div className='inset-0 flex items-center justify-center'>
                <img
                src='/Landing/placeholder-square.png'
                alt='placeholder'
                className='w-32 h-32 rounded border-4 border-white shadow-lg'
                />
            </div>
        </div>
    );
}

export default LandingMain;