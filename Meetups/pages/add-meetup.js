import { useRouter } from 'next/router';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function AddMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    try {
      const response = await fetch('/api/meetups', {
        method: 'POST',
        body: JSON.stringify(enteredMeetupData),
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await response.json();
      console.log(data);
      router.push('/'); // Redirect after submission
    } catch (error) {
      console.error('Failed to add meetup:', error);
    }
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default AddMeetupPage;