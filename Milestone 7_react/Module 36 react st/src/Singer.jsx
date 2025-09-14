export default function Singer(singer){
    console.log(singer);
    
    return (
        <div className="">
            <h2>Name: {singer.name} </h2>
            <p>Age: {singer.age} </p>
        </div>
    )
}