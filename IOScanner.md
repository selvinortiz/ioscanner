# IO Scanner
> QR Code scanning app for our conference

## Setup Scan
Before users can be scanned into a session, a setup must be scanned.

### QR Code (Text)
```json
{
  "url": "https://kingdomadvisors.com/conf/setup",
  "type": "setup",
  "payload": {
    "id": 123
  }
}
```

### Response
```json
{
  "success": true,
  "message": "2018 Conference Study Group Leader Workshop is ready to go.",
  "nextUrl": "https://kingdomadvisors.com/conf/user"
}
```

## User Scan
Once a setup is scanned, a user can be scanned to get checked into the session.

### QR Code (Text)
```json
{
  "type": "user",
  "payload": {
    "id": 123,
    "sessionId": 456
  }
}
```

### Response
```json
{
  "success": true,
  "message": "John Doe has been checked in."
}
```
