import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // 1. Connect to MongoDB
      const client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db(); 
      
      // 2. Access the "meetups" collection (will be created automatically)
      const meetups = await db.collection('meetups').find().toArray();
      
      client.close();

      // 3. Return formatted data
      res.status(200).json({
        meetups: meetups.map(meetup => ({
          id: meetup._id.toString(),
          title: meetup.title,
          image: meetup.image,
          address: meetup.address
        }))
      });
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch meetups' });
    }
  }
}