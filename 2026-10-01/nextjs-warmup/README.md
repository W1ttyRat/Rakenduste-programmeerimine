### 1. What does Next.js provide beyond React alone?
Next.js-ga on routes faili põhised, et url tuleneb faili struktuuri järgi, näiteks localhost:3000/api/message ning failid on app/api/message/fail.js

Tuleb eristada ka serveri ja kliendi komponentide vahel

### 2. Why does the counter need 'use client'?
'use client' ütleb, et seda kasutatakse kasutaja (user) brauseris ning serveri komponendid ei saa kasutada useState, useEffect ja onClick.

### 3. Where does the code in app/api/message/route.js run?
jookseb serveris aadressil /api/message

### 4. How is this endpoint similar to an Express route?
Mõlemad teevad sama tööd, et reageerivad mingi HTTP request-ile kindla URL ja HTTP meetodile

### 5. Why must secrets remain on the server?
Kui ei oleks peidus siis saaks neid halvasti ära kasutada
