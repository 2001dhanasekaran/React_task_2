import UserProfile from "./display";

function Profile(){
    const data=[
        {name:"Mr.X", age:23, email:"mr.x@email.com"},
        {name:"Mrs.Y", age:19},
        {name:"Miss.Z", age:17, email:"miss.z@email.com"}
    ];
    return(
        <ul>
            {data.map((info)=><li><UserProfile data={info}/></li>)}
        </ul>
    )   
}
export default Profile;