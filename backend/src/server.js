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

app.get("/", (req, res) => {
    res.send("Hello World")
})


if (ENV.NODE_ENV === "production") {
    connectDb().catch(error => {
        console.error("Failed to connect to database:", error);
        process.exit(1);
    });
} else {
    // Local development
    connectDb();
}

if (ENV.NODE_ENV === "development") {
    const PORT = ENV.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
    });
}

export default app;