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
  },
  {
    id: 'm3',
    title: 'Third Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Some address 15, 12345 Some City',
    description: 'This is a third meetup!'
  }
];

function MeetupDetails({ meetup }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <MeetupDetail
      image={meetup.image}
      title={meetup.title}
      address={meetup.address}
      description={meetup.description}
    />
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { meetupId: 'm1' } },
      { params: { meetupId: 'm2' } },
      { params: { meetupId: 'm3' } }
    ],
    fallback: false
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const selectedMeetup = DUMMY_MEETUPS.find(meetup => meetup.id === meetupId);

  return {
    props: {
      meetup: selectedMeetup
    }
  };
}

export default MeetupDetails;