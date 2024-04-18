"use strict";

const axios = require("axios");
const getUser = require("./userApi");

jest.mock("axios");

describe("User API", () => {
  it("successfully retrieves user data", async () => {
    const mockUserData = {
      id: 1,
      name: "Max Goof",
      email: "maximilian@gmail.com",
    };

    axios.get.mockResolvedValue({ data: mockUserData });

    const user = await getUser();
    expect(user).toEqual(mockUserData);
  });

  it("handles network errors", async () => {
    axios.get.mockRejectedValue(new Error("Network error"));
    await expect(getUser()).rejects.toThrow("Network error");
  });

  it("handles user not found", async () => {
    axios.get.mockRejectedValue(new Error("User not found"));
    await expect(getUser()).rejects.toThrow("User not found");
  });
});
