
const App = () => {
    return (
        <div>
        <FirstComponent />
        <NamedComponent name="liza" />
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);