function UserProfile(props){
    const {data}=props;
    const {name,age,location,isActive}=data;
    return(
        <>
        <p>User name: {name}</p>
        <p>Age: {age}</p>
        {location&&<p>location: {location}</p>}
        <p>User status: {isActive?"Active user":"Inactive user"}</p>
        </>
    )
}
export default UserProfile;