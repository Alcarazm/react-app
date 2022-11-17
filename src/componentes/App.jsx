import Header from './feedback/Header';
import FeedbackItem from "./feedback/FeedbackItem"
function App(){
    const HeaderStyles={
        backgroundColor: '#ed51a3',
        color:'red'
    }
    return(
        <div className="container">
            <Header 
                bgColor={HeaderStyles.backgroundColor}
                c="red"
            />
            <FeedbackItem/>
            <FeedbackItem/>
            <FeedbackItem/>
            <FeedbackItem/>

        </div>
    )
}

export default App;