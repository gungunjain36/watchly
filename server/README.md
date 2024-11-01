# API ENDPOINTS 

POST   /api/videos                 # Upload video
GET    /api/videos                 # List videos
GET    /api/videos/:id            # Get video details
PUT    /api/videos/:id            # Update video
DELETE /api/videos/:id            # Delete video
GET    /api/videos/:id/stream     # Get video stream

User APIs

POST   /api/auth/register         # Register user
POST   /api/auth/login           # Login user
GET    /api/users/me             # Get current user

PUT    /api/users/me             # Update profile