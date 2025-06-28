import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function HomePage() {
  const [meetups, setMeetups] = useState([]);

  const fetchMeetups = async () => {
    try {
      const response = await fetch('/api/meetups');
      const data = await response.json();
      setMeetups(data.meetups);
    } catch (error) {
      console.error('Failed to fetch meetups:', error);
    }
  };

  useEffect(() => {
    fetchMeetups();
  }, []);

  return <MeetupList meetups={meetups} />;
}

export default HomePage;