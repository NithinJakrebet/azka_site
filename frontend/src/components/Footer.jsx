import "../styling/footer.css";
import "../styling/pages.css"
// import fb from "../photos/fb_icon.png"
// import ig from "../photos/Instagram_logo.png"
// import tk from "../photos/tiktok.png"

export default function Footer() {
	return (
        <div className="main-footer">
            <div className="container">
                <div className="row">

                </div>
                <hr></hr>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} AZ Konkanis 
                    </p>
                </div>
            </div>
        </div>
    )
}

