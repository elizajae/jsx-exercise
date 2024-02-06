const App = () => {
    return (
        <div>
            <Person name="Bartholamewwww" age="28" hobbies={['skiing', 'painting', 'hiking']} />
            <Person name="John" age="17" hobbies={['reading', 'writing', 'coding']} />
            <Person name="Samantha" age="24" hobbies={['swimming', 'running', 'biking']} />
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);