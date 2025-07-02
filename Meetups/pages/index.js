import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/meetups');
  const data = await response.json();

  return {
    props: {
      meetups: data.meetups,
    },
    revalidate: 1, // Incremental static regeneration
  };
}

export default HomePage;
