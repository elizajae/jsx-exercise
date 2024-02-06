const TweetComponent = (props) => {
    return (
    <div class='tweet'>
        <p class='name'>{props.name}</p>
        <p class='username'>@{props.username}</p>
        <p class='message'>{props.message}</p>
        <p class='date'>{props.date}</p>
    </div>    
    );
}

