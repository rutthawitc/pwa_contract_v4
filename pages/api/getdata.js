import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  //console.log('Directory is: ', path.join(process.cwd()));
  try {
    const data = await fs.readFile(
      path.join(process.cwd(), 'data', 'data.json'),
      'utf8'
    );
    res.status(200).json(JSON.parse(data));
    //res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
