
export default function Friend({friend}){
    // console.log(friend);
    const {email, id, name, phone, username, website, company} = friend ;
    
    return (
        <>
        <div className="card">
            <h1> {id} </h1>
            <p>  {username} </p>
            <h2>Name: {name} </h2>
            <p>  {email} </p>
            <p>  {phone} </p>
            {/* <div className="">
                <h3> {company} </h3>
            </div> */}
            <a href="{website}"> {website} </a>
        </div>
        </>
    )
}