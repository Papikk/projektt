const UserInfo = () => {
    const name = "Jan"
    const age = 30;

    return (
      <section>
    <h2>Cześć, {name}!</h2>
    <p>Masz {age} lat.</p>
    <p>Za rok będziesz mieć {age + 1} lat.</p>
    </section>
      
    );
};
export default UserInfo;