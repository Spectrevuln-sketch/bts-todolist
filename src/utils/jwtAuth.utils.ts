import * as fs from 'fs'
import * as jwt from 'jsonwebtoken'


export const Verify = async (token) => {
  try {
    const bearerHeader = token.split(' ');
    const bearerToken = bearerHeader[1];
    const publicKey = fs.readFileSync('public.key');
    const decoded: any = await jwt.verify(bearerToken, publicKey, { algorithms: ['RS256'] });
    return decoded

  } catch (err) {
    if (err) {
      return false
    }
  }
}



