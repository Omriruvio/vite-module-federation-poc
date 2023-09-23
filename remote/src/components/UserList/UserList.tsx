import { useEffect, useState } from 'react';

const useFetch: <T>(url: string) => { data: T; error: Error; loading: boolean } = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
};

export type User = {
  gender: string;
  name: { title: string; first: string; last: string };
  location: {
    street: { number: number; name: string };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: { latitude: string; longitude: string };
    timezone: { offset: string; description: string };
  };
  email: string;
};

const UserList = () => {
  const { data, error, loading } = useFetch<{ results: Array<User> }>('https://randomuser.me/api/?results=10');

  return (
    <div style={{ marginTop: '40px' }}>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <UserListContent data={data} />}
    </div>
  );
};

const UserListContent = ({ data }: { data: { results: Array<User> } }) => {
  return (
    <div style={{ border: '1px solid black', borderRadius: '5px', minWidth: '400px' }}>
      <h3>Users from remote</h3>
      <ul style={{ listStyle: 'none', padding: '15px', textAlign: 'start' }}>
        {data.results.map((user: User) => (
          <li key={user.email} style={{ borderBottom: '1px solid black', paddingBottom: '15px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
              <p>
                {user.name.title} {user.name.first} {user.name.last}
              </p>
              <div>
                <p>
                  {user.location.street.number} {user.location.street.name}
                </p>
                <p>{user.email}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
