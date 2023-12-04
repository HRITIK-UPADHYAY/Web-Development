import Hello from './Components/Hello';
import CricketProvider from './Context/CricketProvider';

const App = () => {
    return (
        <div>
            <CricketProvider>
                <Hello />
            </CricketProvider>
        </div>
    )
}


export default App;