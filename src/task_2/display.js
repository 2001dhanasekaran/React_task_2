function UserProfile(props){
    const {data}=props;
    const {name,age,email}=data;
    return(
        <>
        <p>User name: {name}</p>
        <p>Age: {age}, {age>=18?"Adult":"Minor"}</p>
        {email&&<p>Email: {email}</p>}
        </>
    )
}
export default UserProfile;