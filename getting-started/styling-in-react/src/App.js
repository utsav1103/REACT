//
import './style.css'
import style from './style.module.css'

const App = () => {
    //INline style object for the container
    const containerStyle = {
        textAlign: "center",
        margin: "20px",

    };
    
    return (
        <div style={containerStyle}>
            <img src='https://www.thepopverse.com/_next/image?url=https%3A%2F%2Fmedia.thepopverse.com%2Fmedia%2Fattack-on-titan-screenshot-rrmf5zmt5z5fdc452jyd4dksn2.jpg&w=1280&q=75'
            alt="avatar"
            style={{
                width: "150px",
                height: "150",
                borderRadius: '50%',
                objectFit: "cover",
            }}/>
            <h2 className="name">Tissa KJ</h2>
            <p className= "bio">
                AI/ML developer | Musician
            </p>
            <ul className={style.hobbies}>
                <li className={style.hobby}>Coading</li>
                <li className={style.hobby}>Singing</li>
                <li className={style.hobby}>Petting Dogs</li>
            </ul>
        </div>
    );
};

export default App;