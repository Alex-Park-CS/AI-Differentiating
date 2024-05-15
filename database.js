const databaseLink = `${process.env.MONGODB_PROTOCOL}://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}`;

require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const bcrypt = require("bcrypt");
const MongoStore = require("connect-mongo");
const { date } = require("joi");

const storage = MongoStore.create({
    mongoUrl: databaseLink,
    crypto: { secret: process.env.MONGODB_SESSION_SECRET }
})

const client = new MongoClient(databaseLink, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function signUpUser(requestBody) {
    return new Promise(async (res, rej) => {
        try {
            let errorList = [];
            
            // check if email and username are taken
            let existingUserWithSameName = await findUser({username: requestBody.username});
            if (existingUserWithSameName)
                errorList.push({usernameField: `${existingUserWithSameName.username} is taken`});
  
            let existingUserWithSameEmail = await findUser({email: requestBody.email});
            if (existingUserWithSameEmail) 
                errorList.push({emailField: `${existingUserWithSameEmail.email} is already associated with an account`});

            if (errorList.length !== 0) {
                res(errorList);
                return;
            }

            let database = client.db(process.env.MONGODB_DATABASE);
            let users = database.collection("users");

            let salt = await bcrypt.genSalt(10);
            let hashedPassword = await bcrypt.hash(requestBody.password, salt);

            let writeQuery = {
                username: requestBody.username,
                email: requestBody.email,
                password: hashedPassword,
                winCount: 0,
                loseCount: 0
            }

            await users.insertOne(writeQuery);
            console.log(`${requestBody.username} has successfully been registered`);
            res(null);

        } catch (e) {
            rej(e);
        }
    });
}

async function loginUser(requestBody) {
    return new Promise(async (res, rej) => {
        try {
            let result = await findUser({email: requestBody.email});
            if (result) {
                let passwordMatches = await bcrypt.compare(requestBody.password, result.password);
                if (passwordMatches) {
                    res(result);
                    return;
                }
            }
            else res(null);

        } catch (e) {
            rej(e);
        }
    });
}

async function findUser(searchParams) {
    return new Promise(async (res, rej) => {
        try {
            let database = client.db(process.env.MONGODB_DATABASE);
            let users = database.collection("users");

            let result = await users.findOne(searchParams);
            res(result);

        } catch (e) {
            rej(e);
        }
    });
}

async function getLeaderboard() {
    return new Promise(async (res, rej) => {
        try {
            let database = client.db(process.env.MONGODB_DATABASE);
            let users = database.collection("users");

            let result = await users.find().limit(10).sort({winCount: -1}).toArray();
            res(result);
        } catch (e) {
            rej(e);
        }
    });
}

// not done yet (DONT USE) prototype version of what it should look like, iron it out once actually done game
async function updateUserStats(playerSession, gameOutcome) {
    try {
        let database = client.db(process.env.MONGODB_DATABASE);
        let users = database.collection("users");

        if (gameOutcome === "win") 
            await users.updateOne({email: playerSession.email}, {$inc: {winCount: 1}});
        else
            await users.updateOne({email: playerSession.email}, {$inc: {loseCount: 1}});
    
        console.log(`${playerSession.username} stats page has been updated`);

    } catch (e) {
        console.error(e);
    }
}

/**
 * Updates the specified user with the specified value.
 * 
 * @param {Object} user user document to update
 * @param {Object} val field / value to set
 */
async function updateUser(user, val) {
    try {
        let database = client.db(process.env.MONGODB_DATABASE);
        let users = database.collection("users");

        await users.updateOne({ _id: user._id }, { $set: val });

        console.log(`${user.username} has been updated with ${JSON.stringify(val)}`);

    } catch (e) {
        console.error(e);
    }
}

/**
 * Creates a reset document in the reset collection.
 * 
 * Documents in the reset collection expire after 1 hour, improving safety.
 * 
 * @param {Object} user user document to reference
 * @param {String} hash hash used in the reset link
 */
async function writeResetDoc(user, hash) {
    try {
        let database = client.db(process.env.MONGODB_DATABASE);
        let reset = database.collection(("reset"));

        await reset.insertOne({
            _id: new ObjectId(hash),
            user_id: user._id,
            createdAt: new Date()
        });

    } catch (e) {
        console.error(e);
    }
}

/**
 * Reads the specified doc from database using the hash.
 * 
 * @param {String} hash hash to index collection
 */
async function getResetDoc(hash) {
    try {
        let database = client.db(process.env.MONGODB_DATABASE);
        let reset = database.collection(("reset"));

        return await reset.findOne({_id: new ObjectId(hash)});
    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    client: client,
    mongoSessionStorage: storage,
    signUpUser: signUpUser,
    loginUser: loginUser,
    findUser: findUser,
    getLeaderboard: getLeaderboard,
    updateUserStats: updateUserStats,
    updateUser: updateUser,
    writeResetDoc: writeResetDoc,
    getResetDoc: getResetDoc
}