import express from "express"
import { ENV } from "./config/env.js";
import { connectDb } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express"
import { functions, inngest } from "./config/inngest.js";
import { serve } from "inngest/express"

const app = express();

app.use(express.json());
app.use(clerkMiddleware()); // req.auth will be available in the request object

app.use("/api/inngest", serve({ client: inngest, functions}))

app.get("/", async (req, res) => {
    res.send("Hello World")
})

if (ENV.NODE_ENV === "development") {
    const startServer = async () => {
        try {
            await connectDb();
            app.listen(ENV.PORT, () => {
                console.log(`The server started on port ${ENV.PORT}`);
            });
        } catch (error) {
            console.error(`Error starting server: ${error}`);
            process.exit(1);
        }
    };
    startServer();
}

export default app;