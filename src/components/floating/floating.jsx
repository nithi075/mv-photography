import "./floating.css";

export default function FloatingChat(){

const whatsappNumber = "919876543210";

const message = "Hello, I would like to enquire about photography services.";

const whatsappLink =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

return(

<a
href={whatsappLink}
target="_blank"
rel="noopener noreferrer"
className="floating-chat"
>

● Let's Chat

</a>

);

}