export default function MovieError({ title, message }){
    return(
        <section className="py-5">
            <div className="container">
                <div className="alert alert-danger" role="alert">
                    <h6>{ title }</h6>
                    <p>{ message }</p>
                </div>
            </div>
        </section>
    );
}