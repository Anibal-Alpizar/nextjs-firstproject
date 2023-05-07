async function getUser(id) {
  console.log(id);
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UsersPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div>
      <h1>User details</h1>
      <div>
        <img src={user.avatar} alt={user.first_name} />
        <h3>
          {user.id} {user.first_name} {user.last_name}
          <p>{user.email}</p>
        </h3>
      </div>
    </div>
  );
}

export default UsersPage;
