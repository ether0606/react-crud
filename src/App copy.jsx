import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [singleUser, setSingleUser] = useState({'id': '', 'name': '', 'email': '', 'mobile': ''})

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/index.php');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      name: formData.get('name'),
      email: formData.get('email'),
      mobile: formData.get('mobile'),
    };

    try {


      const response = await fetch('/api/create_user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        fetchUsers(); // Refresh the user list after adding a new user
      } else {
        console.error('Error adding user:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
      name: formData.get('name'),
      email: formData.get('email'),
      mobile: formData.get('mobile'),
    };

    try {
      const response = await fetch('/api/update_user.php?id=' + singleUser.id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        fetchUsers(); // Refresh the user list after updating a user
        setSingleUser({'id': '', 'name': '', 'email': '', 'mobile': ''}); // Clear the single user state
      } else {
        console.error('Error updating user:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }

  const handleEdit = async (userId) => {
    try {
      const response = await fetch('/api/single_user.php?id=' + userId);
      const data = await response.json();
      setSingleUser(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      fetch('/api/delete.php?id=' + userId, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            fetchUsers(); // Refresh the user list after deleting a user
            alert('User deleted successfully');
          } else {
            console.error('Error deleting user:', response.statusText);
          }
        })
        .catch((error) => {
          console.error('Error deleting user:', error);
        });
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="mobile" placeholder="Mobile" />
        <button type="submit">Add User</button>
      </form>
      <form onSubmit={handleUpdateSubmit}>
        <input type="text" value={singleUser.name} onChange={(e) => setSingleUser({...singleUser, name: e.target.value})} name="name" placeholder="Name" />
        <input type="email" value={singleUser.email} onChange={(e) => setSingleUser({...singleUser, email: e.target.value})} name="email" placeholder="Email" />
        <input type="text" value={singleUser.mobile} onChange={(e) => setSingleUser({...singleUser, mobile: e.target.value})} name="mobile" placeholder="Mobile" />
        <button type="submit">Update User</button>
      </form>

      <table>
        <tbody>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Actions</th>
        </tr>

        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.mobile}</td>
            <td>
              <button onClick={() => handleEdit(user.id)}>Edit</button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  )
}

export default App
