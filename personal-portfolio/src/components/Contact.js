import { useState } from "react"
import { Container, Col, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
    const formInitialDetails = {
        firstName:"",
        lastNamme:"",
        email:"",
        phone:"",
        message:"",
    }

    const[formDetails, setFormDetails] = useState(formInitialDetails);
    const[buttonText, setButtonText] = useState("Send");
    const[status, setStatus] = useState({});

    const onFormUpdate = (category, value) =>{
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method : "POST",
            headers : {
                "Content-Type": "   Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if(result.code == 200){
            setStatus({success:true, message:"Message sent successfull"});
        } else {
            setStatus({success:false, message:"Something went wrong, please try again later"})
        }
    }


    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-item-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact us"></img>
                    </Col>
                    <Col md={6}>
                        <h2>Temasta Olalım</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="Adınız" onChange={(e) => onFormUpdate("firstName", e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Soyadınız" onChange={(e) => onFormUpdate("lastName", e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="E-mail" onChange={(e) => onFormUpdate("email", e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Telefon" onChange={(e) => onFormUpdate("phone", e.target.value)} />
                                </Col>
                                <Col>
                                <textarea row="6" value={formDetails.message} placeholder="Mesajınız..."  onChange={(e) => onFormUpdate("message", e.target.value)} />
                                <button type="submit"><span>Gönder</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}