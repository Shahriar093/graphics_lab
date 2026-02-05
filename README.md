# Setup Instructions
# 1. Environment Variables

After cloning the project, create a .env file at the root directory and copy the following content into it:
#MongoDB Connection String
MONGODB_URI=mongodb+srv://shahriar:graphicsLab@cluster0.5gtc8kl.mongodb.net/?appName=Cluster0
JWT_SECRET=hellohello

#Firebase Configuration
REACT_APP_FIREBASE_API_KEY=AIzaSyD6AFfmwFxh89FX89XV0riPU23PkAVvOnw
REACT_APP_FIREBASE_AUTH_DOMAIN=graphics-ef8ad.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=graphics-ef8ad
REACT_APP_FIREBASE_STORAGE_BUCKET=graphics-ef8ad.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=738690325735
REACT_APP_FIREBASE_APP_ID=1:738690325735:web:91ef60d2dff6614ede5642

# 2. Backend Setup
npm install
npm start
# 3. Frontend Setup
cd client
npm install
npm run dev

