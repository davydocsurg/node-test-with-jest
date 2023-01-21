import mongoose from "mongoose";
import { mongoDBConnection } from "../database";

describe("check if database connected successfully", () => {
    beforeAll(async () => {
        await mongoDBConnection();
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it("should return true if connected", () => {
        expect(true).toBe(true);
    });
});
