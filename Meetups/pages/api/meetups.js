import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    
    // Fetch all meetups
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    
    client.close();
    
    // Send data to frontend
    res.status(200).json({ 
      meetups: meetups.map(meetup => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description
      }))
    });
  }
}