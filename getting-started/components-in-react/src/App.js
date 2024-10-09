import Userprofile from "./components/UserProfile";


const App = () => {
    
    
    return (
        <div>
            {/*call or render the component*/}
            <Userprofile
                name='Tissa..'
                email='tissa@gmail.com'
                location='Ratlam'
                hobby='Pet owner, Musician'
                about='Tissa.. is a AI/ML engineer . She is passonate, hard working and self learner.'
            />
            <Userprofile
                name='Eren'
                email='eren@gmail.com'
                location='Ratlam'
                hobby='Swimmer, GYM Freak'
                about='Eren.. is a AI/ML engineer . He is passonate, hard working and self learner.'
            />
        </div>
    )
};

export default App;