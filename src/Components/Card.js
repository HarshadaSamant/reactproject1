function Card(Props) {

    return(
        <div class="card" style={{width: "18rem"}}>
            <div class="card-body">
                <h5 class="card-title">{Props.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{Props.subtitile}</h6>
                <p class="card-text">{Props.description}</p>
                <a href="#" class="card-link">{Props.link1}</a>
                <a href="#" class="card-link">{Props.link2}</a>
            </div>
        </div>
    )
}

export default Card;