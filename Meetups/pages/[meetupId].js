import MeetupDetail from '../components/meetups/MeetupDetail';
import { DUMMY_MEETUPS } from '../data/dummy-meetups';

function MeetupDetails({ meetup }) {
  return <MeetupDetail {...meetup} />;
}

export async function getStaticPaths() {
  return {
    paths: DUMMY_MEETUPS.map(meetup => ({
      params: { meetupId: meetup.id }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const meetup = DUMMY_MEETUPS.find(m => m.id === params.meetupId);
  return { props: { meetup } };
}

export default MeetupDetails;