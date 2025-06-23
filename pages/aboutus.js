import Link from 'next/link';

const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

export default function AboutUsPage() {
  return (
    <div>
      <h1>About Us</h1>
      <h2>Our Team</h2>
      <ul>
        {details.map((dev) => (
          <li key={dev.id}>
            <Link href={`/aboutus/${dev.id}`}>
              <h3>{dev.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}