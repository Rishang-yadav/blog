import mongoose from 'mongoose';

interface Connection {
    isConnected?: boolean;
}

const connection: Connection = {};

async function connect(): Promise<void> {
    if (connection.isConnected) {
        return;
    }
    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState === 1;
        if (connection.isConnected) {
            return;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.MONGODB_URL as string);
    connection.isConnected = db.connections[0].readyState === 1;
}

async function disconnect(): Promise<void> {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === 'production') {
            await mongoose.disconnect();
            connection.isConnected = false;
        }
    }
}

const db = { connect, disconnect };
export default db;
