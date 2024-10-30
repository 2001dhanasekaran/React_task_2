import UserProfile from "./display";
function User(){
    const data=[
        {name:"Mr.A", age:20, location:"Coimbatore", isActive:true},
        {name:"Mrs.B", age:23, location:"Madurai", isActive:false},
        {name:"Miss.C", age:18, location:"Chennai", isActive:true},
        {name:"Mr.D", age:22, isActive:true},
        {name:"Mr.E", age:25, location:"Selam", isActive:false}

    ];
    return(
        <>
        <ul>
            {data.map((info)=><li><UserProfile data={info}/></li>)}
        </ul>
        </>
    )
}
export default User;