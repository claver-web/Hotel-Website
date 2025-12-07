export default function BookingDetailsApi({obj}){
        
    async function response(){
        const res = await fetch("http://127.0.0.1/api/BookingDetails", {
            method: "POST",
            headers : {
                "Content-type" : "json/application"
            },
            body: JSON.stringify(obj)
        });
    }

    response();

}