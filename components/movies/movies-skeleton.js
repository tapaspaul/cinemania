export default function MoviesSkeleton(){
    return(
        <section className="py-5 placeholder-glow">
            <div className="container-fluid px-3">
                <h3 className="sec-title">Top Rated</h3>
                <div className="row">
                    <div className="col-2">
                        <span className="d-block placeholder w-100" style={{minHeight: '448px'}}></span>
                    </div>
                    <div className="col-2">
                        <span className="d-block placeholder w-100" style={{minHeight: '448px'}}></span>
                    </div>
                    <div className="col-2">
                        <span className="d-block placeholder w-100" style={{minHeight: '448px'}}></span>
                    </div>
                    <div className="col-2">
                        <span className="d-block placeholder w-100" style={{minHeight: '448px'}}></span>
                    </div>
                    <div className="col-2">
                        <span className="d-block placeholder w-100" style={{minHeight: '448px'}}></span>
                    </div>
                    <div className="col-2">
                        <span className="d-block placeholder w-100" style={{minHeight: '448px'}}></span>
                    </div>
                </div>
            </div>
        </section>
    );
}