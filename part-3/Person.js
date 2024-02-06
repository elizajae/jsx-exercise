const Person = (props) => {
    return (
    <div className='person'>
        <p className='learn-more'>Learn some information about this person</p>
        <p className='name'>{props.name.length >= 8 ? props.name.substr(0, 5) + "..." : props.name}</p>
        <p className='age'>{props.age}</p>
        <h3 className= 'age-check'>{props.age >= 18 ? "please go vote!" : "you must be 18." }</h3>
        <ul className='hobby-list'>
        {props.hobbies.map((hobby, key) => <li key={key}>{hobby}</li>)}
        </ul>
    </div>
    );
}
