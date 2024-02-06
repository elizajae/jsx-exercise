
const App = () => {
    return (
        <div>
        <TweetComponent username="lizajae" name="Liza Jae" date="01/02/24" message="hello" />
        <TweetComponent username="natethedev" name="Nathaniel" date="01/01/24" message="it's my favorite day!" />
        <TweetComponent username="harrystyles" name="Harry Styles" date="02/01/24" message="It's my birthday!!" />
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);