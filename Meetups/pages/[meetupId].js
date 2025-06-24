import { useRouter } from 'next/router';
    import MeetupDetail from '../components/meetups/MeetupDetail';
const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 10, 12345 Some City',
    description: 'This is a second meetup!'
  }
];

function MeetupDetails() {
  const router = useRouter();
  const meetupId = router.query.meetupId;
  const selectedMeetup = DUMMY_MEETUPS.find(meetup => meetup.id === meetupId);

  if (!selectedMeetup) {
    return <div>Meetup not found!</div>;
  }

  return (
    <MeetupDetail
      image={selectedMeetup.image}
      title={selectedMeetup.title}
      address={selectedMeetup.address}
      description={selectedMeetup.description}
    />
  );
}

export default MeetupDetails;