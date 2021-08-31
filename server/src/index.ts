import { App } from "./app";

try {
    const app = new App().app;
    const port = 4000;

    app.listen(port, () => {
        console.log(`server is running on ${port}`);
    });
} catch(error) {
    console.log(error);
}